"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Card from "./ui/Card";

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
        <Card hover className="overflow-hidden h-full group">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="p-6 bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
            <div className="flex items-center text-amber-600 dark:text-amber-500 font-semibold group-hover:gap-2 transition-all">
              <span>Explore</span>
              <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-2" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}

