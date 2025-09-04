'use client';

import { motion } from 'framer-motion';
import { Truck, Clock, Shield, Package } from 'lucide-react';

export default function ShippingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shipping Information
          </h1>
          <p className="text-xl text-gray-600">
            Fast, reliable delivery to your doorstep
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Shipping Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Options</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-purple-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Truck className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Standard Delivery</h3>
                </div>
                <p className="text-gray-600 mb-2">5-7 business days</p>
                <p className="text-2xl font-bold text-green-600">FREE</p>
                <p className="text-sm text-gray-500 mt-2">On orders above ₹499</p>
              </div>
              
              <div className="border border-purple-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Express Delivery</h3>
                </div>
                <p className="text-gray-600 mb-2">2-3 business days</p>
                <p className="text-2xl font-bold text-purple-600">₹99</p>
                <p className="text-sm text-gray-500 mt-2">Available in major cities</p>
              </div>
            </div>
          </motion.div>

          {/* Shipping Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Policy</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Package className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Order Processing</h3>
                  <p className="text-gray-600">Orders are processed within 1-2 business days. You'll receive a confirmation email with tracking information once your order ships.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Secure Packaging</h3>
                  <p className="text-gray-600">All books are carefully packaged to ensure they arrive in perfect condition. We use protective materials to prevent damage during transit.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Truck className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Delivery Areas</h3>
                  <p className="text-gray-600">We deliver across India. Remote areas may require additional 1-2 days for delivery.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Shipping Rates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Rates</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Order Value</th>
                    <th className="text-left py-3 px-4">Standard Delivery</th>
                    <th className="text-left py-3 px-4">Express Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Below ₹499</td>
                    <td className="py-3 px-4">₹49</td>
                    <td className="py-3 px-4">₹149</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">₹499 - ₹999</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">FREE</td>
                    <td className="py-3 px-4">₹99</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Above ₹999</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">FREE</td>
                    <td className="py-3 px-4">₹99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}