"use client";

import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { dogProducts } from "@/lib/data";

export default function DogFoodPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors flex items-center">
            <Home className="w-4 h-4" />
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 dark:text-white font-medium">Dog Food</span>
        </nav>
      </div>

      {/* Header */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Premium Dog Food
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Crafted with love and premium ingredients, our dog food formulas
            provide complete nutrition for dogs at every stage of life. From
            energetic puppies to wise seniors, we&apos;ve got your furry friend covered.
          </p>
        </motion.div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dogProducts.map((product, index) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

