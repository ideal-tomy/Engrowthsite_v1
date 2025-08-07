import type { Metadata } from 'next'
import Link from 'next/link'
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
import Image from 'next/image'
import {
  GraduationCap,
  BookOpen,
  Users,
  Heart,
  TrendingUp,
  FileText,
  Briefcase,
  Users2,
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Timeline } from '@/components/ui/timeline'

export const metadata: Metadata = {
  title: '学生向けサービス | Engrowth - 留学・就活を成功に導く英語準備',
  description:
    '「行くだけの留学」で終わらない。渡航前の90日で、授業理解・友人作り・そしてその先のキャリアまで見据えた「本当に使える」英語力を手に入れる。',
}

export default function StudentsPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            「行くだけの留学」で、終わらない。
            <br />
            <span className="text-primary">出発前の90日</span>で、成果は変わる。
          </>
        }
        subtitle="あなたの留学、最高の体験にする準備はできていますか？渡航前に差をつける英語準備プログラムで、留学の質を最大化します。"
        description="英語での授業理解、友人作り、そして異文化での生活。そのすべてを充実させるための「実践的な英語力」を、留学経験者と共に出発前に作り上げます。"
        primaryCTA={{
          text: 'まずは無料で学習相談',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'サポート詳細を見る',
          href: '#support-details',
        }}
        backgroundImage="/images/backgrounds/campus.jpg"
        backgroundImageClassName="opacity-10"
      />

      {/* なぜ今、事前習得が必要か */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              あなたの留学、最高の体験にする準備はできていますか？
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              留学は「行くこと」がゴールではありません。
              <br />
              現地で何を学び、経験し、成長するかが最も重要です。
              その成果は、出発前の準備で大きく変わります。
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 失敗談 */}
            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-200">
              <h3 className="font-serif text-2xl font-bold text-neutral-800 mb-4">
                <span className="text-red-500">×</span> 留学あるある失敗談
              </h3>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p className="font-semibold">
                  「最初のグループワーク、一言も発せなかった…」
                </p>
                <p className="text-sm">
                  周りの話すスピードについていけず、意見を求められても頭が真っ白に。自信をなくし、授業への参加が怖くなってしまった。
                </p>
                <p className="font-semibold mt-4">「友達作りに苦労した…」</p>
                <p className="text-sm">
                  日常会話にはついていけるけど、深い話やジョークになると輪に入れない。結果、日本人とばかり一緒にいてしまいがち。
                </p>
              </div>
            </div>
            {/* 解決策 */}
            <div className="space-y-6">
              <FeatureCard
                icon={<GraduationCap className="w-6 h-6 text-blue-600" />}
                title="授業理解の土台作り"
                description="英語で授業を理解し、積極的に参加するための基礎英語力を事前に構築"
                className="bg-blue-50 border-blue-200"
                hover={false}
              />
              <FeatureCard
                icon={<FileText className="w-6 h-6 text-green-600" />}
                title="レポート・発表スキル"
                description="現地で求められるアカデミックライティングと口頭発表の技術を習得"
                className="bg-green-50 border-green-200"
                hover={false}
              />
              <FeatureCard
                icon={<Users2 className="w-6 h-6 text-yellow-600" />}
                title="コミュニケーション力"
                description="現地の人と関係を築き、留学生活を充実させる実践的な英語力"
                className="bg-yellow-50 border-yellow-200"
                hover={false}
              />
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* Engrowthのサポート内容 */}
      <SectionSeparator background="white" id="support-details">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Engrowthの学生向けサポート
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
              留学経験者だからこそ分かる、現地で本当に必要なスキルを、3つの柱で重点的にサポートします。
            </p>
          </div>
          <div className="w-full max-w-4xl mx-auto">
            <Tabs defaultValue="practical" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-blue-100/60 p-1 rounded-xl">
                <TabsTrigger
                  value="practical"
                  className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md rounded-lg"
                >
                  実践指導
                </TabsTrigger>
                <TabsTrigger
                  value="essay"
                  className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md rounded-lg"
                >
                  エッセイ指導
                </TabsTrigger>
                <TabsTrigger
                  value="career"
                  className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md rounded-lg"
                >
                  キャリア支援
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="practical"
                className="mt-6 p-6 bg-blue-50/50 rounded-xl"
              >
                <ServiceCard
                  icon={<BookOpen className="w-8 h-8 text-blue-600" />}
                  title="留学経験者による実践指導"
                  description="ただの英語学習じゃない。現地での生活、授業、友人作りまで見据えた「本当に使える」スキルを、留学経験者のコンサルタントが伝授します。"
                  features={[
                    '教科書にはない「リアルな」現地情報',
                    '授業で発言するためのリスニング＆スピーキング術',
                    '異文化理解とコミュニケーションのコツ',
                    '留学経験者が語る成功・失敗談',
                  ]}
                  hover={false}
                  className="shadow-none border-none bg-transparent p-0"
                />
              </TabsContent>
              <TabsContent
                value="essay"
                className="mt-6 p-6 bg-blue-50/50 rounded-xl"
              >
                <ServiceCard
                  icon={<FileText className="w-8 h-8 text-green-600" />}
                  title="A評価を目指すエッセイ指導"
                  description="英語圏の大学で求められる論理構成（主張→論証）を基礎から指導。テーマ設定から表現添削まで、質の高いレポート作成をサポートします。"
                  features={[
                    '高評価を得るためのアカデミックライティング',
                    '説得力のある論点整理と構成術',
                    'ネイティブに伝わる自然な表現添削',
                    '盗用（Plagiarism）を避ける引用作法',
                  ]}
                  hover={false}
                  className="shadow-none border-none bg-transparent p-0"
                />
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-center font-semibold text-red-600 mb-2">
                      Before
                    </p>
                    <Image
                      src="/images/diagrams/essay-before.png"
                      alt="添削前のエッセイ"
                      width={400}
                      height={300}
                      className="rounded-lg border"
                    />
                  </div>
                  <div>
                    <p className="text-center font-semibold text-green-600 mb-2">
                      After
                    </p>
                    <Image
                      src="/images/diagrams/essay-after.png"
                      alt="添削後のエッセイ"
                      width={400}
                      height={300}
                      className="rounded-lg border border-green-500"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="career"
                className="mt-6 p-6 bg-blue-50/50 rounded-xl"
              >
                <ServiceCard
                  icon={<Briefcase className="w-8 h-8 text-yellow-600" />}
                  title="留学後を見据えたキャリア支援"
                  description="留学を「楽しかった」で終わらせず、あなたの資産に変える。自己分析から就職活動まで、英語力を活かした未来を一緒に描きます。"
                  features={[
                    '留学体験を価値に変える自己分析',
                    'ガクチカに書けるポートフォリオ作成',
                    '教える側へのステップアップ支援',
                    '英語力を維持・向上させる仕組み作り',
                  ]}
                  hover={false}
                  className="shadow-none border-none bg-transparent p-0"
                />
              </TabsContent>
            </Tabs>
          </div>
        </Container>
      </SectionSeparator>

      {/* 成長タイムライン */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Engrowthと描く、留学の成功ロードマップ
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              出発前から帰国後まで、一貫したサポートであなたの成長を最大化します。
            </p>
          </div>
          <Timeline
            steps={[
              {
                id: 'before',
                title: '留学前：徹底準備',
                description:
                  '基礎英語力と専門分野の語彙を固め、自信を持って留学をスタート。',
                status: 'current',
                icon: <GraduationCap />,
              },
              {
                id: 'during',
                title: '留学中：実践と挑戦',
                description:
                  '授業や現地生活で英語を実践。定期的な面談で課題を即解決。',
                status: 'upcoming',
                icon: <BookOpen />,
              },
              {
                id: 'after',
                title: '留学後：経験の価値化',
                description:
                  '留学経験をキャリアに繋げる。英語力を維持・向上させ、教える側へ。',
                status: 'upcoming',
                icon: <TrendingUp />,
              },
            ]}
            orientation="horizontal"
            className="timeline-student"
          />
        </Container>
      </SectionSeparator>

      {/* 留学経験者による指導の安心感 */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              同じ道を歩んだ先輩から学ぶ、安心感と実効性
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              Engrowthのコンサルタントは全員が留学経験者。
              <br />
              あなたの不安や目標に、誰よりも共感し、的確なアドバイスを届けます。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="私も最初は授業についていけず、悔しい思いをしました。その経験があるからこそ、伝えられることがあります。"
              author="田中 歩"
              role="コンサルタント (アメリカ留学)"
              avatar="/images/team/avatar1.jpg"
              isBubble
            />
            <TestimonialCard
              quote="現地の友人作りには、ちょっとしたコツが要ります。教科書には載っていない、リアルなコミュニケーション術を教えます。"
              author="佐藤 花"
              role="コンサルタント (イギリス留学)"
              avatar="/images/team/avatar2.jpg"
              isBubble
            />
            <TestimonialCard
              quote="エッセイの評価は、構成が9割。ネイティブに評価される『型』を身につければ、驚くほど筆が進みますよ。"
              author="鈴木 健"
              role="コンサルタント (カナダ留学)"
              avatar="/images/team/avatar3.jpg"
              isBubble
            />
          </div>
        </Container>
      </SectionSeparator>

      {/* 保護者の方へ */}
      <SectionSeparator background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              保護者の皆様へ
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              大切なお子様の留学を、実りあるものにするために。
              <br />
              Engrowthが、なぜ出発前の準備を重視するのかご説明いたします。
            </p>
          </div>

          <div className="bg-blue-50 p-8 md:p-12 rounded-xl">
            <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-6 text-center">
              なぜ今、出発前の準備が重要なのか？
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-lg text-neutral-900 mb-3">
                  成果の最大化
                </h4>
                <p className="text-neutral-700">
                  留学は「行くこと」ではなく「成果を得ること」が目的。事前準備により学習効果が大幅に向上します。
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-lg text-neutral-900 mb-3">
                  時間の有効活用
                </h4>
                <p className="text-neutral-700">
                  最初の数ヶ月を基礎学習で終わらせるのではなく、より高度な学習・体験に時間を使えます。
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-lg text-neutral-900 mb-3">
                  安心感の提供
                </h4>
                <p className="text-neutral-700">
                  英語への不安を解消し、自信を持って現地生活をスタートできる状態を作ります。
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 料金・おすすめ対象者 */}
      <SectionSeparator background="surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* 料金・サポート例 */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
                料金・サポート例
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                    基本プラン
                  </h3>
                  <div className="space-y-2 text-neutral-700">
                    <p>・週2回／60分 Zoomセッション</p>
                    <p>・LINE・チャットでのフォロー付き</p>
                    <p>・レポート添削・英作文フィードバック付き</p>
                  </div>
                  <p className="text-sm text-neutral-600 mt-4">
                    ※ 料金は相談ベースで調整可能
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="font-semibold text-lg text-blue-800 mb-3">
                    追加オプション
                  </h3>
                  <div className="space-y-2 text-neutral-700">
                    <p>・留学中の継続サポート</p>
                    <p>・帰国後のキャリア相談</p>
                    <p>・教える側へのステップアップ支援</p>
                  </div>
                </div>
              </div>
            </div>

            {/* おすすめ対象者 */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
                こんな方におすすめです
              </h2>
              <div className="space-y-4">
                {[
                  '留学予定だけど英語に不安がある',
                  '英語でレポートや発表を求められる予定がある',
                  '留学前に「現地で使える英語」を整えておきたい',
                  '留学経験者のリアルなアドバイスが欲しい',
                  '留学後も英語力を維持・活用したい',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 text-lg">✓</span>
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 循環システムへの参加 */}
      <SectionSeparator background="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              留学だけじゃない、その先のキャリアへ
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
              Engrowthでは、教わる側から教える側へまわる
              <strong>循環の仕組み</strong>があります。
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <Timeline
              steps={[
                {
                  id: 'step1',
                  title: '教える側へのステップアップ',
                  description:
                    '自分の英語経験を、他の誰かの学びに還元。英語を「使える力」から「伝える力」に昇華させます。',
                  icon: <Users className="w-6 h-6" />,
                  status: 'upcoming',
                },
                {
                  id: 'step2',
                  title: '経済的自立のサポート',
                  description:
                    '英語指導を通じた収入機会を提供。学習と並行して社会経験も積むことが可能です。',
                  icon: <Briefcase className="w-6 h-6" />,
                  status: 'upcoming',
                },
                {
                  id: 'step3',
                  title: 'キャリアモデルの提供',
                  description:
                    '英語を活かした多様なキャリアパスを提示。社会接続につながる成長機会を創出します。',
                  icon: <TrendingUp className="w-6 h-6" />,
                  status: 'upcoming',
                },
              ]}
              orientation="vertical"
              className="timeline-student"
            />
          </div>
        </Container>
      </SectionSeparator>

      {/* CTA Section */}
      <SectionSeparator background="neutral-900" className="text-white">
        <Container>
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              あなたの可能性を、英語で解き放つ準備を。
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              少しでも不安や興味があれば、まずは気軽に話してみませんか？
              <br />
              学生ご本人でも、保護者の方とご一緒でも大歓迎です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton size="lg" asChild>
                <a href="/contact">無料カウンセリングを予約</a>
              </CTAButton>
              <CTAButton variant="outline" size="lg" asChild>
                <Link href="/faq">よくある質問を見る</Link>
              </CTAButton>
            </div>
          </div>
        </Container>
      </SectionSeparator>
    </LayoutWrapper>
  )
}
