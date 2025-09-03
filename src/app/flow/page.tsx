import type { Metadata } from 'next'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { HeroSection } from '@/components/sections/hero-section'
import { FeatureCard } from '@/components/ui/card-components'
import { Container } from '@/components/layout/container'
import { SectionSeparator } from '@/components/ui/section-dividers'
import { CTAButton } from '@/components/ui/cta-button'
import Image from 'next/image'
import {
  MessageCircle,
  Video,
  Target,
  CheckCircle,
  Users,
  Heart,
  Clock,
  Shield,
} from 'lucide-react'

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
        backgroundImage="/images/fliw/flow-hero-background.jpg"
        backgroundImageClassName="opacity-10"
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

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full" />
                <div className="relative bg-white rounded-xl shadow-lg border overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/images/fliw/flow-step1-consultation.jpg"
                      alt="LINE登録・無料相談"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-green-500/20" />
                  </div>
                  <div className="p-8 text-center">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 -mt-10 relative z-10">
                      <MessageCircle className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                      今すぐ、無料で始められます
                    </h4>
                    <p className="text-neutral-700 mb-6">
                      登録は30秒で完了。すぐに限定情報を受け取り始められます。
                    </p>
                    <CTAButton
                      asChild
                      className="w-full bg-green-500 hover:bg-green-600"
                    >
                      <a href="/contact">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        LINEで無料相談を予約
                      </a>
                    </CTAButton>
                  </div>
                </div>
              </div>
              <div className="relative">
                <span className="absolute -top-6 -left-6 font-serif text-8xl text-primary/10">
                  01
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-6 relative">
                  LINEに登録
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  公式LINEを登録し、スタッフとの連絡を開始。情報を受け取りながら、いつでも気軽に質問が可能です。面談予約もLINEで完結します。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      <strong>英語力アップに役立つ限定コンテンツ</strong>
                      を定期配信
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      学習に関する<strong>どんな些細なことでも</strong>
                      気軽に質問・相談
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-2">
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full" />
                <div className="relative bg-white rounded-xl shadow-lg border overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/images/supporters/top-flow-step2.jpg"
                      alt="オンライン面談・ヒアリング"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-600/20" />
                  </div>
                  <div className="p-8 text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 -mt-10 relative z-10">
                      <Video className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                      無料オンライン面談
                    </h4>
                    <p className="text-neutral-700">
                      30-60分程度のリラックスした対話形式の面談です。
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative lg:order-1">
                <span className="absolute -top-6 -left-6 font-serif text-8xl text-primary/10">
                  02
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-6 relative">
                  オンライン面談でヒアリング
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  Zoomなどで面談を実施。英語力の現状、目標、学習習慣、体制などをヒアリングし、あなたのことを深く理解します。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      現在の英語力と<strong>達成したい目標</strong>の確認
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      1日の<strong>学習可能時間や生活スタイル</strong>の把握
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      英語学習に関するお悩みや不安の共有
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full" />
                <div className="relative bg-white rounded-xl shadow-lg border overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/images/fliw/flow-step3-learning.jpg"
                      alt="プログラムプラン設計"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-purple-600/20" />
                  </div>
                  <div className="p-8 text-center">
                    <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 -mt-10 relative z-10">
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
              <div className="relative">
                <span className="absolute -top-6 -left-6 font-serif text-8xl text-primary/10">
                  03
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-6 relative">
                  プログラムプランを共に設計
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  目標と体制に合わせてカスタムプランを作成。この時点で、受講を絶対に決める必要はありません。ご自身のペースに合わせた方法をご提案いたします。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      <strong>完全オーダーメイド</strong>
                      の学習プランを具体的に設計
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      無理のないスケジュールと料金体系をご提案
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      受講を決める前に、十分な検討時間を確保
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-2">
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full" />
                <div className="relative bg-white p-8 rounded-xl shadow-lg border">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                      納得してからスタート
                    </h4>
                    <p className="text-neutral-700">
                      プレッシャーなく、ご自身のタイミングで決定できます
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative lg:order-1">
                <span className="absolute -top-6 -left-6 font-serif text-8xl text-primary/10">
                  04
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-6 relative">
                  受講の決定・サポート開始
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  提案内容に納得いただけたら、受講を決定。LINEから手続きをご案内し、専属コンサルタントによる90日間の伴走サポートがスタートします。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      週次の<strong>マンツーマンセッション</strong>
                      で進捗と課題を解決
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      毎日のLINEフィードバックでモチベーションを維持
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      <strong>定期的なプログレスチェック</strong>で成長を可視化
                    </span>
                  </li>
                </ul>
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
              一方的な「相談」ではなく、
              <br />
              共に創る「対話」
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              Engrowthが大切にするのは、一方的な情報の提供ではありません。
              <br />
              あなたの想いや理想、現状と無理のない目標を、対等なパートナーとして一緒に考える場です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="対等なパートナーシップ"
              description="上から目線ではなく、同じ目標を持つパートナーとして一緒に考えます"
            />
            <FeatureCard
              icon={<Heart className="w-6 h-6" />}
              title="あなたの「想い」が主役"
              description="あなたの英語学習への想いや理想を聞かせてください。それが全ての出発点です"
            />
            <FeatureCard
              icon={<Target className="w-6 h-6" />}
              title="現実的で最適な目標設定"
              description="無理なく、しかし確実に成長できる、あなただけの現実的な目標を一緒に設定します"
            />
          </div>
        </Container>
      </SectionSeparator>

      {/* 最終CTA */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              あなたの英語学習への「想い」、
              <br className="sm:hidden" />
              私たちに聞かせてください
            </h2>
            <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              あなたの目標、不安、どんなことでも構いません。
              <br />
              まずは気軽にお声がけください。一緒に考えていきましょう。
            </p>
            <div className="flex justify-center mb-12">
              <CTAButton size="lg" asChild>
                <a href="/contact">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  LINEで無料相談を予約する
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
