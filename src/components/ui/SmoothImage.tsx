
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SmoothImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  blurHash?: boolean;
  sizes?: string;
  srcSet?: string;
  priority?: boolean; // For critical above-the-fold images
}

const SmoothImage: React.FC<SmoothImageProps> = ({
  src,
  alt,
  className,
  aspectRatio = "aspect-video",
  blurHash = true,
  sizes,
  srcSet,
  priority = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Reset states when src changes
    setIsLoaded(false);
    setIsError(false);

    if (!priority) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && imgRef.current) {
              // Set the src only when the image comes into view
              if (srcSet) {
                imgRef.current.srcset = srcSet;
              }
              imgRef.current.src = src;
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '50px 0px', // Start loading 50px before it comes into view
          threshold: 0.01
        }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        observer.disconnect();
      };
    }
  }, [src, srcSet, priority]);

  return (
    <div className={cn("overflow-hidden relative", aspectRatio, className)}>
      {/* Blur placeholder */}
      {!isLoaded && blurHash && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Actual image */}
      <img
        ref={imgRef}
        src={priority ? src : undefined}
        srcSet={priority ? srcSet : undefined}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
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
