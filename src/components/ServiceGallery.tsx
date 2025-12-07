import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

// Service images
import airportPickup from "@/assets/service-galleries/seamless-journeys/pickupV1.png";
import jettyArrival from "@/assets/service-galleries/seamless-journeys/jettyV1.png";
import speedboatResort from "@/assets/service-galleries/seamless-journeys/kapalaiV1.png";

import romanticDinner from "@/assets/service-galleries/tailored-experiences/romanticDinnerV2.png";
import birthdayCelebration from "@/assets/service-galleries/tailored-experiences/fellowship.png";
import honeyMoon from "@/assets/service-galleries/tailored-experiences/honeyMoonV1.png";

interface ServiceGalleryProps {
  service: string;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceGallery = ({ service, isOpen, onClose }: ServiceGalleryProps) => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Load service gallery items from translations
  const serviceGalleriesData = t("services.gallery", { returnObjects: true }) as Record<string, Array<{
    title: string;
    alt: string;
  }>>;

  const serviceGalleries = {
    "seamless-journeys": [
      { src: airportPickup, alt: serviceGalleriesData?.["seamless-journeys"]?.[0]?.alt ?? "Professional airport pickup service for resort guests", title: serviceGalleriesData?.["seamless-journeys"]?.[0]?.title ?? "Airport Pickup" },
      { src: jettyArrival, alt: serviceGalleriesData?.["seamless-journeys"]?.[1]?.alt ?? "Guests arriving at Semporna Kapalai Jetty", title: serviceGalleriesData?.["seamless-journeys"]?.[1]?.title ?? "Semporna Jetty" },
      { src: speedboatResort, alt: serviceGalleriesData?.["seamless-journeys"]?.[2]?.alt ?? "Speedboat transfer to Sipadan Kapalai Resort", title: serviceGalleriesData?.["seamless-journeys"]?.[2]?.title ?? "Kapalai Arrival" },
    ],
    "tailored-experiences": [
      { src: romanticDinner, alt: serviceGalleriesData?.["tailored-experiences"]?.[0]?.alt ?? "Romantic candlelit dinner on the beach at sunset", title: serviceGalleriesData?.["tailored-experiences"]?.[0]?.title ?? "Romantic Dinner" },
      { src: birthdayCelebration, alt: serviceGalleriesData?.["tailored-experiences"]?.[1]?.alt ?? "Special arrangement for the perfect meals with your love ones", title: serviceGalleriesData?.["tailored-experiences"]?.[1]?.title ?? "Special Arrangement" },
      { src: honeyMoon, alt: serviceGalleriesData?.["tailored-experiences"]?.[2]?.alt ?? "A honeymoon bed decorated with towel swans and flowers", title: serviceGalleriesData?.["tailored-experiences"]?.[2]?.title ?? "Honeymoon" },
    ],
  };

  const images = serviceGalleries[service as keyof typeof serviceGalleries] || [];

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

  useEffect(() => {
    if (isOpen && images.length > 0) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, images.length]);

  if (!isOpen || !images.length) return null;

  const serviceDisplayNames: Record<string, string> = {
    "seamless-journeys": t("services.items.0.title"),
    "tailored-experiences": t("services.items.1.title"),
  };

  const displayName = serviceDisplayNames[service] || service;

  return (
    <div className="fixed inset-0 z-50 bg-ocean-deep/95 backdrop-blur-sm">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative w-full max-w-6xl mx-auto">
          <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white smooth-transition">
            <X size={24} />
          </button>

          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">{displayName}</h2>
            <p className="text-ocean-pearl text-sm md:text-lg">
              {currentImageIndex + 1} of {images.length}
            </p>
          </div>

          <div className="relative mb-4">
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="w-full h-auto object-contain rounded-lg shadow-2xl"
              style={{ maxHeight: "calc(100vh - 220px)" }}
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ocean-deep/80 to-transparent p-4">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-0 text-center">
                {images[currentImageIndex].title}
              </h3>
            </div>
          </div>

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