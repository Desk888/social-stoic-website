
import React from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import SmoothImage from '@/components/ui/SmoothImage';
import { generateSrcSet, generateSizes } from '@/lib/image';

interface HeroSectionProps {
  imageUrl?: string;
  title: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  imageUrl = "https://socialstoic-assets-cdn.s3.eu-west-2.amazonaws.com/socialstoichero.webp", 
  title, 
  description 
}) => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image and overlay */}
      <div className="absolute inset-0 z-0">
        <SmoothImage
          src={imageUrl}
          alt="Hero background"
          priority={true} // Hero image should load immediately
          srcSet={generateSrcSet(imageUrl)}
          sizes={generateSizes([
            { minWidth: 1536, size: '1536px' },
            { minWidth: 1280, size: '1280px' },
            { minWidth: 1024, size: '1024px' },
            { minWidth: 768, size: '768px' },
            { size: '100vw' }
          ])}
          className="w-full h-full object-cover md:object-center object-[75%_center] opacity-90"
          aspectRatio="aspect-[16/9]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>
      
      {/* Hero content */}
      <div className="container-custom relative z-10 pt-24 md:pt-24">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-px w-10 bg-stoic-green"></div>
            <span className="font-primaryItalic text-stoic-green uppercase tracking-wider text-sm font-medium">Social Stoic Coaching</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-primaryItalic font-bold text-white mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {title}
          </h1>
          
          <p className="text-base md:text-xl text-gray-300 mb-8 opacity-0 animate-fade-in max-w-2xl" style={{ animationDelay: '0.4s' }}>
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="https://calendly.com/thesocialstoic/coachingapplicationcall?month=2025-03" className="btn-primary text-black">
              Book a Consultation
            </Link>
            <Link to="/coaching" className="btn-secondary">
              Coaching
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - only show on desktop */}
      {!isMobile && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-[slide-in_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
