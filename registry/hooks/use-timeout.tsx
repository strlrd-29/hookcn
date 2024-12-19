import * as React from "react"

import { useIsomorphicLayoutEffect } from "@/registry/hooks/use-isomorphic-layout-effect"

export function useTimeout(callback: () => void, delay: number | null): void {
  const savedCallback = React.useRef(callback)

  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  React.useEffect(() => {
    if (!delay && delay !== 0) {
      return
    }

    const id = setTimeout(() => {
      savedCallback.current()
    }, delay)

    return () => {
      clearTimeout(id)
    }
  }, [delay])
}
