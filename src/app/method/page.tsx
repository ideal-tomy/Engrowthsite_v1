import type { Metadata } from 'next'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { HeroSection } from '@/components/sections/hero-section'
import { FeatureCard, ServiceCard } from '@/components/ui/card-components'
import { Container } from '@/components/layout/container'
import { SectionSeparator } from '@/components/ui/section-dividers'
import { CTAButton } from '@/components/ui/cta-button'
import {
  Users,
  Brain,
  Target,
  RefreshCw,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  TrendingUp,
  MessageCircle,
  Zap,
  Clock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'プログラム内容 | Engrowth - 科学的根拠に基づく英語コンサルティング',
  description:
    'Engrowthのプログラム内容をご紹介。第二言語習得理論と習慣化心理学に基づく実践的な英語コンサルティングで、90日で英語力を実用レベルに引き上げます。',
}

export default function MethodPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            <span className="text-primary">90日で英語力を</span>
            <br />
            実用レベルに引き上げる
          </>
        }
        subtitle="科学的根拠に基づく実践的な英語コンサルティング"
        description="Engrowthは、第二言語習得理論と習慣化心理学を組み合わせた独自のメソッドで、ビジネスパーソンと成長意欲の高い学生の英語力向上を支援します。"
        primaryCTA={{
          text: 'まずは無料相談で学習法を知る',
          href: '/contact',
        }}
        backgroundImage="/images/method/method-hero-background.jpg"
        backgroundImageClassName="opacity-20"
      />

      {/* サービス概要 */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Engrowthの提供サービスとは？
            </h2>
            <p className="text-lg text-neutral-700 max-w-4xl mx-auto leading-relaxed">
              Engrowthは、ビジネスパーソンと成長意欲の高い学生のために設計された、
              <br />
              <strong>実践的な英語コンサルティングサービス</strong>です。
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="ml-6">
                  <h3 className="font-serif text-xl font-bold text-neutral-900 mb-1">
                    実力派コンサルタントが伴走
                  </h3>
                  <p className="text-neutral-700">
                    学習のパートナーとなり、目標達成まで継続的にサポートします。
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div className="ml-6">
                  <h3 className="font-serif text-xl font-bold text-neutral-900 mb-1">
                    科学的根拠に基づいた学習設計
                  </h3>
                  <p className="text-neutral-700">
                    あなたの目標と現状に合わせた個別最適化プランを設計します。
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <RefreshCw className="w-8 h-8 text-primary" />
                </div>
                <div className="ml-6">
                  <h3 className="font-serif text-xl font-bold text-neutral-900 mb-1">
                    実践主義の仕組み
                  </h3>
                  <p className="text-neutral-700">
                    毎日の学習と成果を科学的な仕組みで無理なく習慣化させます。
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <div className="inline-flex items-center bg-primary/10 text-primary px-6 py-3 rounded-full font-bold text-lg">
                <Zap className="w-5 h-5 mr-2" />
                90日で英語力を実用レベルに引き上げる
              </div>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 特徴1: 実力派コンサルタント（上下レイアウト） */}
      <SectionSeparator background="white">
        <Container>
          <div className="space-y-12">
            {/* 上部: タイトルと説明 */}
            <div>
              <div className="flex items-center mb-6 relative">
                <div className="absolute -top-8 left-6 hidden md:block">
                  <ArrowRight className="w-6 h-6 text-primary rotate-[-45deg]" />
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  1
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900">
                  実力派コンサルタントが伴走
                </h2>
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                第二言語として英語を習得した「留学経験者・実践者」だけがコンサルティングを担当。
                学習の痛みやつまずきを実体験として理解しているからこその、共感と適切な支援を提供します。
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">
                    第二言語として英語を習得した日本人コンサル
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">
                    留学・海外勤務の実践経験を持つ専門家
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">
                    ネイティブ目線と日本人視点の両立
                  </span>
                </div>
              </div>
            </div>

            {/* 下部: 2カラムカード */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                icon={<Users className="w-6 h-6" />}
                title="共感に基づく指導"
                description="同じ苦労を経験したからこそできる、学習者に寄り添ったサポート"
                accent
                className="flex flex-col h-full"
                image={{
                  src: '/images/method/method-empathy-teaching.jpg',
                  alt: '共感に基づく指導',
                }}
              />
              <FeatureCard
                icon={<TrendingUp className="w-6 h-6" />}
                title="実践的なアドバイス"
                description="理論だけでなく、実際の使用経験に基づく具体的な指導"
                accent
                className="flex flex-col h-full"
                image={{
                  src: '/images/method/method-practical-advice.jpg',
                  alt: '実践的なアドバイス',
                }}
              />
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 特徴2: 科学的根拠 */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              科学的根拠に基づいた
              <br />
              学習設計
            </h2>
            <p className="text-lg text-neutral-700 max-w-4xl mx-auto leading-relaxed">
              Engrowthは、第二言語習得理論（SLA）と習慣化の心理学に基づいて学習プランを設計。
              <br />
              なぜこの方法で英語力が向上するのか、理論的裏付けのある指導を実施します。
            </p>
          </div>

          {/* メソッド全体の図解 */}
          <div className="bg-white p-8 rounded-xl border max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 hidden md:block">
                  <ArrowRight className="w-6 h-6 text-primary rotate-[-45deg]" />
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-serif text-lg font-bold text-neutral-900 mb-2">
                  理論
                </h4>
                <p className="text-sm text-neutral-700">
                  SLA理論 + 習慣化心理学
                </p>
              </div>
              <div className="text-center hidden md:block">
                <ArrowRight className="w-8 h-8 text-primary mx-auto" />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-serif text-lg font-bold text-neutral-900 mb-2">
                  実践
                </h4>
                <p className="text-sm text-neutral-700">90日集中プログラム</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* 左の2カードを2カラム横並び */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard
                title="第二言語習得理論（SLA）"
                description="意味あるインプット・アウトプットの重要性、理解可能な文脈での実践学習に基づいた効果的な学習順序"
                features={[
                  '科学的に証明された習得メカニズム',
                  '理解可能なインプットの提供',
                  '実践的なアウトプット機会',
                ]}
                image={{
                  src: '/images/method/method-sla-detailed.jpg',
                  alt: '第二言語習得理論（SLA）',
                }}
              />
              <ServiceCard
                title="習慣化の心理学"
                description="トリガー・報酬・行動ループに基づく学習継続支援により、無理なく英語学習を日常に組み込む"
                features={[
                  '心理学に基づく継続システム',
                  '小さな成功体験の積み重ね',
                  '持続可能な学習習慣の構築',
                ]}
                image={{
                  src: '/images/method/method-habit-detailed.jpg',
                  alt: '習慣化の心理学',
                }}
              />
            </div>

            {/* 右側のを1カラム */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200">
                <div className="text-center mb-4">
                  <TrendingUp className="w-10 h-10 text-primary mx-auto" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-4 text-center">
                  学習効率の最大化
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Lightbulb className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neutral-800">
                        スキマ時間を活用した効率的学習
                      </h4>
                      <p className="text-neutral-600 text-sm">
                        5〜15分の短時間でも効果のある学習モジュールを提供します。
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <RefreshCw className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neutral-800">
                        科学的反復設計による記憶定着
                      </h4>
                      <p className="text-neutral-600 text-sm">
                        忘却曲線に基づき、最適なタイミングでの復習を促します。
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Target className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neutral-800">
                        目標逆算型のプログラム構築
                      </h4>
                      <p className="text-neutral-600 text-sm">
                        あなたのゴールから逆算し、最短距離での到達を目指します。
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 最終CTA */}
      <SectionSeparator background="neutral-900" className="text-white">
        <Container>
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              今すぐ始めるには
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Engrowthでは、無料相談・診断を常時受け付けています。
              <br />
              あなたの英語力と目標に合わせた最適な学習メソッドを一緒に設計しましょう。
              <br />
              <strong>強引な営業は一切いたしません。</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <CTAButton size="lg" asChild>
                <a href="/contact">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  無料相談を申し込む
                </a>
              </CTAButton>
              <CTAButton variant="outline" size="lg" asChild>
                <a href="/courses">
                  料金プランを見る
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </CTAButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">所要時間 30分</h3>
                <p className="text-sm text-neutral-400">
                  お忙しい方でも気軽にご参加いただけます
                </p>
              </div>
              <div>
                <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">完全オーダーメイド</h3>
                <p className="text-sm text-neutral-400">
                  あなたの状況に合わせたプランをご提案
                </p>
              </div>
              <div>
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">無料・無圧力</h3>
                <p className="text-sm text-neutral-400">
                  費用は一切かからず、営業もいたしません
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionSeparator>
    </LayoutWrapper>
  )
}
