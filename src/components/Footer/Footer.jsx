import React from 'react';
import Link from 'next/link';
import { Laptop, Facebook, Twitter, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Section 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-white">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Laptop className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">NextGadget</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Your one-stop destination for the latest and most advanced gadgets. We bring the future to your doorstep.
            </p>
            <div className="flex space-x-4 pt-2">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-500 transition-colors" />
              <Github className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/items" className="hover:text-blue-400 transition-colors">Browse Products</Link></li>
              <li><Link href="/login" className="hover:text-blue-400 transition-colors">Login / Register</Link></li>
              <li><Link href="/protected/add-item" className="hover:text-blue-400 transition-colors">Sell with Us</Link></li>
            </ul>
          </div>

          {/* Section 3: Categories */}
          <div>
            <h3 className="text-white font-bold mb-6">Categories</h3>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Smartphones</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Laptops & PCs</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Audio & Headphones</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Smart Watches</li>
            </ul>
          </div>

          {/* Section 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>123 Tech Avenue, Dhaka, BD</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>support@nextgadget.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} NextGadget Store. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;