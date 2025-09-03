import { ReactNode } from 'react'
import { Container } from '@/components/layout/container'
import { CTAButton } from '@/components/ui/cta-button'
import { cn } from '@/lib/utils'
import { FadeIn } from '@/components/animations/fade-in'

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
  backgroundImageClassName?: string
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
  backgroundImageClassName,
  className,
  children,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        'pt-24 pb-20 md:pt-32 md:pb-32 bg-white relative overflow-hidden min-h-[80vh] flex items-center',
        backgroundImage && 'bg-cover bg-center bg-no-repeat',
        className
      )}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      {backgroundImage && (
        <>
          <div
            className={cn(
              'absolute inset-0',
              backgroundImageClassName ||
                'bg-gradient-to-b from-black/30 via-black/40 to-black/50'
            )}
          />
          {!backgroundImageClassName && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent" />
          )}
        </>
      )}
      <Container className="relative z-10 w-full">
        <div
          className="text-center max-w-4xl mx-auto"
          style={{
            textShadow: backgroundImage
              ? '2px 2px 4px rgba(0, 0, 0, 0.3)'
              : 'none',
          }}
        >
          {/* Title */}
          <FadeIn delay={0.2}>
            <h1
              className={cn(
                'font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight',
                backgroundImage ? 'text-white' : 'text-neutral-900'
              )}
            >
              {title}
            </h1>
          </FadeIn>

          {/* Subtitle */}
          {subtitle && (
            <FadeIn delay={0.4}>
              <p
                className={cn(
                  'text-lg md:text-xl mb-4 leading-relaxed',
                  backgroundImage ? 'text-white/90' : 'text-neutral-700'
                )}
              >
                {subtitle}
              </p>
            </FadeIn>
          )}

          {/* Description */}
          {description && (
            <FadeIn delay={0.6}>
              <p
                className={cn(
                  'text-base md:text-lg mb-8 leading-relaxed max-w-2xl mx-auto',
                  backgroundImage ? 'text-white/80' : 'text-neutral-600'
                )}
              >
                {description}
              </p>
            </FadeIn>
          )}

          {/* CTA Buttons */}
          {(primaryCTA || secondaryCTA) && (
            <FadeIn delay={0.8}>
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
            </FadeIn>
          )}

          {/* Custom Children */}
          {children && (
            <FadeIn delay={1.0}>
              <div className="mt-12">{children}</div>
            </FadeIn>
          )}
        </div>
      </Container>
    </section>
  )
}
