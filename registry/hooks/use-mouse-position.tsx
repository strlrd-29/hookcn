"use client"

import * as React from "react"

export type Position = {
  x: number
  y: number
  elementX?: number
  elementY?: number
  elementPositionX?: number
  elementPositionY?: number
}

export function useMousePosition<T extends HTMLElement>(): [
  Position,
  React.Ref<T>,
] {
  const [state, setState] = React.useState<Position>({
    x: 0,
    y: 0,
  })

  const ref = React.useRef<T>(null)

  React.useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const newState: Position = {
        x: event.pageX,
        y: event.pageY,
      }

      if (ref.current?.nodeType === Node.ELEMENT_NODE) {
        const { left, top } = ref.current.getBoundingClientRect()
        const elementPositionX = left + window.scrollX
        const elementPositionY = top + window.scrollY
        const elementX = event.pageX - elementPositionX
        const elementY = event.pageY - elementPositionY

        newState.elementPositionX = elementPositionX
        newState.elementPositionY = elementPositionY
        newState.elementX = elementX
        newState.elementY = elementY
      }

      setState((s) => ({
        ...s,
        ...newState,
      }))
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return [state, ref]
}
