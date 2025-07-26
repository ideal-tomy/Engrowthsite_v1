import type { Metadata } from 'next'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { HeroSection } from '@/components/sections/hero-section'
import { FeatureCard, ServiceCard } from '@/components/ui/card-components'
import { Container } from '@/components/layout/container'
import { SectionSeparator } from '@/components/ui/section-dividers'
import { CTAButton } from '@/components/ui/cta-button'
import { GraduationCap, BookOpen, Users, Heart, TrendingUp, MessageCircle, FileText, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: '学生向けサービス | Engrowth - 留学前準備と実践的な英語学習',
  description: '留学を成功体験にするための事前準備。留学経験者による実践英語サポートとエッセイ指導で、現地で本当に使える英語力を身につけましょう。',
}

export default function StudentsPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            留学を<span className="text-primary">成功体験</span>にするために
            <br />
            今、準備をはじめよう
          </>
        }
        subtitle="留学してから「わからない」で止まるのはもったいない。出発前に英語を整えておけば、留学の質は何倍にも跳ね上がります。"
        description="英語で授業を理解し、レポートを書き、現地の人と関係を築くための「最低限の土台」を、留学経験者と一緒に作り上げましょう。"
        primaryCTA={{
          text: '無料相談を受ける',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'サポート詳細',
          href: '#support-details'
        }}
      />

      {/* なぜ今、事前習得が必要か */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              なぜ今、学生に英語の事前習得が必要か？
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              留学は「行くこと」ではなく「成果を得ること」が本当の目的。<br />
              事前準備こそが、留学を成功体験に変える最も重要な要素です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<GraduationCap className="w-6 h-6" />}
              title="授業理解の土台作り"
              description="英語で授業を理解し、積極的に参加するための基礎英語力を事前に構築"
              accent
            />
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="レポート・発表スキル"
              description="現地で求められるアカデミックライティングと口頭発表の技術を習得"
              accent
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="コミュニケーション力"
              description="現地の人と関係を築き、留学生活を充実させる実践的な英語力"
              accent
            />
          </div>

          <div className="mt-12 text-center">
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">
                英語ができないまま出発すると...
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                最初の数ヶ月を「聞き取れない」「伝わらない」で終わってしまい、<br />
                せっかくの留学期間がもったいないことに。
              </p>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* Engrowthのサポート内容 */}
      <SectionSeparator background="white" id="support-details">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Engrowthのサポート内容（学生向け）
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
              留学経験者だからこそ分かる、現地で本当に必要なスキルを重点的にサポートします。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="留学経験者による実践英語"
              description="現地で実際に使われる英語・生活で困る表現・交渉などを中心に指導。授業の聞き方、スライドの読み取り、口頭発表のコツも習得。"
              features={[
                '現地で使われる実践英語',
                '授業の効果的な聞き方',
                '口頭発表・プレゼンテーション',
                '留学先の文化・失敗例の共有'
              ]}
              ctaText="実践英語を学ぶ"
              ctaHref="/contact"
            />
            <ServiceCard
              title="レポート・エッセイ指導"
              description="英語圏の「主張・論証スタイル」に沿った構成法を指導。テーマ設定から表現添削まで、提出課題のクオリティを向上。"
              features={[
                'アカデミックライティング',
                'テーマ設定・論点整理',
                '構成チェック・表現添削',
                '読まれる文章の書き方'
              ]}
              ctaText="ライティングを強化"
              ctaHref="/contact"
              popular
            />
            <ServiceCard
              title="留学中・後のキャリア支援"
              description="留学を「価値化」する方法から、収入を得ながら英語力を維持する仕組みまで。教える側へのステップアップもサポート。"
              features={[
                '留学体験の価値化',
                'ポートフォリオ作成',
                '教える側へのステップアップ',
                '英語力維持の仕組み化'
              ]}
              ctaText="キャリア相談"
              ctaHref="/contact"
            />
          </div>
        </Container>
      </SectionSeparator>

      {/* 留学経験者による指導の安心感 */}
      <SectionSeparator background="surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                留学経験者に教わることの安心感と実効性
              </h2>
              <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                <p>
                  Engrowthのコンサルタントは全員が<strong>留学を通じて英語を実践的に使ってきた人たち</strong>です。
                </p>
                <div className="bg-white p-6 rounded-xl border-l-4 border-primary">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Heart className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span>TOEFL/IELTSの点数ではなく、実際に「伝える」「書く」「乗り越える」経験</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span>誰もが英語で苦しんだ経験があるからこそ、共感と実効性のある指導</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span>日本語でのフォローも含めて「寄り添うプロ」が支援</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <FeatureCard
                icon={<BookOpen className="w-6 h-6" />}
                title="実体験に基づく指導"
                description="テキストブックの英語ではなく、実際に現地で使った・困った・成功した経験に基づく実践的な指導"
              />
              <FeatureCard
                icon={<MessageCircle className="w-6 h-6" />}
                title="24時間LINEサポート"
                description="留学準備中の不安や疑問にリアルタイムで対応。現地到着後も継続的なサポートが可能"
              />
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 保護者の方へ */}
      <SectionSeparator background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              保護者の方へ
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              お子様の留学を成功体験にするために、なぜ出発前の準備が重要なのかをご説明いたします。
            </p>
          </div>

          <div className="bg-surface p-8 md:p-12 rounded-xl">
            <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-6 text-center">
              なぜ今、出発前の準備が重要なのか？
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg text-neutral-900 mb-3">成果の最大化</h4>
                <p className="text-neutral-700">
                  留学は「行くこと」ではなく「成果を得ること」が目的。事前準備により学習効果が大幅に向上します。
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg text-neutral-900 mb-3">時間の有効活用</h4>
                <p className="text-neutral-700">
                  最初の数ヶ月を基礎学習で終わらせるのではなく、より高度な学習・体験に時間を使えます。
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg text-neutral-900 mb-3">安心感の提供</h4>
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
                  <h3 className="font-semibold text-lg text-neutral-900 mb-3">基本プラン</h3>
                  <div className="space-y-2 text-neutral-700">
                    <p>・週2回／60分 Zoomセッション</p>
                    <p>・LINE・チャットでのフォロー付き</p>
                    <p>・レポート添削・英作文フィードバック付き</p>
                  </div>
                  <p className="text-sm text-neutral-600 mt-4">
                    ※ 料金は相談ベースで調整可能
                  </p>
                </div>
                <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                  <h3 className="font-semibold text-lg text-primary mb-3">追加オプション</h3>
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
                  '留学後も英語力を維持・活用したい'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-lg">✓</span>
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
              Engrowthでは、教わる側から教える側へまわる<strong>循環の仕組み</strong>があります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="教える側へのステップアップ"
              description="自分の英語経験を、他の誰かの学びに還元。英語を「使える力」から「伝える力」に昇華"
            />
            <FeatureCard
              icon={<Briefcase className="w-6 h-6" />}
              title="経済的自立のサポート"
              description="英語指導を通じた収入機会の提供。学習と並行して社会経験も積むことが可能"
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="キャリアモデルの提供"
              description="英語を活かした多様なキャリアパスを提示。社会接続につながる成長機会"
            />
          </div>
        </Container>
      </SectionSeparator>

      {/* CTA Section */}
      <SectionSeparator background="neutral-900" className="text-white">
        <Container>
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              まずは話してみませんか？
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              学生本人でも、保護者の方でもOK。<br />
              今の英語力や不安な点をもとに、無料で相談・診断できます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton size="lg" asChild>
                <a href="/contact">無料相談はこちら</a>
              </CTAButton>
              <CTAButton variant="outline" size="lg" asChild>
                <a href="/">トップページに戻る</a>
              </CTAButton>
            </div>
          </div>
        </Container>
      </SectionSeparator>
    </LayoutWrapper>
  )
} 