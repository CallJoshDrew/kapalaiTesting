import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import room gallery images
import overwaterVillaBedroom from "@/assets/room/kapalaiRoom1.jpg";
import luxuryBathroomOceanView from "@/assets/room/kapalaiRoom2.jpg";
import suiteLivingArea from "@/assets/room/kapalaiRoom3.jpg";
import privateBalcony from "@/assets/room/kapalaiRoom4.jpg";
import twinBedroom from "@/assets/room/kapalaiRoom5.jpg";
import workspaceArea from "@/assets/room/kapalaiRoom6.jpg";
import dressingArea from "@/assets/room/kapalaiRoom7.jpg";
import roomEntrance from "@/assets/room/kapalaiRoom8.jpg";

const roomImages = [
  { src: overwaterVillaBedroom, alt: "Luxury Overwater Villa Bedroom", title: "Overwater Villa Suite" },
  { src: luxuryBathroomOceanView, alt: "Luxury Bathroom with Ocean View", title: "Ocean View Bathroom" },
  { src: suiteLivingArea, alt: "Suite Living Area", title: "Spacious Living Area" },
  { src: privateBalcony, alt: "Private Balcony", title: "Private Ocean Balcony" },
  { src: twinBedroom, alt: "Twin Bedroom", title: "Twin Bed Configuration" },
  { src: workspaceArea, alt: "Workspace Area", title: "In-Room Workspace" },
  { src: dressingArea, alt: "Dressing Area", title: "Walk-in Closet" },
  { src: roomEntrance, alt: "Room Entrance", title: "Elegant Room Entrance" },
];

interface RoomGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const RoomGallery = ({ isOpen, onClose }: RoomGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  // Disable body scroll when gallery is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % roomImages.length);
  };

  const handleImageLoad = () => {
    setLoadedImages(prev => {
      const newCount = prev + 1;
      if (newCount >= roomImages.length) {
        setIsLoading(false);
      }
      return newCount;
    });
  };

  // Reset loading state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setLoadedImages(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center">
      <div className="relative w-full h-full max-w-7xl mx-auto p-4">
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-white text-lg font-semibold">
                {Math.round((loadedImages / roomImages.length) * 100)}%
              </p>
            </div>
          </div>
        )}
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <X className="h-6 w-6 text-black" />
        </button>

        {/* Mobile View - Single Image with Navigation */}
        <div className={`md:hidden w-full h-full flex flex-col justify-center items-center px-4 ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          {/* Image Title and Counter - 10px above image */}
          <div className="text-center mb-2">
            <h3 className="text-white text-lg font-semibold">
              {roomImages[currentImageIndex].title}
            </h3>
            <p className="text-white/70 text-sm mt-1">
              {currentImageIndex + 1} of {roomImages.length}
            </p>
          </div>
          
          {/* Image - centered */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <img
              src={roomImages[currentImageIndex].src}
              alt={roomImages[currentImageIndex].alt}
              className="max-w-full max-h-[60vh] object-contain rounded-lg"
              onLoad={handleImageLoad}
            />
          </div>
          
          {/* Next Button - 10px below image */}
          <div className="text-center mt-2">
            <Button
              onClick={nextImage}
              variant="accent"
              size="lg"
              className="text-lg px-8 py-4"
            >
              Next
            </Button>
          </div>
        </div>

        {/* Tablet View - 3 rows x 3 columns Grid Layout */}
        <div className={`hidden md:block lg:hidden ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          <h2 className="text-white text-3xl font-bold text-center mb-8">Our Room Gallery</h2>
          
          <div className="grid grid-cols-3 grid-rows-3 gap-4 max-h-[calc(100vh-200px)] overflow-y-auto">
            {roomImages.slice(0, 9).map((image, index) => (
              <div
                key={index}
                className="aspect-square relative cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onLoad={handleImageLoad}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white font-semibold text-sm">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View - 2 rows x 4 columns Grid Layout */}
        <div className={`hidden lg:block ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          <h2 className="text-white text-3xl font-bold text-center mb-8">Our Room Gallery</h2>
          
          <div className="grid grid-cols-4 grid-rows-2 gap-4 max-h-[calc(100vh-200px)] overflow-y-auto">
            {roomImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square relative cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onLoad={handleImageLoad}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white font-semibold text-sm">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomGallery;