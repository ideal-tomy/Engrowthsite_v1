import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  size?: 'default' | 'wide' | 'full'
  className?: string
}

export function Container({
  children,
  size = 'default',
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-6 lg:px-8',
        {
          'max-w-4xl': size === 'default', // 中央960px相当
          'max-w-7xl': size === 'wide', // 最大幅1400px相当
          'w-full': size === 'full',
        },
        className
      )}
    >
      {children}
    </div>
  )
}
