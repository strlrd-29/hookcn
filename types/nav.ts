export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  label?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export type MainNavItem = NavItem

export type SidebarNavItem = NavItemWithChildren
