
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const benefits = [
    "Professional event promotion",
    "Expert social media marketing",
    "Custom marketing materials",
    "Dedicated support team",
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/5 to-accent/5 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <span className="inline-block text-primary font-semibold text-sm px-3 py-1 bg-primary/10 rounded-full">
              Transform Your Event Marketing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              Make Your College Events
              <br />
              <span className="text-primary">Stand Out</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Professional marketing solutions designed specifically for university and college events.
              From ₹500, create impactful promotions that drive attendance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors duration-200 group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors duration-200"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose MyEventMarketingTeam?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-primary" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                  alt="Team collaboration"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Elevate Your Event Marketing?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
