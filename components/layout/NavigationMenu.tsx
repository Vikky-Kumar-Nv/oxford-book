'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Category {
  name: string;
  slug: string;
  subcategories?: string[];
}

const categories: Category[] = [
  {
    name: 'Fiction',
    slug: 'fiction',
    subcategories: ['Romance', 'Mystery', 'Thriller', 'Fantasy', 'Sci-Fi', 'Horror']
  },
  {
    name: 'Non-Fiction',
    slug: 'non-fiction',
    subcategories: ['Biography', 'History', 'Science', 'Technology', 'Business', 'Self-Help']
  },
  {
    name: 'Classics',
    slug: 'classics',
    subcategories: ['British Classics', 'American Classics', 'World Literature']
  },
  {
    name: "Children's Books",
    slug: 'children',
    subcategories: ['Picture Books', 'Early Readers', 'Middle Grade', 'Young Adult']
  },
  {
    name: 'Philosophy',
    slug: 'philosophy',
    subcategories: ['Ancient Philosophy', 'Modern Philosophy', 'Ethics', 'Logic']
  },
  {
    name: 'Poetry',
    slug: 'poetry',
    subcategories: ['Classic Poetry', 'Modern Poetry', 'Contemporary Poetry', 'Love Poetry', 'Nature Poetry']
  },
  {
    name: 'Spiritual',
    slug: 'spiritual',
    subcategories: ['Christianity', 'Islam', 'Hinduism', 'Buddhism', 'Meditation', 'Spirituality']
  },
  {
    name: 'Cookbooks',
    slug: 'cookbooks',
    subcategories: ['Indian Cuisine', 'International Cuisine', 'Baking & Desserts', 'Healthy Cooking', 'Quick & Easy']
  },
  {
    name: 'Art',
    slug: 'art',
    subcategories: ['Art History', 'Photography', 'Drawing & Painting', 'Design', 'Architecture']
  }
];

interface NavigationMenuProps {
  mobile?: boolean;
}

const NavigationMenu = ({ mobile = false }: NavigationMenuProps) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (slug: string) => {
    setOpenCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(slug)) {
        newSet.delete(slug);
      } else {
        newSet.add(slug);
      }
      return newSet;
    });
  };

  const allSubcategories = categories.flatMap(cat => cat.subcategories || []);

  if (mobile) {
    return (
      <div className="p-4 space-y-4">
        {categories.map((category) => {
          const isOpen = openCategories.has(category.slug);
          const subcats = category.slug === 'fiction' ? allSubcategories : category.subcategories;
          return (
            <div key={category.slug}>
              <div
                onClick={() => toggleCategory(category.slug)}
                className="flex items-center justify-between py-2 text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
              >
                <Link href={`/category/${category.slug}`} className="flex-1">
                  {category.name}
                </Link>
                {subcats && subcats.length > 0 && (
                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                )}
              </div>
              {isOpen && subcats && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4 mt-2 space-y-1 overflow-hidden"
                >
                  {subcats.map((sub) => (
                    <Link
                      key={sub}
                      href={`/category/${category.slug}/${sub.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      className="block py-1 text-sm text-gray-600 hover:text-purple-600"
                    >
                      {sub}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <nav className="flex justify-center space-x-8">
      {categories.map((category) => (
        <div
          key={category.slug}
          className="relative"
          onMouseEnter={() => setHoveredCategory(category.slug)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <Link
            href={`/category/${category.slug}`}
            className="flex items-center space-x-1 py-2 text-gray-700 hover:text-purple-600 transition-colors"
          >
            <span>{category.name}</span>
            {category.subcategories && <ChevronDown className="w-4 h-4" />}
          </Link>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {hoveredCategory === category.slug && category.subcategories && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
              >
                {category.subcategories.map((subcategory) => (
                  <Link
                    key={subcategory}
                    href={`/category/${category.slug}/${subcategory.toLowerCase().replace(' ', '-')}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  >
                    {subcategory}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  );
};

export default NavigationMenu;