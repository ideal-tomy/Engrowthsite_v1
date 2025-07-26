import type { Metadata } from 'next'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { HeroSection } from '@/components/sections/hero-section'
import { Container } from '@/components/layout/container'
import { SectionSeparator } from '@/components/ui/section-dividers'
import { CTAButton } from '@/components/ui/cta-button'
import { CategoryNav } from '@/components/ui/category-nav'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { MessageCircle, BookOpen, Clock, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'よくある質問 | Engrowth - FAQ・サービス詳細',
  description:
    'Engrowthサービスに関するよくある質問にお答えします。学習期間、受講方法、コンサルタント、教材など、気になる点を解決。',
}

export default function FAQPage() {
  const faqData = [
    {
      id: 'program-features',
      question: 'プログラムの特徴を教えてください',
      answer:
        '第二言語習得理論に基づいた科学的アプローチと、AI技術を活用した独自の学習メソッドを採用しています。実践経験豊富な日本人コンサルタントが、あなたの学習を90日間伴走サポートいたします。',
      category: 'program',
    },
    {
      id: 'learning-period',
      question: '学習期間はどのくらいですか？',
      answer:
        '標準的なプログラムは3ヶ月（90日間）ですが、目標や現在の英語力に応じて6ヶ月、12ヶ月プランも選択可能です。継続学習により、より確実な成果を実感していただけます。',
      category: 'program',
    },
    {
      id: 'online-learning',
      question: 'オンラインでの受講は可能ですか？',
      answer:
        'はい、すべてのプログラムを完全オンラインで受講いただけます。ZoomとLINEを活用したハイブリッドサポートにより、場所を選ばず効果的な学習が可能です。',
      category: 'system',
    },
    {
      id: 'daily-study-time',
      question: '1日の学習時間は何分ほど必要ですか？',
      answer:
        '1日の学習時間は約3時間を目標に設定していますが、お忙しい方には短時間でも効果的な学習方法をご提案いたします。重要なのは継続性です。',
      category: 'study',
    },
    {
      id: 'materials-format',
      question: 'Duo 3.0 + Kindleでの購入をしていいですか？',
      answer:
        'ペーパーブック（紙の本）での購入をお願いしております。手で書く、めくるなどの物理的なアクションが記憶定着に重要な役割を果たすためです。',
      category: 'materials',
    },
    {
      id: 'consultant-background',
      question: 'どのような経歴のコンサルタントが在籍していますか？',
      answer:
        '海外の名門大学出身で、実践的な英語力を持つ多様な人材が在籍しています。全員が第二言語として英語を習得した日本人であり、学習者の気持ちを深く理解できます。',
      category: 'consultant',
    },
    {
      id: 'consultant-matching',
      question: 'コンサルタントとのマッチングはどのように行われますか？',
      answer:
        '以下の要素を総合的に考慮して、最適なコンサルタントを選定いたします：\n• 目標とする英語力\n• 現在のレベル\n• 予定学習時間\n• 性格や学び方の傾向\n\n初回面談でお聞きした内容を基に、あなたに最も適したコンサルタントをご紹介いたします。',
      category: 'consultant',
    },
    {
      id: 'beginner-friendly',
      question:
        '英語学習から長く離れていますが、初心者からのスタートでも問題ありませんか？',
      answer:
        'はい、安心してスタートいただけます。基礎からしっかりと学べるカリキュラムを用意しており、一人ひとりの現在のレベルに合わせてプランを設計いたします。初心者の方も多数ご受講いただいています。',
      category: 'level',
    },
    {
      id: 'materials-purchase',
      question: '教材購入は別途必要ですか？',
      answer:
        'はい、必要な教材は別途、個別で購入をお願いしております。受講前の面談で、あなたの目標とレベルに最適な教材をご提案いたします。教材費は月額3,000円〜8,000円程度を目安にお考えください。',
      category: 'materials',
    },
  ]

  const categories = [
    { id: 'program', name: 'プログラム内容', iconName: 'BookOpen' },
    { id: 'system', name: '受講システム', iconName: 'Target' },
    { id: 'study', name: '学習について', iconName: 'Clock' },
    { id: 'consultant', name: 'コンサルタント', iconName: 'Users' },
    { id: 'materials', name: '教材・費用', iconName: 'HelpCircle' },
    { id: 'level', name: 'レベル・対象', iconName: 'BookOpen' },
  ]

  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            よくある質問
            <br />
            <span className="text-primary">FAQ</span>
          </>
        }
        subtitle="Engrowthサービスに関する疑問にお答えします"
        description="学習期間、受講方法、コンサルタント、教材など、皆様からよくいただくご質問をまとめました。こちらで解決しない場合は、お気軽にお問い合わせください。"
        primaryCTA={{
          text: 'LINE で質問する',
          href: '/contact',
        }}
        secondaryCTA={{
          text: '無料相談を申し込む',
          href: '/contact',
        }}
      />

      {/* カテゴリ一覧 */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              カテゴリ別 FAQ
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
              知りたい情報のカテゴリを選んで、該当する質問をご確認ください。
            </p>
          </div>

          <CategoryNav categories={categories} />
        </Container>
      </SectionSeparator>

      {/* FAQ アコーディオン */}
      <SectionSeparator background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              よくある質問と回答
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-white border border-neutral-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
                  id={`category-${faq.category}`}
                >
                  <AccordionTrigger className="py-6 text-left hover:no-underline">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg md:text-xl font-semibold text-neutral-900 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <div className="ml-12 pr-4">
                      <div className="text-neutral-700 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </SectionSeparator>

      {/* 追加質問のCTA */}
      <SectionSeparator background="surface">
        <Container>
          <div className="text-center">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
                他にご質問はありませんか？
              </h2>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                こちらに掲載されていない質問や、より詳しい内容について知りたい場合は、
                <br />
                お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton size="lg" asChild>
                  <a href="/contact">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    LINEで質問する
                  </a>
                </CTAButton>
                <CTAButton variant="outline" size="lg" asChild>
                  <a href="/contact">無料相談を申し込む</a>
                </CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </SectionSeparator>

      {/* 関連ページへの誘導 */}
      <SectionSeparator background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              さらに詳しく知りたい方へ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                学習メソッド
              </h3>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                科学的根拠に基づく学習メソッドの詳細をご確認いただけます
              </p>
              <CTAButton
                variant="secondary"
                asChild
                className="bg-blue-600 hover:bg-blue-700"
              >
                <a href="/method">詳細を見る</a>
              </CTAButton>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                料金プラン
              </h3>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                期間別の料金と割引システムの詳細をご確認いただけます
              </p>
              <CTAButton
                variant="secondary"
                asChild
                className="bg-green-600 hover:bg-green-700"
              >
                <a href="/pricing">詳細を見る</a>
              </CTAButton>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-4">
                受講の流れ
              </h3>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                LINE登録から90日サポート開始までの詳細な流れをご紹介
              </p>
              <CTAButton
                variant="secondary"
                asChild
                className="bg-purple-600 hover:bg-purple-700"
              >
                <a href="/flow">詳細を見る</a>
              </CTAButton>
            </div>
          </div>
        </Container>
      </SectionSeparator>
    </LayoutWrapper>
  )
}
