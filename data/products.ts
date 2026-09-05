export type ProductCategory = 'oils' | 'edibles' | 'drinks'

export interface Product {
  id: string
  slug: string
  name: string
  category: ProductCategory
  shortDescription: string
  longDescription: string
  price: number
  priceDisplay: string
  strength?: string
  flavor?: string
  weight?: string
  imageSrc: string
  imageAlt: string
  featured: boolean
  inStock: boolean
}

export const products: Product[] = [
  // ── OILS ──────────────────────────────────────────────────────────
  {
    id: 'oil-001',
    slug: 'greenleaf-calm-500mg-cbd-oil',
    name: 'Calm 500mg CBD Oil',
    category: 'oils',
    shortDescription:
      'A gentle, full-spectrum CBD oil ideal for beginners seeking daily balance and calm.',
    longDescription:
      'Our Calm 500mg oil is cold-pressed from organically grown hemp and suspended in premium MCT coconut oil for optimal absorption. Each 30ml bottle delivers approximately 16mg of CBD per dropper, making it easy to find your ideal dose.\n\nFree from artificial additives, pesticides, and THC. Third-party lab tested for purity and potency, so you know exactly what you are getting with every drop.\n\nIdeal for: daily stress relief, improved sleep quality, and general wellness support.',
    price: 29999,
    priceDisplay: 'R 299.99',
    strength: '500mg CBD',
    weight: '30ml',
    imageSrc: '',
    imageAlt: 'Calm 500mg CBD Oil bottle',
    featured: true,
    inStock: true,
  },
  {
    id: 'oil-002',
    slug: 'greenleaf-relief-1000mg-cbd-oil',
    name: 'Relief 1000mg CBD Oil',
    category: 'oils',
    shortDescription:
      'High-potency broad-spectrum CBD oil for experienced users needing targeted relief.',
    longDescription:
      'Double the strength of our Calm formula, Relief 1000mg is designed for those with higher tolerance or more demanding wellness needs. Each dropper delivers approximately 33mg of CBD for powerful, fast-acting support.\n\nOur broad-spectrum extract retains beneficial terpenes and minor cannabinoids while remaining THC-free. Suspended in organic MCT oil for superior bioavailability.\n\nIdeal for: chronic discomfort, post-exercise recovery, and deeper relaxation.',
    price: 54999,
    priceDisplay: 'R 549.99',
    strength: '1000mg CBD',
    weight: '30ml',
    imageSrc: '',
    imageAlt: 'Relief 1000mg CBD Oil bottle',
    featured: false,
    inStock: true,
  },

  // ── EDIBLES ───────────────────────────────────────────────────────
  {
    id: 'edible-001',
    slug: 'greenleaf-mixed-berry-cbd-gummies',
    name: 'Mixed Berry CBD Gummies',
    category: 'edibles',
    shortDescription:
      'Delicious mixed-berry gummies with 25mg CBD per piece — wellness made tasty.',
    longDescription:
      'These soft, chewy gummies are a delightful way to incorporate CBD into your daily routine. Each piece contains a precise 25mg of broad-spectrum CBD, making dosing simple and consistent.\n\nMade with real fruit extracts for natural flavour — no artificial dyes or flavours. Vegan-friendly, gluten-free, and third-party tested.\n\nPerfect for on-the-go relaxation or a calming end to your day.',
    price: 34999,
    priceDisplay: 'R 349.99',
    flavor: 'Mixed Berry',
    weight: '300g (12 pieces)',
    imageSrc: '',
    imageAlt: 'Mixed Berry CBD Gummies',
    featured: true,
    inStock: true,
  },
  {
    id: 'edible-002',
    slug: 'greenleaf-dark-chocolate-cbd-bar',
    name: 'Dark Chocolate CBD Bar',
    category: 'edibles',
    shortDescription:
      '72% dark chocolate infused with 100mg CBD — an indulgent way to unwind.',
    longDescription:
      'Premium 72% single-origin dark chocolate, expertly paired with 100mg of pure CBD isolate. Break off a square or two for a decadent and relaxing treat any time of day.\n\nSourced from ethically traded cacao and crafted in small batches for consistent quality. Each bar contains approximately 10mg CBD per block.\n\nRich, smooth, and the perfect guilt-free indulgence for chocolate lovers.',
    price: 24999,
    priceDisplay: 'R 249.99',
    flavor: 'Dark Chocolate',
    weight: '80g',
    imageSrc: '',
    imageAlt: 'Dark Chocolate CBD Bar',
    featured: false,
    inStock: true,
  },
  {
    id: 'edible-003',
    slug: 'greenleaf-wildflower-cbd-honey-sticks',
    name: 'Wildflower CBD Honey Sticks',
    category: 'edibles',
    shortDescription:
      'Pure wildflower honey sticks with 10mg CBD each — stir into tea or enjoy straight.',
    longDescription:
      'Each honey stick contains pure wildflower honey blended with 10mg of broad-spectrum CBD. Simply snap and squeeze into your favourite hot beverage, drizzle over yoghurt, or enjoy straight from the stick.\n\nRaw, unfiltered honey retains natural enzymes and antioxidants, while CBD adds a gentle wellness boost. No artificial sweeteners, no preservatives.\n\nA perfect pantry staple for a naturally sweet and calming daily ritual.',
    price: 19999,
    priceDisplay: 'R 199.99',
    flavor: 'Wildflower Honey',
    weight: 'Pack of 10',
    imageSrc: '',
    imageAlt: 'Wildflower CBD Honey Sticks',
    featured: false,
    inStock: true,
  },
  {
    id: 'edible-004',
    slug: 'greenleaf-vanilla-cbd-cookies',
    name: 'Vanilla CBD Cookies',
    category: 'edibles',
    shortDescription:
      'Soft-baked vanilla shortbread cookies with 20mg CBD each — a guilt-free treat.',
    longDescription:
      'These golden shortbread cookies are baked fresh with real vanilla bean and infused with 20mg of broad-spectrum CBD per cookie. Soft in the centre, lightly crisp on the edges — the perfect treat.\n\nMade with simple, wholesome ingredients: butter, flour, vanilla, and CBD. No artificial flavours or colours. Baked in a certified kitchen.\n\nEnjoy one as an afternoon snack or before bed for a relaxing end to the day.',
    price: 27999,
    priceDisplay: 'R 279.99',
    flavor: 'Vanilla',
    weight: 'Pack of 6',
    imageSrc: '',
    imageAlt: 'Vanilla CBD Cookies',
    featured: true,
    inStock: true,
  },

  // ── DRINKS ────────────────────────────────────────────────────────
  {
    id: 'drink-001',
    slug: 'greenleaf-citrus-burst-cbd-drink',
    name: 'Citrus Burst CBD Drink',
    category: 'drinks',
    shortDescription:
      'Sparkling citrus-flavored CBD drink with 25mg per can — refreshing and uplifting.',
    longDescription:
      'A fizzy, zesty blend of lemon, lime and grapefruit, each can delivers 25mg of water-soluble CBD for fast absorption. Crisp and refreshing, it is the perfect midday pick-me-up without the caffeine crash.\n\nZero sugar, zero artificial sweeteners. Lightly carbonated for that satisfying effervescence. Each ingredient is natural and vegan-friendly.\n\nChilled or over ice, Citrus Burst is sunshine in a can.',
    price: 8999,
    priceDisplay: 'R 89.99',
    flavor: 'Citrus',
    weight: '330ml',
    imageSrc: '',
    imageAlt: 'Citrus Burst CBD Drink can',
    featured: false,
    inStock: true,
  },
  {
    id: 'drink-002',
    slug: 'greenleaf-wild-berry-cbd-drink',
    name: 'Wild Berry CBD Drink',
    category: 'drinks',
    shortDescription:
      'A smooth berry-blend CBD beverage with 25mg per can — nature in every sip.',
    longDescription:
      'Bursting with the flavours of strawberry, raspberry and blueberry, Wild Berry is a lightly sparkling CBD drink designed to help you unwind without slowing you down.\n\nEach 330ml can contains 25mg of water-soluble CBD, sweetened naturally with a hint of fruit. No added sugar, no artificial colours. Vegan and gluten-free.\n\nGrab one after a workout, at your desk, or whenever you need a moment of calm.',
    price: 8999,
    priceDisplay: 'R 89.99',
    flavor: 'Wild Berry',
    weight: '330ml',
    imageSrc: '',
    imageAlt: 'Wild Berry CBD Drink can',
    featured: false,
    inStock: true,
  },
  {
    id: 'drink-003',
    slug: 'greenleaf-cool-mint-cbd-drink',
    name: 'Cool Mint CBD Drink',
    category: 'drinks',
    shortDescription:
      'Crisp mint-infused still CBD water with 20mg per bottle — hydrate and relax.',
    longDescription:
      'Still, pure water infused with cool spearmint and 20mg of water-soluble CBD. Light, clean and refreshing — perfect for those who prefer a subtler flavour profile.\n\nNo carbonation, no calories, no sugar. Just clean hydration with a calming twist. Each bottle uses premium filtered water and natural mint extract.\n\nCarry it through your day for consistent, gentle wellness support on the go.',
    price: 7999,
    priceDisplay: 'R 79.99',
    flavor: 'Cool Mint',
    weight: '500ml',
    imageSrc: '',
    imageAlt: 'Cool Mint CBD Drink bottle',
    featured: false,
    inStock: true,
  },
]

export const featuredProducts = products.filter((p) => p.featured)
export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug)
export const getProductsByCategory = (category: ProductCategory) =>
  products.filter((p) => p.category === category)
