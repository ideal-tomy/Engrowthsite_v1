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
  Briefcase,
  GraduationCap,
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
  title: '学習メソッド | Engrowth - 科学的根拠に基づく英語コンサルティング',
  description:
    'Engrowthの学習メソッドをご紹介。第二言語習得理論と習慣化心理学に基づく実践的な英語コンサルティングで、90日で英語力を実用レベルに引き上げます。',
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
          text: '無料相談で詳細を聞く',
          href: '/contact',
        }}
        secondaryCTA={{
          text: '料金プランを見る',
          href: '/pricing',
        }}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-neutral-900 mb-2">
                  専属コンサルタント
                </h3>
                <p className="text-sm text-neutral-700">
                  学習のパートナーとなり、継続的にサポート
                </p>
              </div>
              <div className="text-center">
                <ArrowRight className="w-8 h-8 text-primary mx-auto mb-6" />
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-neutral-900 mb-2">
                  個別最適化プラン
                </h3>
                <p className="text-sm text-neutral-700">
                  あなたの目標と現状に合わせた学習設計
                </p>
              </div>
              <div className="text-center">
                <ArrowRight className="w-8 h-8 text-primary mx-auto mb-6" />
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-neutral-900 mb-2">
                  科学的習慣化
                </h3>
                <p className="text-sm text-neutral-700">
                  毎日の行動と成果を科学的に習慣化
                </p>
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

      {/* 特徴1: 実力派コンサルタント */}
      <SectionSeparator background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
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
            <div className="space-y-6">
              <FeatureCard
                icon={<Users className="w-6 h-6" />}
                title="共感に基づく指導"
                description="同じ苦労を経験したからこそできる、学習者に寄り添ったサポート"
                accent
              />
              <FeatureCard
                icon={<TrendingUp className="w-6 h-6" />}
                title="実践的なアドバイス"
                description="理論だけでなく、実際の使用経験に基づく具体的な指導"
                accent
              />
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 特徴2: 科学的根拠 */}
      <SectionSeparator background="surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <ServiceCard
                title="第二言語習得理論（SLA）"
                description="意味あるインプット・アウトプットの重要性、理解可能な文脈での実践学習に基づいた効果的な学習順序"
                features={[
                  '科学的に証明された習得メカニズム',
                  '理解可能なインプットの提供',
                  '実践的なアウトプット機会',
                ]}
              />
              <ServiceCard
                title="習慣化の心理学"
                description="トリガー・報酬・行動ループに基づく学習継続支援により、無理なく英語学習を日常に組み込む"
                features={[
                  '心理学に基づく継続システム',
                  '小さな成功体験の積み重ね',
                  '持続可能な学習習慣の構築',
                ]}
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  2
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900">
                  科学的根拠に基づいた
                  <br />
                  学習設計
                </h2>
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                Engrowthは、第二言語習得理論（SLA）と習慣化の心理学に基づいて学習プランを設計。
                なぜこの方法で英語力が向上するのか、理論的裏付けのある指導を実施します。
              </p>
              <div className="bg-white p-6 rounded-xl border">
                <h3 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                  学習効率の最大化
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Lightbulb className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      スキマ時間を活用した効率的学習
                    </span>
                  </li>
                  <li className="flex items-start">
                    <RefreshCw className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      科学的反復設計による記憶定着
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      目標逆算型のプログラム構築
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 特徴3: 実践主義 */}
      <SectionSeparator background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  3
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900">
                  実践主義の仕組み
                </h2>
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                学習内容・進捗・目標をすべて共有し、毎日のやり取りを通じて習慣化。
                90日で達成するべきゴールを設定し、コンサルが伴走しながら管理します。
              </p>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                <h3 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                  忙しい社会人にも最適な柔軟対応
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MessageCircle className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-neutral-700">
                      LINEでの日常的なフォロー
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-neutral-700">
                      Zoomでの週次セッション
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-neutral-700">
                      生活リズムに合わせた学習設計
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <FeatureCard
                icon={<Target className="w-6 h-6" />}
                title="毎日の習慣化サポート"
                description="学習の進捗を毎日共有し、コンサルタントが継続をサポート"
                accent
              />
              <FeatureCard
                icon={<Brain className="w-6 h-6" />}
                title="90日集中プログラム"
                description="明確なゴール設定と逆算型の学習プランで確実な成果を実現"
                accent
              />
              <FeatureCard
                icon={<RefreshCw className="w-6 h-6" />}
                title="柔軟な学習スタイル"
                description="あなたの生活リズムに合わせて最適化された学習方法"
                accent
              />
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 対象者 */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              どんな方に最適か？
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              Engrowthは、本気で英語力を向上させたい方のための実践的なプログラムです。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">
                  ビジネスパーソン
                </h3>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">
                    ビジネス英語を短期間で実用化したい
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">
                    海外赴任・昇進に向けて英語力が必要
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">
                    忙しい中でも効率的に学習したい
                  </span>
                </div>
              </div>
              <CTAButton
                asChild
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <a href="/business">ビジネス向け詳細</a>
              </CTAButton>
            </div>

            <div className="bg-white p-8 rounded-xl border hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">
                  学生
                </h3>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">
                    留学前に英語力を整えたい
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">
                    就活で差別化できる英語力が欲しい
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">
                    将来の目標に向けて英語力を強化
                  </span>
                </div>
              </div>
              <CTAButton
                asChild
                className="w-full bg-green-600 hover:bg-green-700"
              >
                <a href="/students">学生向け詳細</a>
              </CTAButton>
            </div>

            <div className="bg-white p-8 rounded-xl border hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">
                  挫折経験者
                </h3>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">
                    英語学習が続かず挫折した経験がある
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">
                    今度こそ確実に習慣化したい
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">
                    専門家のサポートで継続したい
                  </span>
                </div>
              </div>
              <CTAButton
                asChild
                className="w-full bg-amber-600 hover:bg-amber-700"
              >
                <a href="/flow">受講の流れを見る</a>
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
              今すぐ始めるには
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Engrowthでは、無料相談・診断を常時受け付けています。
              <br />
              英語力や目標に合わせた最適プランを一緒に設計しましょう。
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
                <a href="/pricing">
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
