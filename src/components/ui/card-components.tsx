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
      className={cn(
        'flex flex-col h-full',
        accent && 'border-l-4 border-l-primary',
        !hover && 'cursor-default',
        className
      )}
      hover={hover}
    >
      <div className="flex-grow">
        {icon && (
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
            {icon}
          </div>
        )}
        <h3 className="font-serif text-xl font-semibold text-neutral-900 mb-3">
          {title}
        </h3>
        <p className="text-neutral-600 leading-relaxed">{description}</p>
      </div>
    </Card>
  )
}

// Service Card Component
interface ServiceCardProps {
  icon?: ReactNode
  title: string
  subtitle?: string
  description: string
  features?: string[]
  image?: {
    src: string
    alt: string
  }
  ctaText?: string
  ctaHref?: string
  popular?: boolean
  className?: string
  hover?: boolean
}

export function ServiceCard({
  icon,
  title,
  subtitle,
  description,
  features,
  image,
  ctaText,
  ctaHref,
  popular = false,
  className,
  hover = true,
}: ServiceCardProps) {
  return (
    <Card
      className={cn(
        'relative flex flex-col h-full',
        popular && 'border-primary shadow-lg',
        !hover && 'cursor-default',
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

      <div className="space-y-4 flex-grow">
        <div className="flex items-start space-x-4">
          {icon && <div className="flex-shrink-0 mt-1">{icon}</div>}
          <div className="flex-grow">
            <h3 className="font-serif text-2xl font-bold text-neutral-900">
              {title}
            </h3>
            {subtitle && <p className="text-neutral-600 mt-1">{subtitle}</p>}
          </div>
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
      </div>

      {image && (
        <div className="mt-6">
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={200}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      )}

      {ctaText && ctaHref && (
        <div className="pt-4 mt-auto">
          <CTAButton
            asChild
            variant={popular ? 'primary' : 'secondary'}
            className="w-full"
          >
            <a href={ctaHref}>{ctaText}</a>
          </CTAButton>
        </div>
      )}
    </Card>
  )
}

// Stats Card Component
interface StatsCardProps {
  icon?: ReactNode
  number: string
  label: string
  description?: string
  className?: string
  hover?: boolean
}

export function StatsCard({
  icon,
  number,
  label,
  description,
  className,
  hover = true,
}: StatsCardProps) {
  return (
    <Card className={cn('text-center bg-surface p-6', className)} hover={hover}>
      <div className="space-y-3">
        {icon && (
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto">
            {icon}
          </div>
        )}
        <div className="text-4xl md:text-5xl font-bold text-primary">
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

// Pricing Card Component
interface PricingCardProps {
  title: string
  price: string
  priceDescription: string
  description: string
  features: string[]
  ctaText: string
  ctaHref: string
  popular?: boolean
  className?: string
}

export function PricingCard({
  title,
  price,
  priceDescription,
  description,
  features,
  ctaText,
  ctaHref,
  popular = false,
  className,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        'relative flex flex-col',
        popular && 'border-primary shadow-lg scale-105',
        className
      )}
      hover={!popular} // 人気プランではホバーエフェクトを無効化
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
            一番人気
          </span>
        </div>
      )}
      <div className="space-y-4 flex-grow flex flex-col">
        <div className="text-center">
          <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-2">
            {title}
          </h3>
          <p className="text-neutral-600 mb-4">{description}</p>
          <div className="mb-4">
            <span className="text-4xl font-bold text-primary">{price}</span>
            <span className="text-neutral-500 ml-2">{priceDescription}</span>
          </div>
        </div>
        <ul className="space-y-3 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2 mt-1 shrink-0">✓</span>
              <span className="text-neutral-700">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="pt-4 mt-auto">
          <CTAButton
            asChild
            variant={popular ? 'primary' : 'secondary'}
            className="w-full"
          >
            <a href={ctaHref}>{ctaText}</a>
          </CTAButton>
        </div>
      </div>
    </Card>
  )
}

// Testimonial Card Component
interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
  avatar?: string
  className?: string
  hover?: boolean
  isBubble?: boolean
}

export function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  className,
  hover = true,
  isBubble = false,
}: TestimonialCardProps) {
  return (
    <Card
      className={cn(
        'flex flex-col h-full',
        isBubble && 'relative mt-4',
        className
      )}
      hover={hover}
    >
      {isBubble && (
        <div className="absolute -top-4 left-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-white" />
      )}
      <div className="space-y-4 flex flex-col flex-grow">
        <blockquote className="text-neutral-700 leading-relaxed italic flex-grow">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="flex items-center space-x-3 mt-auto">
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
