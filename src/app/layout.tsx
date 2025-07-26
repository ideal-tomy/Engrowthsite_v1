import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Engrowth | 循環型エコシステムによる英語コンサルティング',
  description:
    '第二言語として英語を習得した日本人コンサルによる実践的な英語学習支援',
  keywords:
    '英語コンサルティング, 循環型エコシステム, 英語学習, ビジネス英語, 留学支援',
  authors: [{ name: 'Engrowth' }],
  openGraph: {
    title: 'Engrowth | 英語コンサルティング',
    description: '科学的メソッドに基づく英語学習支援',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engrowth | 英語コンサルティング',
    description: '科学的メソッドに基づく英語学習支援',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <PageWrapper>{children}</PageWrapper>
        <Toaster />
      </body>
    </html>
  )
}
