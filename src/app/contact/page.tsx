import type { Metadata } from 'next'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { HeroSection } from '@/components/sections/hero-section'
import { FeatureCard } from '@/components/ui/card-components'
import { Container } from '@/components/layout/container'
import { SectionSeparator } from '@/components/ui/section-dividers'
import { CTAButton } from '@/components/ui/cta-button'
import {
  Mail,
  MessageCircle,
  Clock,
  Users,
  Shield,
  ExternalLink,
} from 'lucide-react'
import { ContactForm } from '@/components/ui/contact-form'

export const metadata: Metadata = {
  title: 'お問い合わせ | Engrowth - 無料相談・LINE相談受付中',
  description:
    'Engrowthへのお問い合わせ・ご相談はこちらから。LINE相談、メール相談、無料面談など、お気軽にご連絡ください。',
}

export default function ContactPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            まずは<span className="text-primary">お気軽に</span>
            <br />
            ご相談ください
          </>
        }
        subtitle="無料相談・LINE相談受付中"
        description="英語学習の悩み、目標設定、プラン相談など、どんなことでもお気軽にお声がけください。強引な営業は一切いたしません。"
        primaryCTA={{
          text: 'LINE で相談',
          href: '#line-contact',
        }}
        secondaryCTA={{
          text: 'メールで相談',
          href: '#email-contact',
        }}
      />

      {/* お問い合わせ方法選択 */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              お問い合わせ方法をお選びください
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
              ご質問の内容や緊急度に応じて、最適な連絡方法をお選びいただけます。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* LINE相談 */}
            <div
              id="line-contact"
              className="bg-white p-8 rounded-xl shadow-sm border border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-3">
                  LINE でのご相談
                </h3>
                <p className="text-neutral-700">
                  すぐにちょっと聞いてみたい、という方におすすめです！
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">
                      即座に質問可能
                    </span>
                    <p className="text-sm text-neutral-600">
                      登録後すぐにチャットでご相談いただけます
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">
                      気軽な相談に最適
                    </span>
                    <p className="text-sm text-neutral-600">
                      簡単な質問や学習相談におすすめ
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">
                      レスポンス良好
                    </span>
                    <p className="text-sm text-neutral-600">
                      営業時間内であれば迅速に回答いたします
                    </p>
                  </div>
                </div>
              </div>

              <CTAButton
                asChild
                className="w-full bg-green-500 hover:bg-green-600"
              >
                <a
                  href="https://lin.ee/your-line-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Engrowth公式LINEに登録
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </CTAButton>
            </div>

            {/* メール相談 */}
            <div
              id="email-contact"
              className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-3">
                  メールでのお問い合わせ
                </h3>
                <p className="text-neutral-700">
                  詳細な相談や導入目的がある場合に適しています
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">
                      詳細な相談
                    </span>
                    <p className="text-sm text-neutral-600">
                      具体的な学習計画やプラン相談に最適
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">
                      正式なお問い合わせ
                    </span>
                    <p className="text-sm text-neutral-600">
                      企業様や正式な導入相談に適しています
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">
                      丁寧な回答
                    </span>
                    <p className="text-sm text-neutral-600">
                      詳細にわたって丁寧にお答えいたします
                    </p>
                  </div>
                </div>
              </div>

              <CTAButton
                asChild
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <a href="mailto:info@engrowth.jp">
                  <Mail className="w-5 h-5 mr-2" />
                  info@engrowth.jp
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </CTAButton>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* よくある質問のきっかけ */}
      <SectionSeparator background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              よくあるご質問
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
              お問い合わせ前に、こちらもご確認ください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="料金について"
              description="料金体系、支払い方法、期間別割引など、費用に関するご質問"
            />
            <FeatureCard
              title="学習内容について"
              description="カリキュラム、学習方法、サポート内容など、サービスの詳細"
            />
            <FeatureCard
              title="受講の流れ"
              description="申し込みから開始まで、受講期間中のサポート体制について"
            />
          </div>

          <div className="text-center mt-12">
            <CTAButton variant="outline" asChild>
              <a href="/faq">よくある質問一覧を見る</a>
            </CTAButton>
          </div>
        </Container>
      </SectionSeparator>

      {/* 注意事項 */}
      <SectionSeparator background="surface">
        <Container>
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border">
            <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-8 text-center">
              ご注意・お約束
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                  回答時間について
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  ご返信までに1日〜2日ほどお時間を頂く場合がございます。お急ぎの場合はLINEをご利用ください。
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                  営業について
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  <strong>強引な営業は一切いたしません。</strong>
                  安心してご相談ください。あなたのペースに合わせてご案内いたします。
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                  相談は完全無料
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  ご相談、診断、プラン提案まで完全無料です。まずはお気軽にお声がけください。
                </p>
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
              あなたの英語学習の第一歩を、私たちと一緒に
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              どんな小さな疑問でも構いません。
              <br />
              英語学習のプロが、あなたの状況に合わせて親身にお答えいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton size="lg" asChild>
                <a
                  href="https://lin.ee/your-line-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  今すぐLINEで相談
                </a>
              </CTAButton>
              <CTAButton variant="outline" size="lg" asChild>
                <a href="mailto:info@engrowth.jp">
                  <Mail className="w-5 h-5 mr-2" />
                  メールで相談
                </a>
              </CTAButton>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* Contact Form */}
      <SectionSeparator background="surface">
        <Container>
          <ContactForm showMethods={false} />
        </Container>
      </SectionSeparator>
    </LayoutWrapper>
  )
}
