
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Coaching', path: '/coaching' },
    { name: 'Videos', path: '/videos' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-stoic-black/95 backdrop-blur-md py-3 shadow-md' 
          : 'bg-transparent py-5'
      )}
    >
      <nav className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 z-30">
          <span className="text-xl font-bold text-white whitespace-nowrap">
            Social<span className="text-stoic-green-light">Stoic</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'animated-underline text-white font-medium hover:text-stoic-green-light transition-colors',
                location.pathname === link.path && 'text-stoic-green-light'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="btn-primary py-2 ml-2"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-30 text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span
              className={cn(
                "absolute h-0.5 w-6 bg-white transform transition-all duration-300",
                isOpen ? "rotate-45 top-2" : "top-0"
              )}
            />
            <span
              className={cn(
                "absolute h-0.5 bg-white transform transition-all duration-300",
                isOpen ? "opacity-0 w-0" : "opacity-100 w-6 top-2"
              )}
            />
            <span
              className={cn(
                "absolute h-0.5 w-6 bg-white transform transition-all duration-300",
                isOpen ? "-rotate-45 top-2" : "top-4"
              )}
            />
          </div>
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-stoic-black z-20 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-xl text-white hover:text-stoic-green-light transition-colors',
                  location.pathname === link.path && 'text-stoic-green-light'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="btn-primary py-2 w-full text-center mt-6"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
