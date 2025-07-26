import type { Metadata } from 'next'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { HeroSection } from '@/components/sections/hero-section'
import { FeatureCard } from '@/components/ui/card-components'
import { Container } from '@/components/layout/container'
import { SectionSeparator } from '@/components/ui/section-dividers'
import { CheckCircle, Users, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Engrowth | 循環型エコシステムによる英語コンサルティング',
  description:
    '第二言語として英語を習得した日本人コンサルによる実践的な英語学習支援。科学的メソッドに基づく循環型エコシステムで、英語を学ぶ人も教える人も成長できる仕組みを提供します。',
}

export default function HomePage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            英語を<span className="text-primary">&ldquo;誰かのため&rdquo;</span>
            に
            <br />
            学んできた人から学ぶ。
          </>
        }
        subtitle={
          <>
            英語を<strong>&ldquo;使ってきた&rdquo;</strong>
            日本人だけのコンサルティング
          </>
        }
        primaryCTA={{
          text: '無料相談を受ける',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'LINE登録',
          href: '/contact',
        }}
      />

      {/* Development Status */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-6">
              フェーズ2完了：共通コンポーネント開発
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              Engrowthウェブサイトの基盤となるコンポーネントが完成しました。
              <br />
              引き続き実装計画に基づいて機能を追加してまいります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<CheckCircle className="w-6 h-6" />}
              title="フェーズ1完了"
              description="Next.js 15 + React 19 + TypeScript による最新技術スタックでの環境構築が完了"
              accent
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="フェーズ2完了"
              description="Header/Footer、Layout、CTA Button、Card、Dividerなど共通コンポーネントを開発"
              accent
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="フェーズ3準備中"
              description="実際のページコンテンツ実装に向けた準備を進行中"
            />
          </div>
        </Container>
      </SectionSeparator>
    </LayoutWrapper>
  )
}
