"use client";

import { motion } from "framer-motion";
import { Heart, Target, Users, Award } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About Sanan Pets Foods
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            We believe every pet deserves the best nutrition. That&apos;s why we craft
            premium pet food using only the finest natural ingredients, backed by
            science and made with love.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Sanan Pets Foods was founded with a simple mission: to provide pets with
                nutrition that&apos;s as good as the love they give us. After years of
                research and collaboration with veterinarians and nutritionists, we
                developed formulas that prioritize natural ingredients and complete
                nutrition.
              </p>
              <p>
                We source our ingredients from trusted suppliers who share our
                commitment to quality and sustainability. Every batch is carefully
                crafted to ensure optimal nutrition and taste that pets love.
              </p>
              <p>
                Today, thousands of pet parents trust Sanan Pets Foods to keep their furry,
                feathered, and scaled family members healthy and happy. We&apos;re proud
                to be part of their journey.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://via.placeholder.com/800x600/FFA500/FFFFFF?text=Happy+Pet"
              alt="Happy dog"
              fill
              className="object-cover"
              unoptimized
              loading="lazy"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23e5e7eb' width='800' height='600'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='24' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImage%3C/text%3E%3C/svg%3E`;
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Love & Care",
                description:
                  "Every product is made with genuine love for pets and their well-being.",
              },
              {
                icon: Target,
                title: "Quality First",
                description:
                  "We never compromise on ingredient quality or nutritional standards.",
              },
              {
                icon: Users,
                title: "Pet Community",
                description:
                  "We listen to pet parents and continuously improve based on feedback.",
              },
              {
                icon: Award,
                title: "Trusted",
                description:
                  "Veterinarian-approved formulas that pet parents can rely on.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 mb-4">
                  <value.icon className="w-8 h-8 text-amber-600 dark:text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              To provide premium, natural pet nutrition that helps pets live longer,
              healthier, and happier lives. We&apos;re committed to transparency, quality,
            and the well-being of every pet we serve.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

