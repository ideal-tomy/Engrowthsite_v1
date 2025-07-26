import type { Metadata } from 'next'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { HeroSection } from '@/components/sections/hero-section'
import { FeatureCard } from '@/components/ui/card-components'
import { Container } from '@/components/layout/container'
import { SectionSeparator } from '@/components/ui/section-dividers'
import { CTAButton } from '@/components/ui/cta-button'
import {
  MessageCircle,
  Video,
  Target,
  CheckCircle,
  Play,
  Users,
  Heart,
  ArrowRight,
  Clock,
  Shield,
} from 'lucide-react'
import { Timeline } from '@/components/ui/timeline'

export const metadata: Metadata = {
  title: '受講の流れ | Engrowth - LINE登録から90日サポートまで',
  description:
    'Engrowthの受講の流れをご紹介。LINE登録から無料相談、プラン設計、90日サポート開始まで。お互いに考えあう「互相」の関係で、あなたに最適な学習プランを一緒に作り上げます。',
}

export default function FlowPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            すべては
            <span className="text-primary">&ldquo;LINEに登録&rdquo;</span>
            <br />
            から始まります
          </>
        }
        subtitle="お互いに考えあう「互相」の関係で、あなたに最適な学習プランを一緒に作り上げます"
        description="Engrowthの受講は、雑な勧誘やセールスではなく、すべて「一定の互相」から始まります。心の住所になるLINE登録から、情報を受け取り、自分に合った取り組みを考えていくフローです。"
        primaryCTA={{
          text: 'LINE登録はこちら',
          href: '/contact',
        }}
        secondaryCTA={{
          text: '詳しい流れを見る',
          href: '#flow-steps',
        }}
      />

      {/* 受講までの流れ */}
      <SectionSeparator background="surface" id="flow-steps">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              受講までの流れ
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              無理な営業は一切いたしません。あなたのペースに合わせて、一緒に最適なプランを考えていきます。
            </p>
          </div>

          {/* Timelineコンポーネント使用 */}
          <div className="mb-16">
            <Timeline
              steps={[
                {
                  id: 'line-register',
                  title: 'LINEに登録',
                  description:
                    '公式LINEを登録してスタッフとの連絡を開始。学習情報の受け取りや相談が可能です。',
                  status: 'upcoming',
                  icon: <MessageCircle className="w-6 h-6" />,
                },
                {
                  id: 'online-interview',
                  title: 'オンライン面談',
                  description:
                    'Zoom面談（約30分）で現在の英語力、目標、生活リズムをヒアリング。',
                  status: 'upcoming',
                  icon: <Video className="w-6 h-6" />,
                },
                {
                  id: 'plan-design',
                  title: 'プラン設計',
                  description:
                    '診断結果に基づき、あなた専用の90日学習プランを設計・提案。',
                  status: 'upcoming',
                  icon: <Target className="w-6 h-6" />,
                },
                {
                  id: 'start-support',
                  title: 'サポート開始',
                  description:
                    '専属コンサルタントによる90日間の伴走サポートがスタート。',
                  status: 'upcoming',
                  icon: <Play className="w-6 h-6" />,
                },
              ]}
              orientation="vertical"
            />
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    1
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900">
                    LINEに登録
                  </h3>
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  公式LINEを登録（ボタンまたはQRコード読み込み）。情報を受け取りながら、スタッフに質問も可能。予約サービスもLINEで完結します。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      公式LINEアカウントへの登録
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      学習に役立つ情報の定期配信
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      気軽な質問・相談が可能
                    </span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-primary/20">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                      今すぐ始められます
                    </h4>
                    <p className="text-neutral-700 mb-6">
                      登録は30秒で完了。すぐに情報を受け取り始められます。
                    </p>
                    <CTAButton
                      asChild
                      className="w-full bg-green-500 hover:bg-green-600"
                    >
                      <a href="/contact">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        LINE登録
                      </a>
                    </CTAButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white p-8 rounded-xl shadow-lg border">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Video className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                      無料オンライン面談
                    </h4>
                    <p className="text-neutral-700">
                      30-60分程度のリラックスした面談です
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    2
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900">
                    オンライン面談でヒアリング
                  </h3>
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  Zoomなどで面談（相談）を実施。英語力の現状、目標、学習習慣、体制などをヒアリングいたします。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      現在の英語力と目標の確認
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      学習習慣と生活スタイルの把握
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">お悩みや不安の共有</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    3
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900">
                    プログラムプランを共に設計
                  </h3>
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  目標と体制に合わせてカスタムプランを作成。この時点で、受講を絶対に決める必要はありません。ご自身のペースに合わせた方法をご提案いたします。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      完全オーダーメイドのプラン設計
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      無理のないスケジュール調整
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      受講の検討時間を十分確保
                    </span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-white p-8 rounded-xl shadow-lg border">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                      あなた専用プラン
                    </h4>
                    <p className="text-neutral-700">
                      目標達成への最短ルートを一緒に設計します
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white p-8 rounded-xl shadow-lg border">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                      納得してからスタート
                    </h4>
                    <p className="text-neutral-700">
                      プレッシャーなく、ご自身のタイミングで決定
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    4
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900">
                    受講の決定
                  </h3>
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  ひと通りの面談後、情報を正しく把握した上で受講を決定。LINEからプランに進む手続きをご案内いたします。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      十分な検討時間を確保
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">LINEでの簡単手続き</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      納得いくまでサポート
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    5
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900">
                    サポート開始
                  </h3>
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  LINEとZoomを使ったハイブリッドサポート。週次のセッション、フィードバック、プログレスチェックで90日間伴走いたします。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      週次のマンツーマンセッション
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      毎日のLINEフィードバック
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      定期的なプログレスチェック
                    </span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-primary/10 to-primary/20 p-8 rounded-xl border border-primary/30">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Play className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                      90日間の伴走開始
                    </h4>
                    <p className="text-neutral-700 mb-6">
                      あなたの英語力向上を全力でサポートします
                    </p>
                    <div className="text-primary font-bold text-lg">
                      成果が見える、続けられる
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 「互相」について */}
      <SectionSeparator background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              無料相談とは形の違う、&ldquo;一定の互相&rdquo;
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              「無料相談」よりも、あくまで「互いに考えるミーティング」の場としての互相です。
              <br />
              情報を一方的に提供するのではなく、ご自身の想いや理想、現状と無理のない目標を一緒に考える場です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="対等な関係"
              description="上から目線ではなく、対等なパートナーとして一緒に考えます"
            />
            <FeatureCard
              icon={<Heart className="w-6 h-6" />}
              title="想いを大切に"
              description="あなたの想いや理想を聞かせてください。それが出発点です"
            />
            <FeatureCard
              icon={<Target className="w-6 h-6" />}
              title="現実的な目標設定"
              description="無理のない、実現可能な目標を一緒に設定します"
            />
          </div>
        </Container>
      </SectionSeparator>

      {/* 最終CTA */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              まずはLINEで、想いを聞かせてください
            </h2>
            <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              あなたの英語学習への想い、目標、不安...どんなことでも構いません。
              <br />
              まずは気軽にお声がけください。一緒に考えていきましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <CTAButton size="lg" asChild>
                <a href="/contact">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  LINE登録して相談する
                </a>
              </CTAButton>
              <CTAButton variant="outline" size="lg" asChild>
                <a href="/pricing">
                  料金プランを見る
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </CTAButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">24時間受付</h3>
                <p className="text-sm text-neutral-600">
                  LINEならいつでも気軽にメッセージを送れます
                </p>
              </div>
              <div>
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">強引な営業なし</h3>
                <p className="text-sm text-neutral-600">
                  あなたのペースを大切にした提案をいたします
                </p>
              </div>
              <div>
                <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">完全無料</h3>
                <p className="text-sm text-neutral-600">
                  相談、診断、プラン提案まですべて無料です
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionSeparator>
    </LayoutWrapper>
  )
}
