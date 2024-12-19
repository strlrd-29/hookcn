"use client"

import * as React from "react"

import { useIsomorphicLayoutEffect } from "@/registry/hooks/use-isomorphic-layout-effect"

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = React.useRef(callback)

  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  React.useEffect(() => {
    if (delay === null) {
      return
    }

    const id = setInterval(() => {
      savedCallback.current()
    }, delay)

    return () => {
      clearInterval(id)
    }
  }, [delay])
}
