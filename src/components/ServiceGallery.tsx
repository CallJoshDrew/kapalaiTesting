import { useState, useEffect } from "react";
import { X } from "lucide-react";

// Service images
import airportPickup from "@/assets/service-galleries/seamless-journeys/pickupV1.png";
import jettyArrival from "@/assets/service-galleries/seamless-journeys/jettyV1.png";
import speedboatResort from "@/assets/service-galleries/seamless-journeys/kapalaiV1.png";

import romanticDinner from "@/assets/service-galleries/tailored-experiences/romanticDinnerV2.png";
import birthdayCelebration from "@/assets/service-galleries/tailored-experiences/fellowship.png";
import honeyMoon from "@/assets/service-galleries/tailored-experiences/honeyMoonV1.png";

import firstAidKit from "@/assets/service-galleries/medical-assistance/first-aid-kit.jpg";
import woundTreatment from "@/assets/service-galleries/medical-assistance/wound-treatment.jpg";
import asthmaAssistance from "@/assets/service-galleries/medical-assistance/asthma-assistance.jpg";

const serviceGalleries = {
  "Seamless Journeys": [
    { src: airportPickup, alt: "Professional airport pickup service for resort guests", title: "Airport Pickup" },
    { src: jettyArrival, alt: "Guests arriving at Semporna Kapalai Jetty", title: "Semporna Jetty" },
    { src: speedboatResort, alt: "Speedboat transfer to Sipadan Kapalai Resort", title: "Kapalai Arrival" },
  ],
  "Tailored Experiences": [
    { src: romanticDinner, alt: "Romantic candlelit dinner on the beach at sunset", title: "Romantic Dinner" },
    { src: birthdayCelebration, alt: "Special arrangement for the perfect meals with your love ones", title: "Special Arrangement" },
    { src: honeyMoon, alt: "A honeymoon bed decorated with towel swans and flowers", title: "Honeymoon" },
  ],
  // "Medical Assistance": [
  //   { src: firstAidKit, alt: "Professional first aid kit with medical supplies", title: "First Aid Kit" },
  //   { src: woundTreatment, alt: "Medical professional treating guest's wound", title: "Wound Treatment" },
  //   { src: asthmaAssistance, alt: "Staff helping guest with asthma condition", title: "Asthma Assistance" }
  // ]
};

interface ServiceGalleryProps {
  service: string;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceGallery = ({ service, isOpen, onClose }: ServiceGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = serviceGalleries[service as keyof typeof serviceGalleries] || [];

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Reset currentImageIndex to 1 when gallery opens
  useEffect(() => {
    if (isOpen && images.length > 0) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, images.length]);

  if (!isOpen || !images.length) return null;

  return (
    <div className="fixed inset-0 z-50 bg-ocean-deep/95 backdrop-blur-sm">
      <div className="flex items-center justify-center min-h-screen p-4">
        {/* Constrain overall modal to viewport but do NOT enable internal scrolling.
            Main image will scale down to fit remaining space so no scroll is needed. */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Close button */}
          <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white smooth-transition">
            <X size={24} />
          </button>

          {/* Gallery header */}
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">{service}</h2>
            <p className="text-ocean-pearl text-sm md:text-lg">
              {currentImageIndex + 1} of {images.length}
            </p>
          </div>

          {/* Main image display
              - Use object-contain and cap its max-height so header + thumbnails always fit within viewport
              - Adjust the calc() value if you change header/thumbnail sizes */}
          <div className="relative mb-4">
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="w-full h-auto object-contain rounded-lg shadow-2xl"
              style={{ maxHeight: "calc(100vh - 220px)" }} // leaves ~220px for header, captions, thumbnails, and margins
            />

            {/* Image title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ocean-deep/80 to-transparent p-4">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-0 text-center">
                {images[currentImageIndex].title}
              </h3>
            </div>
          </div>

          {/* Thumbnail navigation (horizontal scroll if many) */}
          <div className="flex justify-center gap-2 sm:gap-4 overflow-x-auto pb-2 px-1">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-20 rounded-sm overflow-hidden border-2 smooth-transition ${index === currentImageIndex ? "border-ocean-light" : "border-white/30 hover:border-white/60"}`}
                aria-label={`View ${image.title}`}
              >
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceGallery;
