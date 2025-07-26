import { cn } from '@/lib/utils'

interface DividerProps {
  className?: string
  variant?: 'simple' | 'accent' | 'gradient' | 'dots'
  size?: 'sm' | 'md' | 'lg'
}

// Simple Divider
export function SimpleDivider({
  className,
  size = 'md',
}: Omit<DividerProps, 'variant'>) {
  return (
    <hr
      className={cn(
        'border-neutral-200',
        {
          'my-8': size === 'sm',
          'my-16': size === 'md',
          'my-24': size === 'lg',
        },
        className
      )}
    />
  )
}

// Accent Divider
export function AccentDivider({
  className,
  size = 'md',
}: Omit<DividerProps, 'variant'>) {
  return (
    <div
      className={cn(
        'flex items-center justify-center',
        {
          'my-8': size === 'sm',
          'my-16': size === 'md',
          'my-24': size === 'lg',
        },
        className
      )}
    >
      <div className="flex-1 h-px bg-neutral-200" />
      <div className="mx-4 w-2 h-2 bg-primary rounded-full" />
      <div className="flex-1 h-px bg-neutral-200" />
    </div>
  )
}

// Gradient Divider
export function GradientDivider({
  className,
  size = 'md',
}: Omit<DividerProps, 'variant'>) {
  return (
    <div
      className={cn(
        'w-full',
        {
          'my-8': size === 'sm',
          'my-16': size === 'md',
          'my-24': size === 'lg',
        },
        className
      )}
    >
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  )
}

// Dots Divider
export function DotsDivider({
  className,
  size = 'md',
}: Omit<DividerProps, 'variant'>) {
  return (
    <div
      className={cn(
        'flex items-center justify-center space-x-2',
        {
          'my-8': size === 'sm',
          'my-16': size === 'md',
          'my-24': size === 'lg',
        },
        className
      )}
    >
      <div className="w-1 h-1 bg-neutral-400 rounded-full" />
      <div className="w-1 h-1 bg-neutral-400 rounded-full" />
      <div className="w-1 h-1 bg-primary rounded-full" />
      <div className="w-1 h-1 bg-neutral-400 rounded-full" />
      <div className="w-1 h-1 bg-neutral-400 rounded-full" />
    </div>
  )
}

// Section Separator (Large spacing with optional content)
interface SectionSeparatorProps {
  children?: React.ReactNode
  className?: string
  background?: 'white' | 'surface' | 'transparent'
}

export function SectionSeparator({
  children,
  className,
  background = 'transparent',
}: SectionSeparatorProps) {
  return (
    <div
      className={cn(
        'section-spacing',
        {
          'bg-white': background === 'white',
          'bg-surface': background === 'surface',
          'bg-transparent': background === 'transparent',
        },
        className
      )}
    >
      {children}
    </div>
  )
}

// Combined Divider Component
export function Divider({ variant = 'simple', ...props }: DividerProps) {
  switch (variant) {
    case 'accent':
      return <AccentDivider {...props} />
    case 'gradient':
      return <GradientDivider {...props} />
    case 'dots':
      return <DotsDivider {...props} />
    default:
      return <SimpleDivider {...props} />
  }
}
