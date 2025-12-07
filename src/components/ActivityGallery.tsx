import { useState, useEffect } from "react";
import { X } from "lucide-react";

// Diving images
import divingSurprise from "@/assets/activities/diving5.png";
import marineLifeCloseup1 from "@/assets/activities/diving3b.png";
import marineLifeCloseup2 from "@/assets/activities/diving4b.png";
import marineLifeCloseup3 from "@/assets/activities/diving6.png";
import marineLifeCloseup5 from "@/assets/activities/diving8.png";
import instructorDivers from "@/assets/activities/diving9.png";

// Kayaking images
import couplesKayaking from "@/assets/activities/kayaking0a.png";
import soloKayaking from "@/assets/activities/kayaking1a.png";
import inhouseKayaking from "@/assets/activities/kayaking4.png";
import whiteSandKayaking from "@/assets/activities/kayaking2a.png";
import soloTurquoiseKayaking from "@/assets/activities/kayaking3a.png";

// Snorkeling images
import largeAreaSnorkeling from "@/assets/activities/snorkeling5.png";
import touristSnorkeling from "@/assets/activities/snorkeling4.png";
import closeUpSnorkeling from "@/assets/activities/snorkeling6.png";
import soloSnorkeling1 from "@/assets/activities/snorkeling1a.png";
import soloSnorkeling2 from "@/assets/activities/snorkeling2a.png";

// Cycling images
import kapalaiCycling from "@/assets/activities/cycling1.png";
import sandbarCycling from "@/assets/activities/cycling2.png";
import cyclingAdventure from "@/assets/activities/cycling3.png";
import cyclingCompanions from "@/assets/activities/cycling4.png";
import sunsetCycling from "@/assets/activities/cycling5.png";

// Nature images
import spectacularOceanSunset from "@/assets/activities/nature0a.png";
import tropicalSunriseBeach from "@/assets/activities/nature5a.png";
import beautifulScene1 from "@/assets/activities/nature6.png";
import beautifulScene2 from "@/assets/activities/nature7.png";
import sunsetView from "@/assets/activities/nature2a.png";
import peacefulHammockRelaxation from "@/assets/activities/nature3a.png";

// Map IDs to display names for gallery header
const activityDisplayNames: Record<string, string> = {
  diving: "Diving",
  kayaking: "Kayaking",
  snorkeling: "Snorkeling",
  cycling: "Cycling",
  nature: "Nature Observation & Relaxation",
};

const activityGalleries = {
  diving: [
    { src: divingSurprise, alt: "Professional scuba divers with surpise marine underwater", title: "Surprise" },
    { src: marineLifeCloseup1, alt: "Close-up of tropical fish and coral formations", title: "Marine Life Discovery" },
    { src: marineLifeCloseup2, alt: "Close-up of tropical fish and coral formations", title: "Marine Life Discovery" },
    { src: marineLifeCloseup3, alt: "Close-up of tropical fish and coral formations", title: "Marine Life Discovery" },
    { src: marineLifeCloseup5, alt: "Close-up of tropical fish and coral formations", title: "Marine Life Discovery" },
    { src: instructorDivers, alt: "Sipadan Kapalai Resort Diving Instructors", title: "Kapalai Instructors" },
  ],
  kayaking: [
    { src: couplesKayaking, alt: "Peaceful kayaking in crystal clear lagoon", title: "Kayaking" },
    { src: soloKayaking, alt: "Solo kayaker in turquoise waters", title: "Solo Exploration" },
    { src: inhouseKayaking, alt: "kayaking inside the resort", title: "Solo Exploration" },
    { src: whiteSandKayaking, alt: "kayaking near the white sand area", title: "Solo Exploration" },
    { src: soloTurquoiseKayaking, alt: "Solo kayaker in turquoise waters", title: "Solo Exploration" },
  ],
  snorkeling: [
    { src: largeAreaSnorkeling, alt: "Large area of nature snorkeling in shallow coral waters", title: "Snorkeling Scene" },
    { src: touristSnorkeling, alt: "Tourist Snorkeler observing sea area", title: "Snorkeling Scene" },
    { src: closeUpSnorkeling, alt: "close up snorkeling", title: "Snorkeling Scene" },
    { src: soloSnorkeling1, alt: "solo adventures of snorkeling", title: "Snorkeling Scene" },
    { src: soloSnorkeling2, alt: "solo adventures of snorkeling", title: "Snorkeling Scene" },
  ],
  cycling: [
    { src: kapalaiCycling, alt: "Couple cycling on beach pathway", title: "Beach Cycling" },
    { src: sandbarCycling, alt: "Cycling through local village", title: "Cultural Tour" },
    { src: cyclingAdventure, alt: "Cycling at dramatic sunset", title: "Sunset Ride" },
    { src: cyclingCompanions, alt: "Cycling at dramatic sunset", title: "Sunset Ride" },
    { src: sunsetCycling, alt: "Cycling at dramatic sunset", title: "Sunset Ride" },
  ],
  nature: [
    { src: spectacularOceanSunset, alt: "Spectacular sunset over calm ocean", title: "Ocean Sunset" },
    { src: tropicalSunriseBeach, alt: "Beautiful sunrise from tropical beach", title: "Beach Sunrise" },
    { src: beautifulScene1, alt: "Beautiful architech of the resort", title: "Beautiful" },
    { src: beautifulScene2, alt: "Beautifully blend with the nature", title: "Nature" },
    { src: sunsetView, alt: "sunset view from the resort", title: "Sun View" },
    { src: peacefulHammockRelaxation, alt: "Enjoy the beautiful sunset while relax", title: "Relaxation" },
  ],
};

interface ActivityGalleryProps {
  activity: string;
  isOpen: boolean;
  onClose: () => void;
}

const ActivityGallery = ({ activity, isOpen, onClose }: ActivityGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = activityGalleries[activity as keyof typeof activityGalleries] || [];
  const displayName = activityDisplayNames[activity] || activity;

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

  // Reset currentImageIndex to 0 when gallery opens
  useEffect(() => {
    if (isOpen && images.length > 0) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, images.length]);

  if (!isOpen || !images.length) return null;

  return (
    <div className="fixed inset-0 z-50 bg-ocean-deep/95 backdrop-blur-sm">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative w-full max-w-3xl mx-auto">
          {/* Close button */}
          <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white smooth-transition">
            <X size={24} />
          </button>

          {/* Gallery header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">{displayName}</h2>
            <p className="text-ocean-pearl text-lg">
              {currentImageIndex + 1} of {images.length}
            </p>
          </div>

          {/* Main image display */}
          <div className="relative mb-8">
            {images[currentImageIndex] ? (
              <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} className="w-full sm:h-40 md:h-48 lg:h-80 xl:h-2/3 object-cover rounded-lg shadow-2xl" />
            ) : (
              <div className="w-full sm:h-40 md:h-48 lg:h-80 xl:h-2/3 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Loading image...</span>
              </div>
            )}
          </div>

          {/* Thumbnail navigation */}
          <div className="flex justify-center gap-1 sm:gap-2 overflow-x-hidden pb-2 px-4">
            {images.map((image, index) => (
              <button key={index} onClick={() => setCurrentImageIndex(index)} className={`flex-shrink-0 w-12 h-10 sm:w-16 sm:h-12 md:w-20 md:h-16 rounded-sm overflow-hidden border-2 smooth-transition ${index === currentImageIndex ? "border-ocean-light" : "border-white/30 hover:border-white/60"}`}>
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityGallery;