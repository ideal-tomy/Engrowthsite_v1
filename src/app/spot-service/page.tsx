import type { Metadata } from 'next'
import Link from 'next/link'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { HeroSection } from '@/components/sections/hero-section'
import { FeatureCard } from '@/components/ui/card-components'
import { Container } from '@/components/layout/container'
import { SectionSeparator } from '@/components/ui/section-dividers'
import { CTAButton } from '@/components/ui/cta-button'
import {
  Briefcase,
  GraduationCap,
  Mic,
  FileText,
  Eye,
  Plane,
  MapPin,
  Home,
  MessageCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'スポットサービス | Engrowth - 必要な時に必要なだけ英語サポート',
  description:
    '継続的なコンサルティングとは別に、単発で専門的な英語サポートを提供。会議通訳、資料作成、留学サポートなど、あなたのニーズに合わせたスポットサービス。',
}

export default function SpotServicePage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            必要な時に、
            <span className="text-primary">必要なだけ</span>
            <br />
            専門サポートを
          </>
        }
        subtitle="単発の英語サポートでビジネスチャンスを逃さない"
        description="「この会議だけ通訳が欲しい」「留学の相談に乗ってほしい」そんな声にお応えします。継続的なコンサルティングは不要だけれど、専門的なサポートが必要な時に、Engrowthがお手伝いします。"
        primaryCTA={{
          text: 'サービスについて問い合わせる',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'サービス詳細を見る',
          href: '#services',
        }}
      />

      {/* ビジネス向けサービス */}
      <SectionSeparator background="surface" id="services">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
              <Briefcase className="w-8 h-8 text-slate-700" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              ビジネス向けスポットサービス
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              重要な会議や資料作成で一時的な英語サポートが必要な時に。
              プロフェッショナルな対応で、あなたのビジネスチャンスを確実に掴みます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Mic className="w-6 h-6" />}
              title="通訳・会議同席"
              description="オンライン会議でのリアルタイム通訳。議事録作成、会議内容の要約・擦り合わせもオプションで対応いたします。"
              accent
            />
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="資料作成・翻訳サポート"
              description="海外向け資料の翻訳、ヒアリングシート等の記入補助。ビジネス英語の専門性を活かした高品質な仕上がりをお約束します。"
              accent
            />
            <FeatureCard
              icon={<Eye className="w-6 h-6" />}
              title="会議オブザーバー"
              description="会議に同席し、客観的な視点でフィードバックや改善点をレポート。第三者の目線で、より良いコミュニケーションを実現します。"
              accent
            />
          </div>

          <div className="mt-12 text-center">
            <div className="bg-slate-50 p-8 rounded-xl max-w-4xl mx-auto">
              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                ビジネス向けサービスの特長
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-700">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>海外トップ大学・実務経験豊富なプロが対応</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>24時間以内の迅速なレスポンス</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>業界特化の専門用語にも対応</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>機密保持契約（NDA）完全対応</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 学生向けサービス */}
      <SectionSeparator background="white">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              学生向けスポットサービス
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              留学という人生の大きな決断を、信頼できる専門家がサポート。
              提携する留学サポート業者と連携し、あなたの夢を実現します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <FeatureCard
              icon={<Plane className="w-6 h-6" />}
              title="出願サポート"
              description="志望校選定から必要書類の準備、エッセイ添削まで。留学のプロが一貫してサポートし、合格までの道のりを確実にガイドします。"
              accent
            />
            <FeatureCard
              icon={<MapPin className="w-6 h-6" />}
              title="留学先学校見学コンサルティング及び同行"
              description="現地の学校見学から住環境の確認まで。実際に現地を訪れることで、最適な留学先選択をサポートします。"
              accent
            />
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 p-8 rounded-xl max-w-4xl mx-auto">
              <h3 className="font-serif text-xl font-bold text-blue-900 mb-4">
                提携留学サポート業者について
              </h3>
              <p className="text-blue-800 leading-relaxed mb-6">
                Engrowthが厳選した信頼できる留学サポート業者と提携。
                豊富な実績と専門知識を持つプロフェッショナルが、あなたの留学成功をバックアップします。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-blue-700">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>10年以上の留学サポート実績</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>現地スタッフによる24時間サポート</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>アメリカ・イギリス・カナダ・オーストラリア対応</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>奨学金申請サポートも充実</span>
                </div>
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
              まずはお気軽にご相談ください
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              「こんなことでも頼めるだろうか？」といったご質問も大歓迎です。
              <br />
              あなたの状況に合わせて最適なサポートを提案します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <CTAButton size="lg" asChild>
                <Link href="/contact">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  無料相談はこちら
                </Link>
              </CTAButton>
              <CTAButton variant="outline" size="lg" asChild>
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  トップページに戻る
                </Link>
              </CTAButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">気軽にご相談</h3>
                <p className="text-sm text-neutral-400">
                  どんな小さなことでもお気軽にお問い合わせください。
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">プロの視点</h3>
                <p className="text-sm text-neutral-400">
                  専門知識を持ったプロが客観的にサポートします。
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">柔軟な対応</h3>
                <p className="text-sm text-neutral-400">
                  あなたのニーズに合わせて柔軟にサービスを提供します。
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionSeparator>
    </LayoutWrapper>
  )
}
