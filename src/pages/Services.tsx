
import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Individual Reels & Posters",
      price: "From ₹500",
      features: [
        "Reel Only (1) - ₹500",
        "Poster Only (2) - ₹500",
        "Reel + Poster (1) - ₹700",
        "Professional editing",
        "Quick turnaround"
      ]
    },
    {
      title: "Marketing Packages",
      price: "From ₹1,000",
      features: [
        "Silver Kit (₹1,000) - 2 reels, 5 posters",
        "Gold Kit (₹1,500) - 4 reels, 5 high-quality posters",
        "Diamond Kit (₹2,000) - 5 reels, 10 high-quality posters",
        "Platinum Kit (₹3,000) - Full marketing team for 3 days"
      ]
    },
    {
      title: "Additional Services",
      price: "₹500",
      features: [
        "Volunteers (₹500 per person per 5 hours)",
        "Professional event coverage",
        "Dedicated support team",
        "Travel expenses vary by location"
      ]
    }
  ];

  const handleGetStarted = () => {
    window.open("https://cal.com/j-riteesh-reddy", "_blank");
  };

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
              <button 
                onClick={handleGetStarted}
                className="w-full bg-primary text-white rounded-lg px-4 py-2 hover:bg-primary-hover transition-colors"
              >
                Contact Us Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/quote" 
            className="inline-block bg-white text-primary border border-primary rounded-lg px-6 py-3 hover:bg-primary/5 transition-colors"
          >
            View Detailed Pricing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
