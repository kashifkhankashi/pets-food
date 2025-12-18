import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sanan Pets Foods - Premium Pet Nutrition | Natural Pet Food",
  description:
    "Premium natural pet food for dogs, cats, and small animals. Crafted with love and care for healthier, happier pets.",
  keywords: "pet food, dog food, cat food, natural pet food, premium pet nutrition",
  openGraph: {
    title: "Sanan Pets Foods - Premium Pet Nutrition",
    description: "Premium natural pet food for dogs, cats, and small animals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
