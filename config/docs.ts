import type { MainNavItem, SidebarNavItem } from "~/types/nav"

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
          title: "Use Local Storage",
          href: "/docs/hooks/use-local-storage",
          items: [],
        },
        {
          title: "Use Boolean",
          href: "/docs/hooks/use-boolean",
          items: [],
        },
        {
          title: "Use Copy To Clipboard",
          href: "/docs/hooks/use-copy-to-clipboard",
          items: [],
        },
      ],
    },
  ],
}
