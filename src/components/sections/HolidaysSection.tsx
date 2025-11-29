import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
// import memorableHolidaysIntro from "@/assets/memorable-holidays-intro.jpg";
import pristinebeachesImage from "@/assets/holidays/beach.png";
import expertCouplesDivingImage from "@/assets/expert-couples-diving.jpg";
import beachRelaxImage from "@/assets/beach-relaxation.jpg";
import sharingStoriesImage from "@/assets/holidays/sharingStories.png";
import sunsetImage from "@/assets/sunset-watching.jpg";

// Holiday section component with manual carousel navigation
const HolidaysSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const slides = [
    {
      image: pristinebeachesImage,
      caption: "Creating precious memories on pristine beaches",
    },
    {
      image: expertCouplesDivingImage,
      caption: "Expert diving adventures exploring vibrant marine life",
    },
    {
      image: beachRelaxImage,
      caption: "Finding perfect moments of tranquility",
    },
    {
      image: sharingStoriesImage,
      caption: "Sharing stories under endless skies",
    },
    {
      image: sunsetImage,
      caption: "Watching nature's daily masterpiece unfold",
    },
  ];

  const introText = "A great holidays is to share moments and truly connect with loved ones that last a lifetime.";

  // Typewriting effect - runs continuously and repeats
  useEffect(() => {
    const startTypewriting = () => {
      setIsTyping(true);
      setDisplayedText("");
      let i = 0;
      const timer = setInterval(() => {
        if (i < introText.length) {
          setDisplayedText(introText.slice(0, i + 1));
          i++;
        } else {
          setIsTyping(false);
          clearInterval(timer);
          // Restart after 3 seconds
          setTimeout(startTypewriting, 3000);
        }
      }, 50);
    };

    startTypewriting();
  }, []); // Empty dependency array - runs once but repeats internally

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Removed auto-advance - now manual only

  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-ocean-pearl">
      <div className="container mx-auto px-4">
        {/* Responsive Device Frame with Carousel */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop: iPad Frame */}
          <div className="hidden md:block">
            <div className="relative bg-gray-900 rounded-3xl p-6 shadow-2xl">
              {/* iPad Bezel and change the image size by this aspect ratio*/}
              <div className="relative bg-black rounded-2xl overflow-hidden" style={{ aspectRatio: "4/2.4" }}>
                {/* Screen Content */}
                <div className="relative w-full h-full">
                  {/* Static Header - Always Visible */}
                  <div className="absolute top-8 left-0 right-0 z-20 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <Heart className="w-7 h-7 mr-3 text-white drop-shadow-lg" />
                      <span className="text-white font-medium text-xl drop-shadow-lg" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                        Memorable Holidays
                      </span>
                    </div>
                    <div className="max-w-3xl mx-auto px-8">
                      <p className="text-white text-xl md:text-2xl text-center leading-relaxed" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                        {displayedText}
                        {isTyping && <span className="animate-pulse">|</span>}
                      </p>
                    </div>
                  </div>

                  {slides.map((slide, index) => (
                    <div key={index} className={`absolute inset-0 smooth-transition ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
                      <img src={slide.image} alt={`Holiday moment ${index + 1}`} className="w-full h-full object-cover" />
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" /> */}

                      {/* Regular slides with captions */}
                      <div className="absolute bottom-20 left-0 right-0 p-8">
                        <p className="text-white text-xl md:text-2xl font-medium text-center" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}>
                          {slide.caption}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Next button */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <Button onClick={nextSlide} variant="accent" size="lg" className="text-lg px-8 py-6">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: iPhone Frame */}
          <div className="block md:hidden">
            <div className="relative bg-gray-900 rounded-3xl p-3 shadow-2xl max-w-sm mx-auto">
              {/* iPhone Bezel and change the image size by this aspect ratio*/}
              <div className="relative bg-black rounded-2xl overflow-hidden" style={{ aspectRatio: "9/14.4" }}>
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full"></div>

                {/* Screen Content */}
                <div className="relative w-full h-full">
                  {/* Static Header - Always Visible */}
                  <div className="absolute top-6 left-0 right-0 z-20 text-center">
                    <div className="flex items-center justify-center mb-3">
                      <Heart className="w-5 h-5 mr-2 text-white drop-shadow-lg" />
                      <span className="text-white font-medium text-base drop-shadow-lg" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                        Memorable Holidays
                      </span>
                    </div>
                    <div className="max-w-xs mx-auto px-4">
                      <p className="text-white text-lg text-center leading-relaxed" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                        {displayedText}
                        {isTyping && <span className="animate-pulse">|</span>}
                      </p>
                    </div>
                  </div>

                  {slides.map((slide, index) => (
                    <div key={index} className={`absolute inset-0 smooth-transition ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
                      <img src={slide.image} alt={`Holiday moment ${index + 1}`} className={`w-full h-full object-cover ${index === 0 ? "object-[20%]" : "object-center"}`} />
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" /> */}

                      {/* Regular slides with captions */}
                      <div className="absolute bottom-20 left-0 right-0 p-6">
                        <p className="text-white text-lg font-medium text-center" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}>
                          {slide.caption}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Next button */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <Button onClick={nextSlide} variant="accent" size="lg" className="text-lg px-6 py-4">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolidaysSection;
