import React from 'react';
import { Users, Package, Globe, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    { id: 1, label: 'Happy Customers', value: '50k+', icon: <Users className="text-blue-600" /> },
    { id: 2, label: 'Products Sold', value: '120k+', icon: <Package className="text-blue-600" /> },
    { id: 3, label: 'Global Stores', value: '15+', icon: <Globe className="text-blue-600" /> },
    { id: 4, label: 'Awards Won', value: '25+', icon: <Award className="text-blue-600" /> },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center space-y-2">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-50 rounded-2xl">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-3xl font-black text-gray-900">{stat.value}</h3>
              <p className="text-gray-500 font-medium text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;