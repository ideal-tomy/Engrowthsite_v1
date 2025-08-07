import type { Metadata } from 'next'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { HeroSection } from '@/components/sections/hero-section'
import {
  FeatureCard,
  ServiceCard,
  TestimonialCard,
} from '@/components/ui/card-components'
import { Container } from '@/components/layout/container'
import { SectionSeparator } from '@/components/ui/section-dividers'
import { CTAButton } from '@/components/ui/cta-button'
import { FadeIn, FadeInStagger } from '@/components/animations/fade-in'
import {
  LazySocialImpactDiagram,
  LazySimpleEcosystemFlow,
} from '@/components/diagrams/lazy-diagram-loader'

import {
  GraduationCap,
  Users,
  Target,
  RefreshCw,
  BookOpen,
  Heart,
  MessageCircle,
  Clock,
  Globe,
  TrendingUp,
  Briefcase,
  Brain,
  CheckCircle,
  ArrowRight,
  UserCheck,
  ClipboardList,
  Smartphone,
  Award,
  Recycle,
  FlaskConical,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Engrowth | 循環型エコシステムによる英語コンサルティング',
  description:
    '第二言語として英語を習得した日本人コンサルによる実践的な英語学習支援。科学的メソッドに基づく循環型エコシステムで、英語を学ぶ人も教える人も成長できる仕組みを提供します。',
}

export default function HomePage() {
  return (
    <LayoutWrapper>
      {/* 1. Hero Section */}
      <HeroSection
        title={
          <>
            英語を
            <span className="text-primary text-2xl lg:text-3xl">
              &ldquo;誰かのため&rdquo;
            </span>
            に
            <br />
            学んできた人から学ぶ。
          </>
        }
        subtitle={
          <>
            英語を<strong>&ldquo;使ってきた&rdquo;</strong>
            日本人だけのコンサルティング
          </>
        }
        description="第二言語として英語を習得した日本人コンサルが、実践的な学習支援を提供。科学的メソッドに基づく循環型エコシステムで、英語を学ぶ人も教える人も成長できる仕組みです。"
        primaryCTA={{
          text: 'まずは無料でLINE相談',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'カウンセリング予約',
          href: '/contact',
        }}
        backgroundImage="/images/hero/hero-background.jpg"
      />

      {/* 2. 提供サービス概要 */}
      <SectionSeparator background="surface">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Engrowthが提供するサービス
              </h2>
              <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
                専属コンサルタントによる伴走型サポートで、目標から逆算した90日プランを設計。
                <br />
                毎日の学習管理とフィードバックにより、確実な英語力向上を実現します。
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<UserCheck className="w-6 h-6" />}
              title="専属コンサルタント"
              description="留学経験豊富なコンサルタントが、あなた専用の学習プランを設計し、90日間伴走します"
              accent
            />
            <FeatureCard
              icon={<ClipboardList className="w-6 h-6" />}
              title="目標から逆算設計"
              description="TOEIC、ビジネス英語、留学準備など、目的に応じた最適なカリキュラムを構築"
              accent
            />
            <FeatureCard
              icon={<Smartphone className="w-6 h-6" />}
              title="毎日のサポート"
              description="Zoom・LINEを活用した柔軟な対応で、学習の継続をしっかりサポート"
              accent
            />
          </FadeInStagger>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton variant="secondary" asChild>
                <a href="/students">学生向けプラン</a>
              </CTAButton>
              <CTAButton variant="secondary" asChild>
                <a href="/business">ビジネス向けプラン</a>
              </CTAButton>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 3. Engrowthが選ばれる理由（差別化セクション） */}
      <SectionSeparator background="white">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Engrowthが選ばれる理由
              </h2>
              <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
                他の英語スクールとは異なる、Engrowth独自の特徴をご紹介します。
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            <ServiceCard
              className="border-primary"
              icon={<Award className="w-6 h-6 text-primary" />}
              title="英語で“結果を出した”日本人コンサルタント"
              description="全員が留学経験あり、英語を実践で使いこなす人材のみで構成。理論だけでなく、実体験に基づく具体的なアドバイスを提供。"
              features={[
                '留学・海外勤務経験者のみ',
                '第二言語習得の実体験',
                '共感に基づく指導',
              ]}
              image={{
                src: '/images/team/consultants.jpg',
                alt: 'Engrowthのコンサルタントチーム',
              }}
            />
            <ServiceCard
              className="border-primary"
              icon={<Recycle className="w-6 h-6 text-primary" />}
              title="「教える」が学びを加速させるエコシステム"
              description="教える人も学び続ける仕組み。英語を習得した人が教える側にまわることで、持続可能な学習コミュニティを形成。"
              features={[
                '学ぶ→教える→成長の循環',
                '経済的自立支援',
                '社会貢献としての教育',
              ]}
            />
            <ServiceCard
              className="border-primary"
              icon={<FlaskConical className="w-6 h-6 text-primary" />}
              title="再現性を高める、科学的学習メソッド"
              description="第二言語習得理論と習慣化心理学に基づく学習設計。なぜこの方法で伸びるのか、理論的裏付けのある指導を実施。"
              features={[
                'SLA理論に基づく設計',
                '習慣化のメカニズム活用',
                'エビデンスベースの指導',
              ]}
            />
          </FadeInStagger>

          <div className="mt-12">
            <LazySimpleEcosystemFlow />
          </div>

          <div className="text-center mt-12">
            <CTAButton variant="outline" asChild>
              <a href="/ecosystem">
                エコシステムの詳細を見る
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </CTAButton>
          </div>
        </Container>
      </SectionSeparator>

      {/* 4. ビジョンセクション */}
      <SectionSeparator background="surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  学ぶことがゴールではない。
                  <br />
                  教えることで社会とつながる。
                </h2>
                <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                  <p>
                    Engrowthが目指すのは、単なる英語習得ではありません。
                    <br />
                    英語を習得した若者が、その学びを社会に還元できる仕組みづくりです。
                  </p>
                  <p>
                    教えることが最大の学びでもある。この思想のもと、学習者も指導者も共に成長し続ける、
                    持続可能な教育エコシステムを構築しています。
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.3}>
              <div className="space-y-6">
                <FeatureCard
                  icon={<Heart className="w-6 h-6" />}
                  title="社会への還元"
                  description="英語を学んだ経験を、次の学習者のために活かす。知識の循環が社会全体の英語力向上に貢献。"
                />
                <FeatureCard
                  icon={<TrendingUp className="w-6 h-6" />}
                  title="持続可能な成長"
                  description="教えることで自分自身も成長し続ける。経済的自立と学習の継続を両立する仕組み。"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </SectionSeparator>

      {/* 5. サービス分岐セクション */}
      <SectionSeparator background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              あなたに最適なプランを選択
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
              学習の目的や現在の状況に応じて、最適なサービスをご提案いたします。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative p-8 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 overflow-hidden bg-student-card bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-blue-700/80" />
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-3">
                    学生向けサービス
                  </h3>
                  <p className="text-blue-100">
                    英語で働きたい・経験を活かしたい学生へ
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" />
                    <span className="text-blue-50">留学前・後の英語力強化</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" />
                    <span className="text-blue-50">
                      就活で差別化できる英語力
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" />
                    <span className="text-blue-50">教える側への成長支援</span>
                  </li>
                </ul>
                <CTAButton
                  asChild
                  className="w-full bg-white text-blue-600 hover:bg-blue-50"
                >
                  <a href="/students">学生向け詳細を見る</a>
                </CTAButton>
              </div>
            </div>

            <div className="relative p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 overflow-hidden bg-business-card bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600/50 to-slate-800/80" />
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-slate-700" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-3">
                    ビジネス向けサービス
                  </h3>
                  <p className="text-slate-200">
                    実践英語が必要な社会人・経営者へ
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-100">
                      忙しい中でも続けられる学習
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-100">
                      ビジネスで使える実践英語
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-100">短期間で成果を実感</span>
                  </li>
                </ul>
                <CTAButton
                  asChild
                  className="w-full bg-white text-slate-700 hover:bg-slate-50"
                >
                  <a href="/business">ビジネス向け詳細を見る</a>
                </CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 6. エコシステム紹介（簡易版） */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              学びの循環で、みんなが成長
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              Engrowthの循環型エコシステムでは、学ぶ人が教える人になり、収入を得ながら社会貢献。
              <br />
              持続可能な学習コミュニティを実現しています。
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                  英語を学ぶ
                </h3>
                <p className="text-sm text-neutral-600">実践的な英語力を習得</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                  教える側へ
                </h3>
                <p className="text-sm text-neutral-600">コンサルとして活躍</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                  収入獲得
                </h3>
                <p className="text-sm text-neutral-600">
                  指導で経済的自立を支援
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                  社会貢献
                </h3>
                <p className="text-sm text-neutral-600">
                  次の学習者を支援し成長
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <CTAButton variant="secondary" asChild>
              <a href="/ecosystem">
                エコシステムの詳細を見る
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </CTAButton>
          </div>
        </Container>
      </SectionSeparator>

      {/* 7. 科学的メソッド紹介 */}
      <SectionSeparator background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              科学的根拠に基づく学習メソッド
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              なぜこの方法で英語力が向上するのか。理論的裏付けのある学習設計で、
              <br />
              効率的かつ継続可能な英語習得を実現します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="w-6 h-6" />}
              title="第二言語習得理論（SLA）"
              description="科学的に証明された第二言語習得のメカニズムに基づき、最も効果的な学習順序と方法を設計"
            />
            <FeatureCard
              icon={<RefreshCw className="w-6 h-6" />}
              title="習慣化心理学"
              description="継続のための心理的メカニズムを活用。小さな成功体験の積み重ねで、学習を無理なく習慣化"
            />
            <FeatureCard
              icon={<Target className="w-6 h-6" />}
              title="個別最適化"
              description="学習者の現在のレベル、目標、生活リズムに合わせて、一人ひとりに最適化されたプランを提供"
            />
          </div>

          <div className="text-center mt-12">
            <CTAButton variant="outline" asChild>
              <a href="/method">
                メソッドの詳細を見る
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </CTAButton>
          </div>
        </Container>
      </SectionSeparator>

      {/* 8. よくある相談例 */}
      <SectionSeparator background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              こんなお悩み、ありませんか？
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
              多くの方が抱える英語学習の課題。Engrowthなら、あなたの悩みに合わせた解決策をご提案できます。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="TOEICはある程度取れたけど、実際の会話になると全然話せない。どうやって「使える英語」に変えればいいの？"
              author="会社員・28歳"
              role="TOEIC 750点"
              isBubble
            />
            <TestimonialCard
              quote="仕事が忙しくて、まとまった勉強時間が取れない。短時間でも効果的に学習を続ける方法はある？"
              author="経営者・35歳"
              role="起業3年目"
              isBubble
            />
            <TestimonialCard
              quote="来年留学予定だけど、現地で授業についていけるか不安。留学前にやっておくべきことは？"
              author="大学生・20歳"
              role="交換留学予定"
              isBubble
            />
          </div>

          <div className="text-center mt-12">
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">
                そのお悩み、Engrowthが解決し、あなたの『なりたい姿』を実現します
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Engrowthのコンサルタントは、同じような課題を乗り越えてきた経験者ばかり。
                <br />
                あなたの状況に最適なアプローチをご提案いたします。
              </p>
              <CTAButton asChild>
                <a href="/contact">無料相談で解決策を聞く</a>
              </CTAButton>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 9. お客様の声セクション */}
      <SectionSeparator background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              お客様の声
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
              Engrowthで英語力を飛躍的に向上させた方々の声をご紹介します。
            </p>
          </div>
          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="自己流の学習に限界を感じていましたが、90日間でビジネスで自信を持って話せるレベルになりました。本当に感謝しています。"
              author="田中 健一様"
              role="外資系メーカー勤務"
              avatar="/images/team/avatar1.jpg"
            />
            <TestimonialCard
              quote="留学前に受講したおかげで、現地の授業にもスムーズについていけました。実践的な準備ができてよかったです。"
              author="佐藤 美咲様"
              role="大学生・交換留学"
              avatar="/images/team/avatar2.jpg"
            />
            <TestimonialCard
              quote="コンサルタントの方が親身に寄り添ってくれたので、最後までモチベーションを維持できました。最高のサポートでした。"
              author="鈴木 大輔様"
              role="IT企業経営者"
              avatar="/images/team/avatar3.jpg"
            />
          </FadeInStagger>
        </Container>
      </SectionSeparator>

      {/* 10. 運営メンバー紹介（簡易） */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              英語を&ldquo;学んできた&rdquo;人たちが、あなたをサポート
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              Engrowthのコンサルタントは全員、第二言語として英語を習得した日本人。
              <br />
              同じ苦労を経験しているからこそ、実効性のある指導ができます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">
                留学経験者
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                アメリカ、イギリス、カナダ、オーストラリアなど、様々な国での留学・勤務経験を持つメンバーが在籍
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">
                多様なバックグラウンド
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                ビジネス、学術、エンジニア、医療など、様々な分野での英語使用経験を持つ専門家集団
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">
                共感ベースの指導
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                英語学習の挫折や困難を実体験として理解。だからこそできる、寄り添う指導スタイル
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <CTAButton variant="outline" asChild>
              <a href="/members">
                メンバー詳細を見る
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </CTAButton>
          </div>
        </Container>
      </SectionSeparator>

      {/* 10. 受講の流れ（簡易） */}
      <SectionSeparator background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              受講の流れ
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
              LINEでのご相談から90日サポート開始まで、スムーズにご案内いたします。
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="1. LINEで相談"
                description="現在の英語力、目標、生活リズムをヒアリング。あなたに最適なプランの方向性をご提案します。"
                hover={false}
              />
              <FeatureCard
                title="2. 診断・プラン提示"
                description="詳細な英語力診断を実施。具体的な90日プランと学習内容をご提示いたします。"
                hover={false}
              />
              <FeatureCard
                title="3. サポート開始"
                description="専属コンサルタントによる90日間の伴走サポートがスタート。毎日の学習をフォローします。"
                hover={false}
              />
            </div>
            <div className="absolute top-1/2 -left-4 -right-4 hidden md:flex justify-between items-center transform -translate-y-1/2">
              <div className="w-full h-1 bg-primary/20" />
              <div className="absolute left-1/3 -ml-4 w-8 h-8 bg-white flex items-center justify-center rounded-full">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute left-2/3 -ml-4 w-8 h-8 bg-white flex items-center justify-center rounded-full">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <CTAButton variant="outline" asChild>
              <a href="/flow">
                受講の流れ詳細を見る
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </CTAButton>
          </div>
        </Container>
      </SectionSeparator>

      {/* 11. 社会的インパクト図 */}
      <SectionSeparator background="white">
        <Container>
          <LazySocialImpactDiagram />
        </Container>
      </SectionSeparator>

      {/* 12. CTA Section（締め） */}
      <SectionSeparator background="neutral-900" className="text-white">
        <Container>
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              まずは無料で話してみませんか？
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              英語学習の悩み、目標、現在の状況をお聞かせください。
              <br />
              あなたに最適な学習プランを無料でご提案いたします。
              <br />
              <strong>強引な営業は一切いたしません。</strong>
              安心してご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <CTAButton size="lg" asChild>
                <a href="/contact">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  LINE で相談
                </a>
              </CTAButton>
              <CTAButton variant="outline" size="lg" asChild>
                <a href="/contact">無料相談フォーム</a>
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
                <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
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
