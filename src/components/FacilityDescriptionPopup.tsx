// import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Lock, Sofa, Shield, X } from "lucide-react";

import privacyImage from "@/assets/facility-images/privacyV1.png";
import pristineImage from "@/assets/facility-images/pristineEnvironmentV1.png";
import safetyImage from "@/assets/facility-images/securityKapalai.png";

interface FacilityDescriptionPopupProps {
  facility: string;
  isOpen: boolean;
  onClose: () => void;
}

const facilityData = {
  Privacy: {
    icon: Lock,
    image: privacyImage,
    description: "Enjoy a peaceful escape and complete serenity in your interruption-free paradise.",
  },
  "Pristine Environment": {
    icon: Sofa,
    image: pristineImage,
    description: "Experience harmony: Comfort and thoughtful conservation coexist perfectly.",
  },
  Safety: {
    icon: Shield,
    image: safetyImage,
    description: "Relax in our secure environment; vigilant safety protocols ensure your peace of mind.",
  },
};

const FacilityDescriptionPopup = ({ facility, isOpen, onClose }: FacilityDescriptionPopupProps) => {
  const currentFacility = facilityData[facility as keyof typeof facilityData];

  const { displayText } = useTypewriter({
    text: currentFacility?.description || "",
    speed: 30,
    delay: 200,
    trigger: isOpen && !!currentFacility && !!facility,
  });

  // // Allow body scroll when modal is open
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = 'auto';
  //   } else {
  //     document.body.style.overflow = 'unset';
  //   }

  //   return () => {
  //     document.body.style.overflow = 'unset';
  //   };
  // }, [isOpen]);

  // if (!isOpen || !facility || !currentFacility) {
  //   console.log("Popup not rendering:", { isOpen, facility, currentFacility });
  //   return null;
  // }
  if (!currentFacility) return null;

  const IconComponent = currentFacility.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-ocean-aqua/20">
        {/* Custom close button for better mobile positioning */}
        <button onClick={onClose} className="absolute right-2 top-2 sm:right-3 sm:top-3 z-50 w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-white/95 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors">
          <X className="w-5 h-5 sm:w-4 sm:h-4 text-gray-600" />
        </button>
        <div className="relative">
          {/* Image */}
          <div className="w-full sm:h-36 md:h-40 lg:h-48 xl:h-72 overflow-hidden">
            <img src={currentFacility.image} alt={facility} className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="p-8">
            <DialogHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full ocean-gradient">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
              </div>
              <DialogTitle className="text-3xl text-center font-bold text-ocean-deep">{facility}</DialogTitle>
            </DialogHeader>

            <div className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed min-h-[6rem] flex items-center justify-center">
                {displayText}
                {/* <span className="inline-block w-0.5 h-6 bg-ocean-primary ml-1 animate-pulse" /> */}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FacilityDescriptionPopup;
