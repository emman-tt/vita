export type Product = {
  slug: string
  name: string

  price: number

  description: string

  gallery: string[]
}

export const PRODUCTS: Product[] = [
  {
    slug: 'aha-serum-for-exfoliating-smoothing-skin',
    name: 'AHA Serum For Exfoliating & Smoothing Skin',
    price: 120,
    description:
      'AHA Serum With 8% For Exfoliating & Smoothing Skin | 30ml e/1fl.oz AHA Serum(glycolic acid + lactic acid + citric acid) accelerates the metabolism of dead skin cells, accelerate the shedding of deposited melanin, help regulate hair follicle keratinization, and unclogs pores. With a blend of glycolic acid, lactic acid, and citric acid, this aha serum takes away the aged horniness, speeds up skin\'s metabolism, shrinks',
    gallery: [
      'https://neutriherbsghana.com/wp-content/uploads/2021/08/AHA-1-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2021/08/AHASerum-35-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2021/08/AHA-21_72958a69-0d9e-43eb-a28e-8b9cc8fd4201-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2021/08/AHA-20_b14b1111-3fe6-4f88-9ca1-39d4adc2c0fd-700x700.webp',
    ],
  },
  {
    slug: 'best-duo-for-dull-skin-with-wrinkles-dark-spots',
    name: 'Best Duo For Dull Skin with Wrinkles & Dark Spots',
    price: 270,
    description:
      'Neutriherbs Best Duo for Wrinkles & Dark Spots This Vitamin C serum + Retinol cream bundle helps to reduce dark spots, wrinkles, and fine lines while leaving your skin radiant and natural glow. What\'s Included 1 x VITAMIN C SERUM 30ml/pc Neutriherbs Vitamin C Serum combines the high-strength (20%) Vitamin C and Hyaluronic Acid, experiences the anti-aging power of our vitamin c serum & instantly gains brighter, more',
    gallery: [
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/08_ea025e1f-e1c7-4b4a-8fe0-6ad4f1a9a164-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/best_retinol_cream-retinol_night_cream-retinol_for_skin_b295328b-5065-44a5-9fee-0ceecf566d54-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/vitamin-c-for-skin-vitamin-c-serum-for-face-powerful-strength-line-reducing-concentrate_85af334c-c611-41cc-af57-cc9cf5e79d6a-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/Vitamin-C-Serum-sunspots-before-and-after_0e04bd72-e818-4d7a-b99b-beedffb6a862-700x700.jpg',
    ],
  },
  {
    slug: 'best-hyaluronic-acid-serum-for-oily-skin',
    name: 'Best Hyaluronic Acid Serum For Oily Skin',
    price: 120,
    description:
      'Best Hyaluronic Acid Serum For Oily Skin | 30ml e/1 fl. Oz. The small molecules of hyaluronic acid can deeply hydrate and plump skin to diminish fine lines and wrinkles. Meanwhile, the formula also improves skin texture and brightens skin with intense moisture and balancing abilities. Rich with antioxidants and vitamin C, it leaves your skin soft, smooth, and rejuvenated. Function Plumps and hydrates dry and dull',
    gallery: [
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/Hyaluronicacid-28-2-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/2023-HyaluronicAcidSerum-3_f9f3c0d7-0ae6-4846-8136-45f1d77065f9-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/Hyaluronicacid-30_439d1496-c1f3-4585-8385-fadca1e4678e-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/Hyaluronicacid-47_fda0dc0b-c16a-4751-86b5-e0465b603951-700x700.webp',
    ],
  },
  {
    slug: 'hyaluronic-acid-vitamin-c-serum-combo-for-dull-and-dehydrated-skin',
    name: 'Hyaluronic Acid & Vitamin C Serum Combo',
    price: 240,
    description:
      'The benefits of this serum combo: 1. Paired with hyaluronic acid, vitamin C can do the job it was made to do without having as many negative impacts on the skin. 2. Complement each other to hydrate, protect, and repair aging skin 3. Hyaluronic acid helps keep skin moisturized, while vitamin C protects from sun damage and can help fade skin discoloration. *Too much vitamin C can be irritating, trigger dryness, and',
    gallery: [
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/HA_VC-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/2_701842dd-7871-47d5-9b3c-4a9cba456684-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/VitaminCSerum-_38-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/VitaminC-35-700x700.webp',
    ],
  },
  {
    slug: 'neutriherbs-hyaluronic-acid-serumretinol-serum-for-sensitive-skin',
    name: 'Hyaluronic Acid Serum + Retinol Serum For Sensitive Skin',
    price: 240,
    description:
      'Benefits of this face serum bundle: Neutriherbs Hyaluronic Serum strengthens your skin’s moisture barrier to keep skin firm and hydrated, meanwhile, improve skin texture and brightness with intense moisture and balance. Rich with antioxidant Vitamin C, helps to rejuvenate skin with a healthy radiant glow. Neutriherbs Retinol Serum combined with a synergistic blend of Vitamin E, Softens, it can unclog pores and',
    gallery: [
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/05-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/va_ha_f1d4dd00-7108-4894-bf2f-6f4d288b5e6f-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/retinol_-_35_38f173e4-b9a4-4ab7-a4e8-e9dc18c79ef7-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/HA_Serum-17_71010605-e097-4298-b28b-592bd30a79fa-700x700.webp',
    ],
  },
  {
    slug: 'neutriherbs-retinol-cream-hyaluronic-acid-serum-for-dry-skin',
    name: 'Retinol Cream + Hyaluronic Acid Serum For Dry Skin',
    price: 270,
    description:
      'Neutriherbs Retinol Cream + Hyaluronic Acid Serum For Dry Skin – 50ml/pc What it is: Neutriherbs® Retinol Cream delivers the apple stem cell extract and the highest concentration of pro-retinol (Vitamin A) and, the fastest retinol currently available, deep into the skin\'s surface. It works quickly and effectively to smooth the look of fine lines and instantly plump with moisture-rich replenishers. Skin is left',
    gallery: [
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/10-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/Best-Retinol-face-cream-for-wrinkls-and-acne-Hyaluronic-Acid-Serum-Moisturizer_8be7ff16-164a-4844-a777-4c4cf6b9c2fa-700x700.jpg',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/best_retinol_cream-retinol_night_cream-retinol_for_skin_47662d2c-aba7-4a93-ab7d-3cd895c2768d-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/hyaluronic-acid-serum-best-hyaluronic-acid-serum-pure-hyaluronic-acid_33266d60-11c7-4ea7-8c9a-03375c11991a-700x700.webp',
    ],
  },
  {
    slug: 'neutriherbs-superior-serum-gift-kit-for-flawless-skin',
    name: 'Superior Serum Gift Kit For Flawless Skin',
    price: 360,
    description:
      'A Little Drop, A Big Change 3pcs/box, 30ml/bottle Neutriherbs Best Face Serum contains three kinds of face serum. Neutriherbs Vitamin C Serum combines the highest quality Vitamin C and Hyaluronic Acid, forged by nature, sculpted by science. It rewards you flawless glowing skin. Happiness looks, gorgeous on you. Reveal your radiant beauty with Neutriherbs Best Face Serum. Neutriherbs Hyaluronic Serum strengthens your',
    gallery: [
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/Face_Serum_Set-7_b42b7268-a1d5-4b55-8dcf-7d81e09e7458-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/Face_Serum_Set-4_f779984a-bd69-4550-9706-26361d826c03-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/Retinol-53-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/SerumTemplate-21_824eea3f-6533-4e7e-a914-a7792e7e5719-700x700.webp',
    ],
  },
  {
    slug: 'neutriherbs-best-duo-for-aging-acne-prone-skin',
    name: 'Best Duo For Aging & Acne-prone Skin',
    price: 270,
    description:
      'Neutriherbs® Best Duo For Aging & Acne-prone Skin Skin type: acne & aging & oily skin Need: anti-aging, acne prevention, improve facial oiliness Texture: Serum & Cream Use: day-night Bundle includes : retinol cream*1+retinol serum*1 Retinol Cream – 50ml/pc Neutriherbs Retinol Cream delivers the highest concentration of Retinol (Vitamin A) deep into the skin’s surface quickly and effectively. The retinol cream helps',
    gallery: [
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/09-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/Retinol_cream-13_83611661-4406-426c-bff4-94b8a79fae3e-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/Retinol_cream-14_79c11b49-5cd4-4720-b816-fd9e84d03840-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/retinol-night-cream-retinol-cream-review-retinol-cream-before-and-after_1024x1024_6e662afd-8693-4c1d-a66d-d7f04296094f-700x700.webp',
    ],
  },
  {
    slug: 'niacinamide-serum-for-brightening-and-oil-control',
    name: 'Niacinamide Serum For Brightening And Oil-control',
    price: 120,
    description:
      'Niacinamide Serum For Brightening And Oil-control 丨30ml e/1fl.oz. Niacinamide Serum formulated with Niacinamide, and natural soothing ingredients like Witch Hazel and Chamomilla Recutita. Niacinamide Serum actively works to control excess facial oil, minimize pores and prevent breakouts. Niacinamide serum can also help soothe skin, relieve redness and fade acne marks. Additionally, this niacinamide serum is packed',
    gallery: [
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/NiacinamideSerum-27-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/NiacinamideSerum-25-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/Niacinamide-19-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/Niacinamide-25_c84cb734-a2ba-48d4-bdfa-e73c5f627a28-700x700.webp',
    ],
  },
  {
    slug: 'retinol-serum-helps-defend-against-signs-of-aging',
    name: 'Retinol Serum — Defend Against Signs Of Aging',
    price: 120,
    description:
      'Retinol Serum Helps Defend Against Signs Of Aging | 30ml e/1 fl. oz. Retinol serum, combined with a synergistic blend of vitamin E, softens the skin. The retinol serum can also unclog pores and clear up acne. Achieve refreshed skin the moment you use retinol serum. *Tips This is very common and normal that your skin gets more dry and flaky when you use retinol serum. Start retinol serum slow and only use once maybe',
    gallery: [
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/Retinol-38-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/2023-RetinolSerum-4-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/Retinol-39-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/Retinol-41-700x700.webp',
    ],
  },
  {
    slug: 'salicylic-acid-exfoliating-serum',
    name: 'Salicylic Acid Exfoliating Serum',
    price: 150,
    description:
      'Salicylic Acid Serum For Acne Prone Skin | 30ml /1 fl oz. With an enhanced formulation of 2% BHAs and Glycolic Acid, salicylic acid serum can stimulate cell renewal while fighting acne, blackheads, and whiteheads. Camellia Japonica and tea tree extracts soothe and calm redness and irritated skin. Function Unclog Pores: Help to unclog pores and increase cell renewal, providing more clear and healthy-looking skin.',
    gallery: [
      'https://neutriherbsghana.com/wp-content/uploads/2026/08/SalicylicAcidExfoliatingSerum-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2026/08/Salicylic_Acid_Exfoliating_Serum-25-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2026/08/Salicylic_acid_serum-8-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2026/08/Salicylic_acid_serum-10-700x700.webp',
    ],
  },
  {
    slug: 'vitamin-c-brightening-glow-trio',
    name: 'Vitamin C Brightening & Glow Trio',
    price: 410,
    description:
      'VITAMIN C BRIGHTENING & GLOW TRIO FOR DULL AND UNEVEN TEXTURE The antioxidant power of Vitamin C makes it one of the most essential skincare ingredients. It rejuvenates the skin, making it appear more youthful while reducing signs of aging such as uneven tone, discoloration, and fine lines and wrinkles. Vitamin C also helps guard your skin against the damage that can be caused by the sun’s UV rays. By promoting',
    gallery: [
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/VitaminCGiftEye-4-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/VitaminCGiftEye-6-700x700.webp',
      'https://neutriherbsghana.com/wp-content/uploads/2025/12/VitaminCGiftEye-5-700x700.webp',
    ],
  },
]

export const findProduct = (slug?: string) =>
  PRODUCTS.find((p) => p.slug === slug)

export const relatedProducts = (slug: string, count = 4) =>
  PRODUCTS.filter((p) => p.slug !== slug).slice(0, count)

