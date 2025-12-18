"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  price: string;
  rating?: number;
  delay?: number;
}

export default function ProductCard({
  name,
  description,
  image,
  price,
  rating = 5,
  delay = 0,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="overflow-hidden flex flex-col h-full relative hover:shadow-lg transition-shadow duration-300">
        {/* Premium badge */}
        <div className="absolute top-4 right-4 z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: delay + 0.2, type: "spring" }}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg"
          >
            <Sparkles className="w-3 h-3" />
            Premium
          </motion.div>
        </div>

        {/* Image with overlay on hover */}
        <div className="relative h-48 overflow-hidden bg-muted">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-125"
            unoptimized
            loading="lazy"
            onError={(e) => {
              // Fallback to SVG placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('data:image')) {
                target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23FFA500' width='400' height='400'/%3E%3Ctext fill='%23FFFFFF' font-family='sans-serif' font-size='20' font-weight='bold' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(name)}%3C/text%3E%3C/svg%3E`;
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-2">
            <h3 className="text-xl font-bold text-card-foreground mb-1 group-hover:text-primary transition-colors">
              {name}
            </h3>
            {/* Rating */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating
                      ? "fill-amber-400 text-amber-400"
                      : "text-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>

          <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
            {description}
          </p>

          {/* Price */}
          <div className="pt-4 border-t border-border">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              {price}
            </span>
            <span className="text-xs text-muted-foreground ml-1">
              per bag
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
