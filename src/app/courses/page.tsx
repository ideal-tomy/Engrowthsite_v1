import type { Metadata } from 'next'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { HeroSection } from '@/components/sections/hero-section'
import { FeatureCard, ServiceCard } from '@/components/ui/card-components'
import { Container } from '@/components/layout/container'
import { SectionSeparator } from '@/components/ui/section-dividers'
import { CTAButton } from '@/components/ui/cta-button'
import Image from 'next/image'
import {
  BookOpen,
  Briefcase,
  GraduationCap,
  Zap,
  Users,
  Target,
  MessageCircle,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'コース料金 | Engrowth - あなたに最適な英語学習コースを見つけよう',
  description:
    'Engrowthの全コース・サービスをご紹介。プログラム内容、ビジネスコース、学生コース、スポットサービスから、あなたの目標に最適なプランを見つけましょう。',
  openGraph: {
    title: 'コース料金 | Engrowth - 最適な英語学習コースを選択',
    description:
      '科学的メソッドに基づく英語コンサルティング。ビジネス・学生・スポットサービスから最適なコースを選択できます。',
    images: ['/og-courses.jpg'],
  },
}

const courseCategories = [
  {
    icon: <BookOpen className="w-12 h-12 text-primary" />,
    title: 'プログラム内容',
    subtitle: '科学的メソッドの詳細',
    description:
      '第二言語習得理論と習慣化心理学に基づく、Engrowth独自の学習メソッドをご紹介。90日で実用レベルの英語力を身につける秘訣をお教えします。',
    href: '/method',
    features: [
      '科学的根拠に基づく学習設計',
      '個別カスタマイズされたカリキュラム',
      '習慣化心理学の活用',
      '実践重視のアプローチ',
    ],
    buttonText: 'メソッド詳細を見る',
    color: 'primary',
    image: '/images/courses/courses-program-content.jpg',
  },
  {
    icon: <Briefcase className="w-12 h-12 text-slate-700" />,
    title: 'ビジネスコース',
    subtitle: '忙しい社会人のための英語コンサルティング',
    description:
      '限られた時間の中で最大の成果を上げたいビジネスパーソンのために設計された効率的な学習プログラム。実践的なビジネス英語を身につけます。',
    href: '/business',
    features: [
      '忙しい社会人に最適化',
      '実践的なビジネス英語',
      '効率重視のカリキュラム',
      '柔軟なスケジューリング',
    ],
    buttonText: 'ビジネスコース詳細',
    color: 'slate',
    image: '/images/courses/courses-business-course.jpg',
  },
  {
    icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
    title: '学生コース',
    subtitle: '留学前準備と実践的な英語学習',
    description:
      '留学を控えた学生や、将来のキャリアに向けて英語力を高めたい学生のための包括的なサポートプログラム。学習から就職活動まで支援します。',
    href: '/students',
    features: [
      '留学前準備に特化',
      '実践的な英語学習',
      'エッセイ・面接対策',
      'キャリア支援も充実',
    ],
    buttonText: '学生コース詳細',
    color: 'blue',
    image: '/images/courses/courses-student-course.jpg',
  },
]

const spotServices = [
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: 'スポットサービス（ビジネス）',
    description:
      '会議通訳、資料作成・翻訳、プレゼンテーション支援など、ビジネスシーンで必要な時に必要なだけ専門サポートを提供します。',
    href: '/spot-service-business',
    features: [
      '通訳・会議同席',
      '資料作成・翻訳',
      '会議オブザーバー',
      'プレゼン支援',
    ],
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    title: 'スポットサービス（学生）',
    description:
      '出願サポート、学校見学同行、エッセイ添削、面接練習など、留学成功のための専門的なサポートサービスを提供します。',
    href: '/spot-service-student',
    features: ['出願サポート', '現地見学同行', 'エッセイ添削', '面接練習'],
  },
]

const whyChooseUs = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: '目標に合わせた最適なプラン',
    description:
      'ビジネス、学習、留学など、あなたの具体的な目標に合わせて最適なコースをご提案します。',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: '経験豊富なコンサルタント',
    description:
      '第一言語が日本語で、海外で英語を習得したコンサルタントによる実践的な指導を受けられます。',
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: '科学的で効率的なメソッド',
    description:
      '第二言語習得理論に基づく科学的なアプローチで、効率的に英語力を向上させます。',
  },
]

export default function CoursesPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title="コース料金"
        subtitle="あなたの目標に最適な<br />英語学習コースを見つけよう"
        description="プログラム内容から具体的なコース、スポットサービスまで。Engrowthの全サービスをご紹介し、あなたの英語学習目標に最適なプランをご提案します。"
        primaryCTA={{
          text: '無料カウンセリングを予約',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'プログラム詳細を見る',
          href: '/method',
        }}
        backgroundImage="/images/courses/courses-hero-background.jpg"
        backgroundImageClassName="opacity-10"
      />

      <SectionSeparator background="white" />

      {/* メインコース紹介 */}
      <Container className="section-spacing">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            メインコース・プログラム
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            あなたの学習目標とライフスタイルに合わせて、
            最適なコースをお選びいただけます。
          </p>
        </div>

        <div className="space-y-12">
          {courseCategories.map((course, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div
                className={`lg:flex ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* アイコン・画像部分 */}
                <div
                  className={`lg:w-1/3 relative overflow-hidden ${
                    course.color === 'primary'
                      ? 'bg-primary/5'
                      : course.color === 'slate'
                        ? 'bg-slate-50'
                        : 'bg-blue-50'
                  }`}
                >
                  {course.image && (
                    <div className="absolute inset-0">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover opacity-20"
                      />
                    </div>
                  )}
                  <div className="relative p-8 lg:p-12 flex items-center justify-center h-full">
                    <div className="text-center">
                      {course.icon}
                      <h3 className="font-serif text-2xl font-bold text-neutral-900 mt-4 mb-2">
                        {course.title}
                      </h3>
                      <p
                        className={`text-sm font-medium ${
                          course.color === 'primary'
                            ? 'text-primary'
                            : course.color === 'slate'
                              ? 'text-slate-600'
                              : 'text-blue-600'
                        }`}
                      >
                        {course.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* コンテンツ部分 */}
                <div className="lg:w-2/3 p-8 lg:p-12">
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                            course.color === 'primary'
                              ? 'bg-primary'
                              : course.color === 'slate'
                                ? 'bg-slate-600'
                                : 'bg-blue-600'
                          }`}
                        ></div>
                        <span className="text-sm text-neutral-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <CTAButton
                    variant={course.color === 'primary' ? 'primary' : 'outline'}
                    size="lg"
                    className="w-full sm:w-auto"
                    asChild
                  >
                    <a href={course.href}>
                      {course.buttonText}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </CTAButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* スポットサービス */}
      <Container className="section-spacing bg-surface">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            スポットサービス
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            継続的なコンサルティングは不要だけれど、
            特定の場面で専門的なサポートが必要な方に。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {spotServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className="flex flex-col h-full"
              hover={true}
              features={service.features}
              ctaText="詳細を見る"
              ctaHref={service.href}
              image={{
                src:
                  index === 0
                    ? '/images/courses/courses-spot-business.jpg'
                    : '/images/courses/courses-spot-student.jpg',
                alt: service.title,
              }}
            />
          ))}
        </div>
      </Container>

      <SectionSeparator background="white" />

      {/* なぜEngrowthを選ぶのか */}
      <Container className="section-spacing">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            なぜEngrowthを選ぶのか
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            多くの英語学習サービスがある中で、
            Engrowthが選ばれる理由をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((reason, index) => (
            <FeatureCard
              key={index}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
              className="flex flex-col h-full text-center"
            />
          ))}
        </div>
      </Container>

      {/* 最終CTA */}
      <Container className="section-spacing bg-surface">
        <div className="text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            まずは無料カウンセリングから
            <br className="hidden sm:block" />
            始めませんか？
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto mb-8">
            あなたの目標や現在の英語レベルをお聞きして、
            最適なコースやプランをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="primary" size="lg" asChild>
              <a href="/contact">
                <MessageCircle className="w-5 h-5 mr-2" />
                無料カウンセリングを予約
              </a>
            </CTAButton>
            <CTAButton variant="outline" size="lg" asChild>
              <a href="/about">Engrowthについて詳しく</a>
            </CTAButton>
          </div>

          {/* 安心要素 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">完全無料相談</h3>
              <p className="text-sm text-neutral-600 text-center">
                カウンセリングは完全無料です
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">経験豊富なコンサルタント</h3>
              <p className="text-sm text-neutral-600 text-center">
                海外経験豊富なプロが対応します
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">オーダーメイド提案</h3>
              <p className="text-sm text-neutral-600 text-center">
                あなたに最適なプランを提案
              </p>
            </div>
          </div>
        </div>
      </Container>
    </LayoutWrapper>
  )
}
