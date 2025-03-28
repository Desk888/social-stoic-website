
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-stoic-black text-white pt-12 pb-8 border-t border-stoic-gray">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              {/* <span className="text-xl font-bold text-white">
                Social<span className="text-stoic-green-light">Stoic</span>
              </span> */}
              <img 
                src="/images/social.png" 
                alt="Social Stoic Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Teaching men the art of meeting beautiful women the organic way.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-stoic-green-light transition-colors">Home</Link></li>
              <li><Link to="/coaching" className="text-gray-400 hover:text-stoic-green-light transition-colors">Coaching</Link></li>
              <li><Link to="/videos" className="text-gray-400 hover:text-stoic-green-light transition-colors">Videos</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-stoic-green-light transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/coaching" className="text-gray-400 hover:text-stoic-green-light transition-colors">1-on-1 Coaching In-Person</Link></li>
              <li><Link to="/coaching" className="text-gray-400 hover:text-stoic-green-light transition-colors">1-on-1 Coaching Online</Link></li>
              <li><Link to="/coaching" className="text-gray-400 hover:text-stoic-green-light transition-colors">Residentials</Link></li>
              <li><Link to="/coaching" className="text-gray-400 hover:text-stoic-green-light transition-colors">Worldwide Bootcamps</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <Link to="https://calendly.com/thesocialstoic/coachingapplicationcall?month=2025-03" className="inline-block">
              <button className="btn-secondary py-2">Book a Consultation</button>
            </Link>
          </div>
        </div>
        
        <div className="border-t border-stoic-gray/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {year} Social Stoic. All rights reserved. Website designed by <a href="https://github.com/Desk888" className="text-stoic-green-light hover:text-stoic-green transition-colors">Desk888</a>.
          </p>
          {/* <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-stoic-green-light transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-stoic-green-light transition-colors">
              Privacy Policy
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
