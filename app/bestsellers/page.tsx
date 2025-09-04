'use client';

import { motion } from 'framer-motion';
import BookCard from '@/components/books/BookCard';
import { sampleBooks } from '@/lib/sampleData';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const item: any = {
  hidden: (dir: number) => ({ opacity: 0, x: dir < 0 ? -60 : 60 }),
  show: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 260, damping: 24 }
  }
};

export default function BestSellersPage() {
  const bestSellers = sampleBooks.filter((book) => book.featured);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative min-h-screen bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50"
    >
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-300/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Premium hero card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 rounded-3xl bg-gradient-to-br from-purple-700 via-fuchsia-600 to-pink-600 text-white p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute right-10 top-10 h-40 w-40 rounded-full bg-white blur-3xl" />
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-yellow-300 blur-3xl" />
          </div>
          <div className="relative">
            <span className="inline-block text-xs md:text-sm tracking-wider uppercase bg-white/15 border border-white/20 rounded-full px-3 py-1 mb-4 backdrop-blur">
              Curated Collection
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Best Sellers
            </h1>
            <p className="mt-3 md:mt-4 text-fuchsia-100 text-lg max-w-2xl">
              Discover the books readers can’t put down—handpicked and highly rated.
            </p>
          </div>
        </motion.div>

        {/* Grid with scroll animations */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {bestSellers.map((book, index) => (
            <motion.div
              key={book.id}
              variants={item}
              custom={index % 2 === 0 ? -1 : 1}
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </motion.div>

        {/* Subtle callout */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 md:mt-20 text-center"
        >
          <p className="text-sm text-gray-500">
            Updated weekly • Prices and availability may vary
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}