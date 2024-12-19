"use client"

import React from "react"

import { docsConfig } from "@/config/docs"
import { ScrambleText } from "@/components/scramble-text"

export function ChangingScrambleText() {
  const hooks = React.useMemo(() => {
    return docsConfig.sidebarNav
      .filter((nav) => nav.title.toLocaleLowerCase() === "hooks")[0]
      .items.map((hook) => hook.title)
  }, [])

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

  return (
    <ScrambleText
      text={text}
      className="h-7 text-2xl font-bold md:h-10 md:text-4xl"
    />
  )
}
