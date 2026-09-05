import { cn } from '@/lib/utils'
import type { ProductCategory } from '@/data/products'

interface BadgeProps {
  category: ProductCategory
  className?: string
}

const styles: Record<ProductCategory, string> = {
  oils:    'bg-amber-500/10 text-amber-400 border-amber-500/20',
  edibles: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  drinks:  'bg-blue-500/10 text-blue-400 border-blue-500/20',
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
        'inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest',
        styles[category],
        className,
      )}
    >
      {labels[category]}
    </span>
  )
}
