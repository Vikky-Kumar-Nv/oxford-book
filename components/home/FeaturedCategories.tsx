'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Heart, Zap, Users, Brain, Sparkles, Coffee, Palette } from 'lucide-react';

const categories = [
  { name: 'Fiction', slug: 'fiction', icon: BookOpen, color: 'from-purple-500 to-pink-500' },
  { name: 'Romance', slug: 'romance', icon: Heart, color: 'from-pink-500 to-red-500' },
  { name: 'Thriller', slug: 'thriller', icon: Zap, color: 'from-orange-500 to-red-500' },
  { name: 'Biography', slug: 'biography', icon: Users, color: 'from-blue-500 to-purple-500' },
  { name: 'Philosophy', slug: 'philosophy', icon: Brain, color: 'from-indigo-500 to-purple-500' },
  { name: 'Fantasy', slug: 'fantasy', icon: Sparkles, color: 'from-purple-500 to-blue-500' },
  { name: 'Cookbooks', slug: 'cookbooks', icon: Coffee, color: 'from-green-500 to-teal-500' },
  { name: 'Art', slug: 'art', icon: Palette, color: 'from-pink-500 to-purple-500' }
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover your favorite genres and explore new literary worlds
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/category/${category.slug}`}>
                  <div className="group relative bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-purple-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-center text-gray-900 group-hover:text-purple-600 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;