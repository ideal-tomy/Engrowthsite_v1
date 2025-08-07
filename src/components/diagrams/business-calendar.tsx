'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Coffee, Moon, Briefcase, Target, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BusinessCalendarProps {
  className?: string
}

export function BusinessCalendar({ className }: BusinessCalendarProps) {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      level: 1,
      title: '基礎構築期',
      period: '1-2週目',
      details: '単語・文法など、ビジネス英語の土台を固める期間です。',
      timeSlots: [
        {
          time: '朝7:00-7:15 (15分)',
          icon: Coffee,
          activity: '単語・フレーズ暗記 (Anki)',
        },
        {
          time: '昼12:30-12:45 (15分)',
          icon: Briefcase,
          activity: 'ビジネス英語基礎 (App)',
        },
        {
          time: '夜21:00-21:30 (30分)',
          icon: Moon,
          activity: '文法・構文理解 (教材)',
        },
      ],
      color: '#fee2e2',
      border: '#fecaca',
      progress: 25,
    },
    {
      level: 2,
      title: '実践準備期',
      period: '3-4週目',
      details:
        'リスニングや基本的な会話練習を通じて、実践的なスキルを養います。',
      timeSlots: [
        {
          time: '朝7:00-7:20 (20分)',
          icon: Coffee,
          activity: 'リスニング練習 (Podcast)',
        },
        {
          time: '昼12:30-12:50 (20分)',
          icon: Briefcase,
          activity: 'メール・会話練習 (AI)',
        },
        {
          time: '夜21:00-21:45 (45分)',
          icon: Moon,
          activity: 'プレゼン準備・音読',
        },
      ],
      color: '#fef3c7',
      border: '#fde68a',
      progress: 50,
    },
    {
      level: 3,
      title: '応用実践期',
      period: '5-6週目',
      details: '実際のビジネスシーンを想定した、より高度な練習を行います。',
      timeSlots: [
        {
          time: '朝7:00-7:25 (25分)',
          icon: Coffee,
          activity: 'ニュース・記事読解',
        },
        {
          time: '昼12:30-13:00 (30分)',
          icon: Briefcase,
          activity: '模擬会議・交渉練習',
        },
        {
          time: '夜21:00-22:00 (60分)',
          icon: Moon,
          activity: '総合スキル統合演習',
        },
      ],
      color: '#dcfce7',
      border: '#bbf7d0',
      progress: 75,
    },
    {
      level: 4,
      title: 'マスター期',
      period: '7-8週目',
      details:
        'ネイティブと対等に渡り合える、高度な英語運用能力を完成させます。',
      timeSlots: [
        {
          time: '朝7:00-7:30 (30分)',
          icon: Coffee,
          activity: '自然な会話練習 (オンライン)',
        },
        {
          time: '昼12:30-13:15 (45分)',
          icon: Briefcase,
          activity: '実務英語応用 (資料作成)',
        },
        {
          time: '夜21:00-22:15 (75分)',
          icon: Moon,
          activity: 'ビジネス戦略討論',
        },
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
        staggerChildren: 0.1,
      },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const contentVariants = {
    collapsed: { height: 0, opacity: 0, marginTop: 0 },
    expanded: { height: 'auto', opacity: 1, marginTop: '1rem' },
  }

  return (
    <motion.div
      className={cn('w-full max-w-4xl mx-auto p-4', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className="text-center mb-10" variants={stepVariants}>
        <h3 className="font-serif text-3xl font-bold text-neutral-900 mb-3">
          階段式スキマ学習カレンダー
        </h3>
        <p className="text-lg text-neutral-600">
          クリックで各フェーズの詳細を確認できます
        </p>
      </motion.div>

      <div className="space-y-4">
        {steps.map(step => (
          <motion.div
            key={step.level}
            variants={stepVariants}
            className={cn(
              'rounded-2xl border-2 shadow-md overflow-hidden cursor-pointer transition-all duration-300',
              activeStep === step.level ? 'shadow-xl' : 'hover:shadow-lg'
            )}
            style={{
              backgroundColor: step.color,
              borderColor: step.border,
            }}
            onClick={() =>
              setActiveStep(activeStep === step.level ? 0 : step.level)
            }
          >
            <div className="bg-white/80 backdrop-blur-sm px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-base">
                    {step.level}
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-neutral-900">
                      {step.title}
                    </h4>
                    <p className="text-sm text-neutral-600">{step.period}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="hidden sm:flex items-center space-x-2">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-neutral-700">
                      {step.progress}%完了
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: activeStep === step.level ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-neutral-600" />
                  </motion.div>
                </div>
              </div>
            </div>
            <AnimatePresence>
              {activeStep === step.level && (
                <motion.div
                  key="content"
                  variants={contentVariants}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0">
                    <p className="text-neutral-700 mb-4 text-sm bg-white/50 p-3 rounded-lg">
                      {step.details}
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      {step.timeSlots.map((slot, slotIndex) => (
                        <div
                          key={slotIndex}
                          className="bg-white/80 rounded-xl p-3 border border-white/50"
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <slot.icon className="w-4 h-4 text-primary" />
                            </div>
                            <div className="text-xs font-medium text-neutral-900">
                              {slot.time}
                            </div>
                          </div>
                          <div className="text-sm text-neutral-800">
                            {slot.activity}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
