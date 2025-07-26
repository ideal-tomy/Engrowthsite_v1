import { cn } from '@/lib/utils'
import { Check, X, Star } from 'lucide-react'
import { CTAButton } from './cta-button'

interface PricingFeature {
  name: string
  included: boolean
  description?: string
}

interface PricingPlan {
  id: string
  name: string
  description: string
  price: {
    monthly: number
    threeMonth: number
    sixMonth: number
    yearly: number
  }
  discounts: {
    threeMonth: number
    sixMonth: number
    yearly: number
  }
  features: PricingFeature[]
  popular?: boolean
  ctaText?: string
  ctaHref?: string
}

interface PricingTableProps {
  plans: PricingPlan[]
  className?: string
  period?: 'monthly' | 'threeMonth' | 'sixMonth' | 'yearly'
}

export function PricingTable({
  plans,
  className,
  period = 'threeMonth',
}: PricingTableProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto',
        className
      )}
    >
      {plans.map(plan => (
        <PricingCard key={plan.id} plan={plan} period={period} />
      ))}
    </div>
  )
}

function PricingCard({
  plan,
  period,
}: {
  plan: PricingPlan
  period: 'monthly' | 'threeMonth' | 'sixMonth' | 'yearly'
}) {
  const getPrice = () => {
    switch (period) {
      case 'monthly':
        return plan.price.monthly
      case 'threeMonth':
        return plan.price.threeMonth
      case 'sixMonth':
        return plan.price.sixMonth
      case 'yearly':
        return plan.price.yearly
      default:
        return plan.price.threeMonth
    }
  }

  const getDiscount = () => {
    switch (period) {
      case 'threeMonth':
        return plan.discounts.threeMonth
      case 'sixMonth':
        return plan.discounts.sixMonth
      case 'yearly':
        return plan.discounts.yearly
      default:
        return 0
    }
  }

  const getPeriodLabel = () => {
    switch (period) {
      case 'monthly':
        return '月額'
      case 'threeMonth':
        return '3ヶ月プラン'
      case 'sixMonth':
        return '6ヶ月プラン'
      case 'yearly':
        return '12ヶ月プラン'
      default:
        return '3ヶ月プラン'
    }
  }

  const price = getPrice()
  const discount = getDiscount()
  const originalPrice =
    period === 'monthly'
      ? plan.price.monthly
      : plan.price.monthly *
        (period === 'threeMonth' ? 3 : period === 'sixMonth' ? 6 : 12)

  return (
    <div
      className={cn(
        'relative bg-white rounded-xl border-2 p-8 shadow-sm transition-all duration-300 hover:shadow-lg',
        plan.popular
          ? 'border-primary shadow-lg scale-105'
          : 'border-neutral-200'
      )}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
            <Star className="w-4 h-4 mr-1" />
            人気プラン
          </div>
        </div>
      )}

      {/* プラン名・説明 */}
      <div className="text-center mb-6">
        <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-2">
          {plan.name}
        </h3>
        <p className="text-neutral-600 leading-relaxed">{plan.description}</p>
      </div>

      {/* 料金表示 */}
      <div className="text-center mb-8">
        <div className="mb-2">
          <span className="text-4xl font-bold text-primary">
            ¥{price.toLocaleString()}
          </span>
          <span className="text-neutral-600 ml-2">{getPeriodLabel()}</span>
        </div>

        {discount > 0 && (
          <div className="space-y-1">
            <div className="text-sm text-neutral-500 line-through">
              通常価格: ¥{originalPrice.toLocaleString()}
            </div>
            <div className="text-green-600 font-semibold">
              {discount}%割引 (¥{(originalPrice - price).toLocaleString()}お得)
            </div>
          </div>
        )}
      </div>

      {/* 機能一覧 */}
      <div className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start">
            {feature.included ? (
              <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            ) : (
              <X className="w-5 h-5 text-neutral-400 mr-3 mt-0.5 flex-shrink-0" />
            )}
            <div>
              <span
                className={cn(
                  'font-medium',
                  feature.included ? 'text-neutral-900' : 'text-neutral-500'
                )}
              >
                {feature.name}
              </span>
              {feature.description && (
                <p className="text-sm text-neutral-600 mt-1">
                  {feature.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <CTAButton
        asChild
        variant={plan.popular ? 'primary' : 'secondary'}
        className="w-full"
      >
        <a href={plan.ctaHref || '/contact'}>
          {plan.ctaText || '詳細・お申し込み'}
        </a>
      </CTAButton>
    </div>
  )
}

// プリセットされた料金プラン
export function EngrowthPricingTable() {
  const businessPlans: PricingPlan[] = [
    {
      id: 'business-standard',
      name: 'ビジネススタンダード',
      description:
        '忙しい社会人の方に最適なプラン。短時間で効率的な英語習得をサポート。',
      price: {
        monthly: 198000,
        threeMonth: 495000,
        sixMonth: 891000,
        yearly: 1584000,
      },
      discounts: {
        threeMonth: 17,
        sixMonth: 25,
        yearly: 33,
      },
      features: [
        { name: '専属コンサルタント', included: true },
        { name: '90日集中プログラム', included: true },
        { name: 'Zoom・LINE サポート', included: true },
        { name: '毎日の学習管理', included: true },
        { name: '教材アドバイス', included: true },
        { name: 'ビジネス英語特化', included: true },
        { name: 'スケジュール柔軟対応', included: true },
      ],
      popular: true,
      ctaText: '無料相談を申し込む',
    },
  ]

  const studentPlans: PricingPlan[] = [
    {
      id: 'student-standard',
      name: '学生スタンダード',
      description:
        '留学準備や就活に向けた実践英語力を身につけたい学生の方向けプラン。',
      price: {
        monthly: 148000,
        threeMonth: 371000,
        sixMonth: 667800,
        yearly: 1185600,
      },
      discounts: {
        threeMonth: 17,
        sixMonth: 25,
        yearly: 33,
      },
      features: [
        { name: '専属コンサルタント', included: true },
        { name: '90日集中プログラム', included: true },
        { name: 'Zoom・LINE サポート', included: true },
        { name: '毎日の学習管理', included: true },
        { name: '教材アドバイス', included: true },
        { name: '留学準備サポート', included: true },
        { name: 'エッセイ指導', included: true },
        {
          name: '将来的に教える側への参加',
          included: true,
          description: '英語習得後はコンサルタントとして活動可能',
        },
      ],
    },
  ]

  return (
    <div className="space-y-16">
      <div>
        <h3 className="font-serif text-2xl font-bold text-center mb-8">
          ビジネス向けプラン
        </h3>
        <PricingTable plans={businessPlans} />
      </div>

      <div>
        <h3 className="font-serif text-2xl font-bold text-center mb-8">
          学生向けプラン
        </h3>
        <PricingTable plans={studentPlans} />
      </div>
    </div>
  )
}
