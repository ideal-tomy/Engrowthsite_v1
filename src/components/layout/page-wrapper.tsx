'use client'

import { PageTransition } from '@/components/animations/page-transition'

interface PageWrapperProps {
  children: React.ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  return <PageTransition>{children}</PageTransition>
}
