'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const backgroundImages = [
  '/book/book1.jpg',
  '/book/book2.jpg',
  '/book/book3.jpg',
  '/book/book4.jpg',
  '/book/book5.jpg',
  '/book/book6.jpg'
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0); // Reset progress when slide changes
    
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 100;
        }
        return prevProgress + 2; // Increment by 2% every 100ms (5000ms / 50 steps = 100ms per step)
      });
    }, 100);

    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [currentImageIndex]);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
    setProgress(0); // Reset progress when manually changing slide
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % backgroundImages.length
    );
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
    setProgress(0);
  };

  return (
    <section className="relative text-white py-16 lg:py-24 flex items-center overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Discover Your Next
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                {' '}Literary Adventure
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8">
              Explore thousands of books across all genres with unbeatable prices and fast delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/category/fiction">
                <Button size="lg" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  Shop Fiction
                </Button>
              </Link>
              <Link href="/bestsellers">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-purple-900">
                  View Bestsellers
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Image
                src="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Books"
                width={300}
                height={400}
                className="rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 w-full h-auto"
              />
              <Image
                src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Books"
                width={300}
                height={400}
                className="rounded-lg shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-0 sm:mt-8 w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 group"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-8 h-3 rounded-full transition-all duration-500 ease-out ${
                index === currentImageIndex 
                  ? 'scale-110' 
                  : 'scale-100 hover:scale-105'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Background bar */}
              <div className="absolute inset-0 bg-white/30 rounded-full"></div>
              
              {/* Progress fill - horizontal */}
              {index === currentImageIndex && (
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-100 ease-linear"
                    style={{ 
                      width: `${progress}%`,
                    }}
                  ></div>
                </div>
              )}
              
              {/* Static fill for non-active dots */}
              {index !== currentImageIndex && (
                <div className="absolute inset-0 bg-white/50 rounded-full hover:bg-white/75 transition-colors duration-300"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;