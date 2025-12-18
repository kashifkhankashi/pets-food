"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  delay?: number;
}

export default function CategoryCard({
  title,
  description,
  image,
  href,
  delay = 0,
}: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
    >
      <Link href={href}>
        <Card className="overflow-hidden h-full group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              unoptimized
              loading="lazy"
              onError={(e) => {
                // Fallback to SVG placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('data:image')) {
                  const colors: Record<string, string> = {
                    'Dog Food': 'FFA500',
                    'Cat Food': 'FF6B6B',
                    'Small Animal Food': '4ECDC4',
                  };
                  const color = colors[title] || '95A5A6';
                  target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23${color}' width='800' height='600'/%3E%3Ctext fill='%23FFFFFF' font-family='sans-serif' font-size='32' font-weight='bold' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(title)}%3C/text%3E%3C/svg%3E`;
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="p-6 bg-card">
            <h3 className="text-2xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground mb-4">{description}</p>
            <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
              <span>Explore</span>
              <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-2" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}

