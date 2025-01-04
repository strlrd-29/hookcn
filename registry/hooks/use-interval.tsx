"use client"

import * as React from "react"

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = React.useRef(callback)

  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  React.useEffect(() => {
    if (delay === null || typeof delay !== "number") return

    const tick = () => savedCallback.current()

    const id = setInterval(tick, delay)

    return () => clearInterval(id)
  }, [delay])
}
