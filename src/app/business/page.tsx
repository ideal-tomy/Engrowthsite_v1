import type { Metadata } from 'next'
import Link from 'next/link'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { HeroSection } from '@/components/sections/hero-section'
import {
  FeatureCard,
  ServiceCard,
  StatsCard,
  TestimonialCard,
} from '@/components/ui/card-components'
import { Container } from '@/components/layout/container'
import { SectionSeparator } from '@/components/ui/section-dividers'
import { CTAButton } from '@/components/ui/cta-button'
import { LazyBusinessCalendar } from '@/components/diagrams/lazy-diagram-loader'
import {
  Clock,
  Target,
  Users,
  TrendingUp,
  Globe,
  Briefcase,
  Database,
  Users2,
  Building,
  Rocket,
} from 'lucide-react'

export const metadata: Metadata = {
  title:
    'ビジネス向けサービス | Engrowth - 忙しい社会人のための英語コンサルティング',
  description:
    '挫折経験のある社会人の方へ。科学的メソッドに基づく集中型プログラムで、忙しくても続けられる英語習得をサポートします。',
}

export default function BusinessPage() {
  const businessPlans = [
    {
      period: '1ヶ月',
      originalPrice: '$1,480',
      discountedPrice: '$1,480',
      monthlyPrice: '-',
      note: '3ヶ月以上のプラン修了者のみ利用可能',
      available: false,
      features: [
        '専任コンサルタント',
        '科学的メソッド',
        'ビジネス実践英会話',
        'プロ講師陣',
      ],
    },
    {
      period: '3ヶ月',
      originalPrice: '$4,400',
      discountedPrice: '$3,980',
      monthlyPrice: '$1,326',
      discount: '約10%OFF',
      popular: false,
      available: true,
      features: [
        '専任コンサルタント',
        '科学的メソッド',
        'ビジネス実践英会話',
        'プロ講師陣',
      ],
    },
    {
      period: '6ヶ月',
      originalPrice: '$8,880',
      discountedPrice: '$7,480',
      monthlyPrice: '$1,246',
      discount: '約16%OFF',
      popular: true,
      available: true,
      features: [
        '専任コンサルタント',
        '科学的メソッド',
        'ビジネス実践英会話',
        'プロ講師陣',
        'コミュニティアクセス',
      ],
    },
    {
      period: '12ヶ月',
      originalPrice: '$17,760',
      discountedPrice: '$13,980',
      monthlyPrice: '$1,165',
      discount: '約21%OFF',
      popular: false,
      available: true,
      features: [
        '専任コンサルタント',
        '科学的メソッド',
        'ビジネス実践英会話',
        'プロ講師陣',
        'コミュニティアクセス',
        'エコシステム参加資格',
      ],
    },
  ]

  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            英語を、<span className="text-primary">あきらめかけていた</span>
            <br />
            あなたへ
          </>
        }
        subtitle="&ldquo;何度か挑戦したけど、どうしても続かなかった&rdquo;そう思っている人にこそ、もう一度挑戦してほしい。"
        description={
          <>
            英語ができないのは&ldquo;才能がないから&rdquo;ではありません。
            <br />
            必要なのは、<strong>正しい順番／方法／計算された習慣</strong>です。
          </>
        }
        primaryCTA={{
          text: '無料カウンセリングを予約',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'サービス詳細',
          href: '#service-details',
        }}
      />

      {/* 忙しい社会人でも習得可能 */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              忙しい社会人でも、英語は習得できる時代へ
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              &ldquo;毎日1〜2時間のまとまった時間&rdquo;ではなく、
              <strong>1回5分〜10分の階段式学習</strong>の積み重ね。
              <br />
              科学的な習慣化理論 ×
              第二言語習得理論（SLA）に基づく&ldquo;本当に続けられる&rdquo;プログラム
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock className="w-6 h-6" />}
              title="5分〜10分の短時間学習"
              description="通勤中・移動中・休憩中でも対応できる、モジュール型学習プログラム"
              accent
            />
            <FeatureCard
              icon={<Target className="w-6 h-6" />}
              title="科学的メソッド"
              description="習慣化理論と第二言語習得理論に基づく効果的な学習設計"
              accent
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="LINEで伴走支援"
              description="リアルタイムフィードバックと毎週のチェックインで無理のない軌道修正"
              accent
            />
          </div>
        </Container>
      </SectionSeparator>

      {/* Engrowthが選ばれる理由 */}
      <SectionSeparator background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Engrowthが社会人に選ばれる理由
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="忙しい人のための設計"
              description="通勤中・移動中・休憩中でも対応できるモジュール型学習プログラム。LINEでのリアルタイムフィードバックと毎週のチェックインで軌道修正。"
              features={[
                'モジュール型学習プログラム',
                'LINEでのリアルタイムフィードバック',
                '毎週のチェックインサポート',
              ]}
            />
            <ServiceCard
              title="短期間で「使える英語」"
              description="発音や語彙ではなく、「伝わる英語」「仕事で成果が出る英語」にフォーカス。実務で必要なスキルを優先的に習得。"
              features={[
                'メール返信・会議ファシリ',
                '商談トーク・自己紹介',
                '提案プレゼンテーション',
              ]}
              popular
            />
            <ServiceCard
              title="特別プログラムの一般公開"
              description="本来は紹介制のみで展開していた経営者・著名人向けプログラムを一般公開。マネージャー・医師・弁護士への指導実績あり。"
              features={[
                '経営者・著名人向けメソッド',
                '専門職への指導実績',
                '紹介制プログラムの一般開放',
              ]}
            />
          </div>
        </Container>
      </SectionSeparator>

      {/* 現地に行く必要がない理由 */}
      <SectionSeparator background="surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 思い込み */}
            <div className="bg-white p-8 rounded-xl border-l-4 border-red-200">
              <h3 className="font-serif text-2xl font-bold text-neutral-800 mb-4">
                <span className="text-red-500">×</span> よくある思い込み
              </h3>
              <div className="space-y-3 text-lg text-neutral-700 leading-relaxed">
                <p>「現地に行かないとネイティブレベルにはなれない」</p>
                <ul className="space-y-2 text-neutral-600 list-disc list-inside">
                  <li>発音はネイティブに囲まれないと無理</li>
                  <li>海外生活しないとリアルな英語は身につかない</li>
                  <li>英語力＝留学経験の有無</li>
                </ul>
              </div>
            </div>
            {/* 解決策 */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-neutral-800 mb-4 text-center lg:text-left">
                <span className="text-green-500">✓</span> Engrowthの解決策
              </h3>
              <FeatureCard
                title="日本にいながらでも習得可能"
                description="世界中のコンテンツ・ネイティブ音声にアクセスできる時代。AI・録音分析・シャドーイング支援など、発音を徹底強化できる環境が完備。"
              />
              <FeatureCard
                title="コンサルも日本で習得"
                description="Engrowthのコンサルたちも「日本にいながら」ネイティブレベルに到達。英語は「環境」ではなく、「設計と習慣」で決まります。"
              />
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 英語習得の価値 */}
      <SectionSeparator background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              なぜ今、英語を習得する価値がかつてなく高いのか？
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              外資商談、SNS発信、オンライン会議、採用活動、ChatGPTなどAIツールの活用...
              <br />
              <strong>
                英語が使える＝世界中の知識・人材・市場にアクセスできる
              </strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              icon={<Database className="w-6 h-6" />}
              number="10倍"
              label="アクセス可能な情報量"
              description="英語により世界中の知識・データにアクセス"
            />
            <StatsCard
              icon={<Users2 className="w-6 h-6" />}
              number="50億人"
              label="コミュニケーション対象"
              description="英語話者との直接的な対話が可能"
            />
            <StatsCard
              icon={<Building className="w-6 h-6" />}
              number="3倍"
              label="ビジネス機会の拡大"
              description="海外展開・採用・資金調達の選択肢"
            />
            <StatsCard
              icon={<Rocket className="w-6 h-6" />}
              number="即座"
              label="意思決定スピード"
              description="通訳を介さない直接対話で信頼構築"
            />
          </div>
        </Container>
      </SectionSeparator>

      {/* お客様の声 */}
      <SectionSeparator background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              導入事例・お客様の声
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
              Engrowthでビジネスの課題を解決された方々の声をご紹介します。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="海外投資家との交渉で、通訳を介さず直接話せるようになったことで、信頼関係が格段に深まりました。"
              author="鈴木 一郎 様"
              role="スタートアップCEO"
              avatar="/images/team/avatar4.jpg"
            />
            <TestimonialCard
              quote="英語での会議が苦痛でしたが、今ではファシリテーションもこなせるように。チームからの評価も上がりました。"
              author="佐藤 由美 様"
              role="外資系企業 マネージャー"
              avatar="/images/team/avatar5.jpg"
            />
            <TestimonialCard
              quote="専門分野の海外文献を原文で読めるようになり、インプットの質とスピードが劇的に向上しました。"
              author="高橋 健太 様"
              role="医師・医学研究者"
              avatar="/images/team/avatar6.jpg"
            />
          </div>
        </Container>
      </SectionSeparator>

      {/* 経営者向けメリット */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              社長の英語力が、会社の未来を創る。
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
              社長の英語力が直接事業に跳ね返る時代。忙しさを理由に後回しにしてきた人こそ、今が「変わる最後のチャンス」
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<Globe className="w-6 h-6" />}
              title="事業の直接的成長"
              description="海外展開・採用・資金調達・交渉など、経営者の英語力が直接事業成果に跳ね返る"
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="組織のグローバル化"
              description="経営トップが英語で動けることで、組織内のグローバル化が一気に進む"
            />
            <FeatureCard
              icon={<Briefcase className="w-6 h-6" />}
              title="関係性での主導権"
              description="取引先・投資家・パートナーとの関係で主導権を取り、スピードも信頼も向上"
            />
            <FeatureCard
              icon={<Target className="w-6 h-6" />}
              title="競合との差別化"
              description="翻訳に頼らず「自分の言葉で語れる」ことが信頼・差別化に直結"
            />
          </div>
        </Container>
      </SectionSeparator>

      {/* 階段式スキマ学習カレンダー */}
      <SectionSeparator background="white">
        <Container>
          <LazyBusinessCalendar />
        </Container>
      </SectionSeparator>

      {/* 対象者・サービス概要 */}
      <SectionSeparator background="white">
        <Container>
          {/* 対象者 */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              こんな方に最適です
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left">
              {[
                'TOEICのスコアはあっても、会議での発言に自信が持てない',
                '海外の最新情報を、翻訳ではなく原文で理解したい',
                '海外顧客や外国人部下と、円滑な関係を築きたい',
                '英語でのプレゼンや交渉で、ビジネスを有利に進めたい',
                '多忙な毎日でも、効率的に英語力を向上させたい経営者・管理職',
                '自己流の学習に限界を感じ、プロの指導を受けたい',
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-primary mr-3 mt-1 text-lg shrink-0">
                    ✓
                  </span>
                  <span className="text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* プラン比較 */}
          <div>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                サービスプラン
              </h2>
              <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
                あなたの目標とペースに合わせて選べる、柔軟なプランをご用意しました。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {businessPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white p-6 rounded-xl border flex flex-col ${plan.popular ? 'border-primary border-2 shadow-lg' : 'border-gray-200'} ${!plan.available ? 'opacity-75' : ''} hover:shadow-md transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        一番人気
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-4">
                    <h4 className="font-serif text-xl font-bold text-neutral-900 mb-2">
                      {plan.period}
                    </h4>
                    <div className="mb-2">
                      {plan.originalPrice !== plan.discountedPrice && (
                        <div className="text-sm text-neutral-500 line-through">
                          {plan.originalPrice}
                        </div>
                      )}
                      <div className="text-2xl font-bold text-primary">
                        {plan.discountedPrice}
                      </div>
                      {plan.monthlyPrice !== '-' && (
                        <div className="text-sm text-neutral-600">
                          月額 {plan.monthlyPrice}
                        </div>
                      )}
                    </div>
                    {plan.discount && (
                      <div className="inline-flex items-center bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        {plan.discount}
                      </div>
                    )}
                  </div>
                  <ul className="space-y-2 text-sm text-neutral-700 mb-4 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2 mt-1 shrink-0">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.note && (
                    <div className="text-xs text-neutral-600 bg-neutral-50 p-2 rounded-lg mb-3 text-center">
                      ※ {plan.note}
                    </div>
                  )}
                  <CTAButton
                    asChild
                    className={`w-full mt-auto ${plan.popular ? '' : 'bg-slate-600 hover:bg-slate-700'} ${!plan.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!plan.available}
                  >
                    <a href="/contact">
                      {plan.available ? 'このプランを選ぶ' : '要修了認定'}
                    </a>
                  </CTAButton>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* CTA Section */}
      <SectionSeparator background="neutral-900" className="text-white">
        <Container>
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              まずは、無料カウンセリングからはじめませんか？
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              ご自身の状況を整理するだけでも価値があります。
              <br />
              Engrowthでは、目標の整理から一緒に伴走します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton size="lg" asChild>
                <a href="/contact">無料カウンセリングを予約</a>
              </CTAButton>
              <CTAButton variant="outline" size="lg" asChild>
                <Link href="/">トップページに戻る</Link>
              </CTAButton>
            </div>
          </div>
        </Container>
      </SectionSeparator>
    </LayoutWrapper>
  )
}
