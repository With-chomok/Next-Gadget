import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { id: 1, name: "Ariful Islam", role: "Tech Enthusiast", text: "NextGadget-er delivery speed khub fast! Ami iPhone 15 Pro Max niyechi, product ekebare original.", avatar: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Sumaiya Khan", role: "Graphics Designer", text: "Official warranty-r bishoyta khub bhalo laglo. Service khub friendly.", avatar: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Rahul Das", role: "Software Engineer", text: "Mechanical keyboard-er collection eikhaney best. Highly recommended!", avatar: "https://i.pravatar.cc/150?u=3" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900">What Our Clients Say</h2>
          <p className="text-gray-500 mt-4 font-medium">Over 50,000+ happy customers worldwide.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div key={rev.id} className="p-8 bg-gray-50 rounded-[2.5rem] relative hover:-translate-y-2 transition-transform duration-300">
              <Quote className="text-blue-200 absolute top-8 right-8" size={40} />
              <p className="text-gray-600 mb-8 italic">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <img src={rev.avatar} alt={rev.name} className="w-12 h-12 rounded-full ring-2 ring-blue-100" />
                <div>
                  <h4 className="font-bold text-gray-900 leading-none">{rev.name}</h4>
                  <p className="text-xs text-blue-600 mt-1">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;