'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          type: 'tween' as const,
          ease: 'easeOut',
          duration: 0.3,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

// Simple fade in component
interface FadeProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function Fade({
  children,
  delay = 0,
  duration = 0.3,
  className,
}: FadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Simple slide component
interface SlideProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  duration?: number
  className?: string
}

export function Slide({
  children,
  direction = 'up',
  distance = 20,
  duration = 0.4,
  className,
}: SlideProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance }
      case 'down':
        return { y: -distance }
      case 'left':
        return { x: distance }
      case 'right':
        return { x: -distance }
      default:
        return { y: distance }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Simple number counter
interface CounterProps {
  end: number
  start?: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function Counter({
  end,
  start = 0,
  duration = 2,
  prefix = '',
  suffix = '',
  className,
}: CounterProps) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    const increment = (end - start) / (duration * 60) // 60fps
    const timer = setInterval(() => {
      setCount((prev: number) => {
        const next = prev + increment
        if (next >= end) {
          clearInterval(timer)
          return end
        }
        return next
      })
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [end, start, duration])

  return (
    <span className={className}>
      {prefix}
      {Math.round(count)}
      {suffix}
    </span>
  )
}
