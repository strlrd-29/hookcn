"use client"

import React from "react"
import { useScramble } from "use-scramble"

interface ScrambleTextProps {
  text: string
  className?: string
}

export function ScrambleText({ text, className }: ScrambleTextProps) {
  const { ref, replay } = useScramble({
    text: text,
    overdrive: true,
    speed: 0.5,
    tick: 1,
  })

  const onMouseEnter = React.useCallback(() => {
    replay()
  }, [replay])

  return <h1 ref={ref} className={className} onMouseEnter={onMouseEnter} />
}
