import Link from 'next/link'
import { Mail, MessageCircle } from 'lucide-react'

const footerLinks = {
  services: [
    { title: 'ビジネス向けサービス', href: '/business' },
    { title: '学生向けサービス', href: '/students' },
    { title: '学習メソッド', href: '/method' },
    { title: 'エコシステム', href: '/ecosystem' },
  ],
  support: [
    { title: '受講の流れ', href: '/flow' },
    { title: '料金プラン', href: '/pricing' },
    { title: 'よくある質問', href: '/faq' },
    { title: 'お問い合わせ', href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="font-serif text-2xl font-bold">Engrowth</span>
            </Link>
            <p className="text-neutral-300 mb-6 max-w-md leading-relaxed">
              第二言語として英語を習得した日本人コンサルによる実践的な英語学習支援。
              科学的メソッドに基づく循環型エコシステムで、英語を学ぶ人も教える人も成長できる仕組みを提供します。
            </p>
            <div className="flex space-x-4">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>LINE相談</span>
              </Link>
              <Link
                href="mailto:info@engrowth.jp"
                className="inline-flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>お問い合わせ</span>
              </Link>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">サービス</h3>
            <ul className="space-y-2">
              {footerLinks.services.map(link => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">サポート</h3>
            <ul className="space-y-2">
              {footerLinks.support.map(link => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © 2025 Engrowth. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-neutral-400 hover:text-white text-sm transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/terms"
              className="text-neutral-400 hover:text-white text-sm transition-colors"
            >
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
