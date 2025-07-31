'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React from 'react'

interface FadeInProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  className?: string
  threshold?: number
}

export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.3,
  className,
  threshold = 0.1,
}: FadeInProps) {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  })

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 20 }
      case 'down':
        return { opacity: 0, y: -20 }
      case 'left':
        return { opacity: 0, x: 20 }
      case 'right':
        return { opacity: 0, x: -20 }
      default:
        return { opacity: 0, y: 20 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface FadeInStaggerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function FadeInStagger({
  children,
  className,
  staggerDelay = 0.1,
}: FadeInStaggerProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
