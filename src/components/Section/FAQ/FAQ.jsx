import React from 'react';

const FAQ = () => {
  const faqs = [
    { q: "How long does delivery take?", a: "Inside Dhaka within 24 hours, outside Dhaka 2-3 days." },
    { q: "Do you provide official warranty?", a: "Yes, all our global gadgets come with 12 months official warranty." },
    { q: "Can I return a product?", a: "We have a 7-day easy return policy for any manufacturing defects." },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-black text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center list-none">
                {faq.q}
                <span className="text-blue-600 group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;