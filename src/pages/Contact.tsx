
import React from 'react';

const Contact = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Let's discuss your event marketing needs</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <a
            href="https://cal.com/j-riteesh-reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white rounded-lg px-6 py-3 text-lg font-semibold hover:bg-primary-hover transition-colors mb-8"
          >
            Schedule a Google Meet Consultation
          </a>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:jriteeshreddy@gmail.com" className="text-primary hover:text-primary-hover">
                jriteeshreddy@gmail.com
              </a>
            </div>
            
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <a href="tel:+918971055817" className="text-primary hover:text-primary-hover">
                +91 89710 55817
              </a>
            </div>
            
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Bengalore, Karnataka, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
