"use client"

import * as React from "react"

export function useTimeout(callback: () => void, delay: number | null): void {
  const savedCallback = React.useRef(callback)

  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  React.useEffect(() => {
    if (delay === null || typeof delay !== "number") return

    const tick = () => savedCallback.current()

    const id = setTimeout(tick, delay)

    return () => clearTimeout(id)
  }, [delay])
}
