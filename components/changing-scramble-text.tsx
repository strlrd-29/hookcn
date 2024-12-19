"use client"

import React from "react"
import { ScrambleText } from "@/components/scramble-text"

export function ChangingScrambleText() {
  const hooks = React.useMemo(
    () => ["Boolean", "LocalStorage", "ClickOutside"],
    []
  )

  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const getRandomText = React.useCallback(() => {
    const int = getRandomInt(0, hooks.length)
    return hooks[int]
  }, [hooks])

  const [text, setText] = React.useState(getRandomText())

  React.useEffect(() => {
    const textInterval = setInterval(() => {
      const sample = getRandomText()
      setText(sample)
    }, 3000)

    return () => clearInterval(textInterval)
  }, [getRandomText])

  return <ScrambleText text={text} />
}
