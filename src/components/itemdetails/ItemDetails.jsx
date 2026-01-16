import React from "react";
import {
  ShoppingCart,
  ShieldCheck,
  Truck,
  Star,
  Zap,
  CreditCard,
} from "lucide-react";
import Link from "next/link";

const ItemDetails = async ({ params }) => {
  // 1. Params theke ID ta nite hobe
  const { id } = await params;

  // 2. JSON data fetch kora
  const res = await fetch("https://next-gadget-seven.vercel.app/items.json", {
    cache: "no-store",
  });
  const data = await res.json();

  // 3. ID match kore single item find kora
  const item = data.items.find((p) => p.id === id);

  // 4. Item na paile error handle kora
  if (!item) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Product Not Found!</h1>
        <Link href="/items" className="text-blue-600 underline mt-2">
          Back to Shop
        </Link>
      </div>
    );
  }

  // 5. Item theke property gulo destructure kora jate niche sorasori use kora jay
  const { name, description, price, image, category } = item;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      {/* 1. Left: Image Gallery Section (Span 7) */}
      <div className="lg:col-span-7 space-y-4">
        <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm aspect-square relative group">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-6 left-6">
            <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
              New Release
            </span>
          </div>
        </div>

        {/* Small Spec Grid Placeholder */}
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-24 bg-white border border-gray-100 rounded-2xl"></div>
          ))}
        </div>
      </div>

      {/* 2. Right: Details & Purchase Section (Span 5) */}
      <div className="lg:col-span-5 flex flex-col pt-4">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg uppercase">
              {category}
            </span>
            <div className="flex items-center gap-1 text-yellow-400 ml-2">
              <Star size={14} fill="currentColor" />
              <span className="text-gray-900 text-xs font-bold">
                4.8 (2.5k reviews)
              </span>
            </div>
          </div>

          <h1 className="text-4xl font-black text-gray-900 mb-4 leading-[1.1]">
            {name}
          </h1>

          <p className="text-gray-500 leading-relaxed text-lg">{description}</p>
        </div>

        {/* Price Card */}
        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm mb-8">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-4xl font-black text-gray-900">${price}</span>
            <span className="text-gray-400 line-through text-lg">
              ${price + 100}
            </span>
          </div>
          <p className="text-green-600 text-sm font-bold flex items-center gap-1">
            <Zap size={14} fill="currentColor" /> Save $100 today
          </p>

          <div className="mt-6 space-y-4">
            <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-100">
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            <button className="w-full bg-gray-900 text-white font-bold py-4 rounded-2xl hover:bg-black transition-all">
              Buy Now
            </button>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 rounded-2xl border border-dashed border-gray-200">
            <Truck className="text-blue-600 mt-1" size={20} />
            <div>
              <h4 className="text-sm font-bold text-gray-900 text-left">
                Express Delivery
              </h4>
              <p className="text-xs text-gray-500 text-left">
                Free delivery in Dhaka.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-2xl border border-dashed border-gray-200">
            <ShieldCheck className="text-blue-600 mt-1" size={20} />
            <div>
              <h4 className="text-sm font-bold text-gray-900 text-left">
                Official Warranty
              </h4>
              <p className="text-xs text-gray-500 text-left">
                12 Months replacement warranty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
