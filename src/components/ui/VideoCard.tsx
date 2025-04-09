
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { extractYouTubeVideoId, getYouTubeThumbnailUrl } from '@/lib/youtube';
import { Play } from 'lucide-react';
import SmoothImage from './SmoothImage';
import { generateSrcSet, generateSizes } from '@/lib/image';

interface VideoCardProps {
  title: string;
  videoUrl: string;
  className?: string;
  onClick?: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  videoUrl,
  className,
  onClick,
}) => {
  const [imageError, setImageError] = useState(false);
  
  const videoId = extractYouTubeVideoId(videoUrl) || '';
  const thumbnailUrl = videoId ? getYouTubeThumbnailUrl(videoId, 'hq') : '';
  const fallbackThumbnail = 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80';
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (videoId) {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    }
  };

  return (
    <div 
      className={cn(
        "group overflow-hidden rounded-xl border border-stoic-gray bg-stoic-black/60 transition-all duration-300 hover:border-stoic-green/60 hover:bg-stoic-black/80",
        className
      )}
    >
      <div 
        className="relative overflow-hidden w-full aspect-video cursor-pointer"
        onClick={handleClick}
      >
        <SmoothImage
          src={imageError ? fallbackThumbnail : thumbnailUrl}
          alt={title}
          srcSet={generateSrcSet(imageError ? fallbackThumbnail : thumbnailUrl)}
          sizes={generateSizes([
            { minWidth: 1024, size: '33vw' }, // 3 columns on large screens
            { minWidth: 768, size: '50vw' }, // 2 columns on medium screens
            { size: '100vw' } // Full width on mobile
          ])}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          aspectRatio="aspect-video"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-all duration-300">
          <div className="w-14 h-14 rounded-full bg-stoic-green/90 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
            <Play className="h-6 w-6 text-white fill-white" />
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
