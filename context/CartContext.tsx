'use client'

import { createContext, useContext, useReducer, useEffect, useCallback } from 'react'
import type { Product } from '@/data/products'

export interface CartItem {
  product: Product
  quantity: number
}

interface CartState {
  items: CartItem[]
}

type CartAction =
  | { type: 'ADD'; product: Product }
  | { type: 'REMOVE'; slug: string }
  | { type: 'UPDATE_QTY'; slug: string; quantity: number }
  | { type: 'CLEAR' }
  | { type: 'LOAD'; items: CartItem[] }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'LOAD':
      return { items: action.items }
    case 'ADD': {
      const existing = state.items.find((i) => i.product.slug === action.product.slug)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.slug === action.product.slug
              ? { ...i, quantity: i.quantity + 1 }
              : i,
          ),
        }
      }
      return { items: [...state.items, { product: action.product, quantity: 1 }] }
    }
    case 'REMOVE':
      return { items: state.items.filter((i) => i.product.slug !== action.slug) }
    case 'UPDATE_QTY':
      if (action.quantity <= 0) {
        return { items: state.items.filter((i) => i.product.slug !== action.slug) }
      }
      return {
        items: state.items.map((i) =>
          i.product.slug === action.slug ? { ...i, quantity: action.quantity } : i,
        ),
      }
    case 'CLEAR':
      return { items: [] }
    default:
      return state
  }
}

interface CartContextValue {
  items: CartItem[]
  totalItems: number
  totalCents: number
  addToCart: (product: Product) => void
  removeFromCart: (slug: string) => void
  updateQuantity: (slug: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'greenleaf-cart'

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  // Rehydrate from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        dispatch({ type: 'LOAD', items: JSON.parse(saved) })
      }
    } catch {
      // ignore
    }
  }, [])

  // Persist to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    } catch {
      // ignore
    }
  }, [state.items])

  const addToCart = useCallback((product: Product) => dispatch({ type: 'ADD', product }), [])
  const removeFromCart = useCallback((slug: string) => dispatch({ type: 'REMOVE', slug }), [])
  const updateQuantity = useCallback(
    (slug: string, quantity: number) => dispatch({ type: 'UPDATE_QTY', slug, quantity }),
    [],
  )
  const clearCart = useCallback(() => dispatch({ type: 'CLEAR' }), [])

  const totalItems = state.items.reduce((s, i) => s + i.quantity, 0)
  const totalCents = state.items.reduce((s, i) => s + i.product.price * i.quantity, 0)

  return (
    <CartContext.Provider
      value={{ items: state.items, totalItems, totalCents, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
