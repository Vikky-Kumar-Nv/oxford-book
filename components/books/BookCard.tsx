'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/components/providers/CartProvider';
import type { Book } from '@/lib/sampleData';

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(book);
  };

  const discountPercentage = Math.round(((book.mrp - book.discountedPrice) / book.mrp) * 100);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link href={`/book/${book.id}`}>
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col max-w-sm">
          {/* Book Cover */}
          <div className="relative aspect-[1/1] overflow-hidden">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3">
              {discountPercentage > 0 && (
                <Badge className="bg-red-500 hover:bg-red-500 text-white">
                  {discountPercentage}% OFF
                </Badge>
              )}
            </div>
            <div className="absolute top-3 right-3">
              {book.featured && (
                <Badge className="bg-purple-600 hover:bg-purple-600 text-white">
                  Featured
                </Badge>
              )}
            </div>
          </div>

          {/* Book Info */}
          <div className="p-3 flex-grow flex flex-col">
            <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-purple-600 transition-colors">
              {book.title}
            </h3>
            
            <p className="text-xs text-gray-600 mb-2">by {book.author}</p>

            {/* Rating */}
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(book.rating) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-600 ml-1">
                {book.rating} ({book.reviewCount})
              </span>
            </div>

            {/* Price and Add to Cart */}
            <div className="mt-auto">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-base font-bold text-purple-600">
                    ₹{book.discountedPrice}
                  </span>
                  {book.mrp > book.discountedPrice && (
                    <span className="text-xs text-gray-500 line-through ml-1">
                      ₹{book.mrp}
                    </span>
                  )}
                </div>
              </div>
              
              <Button
                onClick={handleAddToCart}
                className="w-full bg-fuchsia-800 hover:bg-purple-900 text-white transition-colors duration-300"
                size="sm"
                disabled={!book.inStock}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {book.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BookCard;