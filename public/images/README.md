# 画像ファイル管理

このフォルダは Engrowth ウェブサイトで使用する画像ファイルを管理します。

## フォルダ構成

```
public/images/
├── hero/              # ヒーローセクション用画像
├── team/              # チームメンバー写真
├── diagrams/          # 図解・説明図
├── icons/             # カスタムアイコン
└── backgrounds/       # 背景画像
```

## 使用方法

### Next.js Image コンポーネントでの使用例

```tsx
import Image from 'next/image'

// 基本的な使用方法
<Image
  src="/images/hero/main-visual.jpg"
  alt="Engrowth英語コンサルティング"
  width={1200}
  height={600}
  priority // ヒーロー画像など重要な画像にのみ使用
/>

// レスポンシブ対応
<Image
  src="/images/team/consultant-1.jpg"
  alt="コンサルタント名前"
  width={400}
  height={400}
  sizes="(max-width: 768px) 100vw, 400px"
  className="rounded-full"
/>
```

## 推奨画像仕様

### ヒーロー画像

- サイズ: 1920×1080px以上
- フォーマット: WebP (フォールバック用にJPGも用意)
- 圧縮: 品質80-90%

### チーム写真

- サイズ: 800×800px以上（正方形）
- フォーマット: WebP
- 圧縮: 品質85%

### 図解・説明図

- サイズ: 1200×800px以上
- フォーマット: SVG（可能な場合）、WebP
- 透明背景対応

### アイコン

- サイズ: 128×128px以上
- フォーマット: SVG推奨
- 単色・シンプルなデザイン

## 最適化について

- Next.js Image コンポーネントが自動的に最適化を行います
- WebP形式での配信が自動的に行われます
- lazy loading が自動適用されます
- `priority` プロパティは first paint に必要な画像にのみ使用してください

## カラーパレット参考

プライマリカラー: `#d70207`
セカンダリカラー: `#6a6a6a`
背景色: `#ffffff`, `#f5f5f5`

画像内でブランドカラーを使用する際の参考にしてください。
