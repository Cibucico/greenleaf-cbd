'use client'

import { cn } from '@/lib/utils'
import type { ProductCategory } from '@/data/products'

type FilterOption = { label: string; value: ProductCategory | 'all' }

const OPTIONS: FilterOption[] = [
  { label: 'All',     value: 'all' },
  { label: 'Oils',    value: 'oils' },
  { label: 'Edibles', value: 'edibles' },
  { label: 'Drinks',  value: 'drinks' },
]

interface CategoryFilterProps {
  selected: ProductCategory | 'all'
  onChange: (cat: ProductCategory | 'all') => void
}

export function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div role="tablist" className="flex flex-wrap gap-2 mb-8">
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          role="tab"
          aria-selected={selected === opt.value}
          onClick={() => onChange(opt.value)}
          className={cn(
            'px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest border transition-colors duration-150',
            selected === opt.value
              ? 'bg-gold-500 text-surface-400 border-gold-500'
              : 'bg-transparent text-stone-400 border-border hover:border-gold-500/50 hover:text-gold-400',
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
