import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Lock, Sofa, Shield, X } from "lucide-react";
import { useTranslation } from "react-i18next";

import privacyImage from "@/assets/facility-images/privacyV1.png";
import pristineImage from "@/assets/facility-images/pristineEnvironmentV1.png";
import safetyImage from "@/assets/facility-images/securityKapalai.png";

interface FacilityDescriptionPopupProps {
  facility: string;
  isOpen: boolean;
  onClose: () => void;
}

const FacilityDescriptionPopup = ({ facility, isOpen, onClose }: FacilityDescriptionPopupProps) => {
  const { t } = useTranslation();

  // Load facility descriptions from translations
  const facilitiesDescData = t("facilities.descriptions", { returnObjects: true }) as Record<string, {
    icon: string;
    description: string;
  }>;

  const facilityData = {
    privacy: {
      icon: Lock,
      image: privacyImage,
      title: t("facilities.items.0.title"),
      description: facilitiesDescData?.privacy?.description ?? "Enjoy a peaceful escape and complete serenity in your interruption-free paradise.",
    },
    pristine: {
      icon: Sofa,
      image: pristineImage,
      title: t("facilities.items.1.title"),
      description: facilitiesDescData?.pristine?.description ?? "Experience harmony: Comfort and thoughtful conservation coexist perfectly.",
    },
    safety: {
      icon: Shield,
      image: safetyImage,
      title: t("facilities.items.2.title"),
      description: facilitiesDescData?.safety?.description ?? "Relax in our secure environment; vigilant safety protocols ensure your peace of mind.",
    },
  };

  const currentFacility = facilityData[facility as keyof typeof facilityData];

  const { displayText } = useTypewriter({
    text: currentFacility?.description || "",
    speed: 30,
    delay: 200,
    trigger: isOpen && !!currentFacility && !!facility,
  });

  if (!currentFacility) return null;

  const IconComponent = currentFacility.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-ocean-aqua/20">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 sm:right-3 sm:top-3 z-50 w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-white/95 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors">
          <X className="w-5 h-5 sm:w-4 sm:h-4 text-gray-600" />
        </button>
        <div className="relative">
          <div className="w-full sm:h-36 md:h-40 lg:h-48 xl:h-72 overflow-hidden">
            <img src={currentFacility.image} alt={facility} className="w-full h-full object-cover" />
          </div>

          <div className="p-8">
            <DialogHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full ocean-gradient">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
              </div>
              <DialogTitle className="text-3xl text-center font-bold text-ocean-deep">{currentFacility.title}</DialogTitle>
            </DialogHeader>

            <div className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed min-h-[6rem] flex items-center justify-center">{displayText}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FacilityDescriptionPopup;