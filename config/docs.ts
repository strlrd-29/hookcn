import type { MainNavItem, SidebarNavItem } from "@/types/nav"

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Hooks",
      href: "/docs/hooks",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
      ],
    },
    {
      title: "Hooks",
      items: [
        {
          title: "Use Boolean",
          href: "/docs/hooks/use-boolean",
          items: [],
        },
        {
          title: "Use Toggle",
          href: "/docs/hooks/use-toggle",
          items: [],
        },
        {
          title: "Use CopyToClipboard",
          href: "/docs/hooks/use-copy-to-clipboard",
          items: [],
        },
        {
          title: "Use Unmount",
          href: "/docs/hooks/use-unmount",
          items: [],
        },
        {
          title: "Use DebounceCallback",
          href: "/docs/hooks/use-debounce-callback",
          items: [],
        },
        {
          title: "Use IsomorphicLayoutEffect",
          href: "/docs/hooks/use-isomorphic-layout-effect",
          items: [],
        },
        {
          title: "Use Interval",
          href: "/docs/hooks/use-interval",
          items: [],
        },
      ],
    },
  ],
}
