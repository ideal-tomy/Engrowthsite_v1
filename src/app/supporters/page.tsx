import type { Metadata } from 'next'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { HeroSection } from '@/components/sections/hero-section'
import { Container } from '@/components/layout/container'
import { SectionSeparator } from '@/components/ui/section-dividers'
import {
  FeatureCard,
  ServiceCard,
  TestimonialCard,
} from '@/components/ui/card-components'
import { CTAButton } from '@/components/ui/cta-button'
import {
  Heart,
  Users,
  Building,
  TrendingUp,
  Globe,
  Award,
  MessageCircle,
  UserCheck,
  Briefcase,
  GraduationCap,
  HandHeart,
  Target,
  BookOpen,
} from 'lucide-react'

export const metadata: Metadata = {
  title: '支援者の方へ | 循環型エコシステムで社会貢献と人材発掘を両立',
  description:
    'Engrowthエコシステムへの支援で、グローバル人材育成と社会課題解決に貢献。有能な人材との事前マッチング機会も提供します',
  openGraph: {
    title: '支援者の方へ | 循環型エコシステムで社会貢献と人材発掘を両立',
    description:
      '留学生支援と人材育成を両立するEngrowthエコシステム。企業様の社会貢献と優秀な人材発掘をサポートします',
    images: ['/og-supporters.jpg'],
  },
}

const consultantBenefits = [
  {
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    title: '留学による学習機会維持の自力解決',
    description:
      '金銭的な理由で留学を断念することなく、自分の技能を活かして学習機会を維持できます。',
    image: {
      src: '/images/supporters/supporters-income-opportunity.jpg',
      alt: '留学による学習機会維持',
    },
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-primary" />,
    title: '社会との接点とコミュニケーション',
    description:
      '海外にいながら日本社会との繋がりを保ち、コミュニケーション能力を向上させます。',
    image: {
      src: '/images/supporters/supporters-networking.jpg',
      alt: '社会との接点とコミュニケーション',
    },
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: '事前の就活に役立つ経験',
    description:
      'コンサルティング経験は就職活動において大きなアドバンテージとなります。',
    image: {
      src: '/images/supporters/supporters-skill-development.jpg',
      alt: '事前の就活に役立つ経験',
    },
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: '次世代及び現役世代との交流経験',
    description:
      '幅広い世代との交流を通じて、多様な価値観と視点を身につけます。',
  },
]

const supporterBenefits = [
  {
    icon: <UserCheck className="w-8 h-8 text-primary" />,
    title: '有能な人財発掘の機会',
    description:
      '学習意欲が高く、実際に海外で学んでいる優秀な人材との事前マッチング機会を提供します。',
    image: {
      src: '/images/supporters/supporters-talent-discovery.jpg',
      alt: '有能な人財発掘の機会',
    },
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: '日本の社会課題解決へのサポート',
    description: '教育格差や人材不足などの社会課題解決に直接的に貢献できます。',
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: '支援活動による社会貢献（企業イメージ向上）',
    description:
      '持続可能な社会貢献活動として、企業ブランドイメージの向上に寄与します。',
  },
]

const societyBenefits = [
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: '教育問題の課題解決（英語習得率の向上）',
    description:
      '実践的な英語学習機会の提供により、日本全体の英語習得率向上に貢献します。',
  },
  {
    icon: <HandHeart className="w-8 h-8 text-primary" />,
    title: '不登校問題などの社会課題解決',
    description:
      '多様な学習機会と成功体験の提供により、教育における社会課題解決を支援します。',
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: '有能な人材の海外流出防止',
    description:
      '国内での成長機会と社会貢献の場を提供し、優秀な人材の海外流出を防ぎます。',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: '少子化による人材不足を高度な人材により解決',
    description:
      '質の高い人材育成により、量的な人材不足を質的向上で補完します。',
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: 'グローバル人材の増加による円滑な海外交流の円滑化',
    description:
      '国際的なコミュニケーション能力を持つ人材増加により、日本の国際競争力を向上させます。',
  },
]

const faqItems = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'コンサルタントの質の担保について',
    description:
      '厳格な選考プロセスと継続的な研修により、高い指導品質を維持しています。全コンサルタントは実際の海外経験と指導実績を持ちます。',
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    title: '留学支援サポートの具体的内容',
    description:
      '出願書類作成、面接対策、現地生活準備など、留学前から現地での学習継続まで包括的にサポートします。',
  },
  {
    icon: <Building className="w-8 h-8 text-primary" />,
    title: '企業様との連携方法',
    description:
      '定期的な進捗報告、優秀なコンサルタントとの面談機会、CSR活動レポートの提供など、透明性の高い連携を行います。',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: '支援効果の測定方法',
    description:
      '学習者の成果、コンサルタントの成長、社会への影響を定量的・定性的に測定し、定期的にご報告します。',
  },
]

const testimonials = [
  {
    name: '田中様',
    role: '大手商社 人事部長',
    content:
      'Engrowthの支援を通じて、海外経験豊富で実践的な英語力を持つ優秀な人材と出会うことができました。社会貢献と人材発掘を同時に実現できる素晴らしい仕組みです。',
    avatar: '/images/testimonials/tanaka.jpg',
  },
  {
    name: '山田様',
    role: 'IT企業 代表取締役',
    content:
      '弊社のCSR活動として参加していますが、支援した学生が実際に成長し、社会で活躍する姿を見ることができ、非常にやりがいを感じています。',
    avatar: '/images/testimonials/yamada.jpg',
  },
]

export default function SupportersPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title="支援者の方へ"
        subtitle="社会貢献と人材発掘を両立する、<br />新しい形の企業パートナーシップ"
        description="Engrowthエコシステムへの支援により、グローバル人材育成と社会課題解決に貢献しながら、優秀な人材との事前マッチング機会を提供します。"
        primaryCTA={{
          text: 'パートナーシップ相談',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'エコシステム詳細',
          href: '/about',
        }}
        backgroundImage="/images/supporters/supporters-hero-background.jpg"
        backgroundImageClassName="opacity-10"
      />

      <SectionSeparator background="white" />

      {/* 支援プログラム概要セクション */}
      <Container className="section-spacing">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            Engrowth支援プログラムとは
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-4xl mx-auto mb-8">
            Engrowthエコシステムにより効率的なグローバル人材育成が可能となります。
            将来的に有能な人材（学習意欲が高い日本人留学生）に支援が可能。
            留学生活での高度な学びの環境を維持するための英語コンサルティング活動を支えることで、学習時間の創出に寄与します。
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-transparent rounded-2xl p-8 mb-12">
          <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-6">
            社会課題への取り組み
          </h3>
          <div className="space-y-4 text-neutral-700 leading-relaxed">
            <p>
              日本の企業、社会にとって学習意欲が高い日本人留学生が金銭的な理由で留学を断念するのは、
              本人のみならず日本企業、日本社会全体の損失に繋がります。
            </p>
            <p>
              円安や家庭の事情により高い意欲で留学生活に臨んでいた多くの人材が、
              金銭的事情により留学生活を半ばで終え、学位や学歴を得られないまま活躍の場を得られないシーンを目の当たりにしてきました。
            </p>
            <p>
              Engrowth では、自ら未来を切り開く人材を育ることをMissionとし、
              自分の持つ技能や技術を留学期間の維持につなげられるエコシステムを構築しています。
            </p>
          </div>
        </div>

        <div className="bg-surface rounded-2xl p-8">
          <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-6">
            エコシステムの価値
          </h3>
          <p className="text-neutral-700 leading-relaxed">
            『身になる英語学習の提供』と、『学習意欲の高い日本人留学生の金銭的な問題解決』を両立するEngrowth
            エコシステムへの支援は、
            将来の日本を支えつつ、『有能な人材との事前マッチング』という企業及び日本社会へのメリットも実現しています。
          </p>
          <p className="text-neutral-700 leading-relaxed mt-4">
            人材を人財にする支援を行い、人財獲得への効率的なアプローチを希望される支援者及び支援企業様を、お待ちしております。
          </p>
        </div>
      </Container>

      <SectionSeparator background="surface" />

      {/* 三者メリットセクション */}
      <Container className="section-spacing bg-surface">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            すべての関係者にメリットがある仕組み
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            コンサルタント、支援者様、そして社会全体にとって価値のある
            持続可能なエコシステムです。
          </p>
        </div>

        {/* コンサルタントのメリット */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-8 text-center">
            コンサルタントのメリット
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultantBenefits.map((benefit, index) => (
              <FeatureCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                className="flex flex-col h-full"
              />
            ))}
          </div>
        </div>

        {/* 支援者様のメリット */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-8 text-center">
            支援者様のメリット
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supporterBenefits.map((benefit, index) => (
              <ServiceCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                className="flex flex-col h-full border-primary"
              />
            ))}
          </div>
        </div>

        {/* 社会のメリット */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-8 text-center">
            社会のメリット
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {societyBenefits.map((benefit, index) => (
              <FeatureCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                className="flex flex-col h-full"
              />
            ))}
          </div>
        </div>
      </Container>

      <SectionSeparator background="white" />

      {/* 成功事例・推薦セクション */}
      <Container className="section-spacing">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            パートナー企業様の声
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            実際にEngrowthエコシステムを支援いただいている
            企業様からの評価をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              author={testimonial.name}
              role={testimonial.role}
              quote={testimonial.content}
              avatar={testimonial.avatar}
              className="flex flex-col h-full"
            />
          ))}
        </div>
      </Container>

      <SectionSeparator background="surface" />

      {/* FAQ セクション */}
      <Container className="section-spacing bg-surface">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            よくあるご質問
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            支援者様からよくいただくご質問にお答えします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqItems.map((faq, index) => (
            <FeatureCard
              key={index}
              icon={faq.icon}
              title={faq.title}
              description={faq.description}
              className="flex flex-col h-full"
            />
          ))}
        </div>
      </Container>

      <SectionSeparator background="white" />

      {/* CTA セクション */}
      <Container className="section-spacing">
        <div className="text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            一緒に未来の人材を育てませんか？
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto mb-8">
            社会貢献と人材発掘を両立する、新しい形の企業パートナーシップを
            ご提案いたします。まずはお気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="primary" size="lg" asChild>
              <a href="/contact">パートナーシップ相談</a>
            </CTAButton>
            <CTAButton variant="outline" size="lg" asChild>
              <a href="/about">エコシステム詳細</a>
            </CTAButton>
          </div>

          {/* 安心要素 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">無料相談</h3>
              <p className="text-sm text-neutral-600 text-center">
                まずは無料でご相談いただけます
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">透明性の高い運営</h3>
              <p className="text-sm text-neutral-600 text-center">
                定期的な活動報告と成果測定
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <HandHeart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">継続的なサポート</h3>
              <p className="text-sm text-neutral-600 text-center">
                長期的なパートナーシップを重視
              </p>
            </div>
          </div>
        </div>
      </Container>
    </LayoutWrapper>
  )
}
