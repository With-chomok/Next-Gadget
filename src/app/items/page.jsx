import ItemList from "@/components/item/ItemList";
import { Filter, Search } from "lucide-react";
import React from "react";
const getItems = async () => {
  // NEXT_PUBLIC_SITE_URL ba direct localhost use kora dorkar server-side fetch-er jonno
  const res = await fetch("https://next-gadget-seven.vercel.app/items.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.items || [];
};
const items = async () => {
  const allItems = await getItems();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      {/* heading setion  */}
      <div className="bg-white border-b mb-10">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Explore All Gadgets
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Browse through our extensive collection of the latest technology and
            gadgets. Find the perfect device that fits your needs.
          </p>
        </div>
      </div>
      {/* Filter & Search Bar Section */}

      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search gadgets..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium transition-all">
            <Filter size={18} />
            Filter
          </button>
          <select className="px-5 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium outline-none">
            <option>Newest First</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
        {allItems.map((item) => (
          <ItemList key={item.id} item={item}></ItemList>
        ))}
      </div>
    </div>
  );
};

export default items;
