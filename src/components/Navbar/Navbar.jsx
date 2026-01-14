"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Laptop, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const isLoggedIn = false; 

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Laptop className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                NextGadget
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link href="/items" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">All Products</Link>
            
            {isLoggedIn && (
              <Link href="/protected/add-item" className="text-gray-600 hover:text-blue-600 font-medium">Add Item</Link>
            )}

            <div className="h-6 w-[1px] bg-gray-200"></div>

            <Link href="/login" className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all font-medium shadow-sm">
              <User className="w-4 h-4" />
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 pb-4 px-4 space-y-2">
          <Link href="/" className="block py-2 text-gray-600 font-medium">Home</Link>
          <Link href="/items" className="block py-2 text-gray-600 font-medium">All Products</Link>
          {isLoggedIn && (
            <Link href="/protected/add-item" className="block py-2 text-gray-600 font-medium">Add Item</Link>
          )}
          <Link href="/login" className="block py-2 text-blue-600 font-semibold underline">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;