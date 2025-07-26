import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  showHome?: boolean
}

export function Breadcrumb({
  items,
  className,
  showHome = true,
}: BreadcrumbProps) {
  const allItems = showHome ? [{ label: 'ホーム', href: '/' }, ...items] : items

  return (
    <nav className={cn('flex items-center space-x-2 text-sm', className)}>
      {allItems.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <ChevronRight className="w-4 h-4 mx-2 text-neutral-400" />
          )}

          {index === 0 && showHome ? (
            <Home className="w-4 h-4 mr-2 text-neutral-400" />
          ) : null}

          {item.href && index < allItems.length - 1 ? (
            <Link
              href={item.href}
              className="text-neutral-600 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-neutral-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
