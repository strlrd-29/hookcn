import * as React from "react"

import { docsConfig } from "@/config/docs"
import { DocsNav } from "@/components/docs-nav"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="border-grid fixed top-14 z-30 hidden size-full max-h-[calc(100vh-3.5rem)] shrink-0 border-r md:sticky md:block">
        <div className="no-scrollbar h-full overflow-auto py-6 pr-4 lg:py-8">
          <DocsNav config={docsConfig} />
        </div>
      </aside>
      {children}
    </div>
  )
}
