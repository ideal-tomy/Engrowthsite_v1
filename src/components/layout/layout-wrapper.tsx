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
      <main id="main-content" className="flex-1" role="main" tabIndex={-1}>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  )
}
