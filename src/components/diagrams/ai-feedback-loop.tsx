'use client'

import { motion } from 'framer-motion'
import {
  Brain,
  MessageSquare,
  BarChart3,
  Target,
  Users,
  RefreshCw,
  Zap,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react'
import { useState } from 'react'

interface AIFeedbackLoopProps {
  className?: string
}

export function AIFeedbackLoop({ className }: AIFeedbackLoopProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const steps = [
    {
      id: 1,
      title: '学習開始',
      subtitle: '個人レベル診断',
      icon: Target,
      color: '#3b82f6',
      description:
        'AIが学習者の現在のレベルと目標を分析し、最適な学習プランを提案',
      details: [
        '英語レベル自動診断',
        '学習目標の明確化',
        '個別カリキュラム生成',
        'スケジュール最適化',
      ],
      position: { x: 50, y: 15 },
    },
    {
      id: 2,
      title: '実践練習',
      subtitle: 'インタラクティブ学習',
      icon: MessageSquare,
      color: '#10b981',
      description: 'AIとの対話練習とリアルタイムフィードバックによる実践的学習',
      details: [
        'AI会話シミュレーション',
        '発音矯正システム',
        '文法チェック機能',
        'ビジネスシーン練習',
      ],
      position: { x: 85, y: 50 },
    },
    {
      id: 3,
      title: 'データ分析',
      subtitle: 'パフォーマンス解析',
      icon: BarChart3,
      color: '#f59e0b',
      description: 'AIが学習データを詳細分析し、強み・弱みを可視化',
      details: [
        '学習進捗の可視化',
        '弱点分野の特定',
        '習得度の定量評価',
        '予測モデルによる最適化',
      ],
      position: { x: 50, y: 85 },
    },
    {
      id: 4,
      title: '人間コーチング',
      subtitle: 'プロのサポート',
      icon: Users,
      color: '#d70207',
      description: '経験豊富なコンサルタントによる個別指導とモチベーション管理',
      details: [
        '1on1コーチングセッション',
        '学習戦略のアドバイス',
        'モチベーション維持',
        'キャリア相談・目標設定',
      ],
      position: { x: 15, y: 50 },
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: '24時間対応',
      description: 'AIによる即座のフィードバック',
    },
    {
      icon: TrendingUp,
      title: '継続的改善',
      description: 'データに基づく学習最適化',
    },
    {
      icon: CheckCircle2,
      title: '確実な成果',
      description: '人間＋AIのハイブリッド指導',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
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
          AIフィードバック学習ループ
        </h3>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          AIと人間コンサルタントが連携した革新的な学習システム
        </p>
      </motion.div>

      {/* メインループ図 */}
      <motion.div className="relative mb-16" variants={itemVariants}>
        {/* 背景円 */}
        <div className="relative w-full aspect-square max-w-2xl mx-auto overflow-visible">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 400 400"
            fill="none"
            style={{ overflow: 'visible' }}
          >
            {/* 外側の円 */}
            <motion.circle
              cx="200"
              cy="200"
              r="180"
              stroke="#d70207"
              strokeWidth="2"
              strokeDasharray="8 4"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />

            {/* 中央のAI脳 */}
            <motion.circle
              cx="200"
              cy="200"
              r="40"
              fill="url(#brainGradient)"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />

            {/* グラデーション定義 */}
            <defs>
              <radialGradient id="brainGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#d70207" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#b60206" stopOpacity="0.9" />
              </radialGradient>
            </defs>
          </svg>

          {/* 中央AIアイコン */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.7, duration: 0.3 }}
            >
              <Brain className="w-10 h-10 text-[#d70207]" />
            </motion.div>
          </div>

          {/* ステップノード */}
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={step.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{
                  left: `${step.position.x}%`,
                  top: `${step.position.y}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.4 }}
                whileHover={{ scale: 1.1 }}
                onHoverStart={() => setActiveStep(step.id)}
                onHoverEnd={() => setActiveStep(null)}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
                  style={{ backgroundColor: step.color }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* ステップ番号 */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-600">
                    {step.id}
                  </span>
                </div>
              </motion.div>
            )
          })}

          {/* 循環矢印 */}
          <motion.div
            className="absolute top-4 right-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <RefreshCw className="w-8 h-8 text-[#d70207] opacity-60" />
          </motion.div>
        </div>
      </motion.div>

      {/* ステップ詳細 */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        variants={containerVariants}
      >
        {steps.map(step => {
          const IconComponent = step.icon
          const isActive = activeStep === step.id

          return (
            <motion.div
              key={step.id}
              className={`bg-white rounded-2xl border-2 p-6 transition-all duration-300 ${
                isActive
                  ? 'border-[#d70207] shadow-lg scale-105'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  <IconComponent
                    className="w-6 h-6"
                    style={{ color: step.color }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">{step.title}</h4>
                  <p className="text-sm text-neutral-600">{step.subtitle}</p>
                </div>
              </div>

              <p className="text-sm text-neutral-700 mb-4">
                {step.description}
              </p>

              <ul className="space-y-2">
                {step.details.map((detail, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-xs text-neutral-600"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </motion.div>

      {/* 効果・メリット */}
      <motion.div
        className="bg-gradient-to-r from-[#d70207]/5 to-transparent rounded-2xl p-8"
        variants={itemVariants}
      >
        <div className="text-center mb-8">
          <h4 className="font-serif text-2xl font-bold text-neutral-900 mb-2">
            システムの効果
          </h4>
          <p className="text-neutral-600">
            AIと人間の強みを組み合わせた最適な学習環境
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <div className="w-16 h-16 bg-[#d70207]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-[#d70207]" />
                </div>
                <h5 className="font-bold text-neutral-900 mb-2">
                  {benefit.title}
                </h5>
                <p className="text-sm text-neutral-600">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </motion.div>
  )
}
