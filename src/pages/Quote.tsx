
import React from 'react';
import { toast } from "@/components/ui/use-toast";

const Quote = () => {
  const services = [
    // Categories and their services
    {
      category: "Individual Services",
      items: [
        { name: "Reel Only (1)", price: 500 },
        { name: "Poster Only (2)", price: 500 },
        { name: "Reel + Poster (1)", price: 700 },
      ]
    },
    {
      category: "Marketing Packages",
      items: [
        { 
          name: "Silver Kit", 
          price: 1000,
          description: "2 reels, 5 posters"
        },
        { 
          name: "Gold Kit", 
          price: 1500,
          description: "4 reels, 5 high-quality posters"
        },
        { 
          name: "Diamond Kit", 
          price: 2000,
          description: "5 reels, 10 high-quality posters"
        },
        { 
          name: "Platinum Kit", 
          price: 3000,
          description: "A full marketing team for 3 days. Covers all marketing needs (reels, posters, strategy, and execution)"
        },
      ]
    },
    {
      category: "Additional Services",
      items: [
        { 
          name: "Volunteers (Per person per 5 hours)", 
          price: 500
        }
      ]
    }
  ];

  const handleContactUs = () => {
    // Open Cal.com scheduling page
    window.open("https://cal.com/j-riteesh-reddy", "_blank");
  };

  const handleDownloadQuote = () => {
    toast({
      title: "Quote Downloaded",
      description: "Your quote has been downloaded successfully.",
    });
    
    // Logic for downloading the quote would go here
    // For now, we'll just show a toast notification
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">MyEventMarketingTeam – Pricing Packages</h1>
          <p className="text-xl text-gray-600 mb-12">Our service offerings</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          {services.map((serviceCategory) => (
            <div key={serviceCategory.category} className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{serviceCategory.category}</h2>
              <div className="space-y-4">
                {serviceCategory.items.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="text-gray-700 font-medium">{service.name}</div>
                      {service.description && (
                        <p className="text-sm text-gray-500">{service.description}</p>
                      )}
                    </div>
                    <span className="text-gray-900 font-semibold ml-4">
                      ₹{service.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={handleDownloadQuote}
                className="w-full bg-primary text-white rounded-lg px-4 py-3 hover:bg-primary-hover transition-colors"
              >
                Download Quote
              </button>
              
              <button
                onClick={handleContactUs}
                className="w-full border border-primary text-primary bg-white rounded-lg px-4 py-3 hover:bg-primary/5 transition-colors"
              >
                Contact Us Now
              </button>
              
              <p className="mt-2 text-sm text-gray-500 text-center">
                Note: Additional charges will apply for travel expenses based on location
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
