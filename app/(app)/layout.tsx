import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="border-grid flex flex-1 flex-col">
      <SiteHeader />
      <main className="container-wrapper flex flex-1 flex-col">{children}</main>
      <SiteFooter />
    </div>
  )
}
