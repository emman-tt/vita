const asset = (name: string) => `/images/${name}`;

export const IMAGES = {
  /** flower-masked portrait on the hero's left */
  heroFlower: asset("face2.jpg"),
  /** one photo that flows across the 3x3 hero collage (sliced in Hero.tsx) */
  mosaic: asset("face1.jpg"),
  /** right-edge carousel cards */
  cards: ["face3.jpg", "face4.jpg", "face5.jpg", "face6.jpg", "fasho.png"].map(
    asset,
  ),
  /** full-width banner in the solutions section */
  banner: asset("girls.jpg"),
  /** illustrated serum bottle (organic section centerpiece) */
  product: asset("serum.png"),
  /**
   * Products page — real product shots hot-linked from neutriherbsghana.com
   * (the 430x430 WooCommerce renditions, publicly cacheable). The last four
   * slots are still `null` = shimmer placeholder; drop in local files or add
   * more remote URLs whenever.
   */
  productImages: [
    "https://neutriherbsghana.com/wp-content/uploads/2021/08/AHA-1-430x430.webp",
    "https://neutriherbsghana.com/wp-content/uploads/2025/12/08_ea025e1f-e1c7-4b4a-8fe0-6ad4f1a9a164-430x430.webp",
    "https://neutriherbsghana.com/wp-content/uploads/2025/12/Hyaluronicacid-28-2-430x430.webp",
    "https://neutriherbsghana.com/wp-content/uploads/2025/12/HA_VC-430x430.webp",
    "https://neutriherbsghana.com/wp-content/uploads/2025/12/05-430x430.webp",
    "https://neutriherbsghana.com/wp-content/uploads/2025/12/10-430x430.webp",
    "https://neutriherbsghana.com/wp-content/uploads/2025/12/Face_Serum_Set-7_b42b7268-a1d5-4b55-8dcf-7d81e09e7458-430x430.webp",
    "https://neutriherbsghana.com/wp-content/uploads/2025/12/09-430x430.webp",
    "https://neutriherbsghana.com/wp-content/uploads/2025/12/NiacinamideSerum-27-430x430.webp",
    "https://neutriherbsghana.com/wp-content/uploads/2025/12/Retinol-38-430x430.webp",
    "https://neutriherbsghana.com/wp-content/uploads/2026/08/SalicylicAcidExfoliatingSerum-430x430.webp",
    "https://neutriherbsghana.com/wp-content/uploads/2025/12/VitaminCGiftEye-4-430x430.webp",
    null,
    null,
    null,
    null,
  ] as (string | null)[],
};
