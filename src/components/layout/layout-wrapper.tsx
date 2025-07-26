import { Header } from './header'
import { Footer } from './footer'

interface LayoutWrapperProps {
  children: React.ReactNode
  showHeader?: boolean
  showFooter?: boolean
}

export function LayoutWrapper({
  children,
  showHeader = true,
  showFooter = true,
}: LayoutWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && <Header />}
      <main className="flex-1">{children}</main>
      {showFooter && <Footer />}
    </div>
  )
}
