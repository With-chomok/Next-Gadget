import ItemDetails from '@/components/itemdetails/ItemDetails';
import { ArrowLeft } from 'lucide-react'; // Link lucide theke hobe na, next/link theke hobe
import Link from 'next/link'; 
import React from 'react';

const getItems = async () => {
  const res = await fetch("http://localhost:3000/items.json", {
    cache: "no-store", 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.items || [];
};

// Next.js params pass kore page component e
const page = async ({ params }) => {
  // 1. URL theke id ta nite hobe 
  const { id } = await params;
  
  // 2. Sob item fetch kora
  const allItems = await getItems();

  // 3. matching ID wala item-ta khuje ber kora
  const singleItem = allItems.find((item) => item.id === id);

  // Error handling jodi item na paoa jay
  if (!singleItem) {
    return <div className="p-20 text-center">Item not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Top Navigation Bar */}
      <div className="bg-white/80 backdrop-blur-md sticky top-16 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center">
          <Link
            href="/items"
            className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to All Gadgets
          </Link>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8 lg:py-16">
        
        <ItemDetails params={params} item={singleItem} />
      </main>
    </div>
  );
};

export default page;