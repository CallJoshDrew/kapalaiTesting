import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

// Import food gallery images
import asianDelights from "@/assets/food-gallery/1.png";
import chickenCheese from "@/assets/food-gallery/2.png";
import seafoodAlfredo from "@/assets/food-gallery/3.png";
import spicyStirFryCrab from "@/assets/food-gallery/4.png";
import glazedWings from "@/assets/food-gallery/5.png";
import grilledSataySkewers from "@/assets/food-gallery/6.png";
import roastShank from "@/assets/food-gallery/7.png";
import greekSalad from "@/assets/food-gallery/8.png";
import islandBites from "@/assets/food-gallery/9.png";
import fourSeasons from "@/assets/food-gallery/10.png";

interface FoodGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const FoodGallery = ({ isOpen, onClose }: FoodGalleryProps) => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  const foodItemsData = t("services.food.gallery", { returnObjects: true }) as Array<{
    alt: string;
    title: string;
  }>;

  const foodImages = [
    { src: asianDelights, ...foodItemsData?.[0] },
    { src: chickenCheese, ...foodItemsData?.[1] },
    { src: seafoodAlfredo, ...foodItemsData?.[2] },
    { src: spicyStirFryCrab, ...foodItemsData?.[3] },
    { src: glazedWings, ...foodItemsData?.[4] },
    { src: grilledSataySkewers, ...foodItemsData?.[5] },
    { src: roastShank, ...foodItemsData?.[6] },
    { src: greekSalad, ...foodItemsData?.[7] },
    { src: islandBites, ...foodItemsData?.[8] },
    { src: fourSeasons, ...foodItemsData?.[9] },
  ];

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
    setCurrentImageIndex((prev) => (prev + 1) % foodImages.length);
  };

  const handleImageLoad = () => {
    setLoadedImages(prev => {
      const newCount = prev + 1;
      if (newCount >= foodImages.length) {
        setIsLoading(false);
      }
      return newCount;
    });
  };

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
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-white text-lg font-semibold">
                {Math.round((loadedImages / foodImages.length) * 100)}%
              </p>
            </div>
          </div>
        )}
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <X className="h-6 w-6 text-black" />
        </button>

        {/* Mobile View */}
        <div className={`md:hidden w-full h-full flex flex-col justify-center items-center px-4 ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          <div className="text-center mb-2">
            <h3 className="text-white text-lg font-semibold">
              {foodImages[currentImageIndex].title}
            </h3>
            <p className="text-white/70 text-sm mt-1">
              {currentImageIndex + 1} of {foodImages.length}
            </p>
          </div>
          
          <div className="flex-shrink-0 flex items-center justify-center">
            <img
              src={foodImages[currentImageIndex].src}
              alt={foodImages[currentImageIndex].alt}
              className="max-w-full max-h-[60vh] object-contain rounded-lg"
              onLoad={handleImageLoad}
            />
          </div>
          
          <div className="text-center mt-2">
            <Button
              onClick={nextImage}
              variant="accent"
              size="lg"
              className="text-lg px-8 py-4"
            >
              {t("services.food.gallery_button")}
            </Button>
          </div>
        </div>

        {/* Tablet View - 3x3 Grid */}
        <div className={`hidden md:block lg:hidden ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          <h2 className="text-white text-3xl font-bold text-center mb-8">{t("services.food.gallery_heading")}</h2>
          
          <div className="grid grid-cols-3 grid-rows-3 gap-4 max-h-[calc(100vh-200px)] overflow-y-auto">
            {foodImages.slice(0, 9).map((image, index) => (
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

        {/* Desktop View - 5x2 Grid */}
        <div className={`hidden lg:block ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          <h2 className="text-white text-3xl font-bold text-center mb-8">{t("services.food.gallery_heading")}</h2>
          
          <div className="grid grid-cols-5 grid-rows-2 gap-4 max-h-[calc(100vh-200px)] overflow-y-auto">
            {foodImages.slice(0, 10).map((image, index) => (
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

export default FoodGallery;