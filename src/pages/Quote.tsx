
import React, { useState } from 'react';
import { toast } from "@/components/ui/use-toast";

const Quote = () => {
  const [total, setTotal] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    // Individual Services
    { name: "Reel Only (1)", price: 500, category: "Individual Services" },
    { name: "Poster Only (2)", price: 500, category: "Individual Services" },
    { name: "Reel + Poster (1)", price: 700, category: "Individual Services" },
    
    // Marketing Packages
    { 
      name: "Silver Kit", 
      price: 1000, 
      category: "Marketing Packages",
      description: "2 reels, 5 posters"
    },
    { 
      name: "Gold Kit", 
      price: 1500, 
      category: "Marketing Packages",
      description: "4 reels, 5 high-quality posters"
    },
    { 
      name: "Diamond Kit", 
      price: 2000, 
      category: "Marketing Packages",
      description: "5 reels, 10 high-quality posters"
    },
    { 
      name: "Platinum Kit", 
      price: 3000, 
      category: "Marketing Packages",
      description: "A full marketing team for 3 days. Covers all marketing needs (reels, posters, strategy, and execution)"
    },
    
    // Additional Services
    { 
      name: "Volunteers (Per person per 5 hours)", 
      price: 500, 
      category: "Additional Services" 
    }
  ];

  const handleServiceToggle = (serviceName: string, price: number) => {
    setSelectedServices(prev => {
      const newSelection = prev.includes(serviceName)
        ? prev.filter(s => s !== serviceName)
        : [...prev, serviceName];
      
      // Recalculate total
      const newTotal = services.reduce((sum, service) => 
        newSelection.includes(service.name) ? sum + service.price : sum, 0
      );
      setTotal(newTotal);
      
      return newSelection;
    });
  };

  const handleContactUs = () => {
    if (selectedServices.length === 0) {
      toast({
        title: "No services selected",
        description: "Please select at least one service before proceeding.",
        variant: "destructive",
      });
      return;
    }

    // Open Cal.com scheduling page
    window.open("https://cal.com/j-riteesh-reddy", "_blank");
  };

  const groupedServices = services.reduce((groups, service) => {
    if (!groups[service.category]) {
      groups[service.category] = [];
    }
    groups[service.category].push(service);
    return groups;
  }, {} as Record<string, typeof services>);

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">MyEventMarketingTeam – Pricing Packages</h1>
          <p className="text-xl text-gray-600 mb-12">Select the services you need</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          {Object.entries(groupedServices).map(([category, categoryServices]) => (
            <div key={category} className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{category}</h2>
              <div className="space-y-4">
                {categoryServices.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                    onClick={() => handleServiceToggle(service.name, service.price)}
                  >
                    <div className="flex items-center flex-1">
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service.name)}
                        onChange={() => {}}
                        className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <div className="ml-3">
                        <label className="text-gray-700 font-medium">{service.name}</label>
                        {service.description && (
                          <p className="text-sm text-gray-500">{service.description}</p>
                        )}
                      </div>
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
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold text-gray-900">Total Estimate:</span>
              <span className="text-2xl font-bold text-primary">₹{total}</span>
            </div>
            
            <button
              onClick={handleContactUs}
              className="w-full bg-primary text-white rounded-lg px-4 py-3 hover:bg-primary-hover transition-colors"
            >
              Contact Us Now
            </button>
            
            <p className="mt-4 text-sm text-gray-500 text-center">
              Note: Additional charges will apply for travel expenses based on location
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
