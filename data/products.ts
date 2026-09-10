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
    slug: 'calm-500mg-cbd-oil',
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
    slug: 'relief-1000mg-cbd-oil',
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
    slug: 'sodaze-cbd-grape-gummies-200mg',
    name: 'CBD Grape Gummies 200mg',
    category: 'edibles',
    shortDescription:
      'Sodaze CBD-infused grape gummies — 200mg, 100% THC-free, locally crafted in Cape Town.',
    longDescription:
      'Sodaze CBD Grape Gummies deliver a precise, consistent dose of 200mg broad-spectrum CBD across a full pack. 100% THC-free and non-psychoactive, these locally manufactured gummies make wellness delicious.\n\nMade with real fruit flavors and no artificial colorants or preservatives — just a rich grape taste with the calming benefits of CBD. Ideal for stress relief, better sleep, and daily balance.\n\nDosing tip: Start with half a gummy and wait 60–90 minutes before taking more.',
    price: 25000,
    priceDisplay: 'R 250.00',
    strength: '200mg CBD',
    flavor: 'Grape',
    imageSrc: '',
    imageAlt: 'Sodaze CBD Grape Gummies 200mg',
    featured: true,
    inStock: true,
  },
  {
    id: 'edible-002',
    slug: 'sodaze-cbd-cherry-gummies-400mg',
    name: 'CBD Cherry Gummies 400mg',
    category: 'edibles',
    shortDescription:
      'Double-strength Sodaze cherry gummies — 400mg CBD to ease stress and encourage tranquility.',
    longDescription:
      'Sodaze CBD Cherry Gummies pack a serious 400mg of CBD per pack — double the dose for those who need more support. Rich cherry flavor, zero THC, and made with clean ingredients straight from the Mother City.\n\nThese gummies are designed to ease stress, diminish discomfort, and encourage a lasting sense of calm. Lab-tested for potency and purity.\n\nDosing tip: Start with half a gummy and wait 60–90 minutes before taking more.',
    price: 25000,
    priceDisplay: 'R 250.00',
    strength: '400mg CBD',
    flavor: 'Cherry',
    imageSrc: '',
    imageAlt: 'Sodaze CBD Cherry Gummies 400mg',
    featured: false,
    inStock: true,
  },
  {
    id: 'edible-003',
    slug: 'sodaze-tropical-gummies-200mg',
    name: 'Tropical Gummies 200mg',
    category: 'edibles',
    shortDescription:
      'Vibrant tropical Sodaze gummies bursting with mango, pineapple, and passionfruit — 200mg.',
    longDescription:
      'Sodaze Tropical Gummies bring vacation vibes to your wellness routine. Each pack contains 200mg of cannabis extract spread across chewy gummies bursting with notes of mango, pineapple, and passionfruit.\n\nCrafted in Cape Town using real fruit extracts with zero artificial colorants or preservatives. A vibrant, tasty way to unwind any time of day.\n\nDosing tip: Start with half a gummy and wait 60–90 minutes before taking more.',
    price: 25000,
    priceDisplay: 'R 250.00',
    strength: '200mg',
    flavor: 'Tropical',
    imageSrc: '',
    imageAlt: 'Sodaze Tropical Gummies 200mg',
    featured: true,
    inStock: true,
  },
  {
    id: 'edible-004',
    slug: 'sodaze-vanilla-fudge-slab-50mg',
    name: 'Vanilla Fudge Slab 50mg',
    category: 'edibles',
    shortDescription:
      'Creamy classic vanilla fudge infused with 50mg cannabis extract — a rich, indulgent treat.',
    longDescription:
      'Sodaze Vanilla Fudge Slab is a hand-crafted Cape Town treat that pairs the richness of classic vanilla fudge with 50mg of premium cannabis extract. Notes of the Tropsanto strain add a subtle tropical fruitiness to each bite.\n\nMade with no artificial colorants or preservatives. Break off a piece and enjoy as a decadent after-dinner treat or a calming afternoon indulgence.\n\nDosing tip: Start with a small piece and wait 60–90 minutes to feel the full effect.',
    price: 10000,
    priceDisplay: 'R 100.00',
    strength: '50mg',
    flavor: 'Vanilla',
    imageSrc: '',
    imageAlt: 'Sodaze Vanilla Fudge Slab 50mg',
    featured: false,
    inStock: true,
  },

  // ── DRINKS ────────────────────────────────────────────────────────
  {
    id: 'drink-001',
    slug: 'sodaze-berry-haze-soda-30mg',
    name: 'Berry Haze Soda 30mg',
    category: 'drinks',
    shortDescription:
      'Sodaze craft soda with sweet, tangy berry notes and 30mg cannabis extract — 250ml.',
    longDescription:
      'Berry Haze is Sodaze\'s fan-favourite craft soda — a beautifully balanced sweet-tangy berry blend with a gentle cannabis finish. Each 250ml can contains 30mg of premium South African cannabis extract and is made with real fruit, zero artificial colorants, and no preservatives.\n\nRefreshing, light, and crafted with pride in Cape Town. Perfect chilled straight from the can or poured over ice.\n\nSip slowly and enjoy responsibly.',
    price: 6500,
    priceDisplay: 'R 65.00',
    strength: '30mg',
    flavor: 'Berry Haze',
    weight: '250ml',
    imageSrc: '',
    imageAlt: 'Sodaze Berry Haze Craft Soda 30mg can',
    featured: true,
    inStock: true,
  },
  {
    id: 'drink-002',
    slug: 'sodaze-orange-cream-soda-30mg',
    name: 'Orange Cream Soda 30mg',
    category: 'drinks',
    shortDescription:
      'A lush orange, blood orange, grapefruit, and toasted coconut soda — 30mg, 250ml.',
    longDescription:
      'Sodaze Orange Cream Soda is a tropical twist on a South African classic. A complex blend of orange, blood orange, grapefruit, and passionfruit with hints of toasted coconut — all in a beautifully crafted 250ml can with 30mg of cannabis extract.\n\nMade with real fruit, no artificial colorants, and no preservatives. Bright, creamy, and uplifting — this one tastes like a holiday.\n\nSip slowly and enjoy responsibly.',
    price: 6500,
    priceDisplay: 'R 65.00',
    strength: '30mg',
    flavor: 'Orange Cream',
    weight: '250ml',
    imageSrc: '',
    imageAlt: 'Sodaze Orange Cream Soda 30mg can',
    featured: false,
    inStock: true,
  },
  {
    id: 'drink-003',
    slug: 'sodaze-lemon-meringue-soda-30mg',
    name: 'Lemon Meringue Soda 30mg',
    category: 'drinks',
    shortDescription:
      'Tart lemon with a sweet, creamy meringue finish — Sodaze craft soda, 30mg, 250ml.',
    longDescription:
      'Sodaze Lemon Meringue Soda captures the magic of the classic dessert in a can. Sharp, zesty lemon meets a smooth, sweet meringue essence — bright, layered, and completely refreshing.\n\nEach 250ml craft soda contains 30mg of premium South African cannabis extract, made with real ingredients and zero artificial colorants or preservatives. Crafted in Cape Town for those who enjoy the finer things.\n\nSip slowly and enjoy responsibly.',
    price: 6500,
    priceDisplay: 'R 65.00',
    strength: '30mg',
    flavor: 'Lemon Meringue',
    weight: '250ml',
    imageSrc: '',
    imageAlt: 'Sodaze Lemon Meringue Soda 30mg can',
    featured: false,
    inStock: true,
  },
]

export const featuredProducts = products.filter((p) => p.featured)
export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug)
export const getProductsByCategory = (category: ProductCategory) =>
  products.filter((p) => p.category === category)
