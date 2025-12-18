import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog Food - Premium Nutrition for Dogs | PawPure",
  description:
    "Discover our premium dog food collection. Natural, grain-free, and vet-approved formulas for all life stages.",
};

export default function DogFoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

