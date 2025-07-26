import type { Metadata } from 'next'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { HeroSection } from '@/components/sections/hero-section'
import { FeatureCard } from '@/components/ui/card-components'
import { Container } from '@/components/layout/container'
import { SectionSeparator } from '@/components/ui/section-dividers'
import { CTAButton } from '@/components/ui/cta-button'
import {
  Briefcase,
  GraduationCap,
  DollarSign,
  Clock,
  Star,
  CheckCircle,
  CreditCard,
  Shield,
  MessageCircle,
  TrendingDown,
} from 'lucide-react'

export const metadata: Metadata = {
  title: '料金プラン | Engrowth - 長期割引で続けやすい料金設定',
  description:
    'Engrowthの料金プラン。ビジネス向け・学生向けそれぞれに最適化されたプランをご用意。長期割引で続けやすい料金設定です。',
}

export default function PricingPage() {
  const businessPlans = [
    {
      period: '1ヶ月',
      originalPrice: '$1,480',
      discountedPrice: '$1,480',
      monthlyPrice: '-',
      note: '3ヶ月以上のプラン修了者のみ利用可能',
      available: false,
    },
    {
      period: '3ヶ月',
      originalPrice: '$4,400',
      discountedPrice: '$3,980',
      monthlyPrice: '$1,326',
      discount: '約10%OFF',
      popular: false,
    },
    {
      period: '6ヶ月',
      originalPrice: '$8,880',
      discountedPrice: '$7,480',
      monthlyPrice: '$1,246',
      discount: '約16%OFF',
      popular: true,
    },
    {
      period: '12ヶ月',
      originalPrice: '$17,760',
      discountedPrice: '$13,980',
      monthlyPrice: '$1,165',
      discount: '約21%OFF',
      popular: false,
    },
  ]

  const studentPlans = [
    {
      period: '1ヶ月',
      originalPrice: '$1,780',
      discountedPrice: '$1,780',
      monthlyPrice: '-',
      note: 'エッセイ添削のみ。修了者は割引価格で継続可能',
      available: false,
    },
    {
      period: '3ヶ月',
      originalPrice: '$5,340',
      discountedPrice: '$4,980',
      monthlyPrice: '$1,660',
      discount: '約7%OFF',
      popular: false,
    },
    {
      period: '6ヶ月',
      originalPrice: '$10,680',
      discountedPrice: '$9,480',
      monthlyPrice: '$1,580',
      discount: '約11%OFF',
      popular: true,
    },
    {
      period: '12ヶ月',
      originalPrice: '$21,360',
      discountedPrice: '$17,980',
      monthlyPrice: '$1,498',
      discount: '約16%OFF',
      popular: false,
    },
  ]

  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            長期的に続けられる
            <br />
            <span className="text-primary">最適化された料金設定</span>
          </>
        }
        subtitle="一人ひとりの目標に合わせて最適化されたプラン構成"
        description="Engrowthは、継続することで成果が出る学習を前提としたプラン構成。長期割引により、無理なく続けられる料金設定を実現しています。"
        primaryCTA={{
          text: '無料相談で詳細を聞く',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'プラン比較を見る',
          href: '#pricing-plans',
        }}
      />

      {/* プラン比較 */}
      <SectionSeparator background="surface" id="pricing-plans">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              プランと料金システム
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
              ビジネス向けと学生向け、それぞれに最適化されたプランをご用意しています。
            </p>
          </div>

          {/* ビジネス向けプラン */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                <Briefcase className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                ビジネスパーソン向け
              </h3>
              <p className="text-neutral-700">
                実践的なビジネス英語に特化したプログラム
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-xl border ${plan.popular ? 'border-primary border-2 shadow-lg' : 'border-gray-200'} ${!plan.available ? 'opacity-75' : ''} hover:shadow-md transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        人気プラン
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h4 className="font-serif text-xl font-bold text-neutral-900 mb-2">
                      {plan.period}
                    </h4>
                    <div className="mb-3">
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
                        <TrendingDown className="w-3 h-3 mr-1" />
                        {plan.discount}
                      </div>
                    )}
                  </div>

                  {plan.note && (
                    <div className="text-xs text-neutral-600 bg-neutral-50 p-3 rounded-lg mb-4">
                      ※ {plan.note}
                    </div>
                  )}

                  <CTAButton
                    asChild
                    className={`w-full ${plan.popular ? '' : 'bg-slate-600 hover:bg-slate-700'} ${!plan.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!plan.available}
                  >
                    <a href="/contact">
                      {plan.available ? '相談・申し込み' : '要修了認定'}
                    </a>
                  </CTAButton>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="bg-slate-50 p-6 rounded-xl max-w-4xl mx-auto">
                <h4 className="font-semibold text-neutral-900 mb-4">
                  ビジネス向けプラン サービス内容
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-700">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>専任コンサルタントによる毎日の伴走サポート</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>脳科学・第二言語習得論に基づく科学的メソッド</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>ビジネス現場特化の実践シミュレーション英会話</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>海外トップ大学・実務経験豊富なプロ講師陣</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 学生向けプラン */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                学生向けプラン
              </h3>
              <p className="text-neutral-700">
                留学準備・就活に向けた総合的な英語力強化
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studentPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-xl border ${plan.popular ? 'border-blue-500 border-2 shadow-lg' : 'border-gray-200'} ${!plan.available ? 'opacity-75' : ''} hover:shadow-md transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        人気プラン
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h4 className="font-serif text-xl font-bold text-neutral-900 mb-2">
                      {plan.period}
                    </h4>
                    <div className="mb-3">
                      {plan.originalPrice !== plan.discountedPrice && (
                        <div className="text-sm text-neutral-500 line-through">
                          {plan.originalPrice}
                        </div>
                      )}
                      <div className="text-2xl font-bold text-blue-600">
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
                        <TrendingDown className="w-3 h-3 mr-1" />
                        {plan.discount}
                      </div>
                    )}
                  </div>

                  {plan.note && (
                    <div className="text-xs text-neutral-600 bg-neutral-50 p-3 rounded-lg mb-4">
                      ※ {plan.note}
                    </div>
                  )}

                  <CTAButton
                    asChild
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-600 hover:bg-slate-700'} ${!plan.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!plan.available}
                  >
                    <a href="/contact">
                      {plan.available ? '相談・申し込み' : '要修了認定'}
                    </a>
                  </CTAButton>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 支払い・通貨について */}
      <SectionSeparator background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              お支払いについて
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<DollarSign className="w-6 h-6" />}
              title="通貨について"
              description="計算便利のためUSD表記としていますが、実際のお支払いは日本円で実行されます"
            />
            <FeatureCard
              icon={<CreditCard className="w-6 h-6" />}
              title="決済方法"
              description="Stripe等のオンライン決済を使用。クレジットカード、デビットカードがご利用いただけます"
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="安全な決済"
              description="業界標準の暗号化技術により、お支払い情報は安全に保護されます"
            />
          </div>

          <div className="mt-12 text-center">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="font-serif text-xl font-bold text-amber-900 mb-4">
                為替レート変動について
              </h3>
              <p className="text-amber-800 leading-relaxed">
                USD表記の料金は参考価格です。実際のお支払い金額は、お申し込み時の為替レートに基づいて日本円で確定いたします。
              </p>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* なぜ長期プランがお得か */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              なぜ長期プランがお得なのか？
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              英語習得は短期間では困難です。継続的な学習こそが成果につながる理由をご説明します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock className="w-6 h-6" />}
              title="学習の継続性"
              description="3ヶ月以上の継続により、学習習慣が定着し、着実な成果が期待できます"
            />
            <FeatureCard
              icon={<TrendingDown className="w-6 h-6" />}
              title="コストメリット"
              description="長期プランほど月額料金が安くなり、総合的な学習コストを抑えられます"
            />
            <FeatureCard
              icon={<Star className="w-6 h-6" />}
              title="段階的成長"
              description="長期間かけて段階的にレベルアップ。無理なく着実に英語力を向上できます"
            />
          </div>

          <div className="mt-12 text-center">
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">
                Engrowthの推奨学習期間
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-6">
                科学的研究によると、第二言語習得には最低でも3ヶ月の継続的な学習が必要とされています。
                <br />
                Engrowthでは、6ヶ月プランを最も推奨しており、多くの受講生が目標を達成されています。
              </p>
              <CTAButton variant="secondary" asChild>
                <a href="/method">学習メソッドの詳細を見る</a>
              </CTAButton>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 最終CTA */}
      <SectionSeparator background="neutral-900" className="text-white">
        <Container>
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              さあ、今日から始めましょう
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              どのプランがあなたに最適か、無料相談でご提案いたします。
              <br />
              料金や学習内容について、お気軽にご質問ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <CTAButton size="lg" asChild>
                <a href="/contact">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  無料相談で最適プランを聞く
                </a>
              </CTAButton>
              <CTAButton variant="outline" size="lg" asChild>
                <a href="/flow">受講の流れを確認</a>
              </CTAButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">相談は30分程度</h3>
                <p className="text-sm text-neutral-400">
                  お忙しい方でも気軽にご参加いただけます
                </p>
              </div>
              <div>
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">完全無料</h3>
                <p className="text-sm text-neutral-400">
                  相談、診断、プラン提案まですべて無料
                </p>
              </div>
              <div>
                <Star className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">強引な営業なし</h3>
                <p className="text-sm text-neutral-400">
                  あなたのペースに合わせてご提案いたします
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionSeparator>
    </LayoutWrapper>
  )
}
