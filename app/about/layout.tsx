import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Sanan Pets Foods Premium Pet Nutrition",
  description:
    "Learn about Sanan Pets Foods's mission to provide premium, natural pet nutrition for healthier, happier pets.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

