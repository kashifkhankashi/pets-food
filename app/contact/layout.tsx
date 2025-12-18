import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Sanan Pets Foods Premium Pet Nutrition",
  description:
    "Get in touch with Sanan Pets Foods. We're here to help with all your pet nutrition questions.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

