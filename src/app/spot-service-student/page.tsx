import type { Metadata } from 'next'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'
import { HeroSection } from '@/components/sections/hero-section'
import { Container } from '@/components/layout/container'
import { SectionSeparator } from '@/components/ui/section-dividers'
import { CTAButton } from '@/components/ui/cta-button'
import {
  GraduationCap,
  Plane,
  MapPin,
  FileText,
  Users,
  MessageCircle,
  Award,
  Clock,
  Heart,
  BookOpen,
  CheckCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'スポットサービス（学生）| Engrowth - 留学成功のための専門サポート',
  description:
    '学生向け留学サポートサービス。出願支援、学校見学同行、エッセイ添削、面接練習など、夢の留学実現を信頼できる専門家がサポートします。',
  openGraph: {
    title: 'スポットサービス（学生）| Engrowth - 留学成功への道のり',
    description:
      '留学という人生の大きな決断を、経験豊富な専門家がサポート。提携留学サポート業者と連携し、あなたの夢を実現します。',
    images: ['/og-spot-student.jpg'],
  },
}

const studentServices = [
  {
    icon: <Plane className="w-8 h-8 text-primary" />,
    title: '出願サポート',
    description:
      '志望校選定から必要書類の準備、エッセイ添削まで。留学のプロが一貫してサポートし、合格までの道のりを確実にガイドします。あなたの個性と目標に合わせた戦略的なアプローチを提供。',
    features: [
      '志望校選定コンサルティング',
      '出願書類作成支援',
      'エッセイ・志望動機書添削',
      '推薦状取得サポート',
    ],
    image: {
      src: '/images/spot-student/spot-student-application.jpg',
      alt: '出願サポートサービス',
    },
  },
  {
    icon: <MapPin className="w-8 h-8 text-primary" />,
    title: '留学先学校見学同行',
    description:
      '現地の学校見学から住環境の確認まで。実際に現地を訪れることで、最適な留学先選択をサポートします。文化的な違いや生活面での注意点も詳しくご説明。',
    features: [
      '現地学校見学同行',
      '住環境・生活環境調査',
      '現地学生との交流機会提供',
      '詳細な現地レポート作成',
    ],
    image: {
      src: '/images/spot-student/spot-student-school-visit.jpg',
      alt: '留学先学校見学同行サービス',
    },
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: 'エッセイ添削・指導',
    description:
      '合格に直結するエッセイ作成をマンツーマンで指導。あなたの経験と個性を最大限に活かし、印象的なエッセイに仕上げます。複数回の添削で完璧な仕上がりを目指します。',
    features: [
      '個別エッセイ指導',
      '複数回の添削・フィードバック',
      '志望校別カスタマイズ',
      '英文法・表現力向上支援',
    ],
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: '面接練習・対策',
    description:
      '入学面接や奨学金面接の対策を実施。模擬面接を通じて自信を持って本番に臨めるよう準備します。よくある質問への対策から、緊張対策まで包括的にサポート。',
    features: [
      '模擬面接実施',
      'よくある質問対策',
      '自己PR指導',
      '緊張・不安解消サポート',
    ],
  },
]

const partnerFeatures = [
  {
    icon: <Award className="w-6 h-6 text-blue-600" />,
    title: '10年以上の留学サポート実績',
    description: '数千名の学生の留学成功をサポートしてきた豊富な実績と経験。',
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    title: '現地スタッフによる24時間サポート',
    description: '現地到着後も安心。24時間体制でのサポート体制を完備。',
  },
  {
    icon: <MapPin className="w-6 h-6 text-blue-600" />,
    title: 'アメリカ・イギリス・カナダ・オーストラリア対応',
    description: '主要英語圏の国々での留学をトータルサポート。',
  },
  {
    icon: <Heart className="w-6 h-6 text-blue-600" />,
    title: '奨学金申請サポートも充実',
    description: '経済的な負担を軽減する奨学金申請も専門スタッフがサポート。',
  },
]

const successStories = [
  {
    name: '田中 美咲さん',
    school: 'スタンフォード大学 合格',
    story:
      'エッセイ添削を受けて、自分では気づかなかった強みを見つけることができました。第一志望の大学に合格できて本当に感謝しています。',
  },
  {
    name: '佐藤 健太さん',
    school: 'オックスフォード大学 合格',
    story:
      '現地見学同行サービスで実際の雰囲気を体感できたことが決め手でした。不安だった留学生活も、事前準備のおかげで順調にスタートできています。',
  },
]

const pricingExamples = [
  {
    service: '出願サポート（1校）',
    price: '¥50,000〜',
    description: '書類作成から提出まで',
  },
  {
    service: '現地見学同行（1日）',
    price: '¥30,000〜',
    description: '交通費・宿泊費別途',
  },
  {
    service: 'エッセイ添削（1本）',
    price: '¥15,000〜',
    description: '3回までの修正込み',
  },
]

export default function SpotServiceStudentPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title="学生向け<br />スポットサービス"
        subtitle="夢の留学を実現する、<br />専門家による包括的サポート"
        description="「志望校選びで迷っている」「エッセイが上手く書けない」「現地の様子を事前に知りたい」そんな留学への不安を解消します。経験豊富な専門家が、あなたの夢の実現を全力でサポートします。"
        primaryCTA={{
          text: '留学相談を申し込む',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'サービス詳細を見る',
          href: '#services',
        }}
        backgroundImage="/images/spot-student/spot-student-hero-background.jpg"
        backgroundImageClassName="opacity-10"
      />

      <SectionSeparator background="white" />

      {/* サービス詳細セクション */}
      <div id="services">
        <Container className="section-spacing">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              留学成功のためのサポートサービス
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
              留学という人生の大きな決断を、信頼できる専門家がサポート。
              一人ひとりの目標に合わせた個別対応で夢を実現します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {studentServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-neutral-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-neutral-900 text-sm">
                    含まれるサービス:
                  </h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-sm text-neutral-600"
                      >
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>

        <SectionSeparator background="surface" />

        {/* 提携留学サポート業者について */}
        <Container className="section-spacing bg-surface">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              信頼できるパートナーとの連携
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Engrowthが厳選した信頼できる留学サポート業者と提携。
              豊富な実績と専門知識を持つプロフェッショナルが、あなたの留学成功をバックアップします。
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 mb-12">
            <h3 className="font-serif text-2xl font-bold text-blue-900 mb-6 text-center">
              提携留学サポート業者の特長
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnerFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-blue-700 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 成功事例 */}
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-8">
              成功事例
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
              >
                <div className="text-center mb-4">
                  <h4 className="font-semibold text-neutral-900">
                    {story.name}
                  </h4>
                  <p className="text-sm text-blue-600 font-medium">
                    {story.school}
                  </p>
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed italic">
                  &ldquo;{story.story}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <SectionSeparator background="white" />

      {/* 料金例セクション */}
      <div id="pricing">
        <Container className="section-spacing">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              料金例
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
              学生の皆様にも利用しやすい料金設定。
              詳細なお見積もりは無料でご提供いたします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {pricingExamples.map((pricing, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center"
              >
                <h3 className="font-serif text-lg font-bold text-neutral-900 mb-2">
                  {pricing.service}
                </h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {pricing.price}
                </div>
                <p className="text-sm text-neutral-600">
                  {pricing.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-surface rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-4 text-center">
              学生支援制度
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-700">
              <div className="flex items-start">
                <Heart className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>経済的困窮者への割引制度あり</span>
              </div>
              <div className="flex items-start">
                <BookOpen className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>複数サービス利用時のパッケージ割引</span>
              </div>
              <div className="flex items-start">
                <Users className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>友達紹介キャンペーンあり</span>
              </div>
              <div className="flex items-start">
                <MessageCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>初回相談は無料（30分まで）</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <SectionSeparator background="surface" />

      {/* 最終CTA */}
      <Container className="section-spacing bg-surface">
        <div className="text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            あなたの夢の留学を実現しませんか？
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            「留学したいけど何から始めれば...」そんな不安も大丈夫。
            まずは無料相談で、あなたの状況をお聞かせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <CTAButton variant="primary" size="lg" asChild>
              <a href="/contact">
                <MessageCircle className="w-5 h-5 mr-2" />
                無料留学相談を申し込む
              </a>
            </CTAButton>
            <CTAButton variant="outline" size="lg" asChild>
              <a href="/spot-service-business">ビジネス向けサービスを見る</a>
            </CTAButton>
          </div>

          {/* 安心要素 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">初回相談無料</h3>
              <p className="text-sm text-neutral-600 text-center">
                まずは30分の無料相談で不安を解消
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">学生に優しい料金</h3>
              <p className="text-sm text-neutral-600 text-center">
                経済的負担を考慮した学生向け料金設定
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">豊富な実績</h3>
              <p className="text-sm text-neutral-600 text-center">
                数千名の留学成功をサポートした実績
              </p>
            </div>
          </div>
        </div>
      </Container>
    </LayoutWrapper>
  )
}
