'use client'

import { motion } from 'framer-motion'

interface HoverScaleProps {
  children: React.ReactNode
  scale?: number
  duration?: number
  className?: string
}

export function HoverScale({
  children,
  scale = 1.05,
  duration = 0.2,
  className,
}: HoverScaleProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        transition: {
          duration,
          ease: 'easeOut' as const,
        },
      }}
      whileTap={{
        scale: 0.95,
        transition: {
          duration: 0.1,
          ease: 'easeOut' as const,
        },
      }}
    >
      {children}
    </motion.div>
  )
}

interface HoverLiftProps {
  children: React.ReactNode
  translateY?: number
  duration?: number
  className?: string
}

export function HoverLift({
  children,
  translateY = -4,
  duration = 0.2,
  className,
}: HoverLiftProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: translateY,
        transition: {
          duration,
          ease: 'easeOut' as const,
        },
      }}
    >
      {children}
    </motion.div>
  )
}

interface HoverGlowProps {
  children: React.ReactNode
  duration?: number
  className?: string
}

export function HoverGlow({
  children,
  duration = 0.3,
  className,
}: HoverGlowProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        boxShadow: '0 10px 30px rgba(215, 2, 7, 0.3)',
        transition: {
          duration,
          ease: 'easeOut' as const,
        },
      }}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary'
}

export function AnimatedButton({
  children,
  onClick,
  className,
  variant = 'primary',
}: AnimatedButtonProps) {
  const baseClasses =
    variant === 'primary'
      ? 'bg-primary hover:bg-primary-dark text-white'
      : 'bg-white hover:bg-gray-50 text-neutral-900 border border-neutral-200'

  return (
    <motion.button
      whileHover={{
        scale: 1.02,
        boxShadow:
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`${baseClasses} px-6 py-3 rounded-xl font-medium transition-colors ${className}`}
    >
      {children}
    </motion.button>
  )
}

interface FloatingElementProps {
  children: React.ReactNode
  duration?: number
  amplitude?: number
  className?: string
}

export function FloatingElement({
  children,
  duration = 3,
  amplitude = 10,
  className,
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, -amplitude, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface PulseEffectProps {
  children: React.ReactNode
  scale?: number
  duration?: number
  className?: string
}

export function PulseEffect({
  children,
  scale = 1.05,
  duration = 2,
  className,
}: PulseEffectProps) {
  return (
    <motion.div
      animate={{
        scale: [1, scale, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface SlideInProps {
  children: React.ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  distance?: number
  delay?: number
  className?: string
}

export function SlideIn({
  children,
  direction = 'left',
  distance = 50,
  delay = 0,
  className,
}: SlideInProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -distance, opacity: 0 }
      case 'right':
        return { x: distance, opacity: 0 }
      case 'up':
        return { y: distance, opacity: 0 }
      case 'down':
        return { y: -distance, opacity: 0 }
      default:
        return { x: -distance, opacity: 0 }
    }
  }

  return (
    <motion.div
      initial={getInitialPosition()}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
