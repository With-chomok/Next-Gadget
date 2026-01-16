"use client";

import React, { use } from "react";
import { ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

const ItemList = ({ item }) => {
  const { name, description, price, category, image, id } = item;

  return (
    <div className=" bg-gray-50 ">
      {/* Page Header */}

      {/* Product Grid */}

      <div className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 flex flex-col">
        {/* Image Container */}
        <div className="relative aspect-4/5 overflow-hidden bg-gray-100">
          <img
            src={image}
            alt="Gadget"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:bg-blue-600 hover:text-white transition-all">
            <ShoppingCart size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col grow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest px-2 py-1 bg-blue-50 rounded-md">
              {category}
            </span>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-bold text-gray-600">4.9</span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
            {name}
          </h3>

          <p className="text-gray-500 text-sm line-clamp-2 mb-6">
            {description}
          </p>

          <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
            <div>
              <span className="text-xl font-black text-gray-900">{price}$</span>
            </div>
            <Link
              href={`/items/${id}`}
              className="px-4 py-2 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-blue-600 transition-colors">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
