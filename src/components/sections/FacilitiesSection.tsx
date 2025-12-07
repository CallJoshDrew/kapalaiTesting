import { useState, useEffect } from "react";
import { Shield, Sofa, Lock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, useCarousel } from "@/components/ui/carousel";
import RoomGallery from "@/components/RoomGallery";
import FacilityDescriptionPopup from "@/components/FacilityDescriptionPopup";
import exteriorViewImage from "@/assets/room/exteriorView.jpg";
import innerViewImage from "@/assets/room/interiorView.jpg";
import balconyViewImage from "@/assets/room/balconyView.jpg";
import oceanParadiseViewImage from "@/assets/room/oceanParadise.png";
import housekeepingViewImage from "@/assets/room/kapalaiHousekeeping.png";
import privacyImage from "@/assets/facility-images/privacy.png";
import pristineImage from "@/assets/facility-images/pristineEnvironment.jpg";
import safetyImage from "@/assets/facility-images/securityKapalai.png";
import { useTranslation } from "react-i18next";

const RoomCarouselDots = ({ roomImages }) => {
  const { api } = useCarousel();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="flex justify-center mt-4 space-x-2">
      {roomImages.map((_, index) => (
        <button key={index} onClick={() => api?.scrollTo(index)} className={`w-2 h-2 rounded-full smooth-transition ${index === current ? "bg-ocean-primary" : "bg-gray-300"}`} />
      ))}
    </div>
  );
};

const FacilitiesSection = () => {
  const { t } = useTranslation();
  const [isRoomGalleryOpen, setIsRoomGalleryOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);

  // Load facilities from translations
  const facilitiesData = t("facilities.items", { returnObjects: true }) as Array<{
    title: string;
    highlight: string;
  }>;

  const facilities = [
    {
      id: "privacy",
      icon: Lock,
      title: facilitiesData?.[0]?.title ?? "Privacy",
      highlight: facilitiesData?.[0]?.highlight ?? "Private Resort",
      image: privacyImage,
    },
    {
      id: "pristine",
      icon: Sofa,
      title: facilitiesData?.[1]?.title ?? "Pristine Environment",
      highlight: facilitiesData?.[1]?.highlight ?? "Pure Nature",
      image: pristineImage,
    },
    {
      id: "safety",
      icon: Shield,
      title: facilitiesData?.[2]?.title ?? "Safety",
      highlight: facilitiesData?.[2]?.highlight ?? "24/7 Security",
      image: safetyImage,
    },
  ];

  // Load room images from translations
  const roomImagesData = t("facilities.rooms", { returnObjects: true }) as Array<{
    title: string;
    alt: string;
  }>;

  const roomImages = [
    {
      image: exteriorViewImage,
      alt: roomImagesData?.[0]?.alt ?? "Our Water Chalet seen from the walkway, blending traditional design with the vibrant marine setting",
      title: roomImagesData?.[0]?.title ?? "Water Chalet Exterior",
    },
    {
      image: innerViewImage,
      alt: roomImagesData?.[1]?.alt ?? "Room Comfort and Ocean View",
      title: roomImagesData?.[1]?.title ?? "Water Chalet Interior",
    },
    {
      image: balconyViewImage,
      alt: roomImagesData?.[2]?.alt ?? "Enjoy panoramic ocean views",
      title: roomImagesData?.[2]?.title ?? "Balcony View",
    },
    {
      image: oceanParadiseViewImage,
      alt: roomImagesData?.[3]?.alt ?? "Enjoy our peaceful and steady architecture that blends with the nature",
      title: roomImagesData?.[3]?.title ?? "Ocean Paradise",
    },
    {
      image: housekeepingViewImage,
      alt: roomImagesData?.[4]?.alt ?? "Kapalai Resort Housekeeping Services",
      title: roomImagesData?.[4]?.title ?? "Kapalai Housekeeping",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-6 h-6 mr-3 text-ocean-primary" />
            <span className="text-ocean-primary font-medium text-lg">{t("facilities.label")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-6">{t("facilities.heading")}</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2 md:px-14">{t("facilities.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 elegant-shadow smooth-transition hover:ocean-shadow hover:scale-105 cursor-pointer"
              onClick={() => {
                setSelectedFacility(facility.id);
              }}>
              <div className="flex items-center">
                <div className="basis-1/3 flex-shrink-0">
                  <img src={facility.image} alt={`${facility.title} facility`} className="w-full aspect-square object-cover rounded-[10px]" />
                </div>
                <div className="basis-2/3 flex flex-col pl-4">
                  <div className="flex items-center mb-2">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full ocean-gradient mr-3 flex-shrink-0">
                      <facility.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="inline-block bg-ocean-light/20 text-ocean-primary px-3 py-1 rounded-full text-sm font-medium">{facility.highlight}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-ocean-deep">{facility.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-16 pt-16 border-t border-ocean-aqua/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-11/12">
            <div>
              <h3 className="text-3xl font-bold text-ocean-deep mb-6">{t("facilities.cta_heading")}</h3>
              <p className="text-xl text-muted-foreground mb-8">{t("facilities.cta_subtitle")}</p>
              <Button variant="accent" size="lg" className="text-lg px-8 py-6" onClick={() => setIsRoomGalleryOpen(true)}>
                {t("facilities.cta_button")}
              </Button>
            </div>
            <div className="relative">
              <Carousel
                className="w-full"
                autoplay={true}
                autoplayInterval={2000}
                opts={{
                  loop: true,
                }}>
                <CarouselContent>
                  {roomImages.map((room, index) => (
                    <CarouselItem key={index}>
                      <div className="relative rounded-2xl overflow-hidden">
                        <img src={room.image} alt={room.alt} className="w-full h-80 object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                          <h4 className="text-white font-semibold text-lg">{room.title}</h4>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <RoomCarouselDots roomImages={roomImages} />
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <RoomGallery isOpen={isRoomGalleryOpen} onClose={() => setIsRoomGalleryOpen(false)} />

      <FacilityDescriptionPopup
        facility={selectedFacility || ""}
        isOpen={!!selectedFacility}
        onClose={() => {
          setSelectedFacility(null);
        }}
      />
    </section>
  );
};

export default FacilitiesSection;