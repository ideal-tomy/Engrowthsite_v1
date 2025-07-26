import { ReactNode } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { HoverLift } from '@/components/animations/hover-effects'
import { CTAButton } from './cta-button'

interface BaseCardProps {
  className?: string
  children: ReactNode
  hover?: boolean
}

// Base Card Component
export function Card({ className, children, hover = true }: BaseCardProps) {
  const cardContent = (
    <div
      className={cn(
        'bg-white rounded-xl shadow-sm border border-gray-100 p-6',
        className
      )}
    >
      {children}
    </div>
  )

  if (hover) {
    return <HoverLift>{cardContent}</HoverLift>
  }

  return cardContent
}

// Feature Card Component
interface FeatureCardProps {
  icon?: ReactNode
  title: string
  description: string
  accent?: boolean
  className?: string
  hover?: boolean
}

export function FeatureCard({
  icon,
  title,
  description,
  accent = false,
  className,
  hover = true,
}: FeatureCardProps) {
  return (
    <Card
      className={cn(accent && 'border-l-4 border-l-primary', className)}
      hover={hover}
    >
      {icon && (
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
          {icon}
        </div>
      )}
      <h3 className="font-serif text-xl font-semibold text-neutral-900 mb-3">
        {title}
      </h3>
      <p className="text-neutral-600 leading-relaxed">{description}</p>
    </Card>
  )
}

// Service Card Component
interface ServiceCardProps {
  title: string
  subtitle?: string
  description: string
  features?: string[]
  ctaText?: string
  ctaHref?: string
  popular?: boolean
  className?: string
  hover?: boolean
}

export function ServiceCard({
  title,
  subtitle,
  description,
  features,
  ctaText,
  ctaHref,
  popular = false,
  className,
  hover = true,
}: ServiceCardProps) {
  return (
    <Card
      className={cn(
        'relative',
        popular && 'border-primary shadow-lg',
        className
      )}
      hover={hover}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
            人気プラン
          </span>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <h3 className="font-serif text-2xl font-bold text-neutral-900">
            {title}
          </h3>
          {subtitle && <p className="text-neutral-600 mt-1">{subtitle}</p>}
        </div>

        <p className="text-neutral-700 leading-relaxed">{description}</p>

        {features && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span className="text-neutral-600">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {ctaText && ctaHref && (
          <div className="pt-4">
            <CTAButton
              asChild
              variant={popular ? 'primary' : 'secondary'}
              className="w-full"
            >
              <a href={ctaHref}>{ctaText}</a>
            </CTAButton>
          </div>
        )}
      </div>
    </Card>
  )
}

// Stats Card Component
interface StatsCardProps {
  number: string
  label: string
  description?: string
  className?: string
  hover?: boolean
}

export function StatsCard({
  number,
  label,
  description,
  className,
  hover = true,
}: StatsCardProps) {
  return (
    <Card className={cn('text-center', className)} hover={hover}>
      <div className="space-y-2">
        <div className="text-3xl md:text-4xl font-bold text-primary">
          {number}
        </div>
        <div className="font-serif text-lg font-semibold text-neutral-900">
          {label}
        </div>
        {description && (
          <p className="text-sm text-neutral-600">{description}</p>
        )}
      </div>
    </Card>
  )
}

// Testimonial Card Component
interface TestimonialCardProps extends BaseCardProps {
  quote: string
  author: string
  role?: string
  avatar?: string
}

export function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  className,
  hover = true,
}: TestimonialCardProps) {
  return (
    <Card className={className} hover={hover}>
      <div className="space-y-4">
        <blockquote className="text-neutral-700 leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="flex items-center space-x-3">
          {avatar && (
            <Image
              src={avatar}
              alt={author}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div>
            <div className="font-semibold text-neutral-900">{author}</div>
            {role && <div className="text-sm text-neutral-600">{role}</div>}
          </div>
        </div>
      </div>
    </Card>
  )
}
