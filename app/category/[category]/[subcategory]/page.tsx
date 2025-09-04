'use client';

import { motion } from 'framer-motion';
import BookCard from '@/components/books/BookCard';
import { sampleBooks } from '@/lib/sampleData';

export default function SubcategoryPage({ params }: any) {
  // Filter books by category and subcategory
  const subcategoryBooks = sampleBooks.filter(book => 
    book.category === params.category
  );

  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1);
  const subcategoryName = params.subcategory.split('-').map((word: string) => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

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
          <nav className="text-sm text-gray-600 mb-4">
            <span>Home</span> / <span>{categoryName}</span> / <span className="text-purple-600">{subcategoryName}</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{subcategoryName}</h1>
          <p className="text-xl text-gray-600">
            Explore our collection of {subcategoryName.toLowerCase()} books
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subcategoryBooks.map((book, index) => (
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

        {subcategoryBooks.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No books found in this subcategory.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}