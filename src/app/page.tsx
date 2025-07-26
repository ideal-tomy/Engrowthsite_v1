import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Engrowth | 循環型エコシステムによる英語コンサルティング',
  description: '第二言語として英語を習得した日本人コンサルによる実践的な英語学習支援。科学的メソッドに基づく循環型エコシステムで、英語を学ぶ人も教える人も成長できる仕組みを提供します。',
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="mobile-spacing bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
            英語を<span className="text-primary">&ldquo;誰かのため&rdquo;</span>に
            <br />
            学んできた人から学ぶ。
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed">
            英語を<strong>&ldquo;使ってきた&rdquo;</strong>日本人だけのコンサルティング
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
              無料相談を受ける
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-4 rounded-xl transition-all duration-300">
              LINE登録
            </button>
          </div>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="mobile-spacing bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-6">
            サイト準備中
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Engrowthウェブサイトは現在構築中です。
            <br />
            実装計画に基づいて段階的に機能を追加してまいります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary">
              <h3 className="font-serif text-xl font-semibold mb-3">フェーズ1</h3>
              <p className="text-neutral-600">プロジェクトセットアップ</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold mb-3">フェーズ2</h3>
              <p className="text-neutral-600">共通コンポーネント開発</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold mb-3">フェーズ3</h3>
              <p className="text-neutral-600">ページ実装</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 