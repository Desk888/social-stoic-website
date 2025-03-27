
import React from 'react';
import { cn } from '@/lib/utils';

interface VideoCardProps {
  title: string;
  videoId: string;
  thumbnail: string;
  className?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  videoId,
  thumbnail,
  className,
}) => {
  return (
    <div 
      className={cn(
        "group overflow-hidden rounded-xl border border-stoic-gray bg-stoic-black/60 transition-all duration-300 hover:border-stoic-green/60 hover:bg-stoic-black/80",
        className
      )}
    >
      <div className="relative overflow-hidden w-full aspect-video cursor-pointer">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-all duration-300">
          <div className="w-14 h-14 rounded-full bg-stoic-green/90 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-medium text-white group-hover:text-stoic-green-light transition-colors line-clamp-2">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default VideoCard;
