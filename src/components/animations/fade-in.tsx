'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
  duration = 0.6,
  className,
  threshold = 0.1,
}: FadeInProps) {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  })

  const initialY = direction === 'up' ? 30 : direction === 'down' ? -30 : 0
  const initialX = direction === 'left' ? 30 : direction === 'right' ? -30 : 0

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: initialY,
        x: initialX,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              x: 0,
            }
          : {
              opacity: 0,
              y: initialY,
              x: initialX,
            }
      }
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

// 段階的にアニメーションする子要素用
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
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        staggerChildren: staggerDelay,
      }}
      className={className}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: index * staggerDelay,
              ease: 'easeOut',
            }}
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  )
}
