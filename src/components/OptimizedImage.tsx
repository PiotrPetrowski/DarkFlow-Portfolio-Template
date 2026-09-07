import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string; // e.g. 'aspect-[16/10]' or 'aspect-video'
  priority?: boolean;
  onClick?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[16/10]',
  priority = false,
  onClick
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate responsive sizes and formats query if it's an Unsplash or static image
  const optimizedSrc = src.includes('unsplash.com') 
    ? `${src}&auto=format&fit=crop&q=80` 
    : src;

  return (
    <div 
      className={`relative overflow-hidden bg-slate-900/80 ${aspectRatio} ${className}`}
      onClick={onClick}
    >
      {/* Loading Skeleton & Blur-up Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#120f24] via-[#1a1633] to-[#120f24] animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-purple-500/20 border-t-purple-400 animate-spin" />
        </div>
      )}

      {/* Fallback state in case of image failure */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0b0a14] p-4 text-center border border-purple-500/20">
          <div className="w-10 h-10 rounded-xl bg-[#141126] flex items-center justify-center text-purple-400 mb-2 border border-white/5">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-xs text-slate-400 font-medium font-mono">Project Preview</span>
        </div>
      ) : (
        <img
          src={optimizedSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'
          }`}
        />
      )}

      {/* Subtle Dark Vignette / Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0b0a14]/80 via-transparent to-transparent" />
    </div>
  );
};
