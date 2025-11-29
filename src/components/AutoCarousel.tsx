import { useState, useEffect, useRef } from "react";

interface AutoCarouselProps {
  children: React.ReactNode[];
  autoPlayInterval?: number;
  showDots?: boolean;
}

const AutoCarousel = ({ children, autoPlayInterval = 5000, showDots = true }: AutoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    }, autoPlayInterval);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [children.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    startAutoPlay(); // Restart auto-play when manually navigating
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    startAutoPlay(); // Restart auto-play when manually navigating
  };

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      
      {/* Replace dots with Next button */}
      {!showDots && (
        <div className="flex justify-center mt-6">
          <button
            onClick={nextSlide}
            className="bg-ocean-light text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 hover:bg-ocean-primary active:scale-95 focus:bg-ocean-primary"
          >
            Next Review
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </button>
        </div>
      )}
      
      {/* Keep dots as optional fallback */}
      {showDots && (
        <div className="flex justify-center mt-6 space-x-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-ocean-primary scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoCarousel;