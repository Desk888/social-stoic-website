
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SmoothImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  blurHash?: boolean;
}

const SmoothImage: React.FC<SmoothImageProps> = ({
  src,
  alt,
  className,
  aspectRatio = "aspect-video",
  blurHash = true,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Reset states when src changes
    setIsLoaded(false);
    setIsError(false);
    
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setIsError(true);
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div className={cn("overflow-hidden relative", aspectRatio, className)}>
      {/* Blur placeholder */}
      {!isLoaded && blurHash && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        {...props}
      />
      
      {/* Error state */}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default SmoothImage;
