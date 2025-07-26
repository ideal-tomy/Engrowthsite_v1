'use client'

import {
  LucideIcon,
  BookOpen,
  Target,
  Clock,
  Users,
  HelpCircle,
} from 'lucide-react'

const iconComponents: { [key: string]: LucideIcon } = {
  BookOpen,
  Target,
  Clock,
  Users,
  HelpCircle,
}

interface Category {
  id: string
  name: string
  iconName: string
}

interface CategoryNavProps {
  categories: Category[]
}

export function CategoryNav({ categories }: CategoryNavProps) {
  const handleCategoryClick = (categoryId: string) => {
    const element = document.getElementById(`category-${categoryId}`)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
      {categories.map(category => {
        const Icon = iconComponents[category.iconName]
        if (!Icon) {
          return null
        }

        return (
          <div
            key={category.id}
            className="bg-white p-4 rounded-xl border hover:shadow-md transition-all duration-300 cursor-pointer group"
            onClick={() => handleCategoryClick(category.id)}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm text-neutral-900">
                {category.name}
              </h3>
            </div>
          </div>
        )
      })}
    </div>
  )
}
