import type { Metadata } from 'next'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { HeroSection } from '@/components/sections/hero-section'
import { FeatureCard } from '@/components/ui/card-components'
import { Container } from '@/components/layout/container'
import { SectionSeparator } from '@/components/ui/section-dividers'
import { CTAButton } from '@/components/ui/cta-button'
import {
  Briefcase,
  Mic,
  FileText,
  Eye,
  Presentation,
  MessageCircle,
  Shield,
  Clock,
  Award,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title:
    'スポットサービス（ビジネス）| Engrowth - 必要な時に必要なだけビジネス英語サポート',
  description:
    'ビジネス向け単発英語サポート。会議通訳、資料作成・翻訳、プレゼンテーション支援など、プロフェッショナルな対応であなたのビジネスチャンスを確実に掴みます。',
  openGraph: {
    title: 'スポットサービス（ビジネス）| Engrowth - ビジネス英語専門サポート',
    description:
      '重要な会議や資料作成で一時的な英語サポートが必要な時に。海外経験豊富なプロが24時間以内に対応します。',
    images: ['/og-spot-business.jpg'],
  },
}

const businessServices = [
  {
    icon: <Mic className="w-8 h-8 text-primary" />,
    title: '通訳・会議同席',
    description:
      'オンライン会議でのリアルタイム通訳。議事録作成、会議内容の要約・擦り合わせもオプションで対応いたします。海外クライアントとの重要な商談を成功に導きます。',
    features: [
      'リアルタイム同時通訳',
      '議事録作成・要約',
      '会議前の事前打ち合わせ',
      '専門用語の事前確認',
    ],
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: '資料作成・翻訳サポート',
    description:
      '海外向け資料の翻訳、ヒアリングシート等の記入補助。ビジネス英語の専門性を活かした高品質な仕上がりをお約束します。契約書や提案書も対応可能です。',
    features: [
      'プレゼンテーション資料翻訳',
      '契約書・法的文書の翻訳',
      'マーケティング資料作成',
      'ヒアリングシート記入補助',
    ],
  },
  {
    icon: <Eye className="w-8 h-8 text-primary" />,
    title: '会議オブザーバー',
    description:
      '会議に同席し、客観的な視点でフィードバックや改善点をレポート。第三者の目線で、より良いコミュニケーションを実現します。文化的な違いも考慮したアドバイスを提供。',
    features: [
      '客観的な会議分析',
      'コミュニケーション改善提案',
      '文化的配慮のアドバイス',
      '詳細なフィードバックレポート',
    ],
  },
  {
    icon: <Presentation className="w-8 h-8 text-primary" />,
    title: 'プレゼンテーション支援',
    description:
      '海外向けプレゼンテーションの構成から発表まで包括的にサポート。効果的な資料作成、発表練習、Q&A対策まで、成功に必要なすべてを提供します。',
    features: [
      'プレゼンテーション構成設計',
      '発表練習・コーチング',
      'Q&A対策・想定問答作成',
      '文化に適した表現調整',
    ],
  },
]

const businessFeatures = [
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    title: '海外トップ大学・実務経験豊富なプロが対応',
    description:
      'ハーバード、スタンフォード、オックスフォードなど世界トップレベルの教育機関で学んだコンサルタントが対応。',
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: '24時間以内の迅速なレスポンス',
    description:
      '緊急性の高いビジネス案件にも対応。お問い合わせから24時間以内に初回対応いたします。',
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: '業界特化の専門用語にも対応',
    description:
      'IT、金融、医療、製造業など、各業界の専門用語に精通したコンサルタントをアサインします。',
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: '機密保持契約（NDA）完全対応',
    description:
      '企業の機密情報を扱う案件も安心。厳格な機密保持契約のもと、セキュアな環境で作業を行います。',
  },
]

const pricingExamples = [
  {
    service: '会議通訳（1時間）',
    price: '¥15,000〜',
    description: '参加者数・専門性により変動',
  },
  {
    service: '資料翻訳（A4 1ページ）',
    price: '¥3,000〜',
    description: '専門性・納期により変動',
  },
  {
    service: 'プレゼン支援（半日）',
    price: '¥25,000〜',
    description: '準備・練習・本番サポート込み',
  },
]

export default function SpotServiceBusinessPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title="ビジネス向け<br />スポットサービス"
        subtitle="重要な商談を成功に導く、<br />プロフェッショナルな英語サポート"
        description="「この会議だけ通訳が欲しい」「海外向け資料を急いで作成したい」そんなビジネスニーズにお応えします。海外経験豊富なプロが、あなたのビジネスチャンスを確実に掴むお手伝いをします。"
        primaryCTA="サービスについて問い合わせる"
        primaryCTAHref="/contact"
        secondaryCTA="料金を確認する"
        secondaryCTAHref="#pricing"
        backgroundImage="/images/backgrounds/business-meeting.jpg"
        backgroundImageClassName="opacity-10"
      />

      <SectionSeparator background="white" />

      {/* サービス詳細セクション */}
      <Container className="section-spacing" id="services">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            提供サービス
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            ビジネスシーンで必要な英語サポートを、
            経験豊富なプロフェッショナルが提供します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {businessServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-neutral-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-900 text-sm">
                  含まれるサービス:
                </h4>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-sm text-neutral-600"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <SectionSeparator background="surface" />

      {/* サービス特長セクション */}
      <Container className="section-spacing bg-surface">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            サービスの特長
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            なぜ多くの企業様にEngrowthのスポットサービスを
            選んでいただいているのか。その理由をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessFeatures.map((feature, index) => (
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

      {/* 料金例セクション */}
      <Container className="section-spacing" id="pricing">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            料金例
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            透明性の高い料金設定で、安心してご利用いただけます。
            詳細なお見積もりは無料でご提供いたします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {pricingExamples.map((pricing, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center"
            >
              <h3 className="font-serif text-lg font-bold text-neutral-900 mb-2">
                {pricing.service}
              </h3>
              <div className="text-2xl font-bold text-primary mb-2">
                {pricing.price}
              </div>
              <p className="text-sm text-neutral-600">{pricing.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-surface rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="font-serif text-xl font-bold text-neutral-900 mb-4 text-center">
            料金に関するご注意
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-700">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>専門性の高い分野は追加料金が発生する場合があります</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>急ぎの案件は特急料金（+50%）を頂戴いたします</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>事前のお見積もりは無料でご提供いたします</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>継続利用の場合は割引制度もございます</span>
            </div>
          </div>
        </div>
      </Container>

      <SectionSeparator background="surface" />

      {/* 最終CTA */}
      <Container className="section-spacing bg-surface">
        <div className="text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            ビジネスチャンスを逃さないために
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            「こんなことでも頼めるだろうか？」といったご質問も大歓迎です。
            あなたのビジネスニーズに合わせて最適なサポートを提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <CTAButton variant="primary" size="lg" href="/contact">
              <MessageCircle className="w-5 h-5 mr-2" />
              無料相談・お見積もり
            </CTAButton>
            <CTAButton variant="outline" size="lg" href="/spot-service-student">
              学生向けサービスを見る
            </CTAButton>
          </div>

          {/* 安心要素 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">気軽にご相談</h3>
              <p className="text-sm text-neutral-600 text-center">
                どんな小さなことでもお気軽にお問い合わせください
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">機密保持完全対応</h3>
              <p className="text-sm text-neutral-600 text-center">
                NDA締結により機密情報も安心してお任せください
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">迅速な対応</h3>
              <p className="text-sm text-neutral-600 text-center">
                24時間以内の初回レスポンスをお約束します
              </p>
            </div>
          </div>
        </div>
      </Container>
    </LayoutWrapper>
  )
}
