
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  imageUrl?: string;
  title: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  imageUrl = "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1920&q=80", 
  title, 
  description 
}) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image and overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>
      
      {/* Hero content */}
      <div className="container-custom relative z-10 pt-24">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-px w-10 bg-stoic-green"></div>
            <span className="text-stoic-green uppercase tracking-wider text-sm font-medium">Social Stoic</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 opacity-0 animate-fade-in max-w-2xl" style={{ animationDelay: '0.4s' }}>
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/contact" className="btn-primary">
              Book a Consultation
            </Link>
            <Link to="/coaching" className="btn-secondary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-[slide-in_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
