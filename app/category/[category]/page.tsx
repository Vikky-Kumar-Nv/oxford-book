'use client';

import { motion } from 'framer-motion';
import BookCard from '@/components/books/BookCard';
import { sampleBooks } from '@/lib/sampleData';

export default function CategoryPage({ params }: any) {
  const categoryBooks = sampleBooks.filter(book => 
    book.category === params.category
  );

  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1);

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{categoryName}</h1>
          <p className="text-xl text-gray-600">
            Discover amazing books in the {categoryName.toLowerCase()} category
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryBooks.map((book, index) => (
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

        {categoryBooks.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No books found in this category.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}