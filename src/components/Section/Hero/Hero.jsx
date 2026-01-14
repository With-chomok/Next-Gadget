import React from 'react';
import Link from 'next/link';
import { ShoppingBag, ArrowRight, Zap, ShieldCheck, Truck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* Background Blur Patterns (Design Element) */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 blur-3xl opacity-20 pointer-events-none">
        <div className="aspect-square w-[600px] rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <Zap size={16} className="text-blue-600 fill-blue-600" />
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">New Year Tech Sale is Live!</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            Future Tech for <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
              Modern Lifestyle
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10 leading-relaxed">
            Experience the next generation of gadgets. From high-performance laptops to 
            smart wearables, we bring you the most innovative tech at unbeatable prices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/items" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all transform hover:-translate-y-1"
            >
              Shop Collection
              <ShoppingBag size={20} />
            </Link>
            
            <Link 
              href="/#features" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 font-bold border-2 border-gray-100 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
            >
              Learn More
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center max-w-3xl mx-auto border-t border-gray-100 pt-10">
            <div className="flex items-center justify-center gap-2 text-gray-500 font-medium">
              <ShieldCheck className="text-blue-600" />
              <span>2 Year Warranty</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-500 font-medium">
              <Truck className="text-blue-600" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-500 font-medium col-span-2 md:col-span-1">
              <div className="flex -space-x-2 mr-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">U{i}</div>
                ))}
              </div>
              <span>10k+ Happy Users</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;