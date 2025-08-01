'use client'

import Link from 'next/link'

export function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-[#d70207] text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#d70207]"
    >
      メインコンテンツにスキップ
    </Link>
  )
}

// Screen Reader専用テキスト用のユーティリティコンポーネント
interface ScreenReaderOnlyProps {
  children: React.ReactNode
  as?: keyof React.JSX.IntrinsicElements
}

export function ScreenReaderOnly({
  children,
  as: Component = 'span',
}: ScreenReaderOnlyProps) {
  return <Component className="sr-only">{children}</Component>
}
