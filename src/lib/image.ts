/**
 * Generates a srcSet string for responsive images
 * @param src Base image URL
 * @param widths Array of widths to generate srcSet for
 * @returns srcSet string
 */
export const generateSrcSet = (src: string, widths: number[] = [320, 640, 768, 1024, 1280, 1536]): string => {
  // If the image is from an external source (like a CDN), return the original src
  if (src.startsWith('http') || src.startsWith('//')) {
    return src;
  }

  // For local images, generate srcSet
  return widths
    .map(width => {
      // Add width parameter to the URL
      const url = new URL(src, window.location.origin);
      url.searchParams.set('w', width.toString());
      return `${url.toString()} ${width}w`;
    })
    .join(', ');
};

/**
 * Generates a sizes attribute string for responsive images
 * @param sizes Array of size configurations
 * @returns sizes string
 */
export const generateSizes = (sizes: { minWidth?: number; size: string }[] = []): string => {
  if (sizes.length === 0) {
    // Default responsive sizes
    return '(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw';
  }

  return sizes
    .map(({ minWidth, size }) => (minWidth ? `(min-width: ${minWidth}px) ${size}` : size))
    .join(', ');
};
