"use client"

import React from "react"
import { RefreshCwIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTimeout } from "@/registry/hooks/use-timeout"

export default function UseTimeoutDemo() {
  const [hasDefused, setHasDefused] = React.useState(false)
  const [hasExploded, setHasExploded] = React.useState(false)

  useTimeout(
    () => {
      setHasExploded(!hasExploded)
    },
    hasDefused ? null : 1000
  )

  return (
    <div className="flex flex-col items-center gap-8">
      <Button
        onClick={() => {
          setHasDefused(false)
          setHasExploded(false)
        }}
        disabled={!(hasDefused || hasExploded)}
      >
        Replay <RefreshCwIcon className="size-4" />
      </Button>
      <p>You have 1s to defuse (click) the bomb or it will explode</p>
      {hasExploded ? (
        <figure className="flex flex-col items-center gap-1">
          <span role="img" aria-label="Explosion Emoji" className="text-5xl">
            💥
          </span>
          <figcaption>You lose</figcaption>
        </figure>
      ) : hasDefused ? (
        <figure className="flex flex-col items-center gap-1">
          <span role="img" aria-label="Explosion Emoji" className="text-5xl">
            🎉
          </span>
          <figcaption>You Win</figcaption>
        </figure>
      ) : (
        <button
          className="text-5xl"
          onClick={() => setHasDefused((hasDefused) => !hasDefused)}
        >
          <span role="img" aria-label="Dynamite Emoji">
            🧨
          </span>
        </button>
      )}
    </div>
  )
}
