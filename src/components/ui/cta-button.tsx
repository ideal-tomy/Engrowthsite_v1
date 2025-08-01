import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const ctaButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d70207]/20 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white shadow-lg hover:bg-primary-dark hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]',
        secondary:
          'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white shadow-sm hover:shadow-md',
        outline:
          'border-2 border-neutral-light text-neutral-700 bg-transparent hover:bg-neutral-900 hover:text-white hover:border-neutral-900',
      },
      size: {
        default: 'h-12 px-8 py-3',
        sm: 'h-10 px-6 py-2',
        lg: 'h-14 px-10 py-4 text-lg',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface CTAButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ctaButtonVariants> {
  asChild?: boolean
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(ctaButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
CTAButton.displayName = 'CTAButton'

export { CTAButton, ctaButtonVariants }
