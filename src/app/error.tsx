'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { Container } from '@/components/layout/container'
import { CTAButton } from '@/components/ui/cta-button'
import { RefreshCw, Home, MessageCircle, AlertTriangle } from 'lucide-react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // エラーログ（開発環境のみ）
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Application error:', error)
    }
  }, [error])

  return (
    <LayoutWrapper>
      <Container>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto px-6">
            {/* エラーアイコン */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-12 h-12 text-red-500" />
              </div>
              <div className="w-24 h-1 bg-red-500 mx-auto"></div>
            </div>

            {/* エラーメッセージ */}
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              申し訳ございません
            </h1>

            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              予期しないエラーが発生しました。
              <br className="hidden md:block" />
              ご迷惑をおかけして申し訳ございません。
            </p>

            {/* エラー詳細（開発環境のみ） */}
            {process.env.NODE_ENV === 'development' && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8 text-left">
                <h3 className="font-bold text-red-800 mb-2">
                  エラー詳細 (開発環境)
                </h3>
                <p className="text-sm text-red-700 font-mono break-all">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="text-xs text-red-600 mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            )}

            {/* 対処方法 */}
            <div className="bg-neutral-50 rounded-2xl p-8 mb-8">
              <h2 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                解決方法をお試しください
              </h2>
              <ul className="text-left space-y-3 text-neutral-700 max-w-md mx-auto">
                <li className="flex items-start">
                  <span className="text-[#d70207] mr-3 mt-1">•</span>
                  <span>ページを再読み込みする</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d70207] mr-3 mt-1">•</span>
                  <span>しばらく時間をおいてから再度アクセスする</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d70207] mr-3 mt-1">•</span>
                  <span>ブラウザのキャッシュをクリアする</span>
                </li>
              </ul>
            </div>

            {/* アクションボタン */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton variant="primary" onClick={reset}>
                <RefreshCw className="w-5 h-5 mr-2" />
                ページを再読み込み
              </CTAButton>

              <CTAButton variant="secondary" asChild>
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  トップページに戻る
                </Link>
              </CTAButton>

              <CTAButton variant="outline" asChild>
                <Link href="/contact">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  サポートに連絡
                </Link>
              </CTAButton>
            </div>

            {/* サポート情報 */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-500">
                問題が続く場合は、
                <Link
                  href="/contact"
                  className="text-[#d70207] hover:underline font-medium"
                >
                  サポートチーム
                </Link>
                までお知らせください。迅速に対応いたします。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </LayoutWrapper>
  )
}
