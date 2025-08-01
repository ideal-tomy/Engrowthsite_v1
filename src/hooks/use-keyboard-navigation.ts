'use client'

import { useEffect, useState } from 'react'

export function useKeyboardNavigation() {
  const [isKeyboardUser, setIsKeyboardUser] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardUser(true)
      }
    }

    const handleMouseDown = () => {
      setIsKeyboardUser(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  return { isKeyboardUser }
}

// アロー키によるナビゲーション
export function useArrowNavigation(
  listRef: React.RefObject<HTMLElement>,
  itemSelector: string = '[role="option"], button, a'
) {
  useEffect(() => {
    const container = listRef.current
    if (!container) return

    const handleKeyDown = (e: KeyboardEvent) => {
      const items = container.querySelectorAll(
        itemSelector
      ) as NodeListOf<HTMLElement>
      const currentIndex = Array.from(items).findIndex(
        item => item === document.activeElement
      )

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          const nextIndex =
            currentIndex < items.length - 1 ? currentIndex + 1 : 0
          items[nextIndex]?.focus()
          break
        case 'ArrowUp':
          e.preventDefault()
          const prevIndex =
            currentIndex > 0 ? currentIndex - 1 : items.length - 1
          items[prevIndex]?.focus()
          break
        case 'Home':
          e.preventDefault()
          items[0]?.focus()
          break
        case 'End':
          e.preventDefault()
          items[items.length - 1]?.focus()
          break
      }
    }

    container.addEventListener('keydown', handleKeyDown)

    return () => {
      container.removeEventListener('keydown', handleKeyDown)
    }
  }, [listRef, itemSelector])
}
