"use client"

import * as React from "react"

type UseCounterReturn = {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export function useCounter(initialValue?: number): UseCounterReturn {
  const [count, setCount] = React.useState(initialValue ?? 0)

  const increment = React.useCallback(() => {
    setCount((x) => x + 1)
  }, [])

  const decrement = React.useCallback(() => {
    setCount((x) => x - 1)
  }, [])

  const reset = React.useCallback(() => {
    setCount(initialValue ?? 0)
  }, [initialValue])

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  }
}
