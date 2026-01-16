import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=800" 
                alt="Our Tech Store" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Background Decor */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-600 rounded-[3rem] -z-0"></div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">About NextGadget</h2>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Providing the best tech experience since 2015.
              </h3>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              We started with a simple goal: to make premium technology accessible to everyone. Today, we are one of the leading gadget retailers, known for our quality and customer support.
            </p>

            <ul className="space-y-4">
              {['Official Brand Warranty', 'Fastest Delivery in 24 Hours', 'No Cost EMI Facilities'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-gray-800">
                  <CheckCircle2 className="text-blue-600" /> {item}
                </li>
              ))}
            </ul>

            <button className="px-10 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-xl">
              Learn Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;