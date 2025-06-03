import * as React from "react"

import useInView from "@/registry/hooks/use-in-view"

export default function UseInViewDemo() {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    margin: "0px 0px -200px 0px",
    once: true,
  })

  return (
    <div className="space-y-4">
      <div className="h-96 rounded-lg border-2 border-dashed border-muted-foreground/25 p-4">
        <p className="text-sm text-muted-foreground">
          Scroll down to see the animation trigger...
        </p>
      </div>
      
      <div
        ref={ref}
        className={`h-32 rounded-lg border-2 transition-all duration-700 ease-out ${
          isInView
            ? "border-primary bg-primary/10 scale-100 opacity-100"
            : "border-dashed border-muted-foreground/25 scale-95 opacity-50"
        }`}
      >
        <div className="flex h-full items-center justify-center">
          <p className="text-sm font-medium">
            {isInView ? "✅ Element is in view!" : "⏳ Waiting to be seen..."}
          </p>
        </div>
      </div>

      <div className="h-96 rounded-lg border-2 border-dashed border-muted-foreground/25 p-4">
        <p className="text-sm text-muted-foreground">
          The element above triggered once and will stay visible.
        </p>
      </div>
    </div>
  )
}