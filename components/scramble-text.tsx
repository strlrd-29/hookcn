"use client"

import React from "react"
import { useScramble } from "use-scramble"

export function ScrambleText({ className = "" }: { className?: string }) {
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
  const { ref } = useScramble({
    text: text,
    overdrive: true,
    speed: 0.5,
    tick: 1,
  })

  const onMouseEnter = React.useCallback(() => {
    const sample = getRandomText()
    setText(sample)
  }, [getRandomText])

  React.useEffect(() => {
    const textInterval = setInterval(() => {
      const sample = getRandomText()
      setText(sample)
    }, 3000)

    return () => clearInterval(textInterval)
  }, [getRandomText])

  return <span ref={ref} className={className} onMouseEnter={onMouseEnter} />
}
