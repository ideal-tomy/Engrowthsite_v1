'use client'

import Link from 'next/link'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { Container } from '@/components/layout/container'
import { CTAButton } from '@/components/ui/cta-button'
import { Home, ArrowLeft, MessageCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <LayoutWrapper>
      <Container>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto px-6">
            {/* 404アイコン */}
            <div className="mb-8">
              <div className="text-8xl font-bold text-[#d70207] mb-4">404</div>
              <div className="w-24 h-1 bg-[#d70207] mx-auto"></div>
            </div>

            {/* エラーメッセージ */}
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              お探しのページが見つかりません
            </h1>

            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              申し訳ございませんが、アクセスしようとしたページは存在しないか、
              <br className="hidden md:block" />
              一時的に利用できない状態です。
            </p>

            {/* 提案とアクション */}
            <div className="bg-neutral-50 rounded-2xl p-8 mb-8">
              <h2 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                以下をお試しください
              </h2>
              <ul className="text-left space-y-3 text-neutral-700 max-w-md mx-auto">
                <li className="flex items-start">
                  <span className="text-[#d70207] mr-3 mt-1">•</span>
                  <span>URLが正しく入力されているか確認してください</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d70207] mr-3 mt-1">•</span>
                  <span>ブラウザの戻るボタンで前のページに戻る</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d70207] mr-3 mt-1">•</span>
                  <span>トップページから目的のページを探す</span>
                </li>
              </ul>
            </div>

            {/* アクションボタン */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton variant="primary" asChild>
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  トップページに戻る
                </Link>
              </CTAButton>

              <CTAButton variant="secondary" onClick={() => window.history.back()}>
                <ArrowLeft className="w-5 h-5 mr-2" />
                前のページに戻る
              </CTAButton>

              <CTAButton variant="outline" asChild>
                <Link href="/contact">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  お問い合わせ
                </Link>
              </CTAButton>
            </div>

            {/* サポート情報 */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-500">
                問題が解決しない場合は、
                <Link
                  href="/contact"
                  className="text-[#d70207] hover:underline font-medium"
                >
                  お問い合わせページ
                </Link>
                からご連絡ください。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </LayoutWrapper>
  )
}
