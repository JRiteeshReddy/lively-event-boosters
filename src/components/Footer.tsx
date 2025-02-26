
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">MyEventMarketingTeam</h3>
            <p className="text-gray-600 text-sm">
              Professional event marketing services for universities and colleges.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              {["Services", "Portfolio", "Team", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-primary text-sm transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600 text-sm">
                <Mail size={16} />
                <span>contact@myeventmarketing.team</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 text-sm">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 text-sm">
                <MapPin size={16} />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900">Newsletter</h4>
            <p className="text-gray-600 text-sm">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition-colors duration-200 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} MyEventMarketingTeam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
