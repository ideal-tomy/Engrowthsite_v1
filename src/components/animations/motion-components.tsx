'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

// Motion wrapper components for use in Server Components
type MotionDivProps = HTMLMotionProps<'div'>
type MotionH1Props = HTMLMotionProps<'h1'>
type MotionH2Props = HTMLMotionProps<'h2'>
type MotionH3Props = HTMLMotionProps<'h3'>
type MotionSectionProps = HTMLMotionProps<'section'>
type MotionButtonProps = HTMLMotionProps<'button'>

export const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(
  function MotionDiv({ children, ...props }, ref) {
    return (
      <motion.div ref={ref} {...props}>
        {children}
      </motion.div>
    )
  }
)

export const MotionH1 = React.forwardRef<HTMLHeadingElement, MotionH1Props>(
  function MotionH1({ children, ...props }, ref) {
    return (
      <motion.h1 ref={ref} {...props}>
        {children}
      </motion.h1>
    )
  }
)

export const MotionH2 = React.forwardRef<HTMLHeadingElement, MotionH2Props>(
  function MotionH2({ children, ...props }, ref) {
    return (
      <motion.h2 ref={ref} {...props}>
        {children}
      </motion.h2>
    )
  }
)

export const MotionH3 = React.forwardRef<HTMLHeadingElement, MotionH3Props>(
  function MotionH3({ children, ...props }, ref) {
    return (
      <motion.h3 ref={ref} {...props}>
        {children}
      </motion.h3>
    )
  }
)

export const MotionSection = React.forwardRef<HTMLElement, MotionSectionProps>(
  function MotionSection({ children, ...props }, ref) {
    return (
      <motion.section ref={ref} {...props}>
        {children}
      </motion.section>
    )
  }
)

export const MotionButton = React.forwardRef<
  HTMLButtonElement,
  MotionButtonProps
>(function MotionButton({ children, ...props }, ref) {
  return (
    <motion.button ref={ref} {...props}>
      {children}
    </motion.button>
  )
})

// Export AnimatePresence for convenience
export { AnimatePresence }

// Common animation variants following best practices
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

export const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}
