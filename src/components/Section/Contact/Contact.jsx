import React from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Contact Us</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Get In Touch With Us</h3>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            Have questions about a product or need technical support? Our team is here to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Info Cards (Left Side) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 bg-blue-50 rounded-[2rem] border border-blue-100 group hover:bg-blue-600 transition-all duration-500">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Phone className="text-blue-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">Call Us</h4>
              <p className="text-gray-600 group-hover:text-blue-50 transition-colors">+880 1234 567 890</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 group hover:bg-gray-900 transition-all duration-500">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Mail className="text-gray-900" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">Email Support</h4>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors">support@nextgadget.com</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="text-blue-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Office Hours</h4>
              <p className="text-gray-600 text-sm">Sat - Thu: 10 AM - 8 PM</p>
              <p className="text-gray-600 text-sm italic mt-1">Friday: Closed</p>
            </div>
          </div>

          {/* Contact Form (Right Side) */}
          <div className="lg:col-span-8 bg-white border border-gray-100 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Product Inquiry" 
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300 font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="How can we help you?" 
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300 font-medium resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full md:w-auto px-12 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3 active:scale-95"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Optional: Map Section */}
        <div className="mt-16 h-96 w-full rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-gray-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.227744211151!2d90.38883737533!3d23.73925697867803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8966860959f%3A0x1d3a54d3e527f31e!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;