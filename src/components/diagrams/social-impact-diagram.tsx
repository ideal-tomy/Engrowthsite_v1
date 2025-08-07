'use client'

import { motion } from 'framer-motion'
import {
  User,
  TrendingUp,
  Globe,
  Building2,
  Users,
  Heart,
  BookOpen,
  Lightbulb,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'
import { useState } from 'react'

interface SocialImpactDiagramProps {
  className?: string
}

export function SocialImpactDiagram({ className }: SocialImpactDiagramProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const impactCategories = [
    {
      id: 'personal',
      title: '個人成長',
      icon: User,
      color: '#3b82f6',
      angle: -90, // 上（12時方向）
      impacts: [
        { text: 'キャリアアップ', value: '+30%平均年収向上' },
        { text: '自信の向上', value: '95%が実感' },
        { text: 'スキル習得', value: '実践的英語力' },
        { text: '思考力向上', value: '論理的思考力' },
      ],
    },
    {
      id: 'economic',
      title: '経済効果',
      icon: TrendingUp,
      color: '#10b981',
      angle: -30, // 右上（2時方向）
      impacts: [
        { text: '収入増加', value: '平均30万円/年' },
        { text: '転職成功率', value: '85%向上' },
        { text: '昇進確率', value: '2.5倍アップ' },
        { text: '副業収入', value: '月5-15万円' },
      ],
    },
    {
      id: 'business',
      title: 'ビジネス展開',
      icon: Building2,
      color: '#f59e0b',
      angle: 30, // 右下（4時方向）
      impacts: [
        { text: '海外展開', value: '新市場開拓' },
        { text: '国際取引', value: '取引量3倍' },
        { text: 'チーム力向上', value: 'グローバルチーム' },
        { text: 'イノベーション', value: '創造性向上' },
      ],
    },
    {
      id: 'social',
      title: '社会貢献',
      icon: Users,
      color: '#d70207',
      angle: 90, // 下（6時方向）
      impacts: [
        { text: '知識共有', value: '後進指導' },
        { text: 'コミュニティ', value: '学習者同士の繋がり' },
        { text: '文化交流', value: '国際理解促進' },
        { text: '教育格差解消', value: 'アクセス向上' },
      ],
    },
    {
      id: 'community',
      title: '地域活性化',
      icon: Heart,
      color: '#8b5cf6',
      angle: 150, // 左下（8時方向）
      impacts: [
        { text: '地方創生', value: 'リモートワーク' },
        { text: '観光促進', value: '外国人対応' },
        { text: '多様性促進', value: '包摂的社会' },
        { text: '次世代育成', value: '将来への投資' },
      ],
    },
    {
      id: 'global',
      title: 'グローバル影響',
      icon: Globe,
      color: '#06b6d4',
      angle: 210, // 左上（10時方向）
      impacts: [
        { text: 'SDGs貢献', value: '質の高い教育' },
        { text: '国際協力', value: 'クロスボーダー' },
        { text: 'イノベーション', value: 'グローバル課題解決' },
        { text: '持続可能性', value: '循環型成長' },
      ],
    },
  ]

  const centerStats = [
    { label: '学習者満足度', value: '98%' },
    { label: '継続率', value: '89%' },
    { label: '目標達成率', value: '92%' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  }

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.8 },
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.8, 0.4, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  }

  return (
    <motion.div
      className={`w-full max-w-6xl mx-auto p-6 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* ヘッダー */}
      <motion.div className="text-center mb-12" variants={itemVariants}>
        <h3 className="font-serif text-3xl font-bold text-neutral-900 mb-4">
          社会的インパクト放射図
        </h3>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          一人の学習が社会全体に広がる、持続可能な価値創造の輪
        </p>
      </motion.div>

      {/* メイン放射図 */}
      <motion.div className="relative mb-16" variants={itemVariants}>
        <div className="relative w-full aspect-square max-w-4xl mx-auto">
          {/* 背景の同心円 */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 800"
            fill="none"
          >
            {/* 外側の円 */}
            {[1, 2, 3].map((ring, index) => (
              <motion.circle
                key={ring}
                cx="400"
                cy="400"
                r={120 + index * 80}
                stroke="#d70207"
                strokeWidth="1"
                strokeOpacity={0.2 - index * 0.05}
                strokeDasharray="4 8"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2 + index, ease: 'easeInOut' as const }}
              />
            ))}

            {/* 放射線 */}
            {impactCategories.map((category, index) => {
              const radians = (category.angle * Math.PI) / 180
              const x1 = 400 + Math.cos(radians) * 120
              const y1 = 400 + Math.sin(radians) * 120
              const x2 = 400 + Math.cos(radians) * 360
              const y2 = 400 + Math.sin(radians) * 360

              return (
                <motion.line
                  key={category.id}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={category.color}
                  strokeWidth="2"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ delay: index * 0.2, duration: 1 }}
                />
              )
            })}
          </svg>

          {/* 中央の学習者 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div className="relative" variants={itemVariants}>
              {/* パルス効果 */}
              <motion.div
                className="absolute inset-0 w-24 h-24 bg-[#d70207] rounded-full"
                variants={pulseVariants}
                initial="initial"
                animate="animate"
              />

              {/* メインアイコン */}
              <div className="relative w-24 h-24 bg-[#d70207] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                <BookOpen className="w-12 h-12 text-white" />
              </div>

              {/* 統計情報 */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-48">
                <div className="bg-white rounded-lg shadow-lg p-3 border border-gray-200">
                  {centerStats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-1"
                    >
                      <span className="text-xs text-neutral-600">
                        {stat.label}
                      </span>
                      <span className="text-sm font-bold text-[#d70207]">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* インパクトカテゴリー */}
          {impactCategories.map((category, index) => {
            const radians = (category.angle * Math.PI) / 180
            // 中心からの距離を35%に固定し、アイコンサイズの半分(2.5%)を考慮して調整
            const radius = 37.5 // 35% + アイコン半径の調整
            const x = 50 + Math.cos(radians) * radius
            const y = 50 + Math.sin(radians) * radius
            const IconComponent = category.icon
            const isActive = activeCategory === category.id

            return (
              <motion.div
                key={category.id}
                className="absolute cursor-pointer z-20"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                }}
                initial={{
                  scale: 0,
                  opacity: 0,
                  x: '-50%',
                  y: '-50%',
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  x: '-50%',
                  y: '-50%',
                }}
                whileHover={{
                  scale: 1.1,
                  y: '-54%', // -50% + hover offset
                  x: '-50%',
                }}
                transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
                onHoverStart={() => setActiveCategory(category.id)}
                onHoverEnd={() => setActiveCategory(null)}
              >
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg border-4 border-white transition-all duration-300 ${
                    isActive ? 'scale-110' : ''
                  }`}
                  style={{ backgroundColor: category.color }}
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </div>

                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center min-w-max">
                  <div className="bg-white rounded-lg shadow-lg p-2 border border-gray-200 whitespace-nowrap">
                    <div className="font-bold text-sm text-neutral-900">
                      {category.title}
                    </div>
                  </div>
                </div>

                {/* インパクト詳細（ホバー時表示） - 元の位置表示 */}
                {isActive && (
                  <div
                    className="absolute top-full mt-16 left-1/2 transform -translate-x-1/2"
                    style={{
                      zIndex: 999999, // 非常に高いz-index
                      left: Math.max(Math.min(50, 85), 15) + '%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white rounded-xl shadow-xl p-4 border border-gray-200 w-64 max-w-sm"
                    >
                      <div className="flex items-center space-x-2 mb-3">
                        <IconComponent
                          className="w-5 h-5"
                          style={{ color: category.color }}
                        />
                        <span className="font-bold text-neutral-900">
                          {category.title}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {category.impacts.map((impact, impactIndex) => (
                          <div
                            key={impactIndex}
                            className="flex items-start justify-between gap-2"
                          >
                            <span className="text-sm text-neutral-700 flex-1">
                              {impact.text}
                            </span>
                            <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded whitespace-nowrap">
                              {impact.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )
          })}

          {/* 成長の矢印 */}
          <motion.div
            className="absolute top-4 right-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <div className="flex items-center space-x-1 bg-white rounded-full px-3 py-2 shadow-lg">
              <Sparkles className="w-4 h-4 text-[#d70207]" />
              <span className="text-xs font-medium text-neutral-700">
                拡散する価値
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#d70207]" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* 循環型価値創造の説明 */}
      <motion.div
        className="bg-gradient-to-r from-[#d70207]/5 to-transparent rounded-2xl p-8"
        variants={itemVariants}
      >
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#d70207]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-[#d70207]" />
            </div>
            <h4 className="font-bold text-neutral-900 mb-2">個人の成長</h4>
            <p className="text-sm text-neutral-600">
              一人ひとりの英語習得が自信と可能性を拡げる
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#d70207]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#d70207]" />
            </div>
            <h4 className="font-bold text-neutral-900 mb-2">社会への還元</h4>
            <p className="text-sm text-neutral-600">
              学んだ知識を後進に伝え、価値の循環を生み出す
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#d70207]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-[#d70207]" />
            </div>
            <h4 className="font-bold text-neutral-900 mb-2">持続可能な発展</h4>
            <p className="text-sm text-neutral-600">
              グローバル社会の課題解決に貢献する人材育成
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
