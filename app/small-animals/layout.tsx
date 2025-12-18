import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Small Animal Food - Premium Nutrition for Small Pets | PawPure",
  description:
    "Discover our premium small animal food collection. Specialized nutrition for rabbits, birds, and other small pets.",
};

export default function SmallAnimalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

