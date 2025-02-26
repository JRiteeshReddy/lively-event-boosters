
import React, { useState } from 'react';
import { toast } from "@/components/ui/use-toast";

const Quote = () => {
  const [total, setTotal] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    { name: "Marketing Reel", price: 500 },
    { name: "Event Poster", price: 1000 },
    { name: "Social Media Package", price: 2000 },
    { name: "Email Campaign", price: 1500 },
    { name: "Full Marketing Package", price: 5000 }
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

  const handleGetQuote = () => {
    if (selectedServices.length === 0) {
      toast({
        title: "No services selected",
        description: "Please select at least one service to get a quote.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Quote generated!",
      description: `Your estimated total is ₹${total}. We'll contact you with more details.`,
    });
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get an Instant Quote</h1>
          <p className="text-xl text-gray-600 mb-12">Select the services you need</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                onClick={() => handleServiceToggle(service.name, service.price)}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service.name)}
                    onChange={() => {}}
                    className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label className="ml-3 text-gray-700">{service.name}</label>
                </div>
                <span className="text-gray-900 font-semibold">₹{service.price}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold text-gray-900">Total Estimate:</span>
              <span className="text-2xl font-bold text-primary">₹{total}</span>
            </div>
            
            <button
              onClick={handleGetQuote}
              className="w-full bg-primary text-white rounded-lg px-4 py-3 hover:bg-primary-hover transition-colors"
            >
              Get Detailed Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
