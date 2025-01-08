import * as React from "react"

import { Button } from "@/components/ui/button"
import { useDocumentTitle } from "@/registry/hooks/use-document-title"

export default function UseDocumentTitleDemo() {
  const [counter, setCounter] = React.useState(0)

  useDocumentTitle(`Clicked ${counter} times.`)
  return (
    <div className="flex flex-col items-center gap-4">
      <Button className="w-fit" onClick={() => setCounter(counter + 1)}>
        Increment Counter: {counter}
      </Button>
      <p className="w-3/4 text-center text-muted-foreground">
        Click to increment the counter and watch the document title update in
        real-time!
      </p>
    </div>
  )
}
