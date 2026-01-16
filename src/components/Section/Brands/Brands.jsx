import React from "react";
// Lucide-e sob brand thake na, tai amra simple text + icon style use korbo
import {
  Cpu,
  Smartphone,
  Laptop,
  Watch,
  Headphones,
  Speaker,
} from "lucide-react";

const Brands = () => {
  const brands = [
    { name: "Apple", icon: <Smartphone size={24} /> },
    { name: "Samsung", icon: <Laptop size={24} /> },
    { name: "Sony", icon: <Headphones size={24} /> },
    { name: "Asus", icon: <Cpu size={24} /> },
    { name: "Logitech", icon: <Speaker size={24} /> },
    { name: "Garmin", icon: <Watch size={24} /> },
  ];

  return (
    <section className="py-16 bg-white border-y my-15 border-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[10px] md:text-[20px]  font-black text-gray-400 uppercase tracking-[0.5em]">
            Official Global Partners
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer group">
              <div className="text-gray-900 group-hover:text-blue-600 transition-colors">
                {brand.icon}
              </div>
              <span className="text-xl font-black tracking-tighter text-gray-900">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
