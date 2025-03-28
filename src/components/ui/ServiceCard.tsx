
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  link,
  className,
}) => {
  return (
    <div 
      className={cn(
        "group flex flex-col h-full overflow-hidden rounded-xl border border-stoic-gray bg-stoic-black/60 transition-all duration-300 hover:border-stoic-green/60 hover:bg-stoic-black/80 cursor-pointer",
        className
      )}
    >
      <div className="relative overflow-hidden w-full aspect-[4/3]">
        <div className="absolute inset-0 bg-gradient-to-t from-stoic-black to-transparent z-10 opacity-50"></div>
        <img
          src={imageSrc}
          alt={title}
          loading="lazy"
          height={3540}
          width={2360}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col flex-grow p-6">
        <h3 className="font-primaryItalic text-xl font-semibold text-white mb-3 group-hover:text-stoic-green-light transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-6 flex-grow">{description}</p>
        <Link to={link} className="self-start">
          <span className="inline-flex items-center font-medium text-stoic-green group-hover:text-stoic-green-light">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
