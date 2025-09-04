'use client';

import { motion } from 'framer-motion';
import BookCard from '@/components/books/BookCard';
import { sampleBooks } from '@/lib/sampleData';

export default function AnticipatedPage() {
  // Get all anticipated books (you can modify this logic)
  const anticipatedBooks = sampleBooks.filter(book => book.featured);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Most Anticipated Books
          </h1>
          <p className="text-xl text-gray-600">
            Discover all the books everyone&apos;s eagerly waiting for
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {anticipatedBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </div>

        {anticipatedBooks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No anticipated books found
            </h3>
            <p className="text-gray-500">
              Check back soon for exciting new releases!
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
