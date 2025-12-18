import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cat Food - Premium Nutrition for Cats | PawPure",
  description:
    "Discover our premium cat food collection. Natural, grain-free, and vet-approved formulas for all life stages.",
};

export default function CatFoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


