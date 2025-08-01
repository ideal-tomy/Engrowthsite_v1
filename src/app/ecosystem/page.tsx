import type { Metadata } from 'next'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { HeroSection } from '@/components/sections/hero-section'
import { FeatureCard, StatsCard } from '@/components/ui/card-components'
import { Container } from '@/components/layout/container'
import { SectionSeparator } from '@/components/ui/section-dividers'
import { CTAButton } from '@/components/ui/cta-button'
import {
  RefreshCw,
  DollarSign,
  TrendingUp,
  Users,
  Globe,
  BookOpen,
  Heart,
  Target,
  ArrowRight,
  Briefcase,
  MessageCircle,
} from 'lucide-react'
// Lazy loading components imported above
import {
  LazyAIFeedbackLoop,
  LazyEcosystemDiagram,
  LazySimpleEcosystemFlow,
} from '@/components/diagrams/lazy-diagram-loader'

export const metadata: Metadata = {
  title: 'エコシステム | Engrowth - 循環型英語学習コミュニティ',
  description:
    '英語を教える側にまわることで学びと収入を両立。経済的にも社会的にも成長できる人材を増やす、Engrowthの循環型エコシステムをご紹介します。',
}

export default function EcosystemPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            英語を通して、
            <span className="text-primary">経済的にも社会的にも</span>
            <br />
            成長できる人材を増やす
          </>
        }
        subtitle="Engrowthの循環型エコシステム"
        description="英語を学ぶことがゴールではありません。学んだ英語を活かして教える側にまわることで、自分自身の学びを深化させつつ収入も得る。そんな持続可能な成長の仕組みをご紹介します。"
        primaryCTA={{
          text: '仕組みを詳しく見る',
          href: '#ecosystem-flow',
        }}
        secondaryCTA={{
          text: '参加方法を知る',
          href: '#how-to-join',
        }}
      />

      {/* 循環型エコシステムとは */}
      <SectionSeparator background="surface" id="ecosystem-flow">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Engrowthの循環型エコシステムとは？
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              英語を第二言語として習得した日本人が教える側にまわることで、
              <br />
              自分自身の学びを深化させつつ収入も得る持続可能な仕組みです。
            </p>
          </div>

          {/* 循環型エコシステム図解 */}
          <div className="mb-16">
            <LazyEcosystemDiagram className="mb-8" />
          </div>

          {/* シンプルフロー（コンパクト版） */}
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                  1. 英語を学ぶ
                </h3>
                <p className="text-sm text-neutral-600">
                  留学・実践で英語を習得
                </p>
              </div>
              <div className="text-center">
                <ArrowRight className="w-8 h-8 text-primary mx-auto mb-4" />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                  2. 教える側へ
                </h3>
                <p className="text-sm text-neutral-600">
                  コンサルとして指導開始
                </p>
              </div>
              <div className="text-center">
                <ArrowRight className="w-8 h-8 text-primary mx-auto mb-4" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                  3. 収入を得る
                </h3>
                <p className="text-sm text-neutral-600">指導報酬で経済的自立</p>
              </div>
              <div className="text-center">
                <ArrowRight className="w-8 h-8 text-primary mx-auto mb-4" />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                  4. 学びが循環
                </h3>
                <p className="text-sm text-neutral-600">
                  収入で更なる学習・留学
                </p>
              </div>
              <div className="text-center">
                <RefreshCw className="w-8 h-8 text-primary mx-auto mb-4" />
              </div>
            </div>

            {/* シンプルフロー表示 */}
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <LazySimpleEcosystemFlow />
            </div>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">
                好循環が生まれる仕組み
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                収入は、さらなる学びや留学費用の支えになり、次の学び手（受講者）に対しても、
                <br />
                <strong>リアルな経験に基づいた指導が提供される</strong>
                という好循環を生み出します。
              </p>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* なぜこの仕組みが必要か */}
      <SectionSeparator background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              なぜこの仕組みが必要か？
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
              日本では、経済的ハードルが学びを止める最大の壁になっているのが現状です。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-6">
                経済的理由で留学を諦める若者が多い
              </h3>
              <div className="space-y-4">
                <div className="bg-surface p-6 rounded-xl">
                  <p className="text-neutral-700 font-medium mb-2">
                    「行きたいけど、金銭的に無理」
                  </p>
                  <p className="text-sm text-neutral-600">
                    初期費用や生活費が高額で、挑戦すらできない
                  </p>
                </div>
                <div className="bg-surface p-6 rounded-xl">
                  <p className="text-neutral-700 font-medium mb-2">
                    「一度は挑戦したけど、生活費が続かない」
                  </p>
                  <p className="text-sm text-neutral-600">
                    途中で資金が尽き、学習を中断せざるを得ない
                  </p>
                </div>
                <div className="bg-surface p-6 rounded-xl">
                  <p className="text-neutral-700 font-medium mb-2">
                    「支援制度があっても、現地での費用までは賄えない」
                  </p>
                  <p className="text-sm text-neutral-600">
                    奨学金だけでは十分な支援にならないケースが多い
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">75%</div>
                <p className="text-lg font-semibold text-neutral-900">
                  経済的理由で留学を断念
                </p>
                <p className="text-sm text-neutral-600">文部科学省調査より</p>
              </div>
              <FeatureCard
                title="Engrowthの解決策"
                description="教えることで収入を得ながら学び続けられる仕組みを提供。経済的な理由で諦める必要がありません。"
                className="border-primary border-2"
              />
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 教えることの価値 */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              英語を「教える」ことの本当の価値
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
              ただの語学スキルではなく、思考力・伝達力・自己表現力を磨ける機会です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Target className="w-6 h-6" />}
              title="学びの価値化"
              description="自分の学びを「誰かの成長」に変換。経験に意味と価値を与えます"
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="英語力の向上"
              description="教えることで英語力がさらに磨かれ、発信力も大幅に上がります"
            />
            <FeatureCard
              icon={<Briefcase className="w-6 h-6" />}
              title="実務経験の獲得"
              description="ビジネス経験・社会接続・実務力が身につき、キャリアに直結"
            />
            <FeatureCard
              icon={<Heart className="w-6 h-6" />}
              title="自己効力感"
              description="経済的自立と自己効力感を同時に得られる、前向きな体験"
            />
          </div>
        </Container>
      </SectionSeparator>

      {/* 人材育成としての英語学習 */}
      <SectionSeparator background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              英語学習が「人材育成」になる仕組み
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              Engrowthでは、英語を教えることが「自立した社会人」への第一歩になると考えています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                思考力・伝達力の向上
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                ただの語学スキルではなく、思考力・伝達力・自己表現力を総合的に磨くことができます。
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                リーダーシップの習得
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                「教える」という立場を経験することで、主体性・計画力・責任感が自然と身につきます。
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                グローバル人材へ
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                将来のリーダー・起業家・グローバル人材として活躍できる土台を築くことができます。
              </p>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* すべての立場のメリット */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              すべての立場にメリットがある
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 学ぶ人のメリット */}
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-neutral-900">
                  学ぶ人（社会人・英語初心者）
                </h3>
              </div>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span>
                    実体験を持つコンサルから、本当に必要な英語を学べる
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span>習慣化と支援体制で、学習が続く</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span>「学ぶことで誰かの未来を支える」感覚を得られる</span>
                </li>
              </ul>
            </div>

            {/* 教える人のメリット */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-primary border-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-neutral-900">
                  教える人（学生・留学経験者）
                </h3>
              </div>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <span>留学を継続・実現するための収入を得られる</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <span>教えることで英語力と人間力が伸びる</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <span>経済と学びが両立する、前向きなキャリアモデル</span>
                </li>
              </ul>
            </div>

            {/* 社会・企業のメリット */}
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-neutral-900">
                  社会・企業
                </h3>
              </div>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span>英語で仕事ができる人材が増える</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span>若手人材の経験と意欲が企業に還元される</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span>世界との接続力が強まり、日本の競争力が上がる</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* AIフィードバック学習ループ */}
      <SectionSeparator background="surface">
        <Container>
          <LazyAIFeedbackLoop />
        </Container>
      </SectionSeparator>

      {/* 未来ビジョン */}
      <SectionSeparator background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              この仕組みがつくる未来
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              number="0人"
              label="留学をあきらめる人"
              description="経済的理由での断念をゼロに"
            />
            <StatsCard
              number="∞"
              label="英語で活躍する人材"
              description="無限に広がる可能性"
            />
            <StatsCard
              number="100%"
              label="社会貢献としての教育"
              description="教えることがキャリアに"
            />
            <StatsCard
              number="循環"
              label="持続可能な教育構造"
              description="自立した学習エコシステム"
            />
          </div>

          <div className="mt-16 text-center">
            <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-6">
                Engrowthが目指すビジョン
              </h3>
              <div className="text-lg text-neutral-700 leading-relaxed space-y-4">
                <p>
                  <strong>
                    Engrowthは、英語を軸に「経済と教育の課題を両立的に解決する」仕組みを提供します。
                  </strong>
                </p>
                <p>
                  あなたが学ぶことで、誰かが留学を実現できる。
                  <br />
                  あなたが教えることで、誰かが世界とつながる。
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 参加方法 */}
      <SectionSeparator
        background="neutral-900"
        className="text-white"
        id="how-to-join"
      >
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              あなたはどちらで関わりますか？
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              学び手として参加するか、教える側として挑戦するか。
              <br />
              まずは話を聞いてみたいという方も歓迎です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-xl text-center">
              <BookOpen className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold mb-4">
                学び手として参加
              </h3>
              <p className="text-neutral-300 mb-6">
                英語を実践的に学び、ビジネスで活用したい社会人の方
              </p>
              <CTAButton variant="outline" asChild className="w-full">
                <a href="/business">ビジネス向けページ</a>
              </CTAButton>
            </div>

            <div className="bg-primary/20 p-8 rounded-xl text-center border-2 border-primary">
              <Users className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold mb-4">
                教える側として挑戦
              </h3>
              <p className="text-neutral-300 mb-6">
                留学経験を活かして収入を得ながら、さらに成長したい学生の方
              </p>
              <CTAButton asChild className="w-full">
                <a href="/students">学生向けページ</a>
              </CTAButton>
            </div>

            <div className="bg-white/10 p-8 rounded-xl text-center">
              <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold mb-4">
                まず話を聞いてみたい
              </h3>
              <p className="text-neutral-300 mb-6">
                仕組みについて詳しく知りたい、相談してから決めたい方
              </p>
              <CTAButton variant="outline" asChild className="w-full">
                <a href="/contact">お問い合わせ</a>
              </CTAButton>
            </div>
          </div>
        </Container>
      </SectionSeparator>
    </LayoutWrapper>
  )
}
