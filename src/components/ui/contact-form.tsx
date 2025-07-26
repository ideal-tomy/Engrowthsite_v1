'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { CTAButton } from './cta-button'
import { Mail, MessageCircle, Phone, Send } from 'lucide-react'

interface ContactMethod {
  id: string
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  href: string
  primary?: boolean
}

interface ContactFormProps {
  className?: string
  showMethods?: boolean
}

export function ContactForm({
  className,
  showMethods = true,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactMethods: ContactMethod[] = [
    {
      id: 'line',
      name: 'LINE で相談',
      description: '最も迅速にご対応。お気軽にメッセージをお送りください。',
      icon: MessageCircle,
      href: '/contact',
      primary: true,
    },
    {
      id: 'email',
      name: 'メールで相談',
      description:
        '詳細な内容をお聞かせください。24時間以内にご返信いたします。',
      icon: Mail,
      href: 'mailto:info@engrowth.jp',
    },
    {
      id: 'phone',
      name: '電話で相談',
      description: '直接お話しされたい方はお電話でもご相談いただけます。',
      icon: Phone,
      href: 'tel:+81-3-1234-5678',
    },
  ]

  const serviceOptions = [
    '無料相談・カウンセリング',
    'ビジネス向けサービス',
    '学生向けサービス',
    'エコシステムについて',
    '料金・プランについて',
    'その他',
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // ここで実際のフォーム送信処理を行う
    // 例: API呼び出し、メール送信など

    // フォーム送信処理（本番環境では適切なAPI呼び出しに置き換え）

    // 仮の遅延
    await new Promise(resolve => setTimeout(resolve, 1000))

    alert(
      'お問い合わせありがとうございます。担当者より24時間以内にご連絡いたします。'
    )

    // フォームリセット
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      service: '',
    })

    setIsSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className={cn('max-w-4xl mx-auto', className)}>
      {showMethods && (
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold text-center text-neutral-900 mb-8">
            お問い合わせ方法を選択
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map(method => (
              <a
                key={method.id}
                href={method.href}
                className={cn(
                  'block p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg',
                  method.primary
                    ? 'border-primary bg-primary/5 hover:bg-primary/10'
                    : 'border-neutral-200 bg-white hover:border-primary/30'
                )}
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <method.icon
                      className={cn(
                        'w-8 h-8',
                        method.primary ? 'text-primary' : 'text-neutral-600'
                      )}
                    />
                  </div>
                  <h4 className="font-semibold text-lg text-neutral-900 mb-2">
                    {method.name}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl border border-neutral-200 p-8 shadow-sm">
        <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-6 text-center">
          メールでお問い合わせ
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="山田太郎"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="example@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-neutral-700 mb-2"
            >
              お問い合わせ内容
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            >
              <option value="">選択してください</option>
              {serviceOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-neutral-700 mb-2"
            >
              件名
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="例：ビジネス向けサービスについて"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-700 mb-2"
            >
              メッセージ <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
              placeholder="ご質問やご相談内容をお聞かせください..."
            />
          </div>

          <div className="text-center">
            <CTAButton
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="min-w-[200px]"
            >
              {isSubmitting ? (
                '送信中...'
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  送信する
                </>
              )}
            </CTAButton>
          </div>
        </form>

        <div className="mt-8 p-4 bg-surface rounded-lg">
          <p className="text-sm text-neutral-600 leading-relaxed">
            <strong>プライバシーについて：</strong>
            お送りいただいた個人情報は、お問い合わせへの回答および当社サービスのご案内のみに使用いたします。
            第三者への提供や営業目的での使用は一切いたしません。
          </p>
        </div>
      </div>
    </div>
  )
}
