"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnchorIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <AnchorIcon className="size-5" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/docs/hooks/use-boolean"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname.startsWith("/docs/hooks")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Hooks
        </Link>
      </nav>
    </div>
  )
}
