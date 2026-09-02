import { cn } from '@/lib/utils'
import type { ProductCategory } from '@/data/products'

interface BadgeProps {
  category: ProductCategory
  className?: string
}

const styles: Record<ProductCategory, string> = {
  oils:    'bg-amber-100 text-amber-700',
  edibles: 'bg-emerald-100 text-emerald-700',
  drinks:  'bg-blue-100 text-blue-700',
}

const labels: Record<ProductCategory, string> = {
  oils:    'Oil',
  edibles: 'Edible',
  drinks:  'Drink',
}

export function Badge({ category, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-full px-3 py-0.5 text-xs font-semibold uppercase tracking-wide',
        styles[category],
        className,
      )}
    >
      {labels[category]}
    </span>
  )
}
