"use client"

import * as React from "react"
import { createPortal } from "react-dom"

import { cn } from "@/lib/utils"
import {
  useMousePosition,
  type Position,
} from "@/registry/hooks/use-mouse-position"

export default function UseMousePositionDemo() {
  const [mouse, ref] = useMousePosition<HTMLParagraphElement>()

  const xIntersecting =
    mouse.elementX && mouse.elementX > 0 && mouse.elementX < 200
  const yIntersecting =
    mouse.elementY && mouse.elementY > 0 && mouse.elementY < 200
  const isIntersecting = xIntersecting && yIntersecting

  return (
    <div>
      <div
        ref={ref}
        className={cn(
          "grid size-[200px] place-items-center rounded-lg border border-dashed border-primary bg-muted/10 p-6 transition-all",
          {
            "bg-primary/10": isIntersecting,
          }
        )}
      >
        <h2 className="text-center text-sm font-medium text-muted-foreground">
          Use a ref to add coords relative to the element
        </h2>
      </div>
      <Demo {...mouse} />
    </div>
  )
}

function Demo(props: Position) {
  if (typeof window === "object") {
    return createPortal(
      <dialog
        className="z-999 m-2 block rounded-sm border border-dashed border-primary bg-muted/10 p-4 text-muted-foreground shadow-md backdrop-blur-sm"
        style={{
          top: `${props.y}px`,
          left: `${props.x}px`,
        }}
      >
        <table className="font-mono text-xs">
          <tbody>
            <tr>
              <th className="p-1 px-2 uppercase" colSpan={2}>
                Mouse Position
              </th>
            </tr>
            <tr>
              <th className="p-1 px-2 uppercase">x</th>
              <td>{props.x}</td>
            </tr>
            <tr>
              <th className="p-1 px-2 uppercase">y</th>
              <td>{props.y}</td>
            </tr>
            <tr>
              <th className="p-1 px-2 uppercase" colSpan={2}>
                Relative To Ref
              </th>
            </tr>
            <tr>
              <th className="p-1 uppercase">elementX</th>
              <td>{props.elementX && props.elementX.toFixed(0)}</td>
            </tr>
            <tr>
              <th className="p-1 uppercase">elementY</th>
              <td>{props.elementY && props.elementY.toFixed(0)}</td>
            </tr>
          </tbody>
        </table>
      </dialog>,
      document.body
    )
  }

  return <></>
}
