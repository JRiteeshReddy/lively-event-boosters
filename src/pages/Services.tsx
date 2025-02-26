
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Marketing Reels",
      price: "₹500",
      features: ["15-30 second duration", "Professional editing", "Music and effects", "2 revisions included"]
    },
    {
      title: "Event Posters",
      price: "₹1,000",
      features: ["Professional design", "Print-ready files", "Social media versions", "3 revisions included"]
    },
    {
      title: "Complete Package",
      price: "₹5,000",
      features: ["Marketing reels", "Event posters", "Social media management", "Email marketing", "24/7 support"]
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 mb-12">Choose the perfect marketing package for your event</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-4xl font-bold text-primary mb-6">{service.price}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-primary text-white rounded-lg px-4 py-2 hover:bg-primary-hover transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
