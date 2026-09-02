'use client'

import { cn } from '@/lib/utils'
import type { ProductCategory } from '@/data/products'

type FilterOption = { label: string; value: ProductCategory | 'all' }

const OPTIONS: FilterOption[] = [
  { label: 'All Products', value: 'all' },
  { label: 'Oils',         value: 'oils' },
  { label: 'Edibles',      value: 'edibles' },
  { label: 'Drinks',       value: 'drinks' },
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
            'px-5 py-2 rounded-full text-sm font-medium transition-colors duration-150 border',
            selected === opt.value
              ? 'bg-brand-600 text-white border-brand-600'
              : 'bg-white text-zinc-600 border-zinc-200 hover:border-brand-400 hover:text-brand-700',
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
