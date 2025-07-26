'use client'

interface FadeInProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  className?: string
  threshold?: number
}

export function FadeIn({ children, className }: FadeInProps) {
  return <div className={className}>{children}</div>
}

interface FadeInStaggerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function FadeInStagger({ children, className }: FadeInStaggerProps) {
  return <div className={className}>{children}</div>
}
