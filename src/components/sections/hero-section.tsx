import { ReactNode } from 'react'
import { Container } from '@/components/layout/container'
import { CTAButton } from '@/components/ui/cta-button'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  title: string | ReactNode
  subtitle?: string | ReactNode
  description?: string | ReactNode
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  backgroundImage?: string
  className?: string
  children?: ReactNode
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  className,
  children,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        'mobile-spacing bg-white relative overflow-hidden',
        backgroundImage && 'bg-cover bg-center bg-no-repeat',
        className
      )}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      {backgroundImage && <div className="absolute inset-0 bg-black/20" />}
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl text-neutral-700 mb-4 leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Description */}
          {description && (
            <p className="text-base md:text-lg text-neutral-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryCTA && (
                <CTAButton asChild size="lg">
                  <a href={primaryCTA.href}>{primaryCTA.text}</a>
                </CTAButton>
              )}
              {secondaryCTA && (
                <CTAButton variant="secondary" asChild size="lg">
                  <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
                </CTAButton>
              )}
            </div>
          )}

          {/* Custom Children */}
          {children && <div className="mt-12">{children}</div>}
        </div>
      </Container>
    </section>
  )
}
