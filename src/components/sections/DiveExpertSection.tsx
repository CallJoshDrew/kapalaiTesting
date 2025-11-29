import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Waves } from "lucide-react";
import underwaterImage from "@/assets/underwater-diving.jpg";
import marineLifeImage from "@/assets/marine-life.jpg";
import couplesUnderwaterImage from "@/assets/couples-underwater-exploration.jpg";

const DiveExpertSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const slides = [
    {
      image: underwaterImage,
      title: "Amazing Underwater Views",
      description: "Discover the breathtaking beauty beneath the surface",
    },
    {
      image: marineLifeImage,
      title: "Vibrant Marine Life",
      description: "Encounter diverse species in their natural habitat",
    },
    {
      image: couplesUnderwaterImage,
      title: "Shared Adventures",
      description: "Create unforgettable memories together",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handleManualNext = useCallback(() => {
    // Clear existing interval
    if (intervalId) {
      clearInterval(intervalId);
    }

    // Advance slide
    nextSlide();

    // Start new interval
    const newInterval = setInterval(nextSlide, 2000);
    setIntervalId(newInterval);
  }, [nextSlide, intervalId]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    setIntervalId(interval);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 bg-cover bg-center bg-no-repeat smooth-transition ${index === currentSlide ? "opacity-100" : "opacity-0"}`} style={{ backgroundImage: `url(${slide.image})` }} />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-ocean-deep/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="flex items-center justify-center mb-6">
          <Waves className="w-6 h-6 mr-3 text-ocean-aqua" />
          <span className="text-ocean-aqua font-medium text-lg">Dive Experts</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Not Just Depth
          <span className="hidden md:inline">—</span>
          <br />
          <span className="text-ocean-aqua">A Rediscovery of the Ocean's Pulse</span>
        </h2>

        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto px-4 md:px-32 leading-relaxed">Every dive is a journey of discovery, where the depths reveal their most guarded secrets.</p>
        {/* <Button variant="accent" size="lg" className="text-lg px-8 py-6" onClick={handleManualNext}>
          Next
        </Button> */}
      </div>

      {/* Animated Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/30">
        <div
          key={currentSlide} // Key to restart animation on slide change
          className="h-full bg-accent animate-[progress-fill_3s_linear_forwards] origin-left"
          style={{
            animation: `progress-fill 2s linear forwards`,
            width: "0%",
          }}
        />
      </div>
    </section>
  );
};

export default DiveExpertSection;
