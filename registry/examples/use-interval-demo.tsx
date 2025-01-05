import * as React from "react"

import { useInterval } from "@/registry/hooks/use-interval"

export default function UseIntervalDemo() {
  const colors = React.useMemo(
    () => [
      "221.2 83.2% 53.3%",
      "346.8 77.2% 49.8%",
      "24.6 95% 53.1%",
      "142.1 76.2% 36.3%",
      "47.9 95.8% 53.1%",
      "0 72.2% 50.6%",
      "262.1 83.3% 57.8%",
    ],
    []
  )
  const [index, setIndex] = React.useState(0)

  useInterval(() => setIndex((index) => index + 1), 1000)

  const color = colors[index % colors.length]

  return (
    <div
      className="size-48 rounded-xl transition-all duration-300 ease-in"
      style={{
        background: `hsl(${color})`,
      }}
    />
  )
}
