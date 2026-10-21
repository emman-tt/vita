const asset = (name: string) => `/images/${name}`;

export const IMAGES = {

  heroFlower: asset("face2.jpg"),

  mosaic: asset("face1.jpg"),

  cards: ["face12.jpg", "face4.jpg", "face2.jpg", "face1.jpg", "face12.png"].map(
    asset,
  ),

  banner: asset("girls.jpg"),

  product: asset("serum.png"),

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

