'use client'

import { motion } from 'framer-motion'
import { Clock, Coffee, Moon, Briefcase, BookOpen, Target } from 'lucide-react'

interface BusinessCalendarProps {
  className?: string
}

export function BusinessCalendar({ className }: BusinessCalendarProps) {
  const steps = [
    {
      level: 1,
      title: '基礎構築期',
      period: '1-2週目',
      timeSlots: [
        { time: '朝7:00-7:15', icon: Coffee, activity: '単語・フレーズ暗記' },
        {
          time: '昼12:30-12:45',
          icon: Briefcase,
          activity: 'ビジネス英語基礎',
        },
        { time: '夜21:00-21:30', icon: Moon, activity: '文法・構文理解' },
      ],
      color: '#fee2e2',
      border: '#fecaca',
      progress: 25,
    },
    {
      level: 2,
      title: '実践準備期',
      period: '3-4週目',
      timeSlots: [
        { time: '朝7:00-7:20', icon: Coffee, activity: 'リスニング練習' },
        {
          time: '昼12:30-12:50',
          icon: Briefcase,
          activity: 'メール・会話練習',
        },
        { time: '夜21:00-21:45', icon: Moon, activity: 'プレゼン準備' },
      ],
      color: '#fef3c7',
      border: '#fde68a',
      progress: 50,
    },
    {
      level: 3,
      title: '応用実践期',
      period: '5-6週目',
      timeSlots: [
        { time: '朝7:00-7:25', icon: Coffee, activity: 'ニュース・記事読解' },
        { time: '昼12:30-13:00', icon: Briefcase, activity: '模擬会議・交渉' },
        { time: '夜21:00-22:00', icon: Moon, activity: '総合スキル統合' },
      ],
      color: '#dcfce7',
      border: '#bbf7d0',
      progress: 75,
    },
    {
      level: 4,
      title: 'マスター期',
      period: '7-8週目',
      timeSlots: [
        { time: '朝7:00-7:30', icon: Coffee, activity: '自然な会話練習' },
        { time: '昼12:30-13:15', icon: Briefcase, activity: '実務英語応用' },
        { time: '夜21:00-22:15', icon: Moon, activity: 'ビジネス戦略討論' },
      ],
      color: '#ddd6fe',
      border: '#c4b5fd',
      progress: 100,
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

  const stepVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
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
      <motion.div className="text-center mb-12" variants={stepVariants}>
        <h3 className="font-serif text-3xl font-bold text-neutral-900 mb-4">
          階段式スキマ学習カレンダー
        </h3>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          忙しい社会人でも確実に成長できる、科学的に設計された学習プログラム
        </p>
      </motion.div>

      {/* 全体進捗バー */}
      <motion.div className="mb-8" variants={stepVariants}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-neutral-700">学習進捗</span>
          <span className="text-sm font-medium text-[#d70207]">
            8週間プログラム
          </span>
        </div>
        <div className="w-full bg-neutral-200 rounded-full h-3">
          <motion.div
            className="bg-gradient-to-r from-[#d70207] to-[#b60206] h-3 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
        </div>
      </motion.div>

      {/* 階段式ステップ */}
      <div className="relative">
        {/* 接続線 */}
        <div className="absolute left-8 top-20 bottom-0 w-1 bg-gradient-to-b from-[#d70207] to-transparent opacity-20 hidden md:block" />

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.level}
              variants={stepVariants}
              className="relative"
            >
              {/* ステップカード */}
              <div
                className="rounded-2xl border-2 shadow-lg overflow-hidden"
                style={{
                  backgroundColor: step.color,
                  borderColor: step.border,
                }}
              >
                {/* ヘッダー */}
                <div className="bg-white/80 backdrop-blur-sm px-6 py-4 border-b border-white/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#d70207] text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.level}
                      </div>
                      <div>
                        <h4 className="font-serif text-xl font-bold text-neutral-900">
                          {step.title}
                        </h4>
                        <p className="text-sm text-neutral-600">
                          {step.period}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-5 h-5 text-[#d70207]" />
                      <span className="text-sm font-medium text-neutral-700">
                        {step.progress}%完了
                      </span>
                    </div>
                  </div>
                </div>

                {/* スキマ時間スケジュール */}
                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    {step.timeSlots.map((slot, slotIndex) => (
                      <motion.div
                        key={slotIndex}
                        className="bg-white/80 rounded-xl p-4 border border-white/50"
                        whileHover={{ scale: 1.02, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-10 h-10 bg-[#d70207]/10 rounded-lg flex items-center justify-center">
                            <slot.icon className="w-5 h-5 text-[#d70207]" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-neutral-900">
                              {slot.time}
                            </div>
                            <div className="text-xs text-neutral-600">
                              スキマ時間活用
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-neutral-800">
                          {slot.activity}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* 1日の総学習時間 */}
                  <div className="mt-4 flex items-center justify-center">
                    <div className="flex items-center space-x-2 bg-white/80 rounded-lg px-4 py-2">
                      <Clock className="w-4 h-4 text-[#d70207]" />
                      <span className="text-sm font-medium text-neutral-700">
                        1日の学習時間: {60 + (step.level - 1) * 15}分
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 矢印（最後のステップ以外） */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-6">
                  <motion.div
                    className="w-8 h-8 bg-[#d70207] rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* フッター */}
      <motion.div
        className="mt-12 text-center bg-gradient-to-r from-[#d70207]/5 to-transparent rounded-2xl p-6"
        variants={stepVariants}
      >
        <div className="flex items-center justify-center space-x-2 mb-3">
          <BookOpen className="w-5 h-5 text-[#d70207]" />
          <span className="font-serif text-lg font-bold text-neutral-900">
            継続可能な学習システム
          </span>
        </div>
        <p className="text-sm text-neutral-600 max-w-2xl mx-auto">
          通勤時間、昼休み、就寝前の短時間を活用。無理のないペースで確実にスキルアップを実現します。
        </p>
      </motion.div>
    </motion.div>
  )
}
