import type { Metadata } from 'next'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { HeroSection } from '@/components/sections/hero-section'
import { Container } from '@/components/layout/container'
import { SectionSeparator } from '@/components/ui/section-dividers'
import { FeatureCard, StatsCard } from '@/components/ui/card-components'
import { CTAButton } from '@/components/ui/cta-button'
import { SocialImpactDiagram } from '@/components/diagrams/social-impact-diagram'
import {
  Users,
  Target,
  Globe,
  BookOpen,
  MessageCircle,
  TrendingUp,
  Award,
  Heart,
  Lightbulb,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Engrowthとは | 循環型エコシステムによる英語コンサルティング',
  description:
    '留学生や学習者を支えるエコシステム。第一言語が日本語で前提で、海外で英語を学んだライフスタイルを活かした実践的な英語学習支援',
  openGraph: {
    title: 'Engrowthとは | 循環型エコシステムによる英語コンサルティング',
    description:
      '留学生や学習者を支えるエコシステム。実践重視の方法論で、英語を学ぶ人も教える人も成長できる仕組み',
    images: ['/og-about.jpg'],
  },
}

const conceptFeatures = [
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: '留学生・学習者を支える',
    description:
      '金銭的な理由で留学を断念したり、学習機会を失うことがないよう、持続可能なサポート体制を構築しています。',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: '学ぶ人も教える人も成長',
    description:
      '英語を学んだ経験者が教える側になることで、社会貢献しながら収入を得られる循環型システムです。',
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: 'グローバル人材育成',
    description:
      '効率的で実践的な英語学習により、日本社会が求めるグローバル人材を継続的に育成します。',
  },
]

const methodologyFeatures = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: '実践重視のアプローチ',
    description:
      '机上の理論ではなく、実際に海外で英語を使った経験に基づく実践的な学習指導を行います。',
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: '科学的根拠に基づく設計',
    description:
      '第二言語習得理論や認知科学の知見を活用し、効率的で持続可能な学習プログラムを提供します。',
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-primary" />,
    title: '個別対応のコンサルティング',
    description:
      '一人ひとりの目標や状況に合わせたオーダーメイドの学習計画と継続的なサポートを提供します。',
  },
]

const qualityFeatures = [
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: '日本語ネイティブの強み',
    description:
      '第一言語が日本語である講師だからこそ理解できる、日本人特有の英語学習の課題と解決策を提供します。',
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: '海外経験に基づく指導',
    description:
      '実際に海外で英語を学び、使用した経験を持つコンサルタントによる、リアルで実用的な指導を行います。',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: '継続的な成長サポート',
    description:
      '学習者の成長段階に応じて、適切なレベルの課題と目標設定により、着実なスキルアップを支援します。',
  },
]

const statsData = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    number: '500+',
    label: '支援した学習者数',
    description: '多様な背景を持つ学習者への実績',
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    number: '95%',
    label: '目標達成率',
    description: '設定した学習目標の達成率',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    number: '3.2x',
    label: '学習効率向上',
    description: '従来の学習法と比較した効率性',
  },
]

export default function AboutPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title="Engrowthとは"
        subtitle="循環型エコシステムで実現する、<br />持続可能な英語学習支援"
        description="留学生や学習者を支え、英語を学ぶ人も教える人も成長できる仕組み。第一言語が日本語である強みを活かし、実践的で効果的な英語コンサルティングを提供します。"
        primaryCTA={{
          text: '無料相談を予約',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'サービス詳細',
          href: '/method',
        }}
        backgroundImage="/images/backgrounds/about-hero.jpg"
        backgroundImageClassName="opacity-10"
      />

      {/* コンセプト説明セクション */}
      <Container className="section-spacing">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            私たちのコンセプト
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            Engrowthは、留学生や英語学習者が金銭的な理由で学習機会を失うことがないよう、
            持続可能なサポート体制を構築しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {conceptFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="flex flex-col h-full"
            />
          ))}
        </div>
      </Container>

      <SectionSeparator background="surface" />

      {/* 方法論セクション */}
      <Container className="section-spacing bg-surface">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            実践重視の方法論
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            机上の理論ではなく、実際に海外で英語を使った経験に基づく
            実践的な学習指導を行います。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methodologyFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="flex flex-col h-full"
            />
          ))}
        </div>
      </Container>

      <SectionSeparator background="white" />

      {/* サービス品質セクション */}
      <Container className="section-spacing">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            日本語ネイティブだからできること
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            第一言語が日本語である講師だからこそ理解できる、
            日本人特有の英語学習の課題と効果的な解決策を提供します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {qualityFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="flex flex-col h-full"
            />
          ))}
        </div>
      </Container>

      <SectionSeparator background="surface" />

      {/* エコシステム図セクション */}
      <Container className="section-spacing bg-surface">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            循環型エコシステム
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            学ぶ人、教える人、そして社会全体にメリットをもたらす
            持続可能な価値創造システムです。
          </p>
        </div>

        <SocialImpactDiagram />
      </Container>

      <SectionSeparator background="white" />

      {/* 実績数値セクション */}
      <Container className="section-spacing">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            Engrowthの実績
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            多くの学習者と共に歩んできた実績と、
            継続的な成果創出への取り組みをご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <StatsCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              description={stat.description}
              className="flex flex-col h-full"
            />
          ))}
        </div>
      </Container>

      <SectionSeparator background="surface" />

      {/* CTA セクション */}
      <Container className="section-spacing bg-surface">
        <div className="text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            あなたも Engrowth エコシステムの
            <br className="hidden sm:block" />
            一員になりませんか？
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto mb-8">
            学習者として、またはコンサルタントとして、
            共に成長できる仕組みがここにあります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="primary" size="lg" asChild>
              <a href="/contact">無料相談を予約</a>
            </CTAButton>
            <CTAButton variant="outline" size="lg" asChild>
              <a href="/supporters">支援者として参加</a>
            </CTAButton>
          </div>
        </div>
      </Container>
    </LayoutWrapper>
  )
}
