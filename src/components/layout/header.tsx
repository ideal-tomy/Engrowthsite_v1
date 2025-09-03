'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const navItems = [
  { title: 'Engrowthとは', href: '/about' },
  {
    title: 'コース料金',
    href: '/courses',
    items: [
      {
        title: 'プログラム内容',
        href: '/method',
        description: '科学的根拠に基づく学習設計',
      },
      {
        title: 'ビジネスコース',
        href: '/business',
        description: '忙しい社会人のための英語コンサルティング',
      },
      {
        title: '学生コース',
        href: '/students',
        description: '留学前準備と実践的な英語学習',
      },
      {
        title: 'スポットサービス（ビジネス）',
        href: '/spot-service-business',
        description: 'ビジネス向け専門サポート',
      },
      {
        title: 'スポットサービス（学生）',
        href: '/spot-service-student',
        description: '学生向け専門サポート',
      },
    ],
  },
  { title: '受講の流れ', href: '/flow' },
  { title: '支援者の方へ', href: '/supporters' },
  { title: 'FAQ', href: '/faq' },
  { title: 'お問い合わせ', href: '/contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <span className="font-serif text-xl font-bold text-neutral-900">
            Engrowth
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map(item => (
              <NavigationMenuItem key={item.title}>
                {item.items ? (
                  <>
                    <NavigationMenuTrigger className="font-medium text-neutral-700 hover:text-primary">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.items.map(subItem => (
                          <li key={subItem.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {subItem.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {subItem.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="font-medium text-neutral-700 hover:text-primary hover:bg-accent px-3 py-2 rounded-md transition-colors"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button
            variant="outline"
            asChild
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Link href="/contact">LINE登録</Link>
          </Button>
          <Button
            asChild
            className="bg-primary hover:bg-primary-dark text-white"
          >
            <Link href="/contact">無料相談</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">メニューを開く</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-white font-bold text-sm">E</span>
                  </div>
                  <span className="font-serif text-xl font-bold text-neutral-900">
                    Engrowth
                  </span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col space-y-3">
              {navItems.map(item => (
                <div key={item.title}>
                  {item.items ? (
                    <div className="space-y-2">
                      <div className="font-medium text-neutral-900 px-3 py-2">
                        {item.title}
                      </div>
                      <div className="pl-4 space-y-1">
                        {item.items.map(subItem => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-sm text-neutral-600 hover:text-primary hover:bg-surface rounded-md transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 font-medium text-neutral-700 hover:text-primary hover:bg-surface rounded-md transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t space-y-2">
                <Button
                  variant="outline"
                  asChild
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    LINE登録
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary-dark text-white"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    無料相談
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
