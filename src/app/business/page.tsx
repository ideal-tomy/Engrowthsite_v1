import type { Metadata } from 'next'
import Link from 'next/link'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { HeroSection } from '@/components/sections/hero-section'
import {
  FeatureCard,
  ServiceCard,
  StatsCard,
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
} from 'lucide-react'

export const metadata: Metadata = {
  title:
    'ビジネス向けサービス | Engrowth - 忙しい社会人のための英語コンサルティング',
  description:
    '挫折経験のある社会人の方へ。科学的メソッドに基づく集中型プログラムで、忙しくても続けられる英語習得をサポートします。',
}

export default function BusinessPage() {
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
          text: '無料診断を受ける',
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
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                「現地に行かないとネイティブレベルにはなれない」はもう過去の話
              </h2>
              <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                <p>多くの人が、こう思い込んでいませんか？</p>
                <div className="bg-white p-6 rounded-xl border-l-4 border-primary">
                  <ul className="space-y-2 text-neutral-600">
                    <li>「発音はネイティブに囲まれないと無理」</li>
                    <li>「海外生活しないとリアルな英語は身につかない」</li>
                    <li>「英語力＝留学経験の有無」</li>
                  </ul>
                </div>
                <p className="font-semibold text-primary">
                  Engrowthは、こうした「英語習得の思い込み」を根本から覆します。
                </p>
              </div>
            </div>
            <div className="space-y-6">
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
              number="10倍"
              label="アクセス可能な情報量"
              description="英語により世界中の知識・データにアクセス"
            />
            <StatsCard
              number="50億人"
              label="コミュニケーション対象"
              description="英語話者との直接的な対話が可能"
            />
            <StatsCard
              number="3倍"
              label="ビジネス機会の拡大"
              description="海外展開・採用・資金調達の選択肢"
            />
            <StatsCard
              number="即座"
              label="意思決定スピード"
              description="通訳を介さない直接対話で信頼構築"
            />
          </div>
        </Container>
      </SectionSeparator>

      {/* 経営者向けメリット */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              経営者にとってのメリット
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* 対象者 */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
                こんな方に最適です
              </h2>
              <div className="space-y-4">
                {[
                  '英語を学びたいが時間が取れない',
                  'TOEICは取ったけど、話せない・伝えられない',
                  '仕事の実務で英語が必要になった（会議・資料作成・面接）',
                  '海外顧客・外国人部下とのコミュニケーションに困っている',
                  '英語の学び方そのものがわからない',
                  '経営者として英語でプレゼン・交渉する機会が増えてきた',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-lg">✓</span>
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* サービス概要 */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
                サービス概要（例）
              </h2>
              <div className="space-y-6">
                <div className="bg-surface p-6 rounded-xl">
                  <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                    プランA
                  </h3>
                  <p className="text-neutral-700">
                    平日30分×毎日＋週1セッション（LINE＋Zoom）
                  </p>
                </div>
                <div className="bg-surface p-6 rounded-xl">
                  <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                    プランB
                  </h3>
                  <p className="text-neutral-700">
                    週末集中型：90分セッション＋自己学習支援
                  </p>
                </div>
                <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                  <h3 className="font-semibold text-lg text-primary mb-2">
                    プランC
                  </h3>
                  <p className="text-neutral-700">
                    エグゼクティブ特別プラン（完全カスタム）
                  </p>
                </div>
              </div>
              <p className="text-sm text-neutral-600 mt-6">
                ※ 料金や形式は柔軟に相談可能です
              </p>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* CTA Section */}
      <SectionSeparator background="neutral-900" className="text-white">
        <Container>
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              まずは、無料診断からはじめませんか？
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              「英語が必要かどうかまだ決めかねている」「どこまで話せるようになればいいかわからない」
              <br />
              そんな方でもOKです。Engrowthでは、目標の整理から一緒に伴走します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton size="lg" asChild>
                <a href="/contact">無料相談はこちら</a>
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
