"use client"

import * as React from "react"

export function useUnmount(func: () => void) {
  const funcRef = React.useRef(func)

  funcRef.current = func

  React.useEffect(
    () => () => {
      funcRef.current()
    },
    []
  )
}
