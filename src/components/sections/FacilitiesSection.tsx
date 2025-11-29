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
  const [isRoomGalleryOpen, setIsRoomGalleryOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);

  const facilities = [
    {
      icon: Lock,
      title: "Privacy",
      highlight: "Private Resort",
      image: privacyImage, // import this at the top
    },
    {
      icon: Sofa,
      title: "Pristine Environment",
      highlight: "Pure Nature",
      image: pristineImage,
    },
    {
      icon: Shield,
      title: "Safety",
      highlight: "24/7 Security",
      image: safetyImage,
    },
  ];
  const roomImages = [
    {
      image: exteriorViewImage,
      alt: "Our Water Chalet seen from the walkway, blending traditional design with the vibrant marine setting",
      title: "Water Chalet Exterior",
    },
    {
      image: innerViewImage,
      alt: "Room Comfort and Ocean View",
      title: "Water Chalet Interior",
    },
    {
      image: balconyViewImage,
      alt: "Enjoy panoramic ocean views",
      title: "Balcony View",
    },
    {
      image: oceanParadiseViewImage,
      alt: "Enjoy our peaceful and steady architecture that blends with the nature",
      title: "Ocean Paradise",
    },
    {
      image: housekeepingViewImage,
      alt: "Kapalai Resort Housekeeping Services",
      title: "Kapalai Housekeeping",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-6 h-6 mr-3 text-ocean-primary" />
            <span className="text-ocean-primary font-medium text-lg">Peace of Mind</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-6">Expertly Crafted and Maintained</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2 md:px-14">Every facility is designed and maintained to ensure your complete focus remains on enjoying time together</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 elegant-shadow smooth-transition hover:ocean-shadow hover:scale-105 cursor-pointer"
              onClick={() => {
                console.log("Facility clicked:", facility.title);
                setSelectedFacility(facility.title);
              }}>
              <div className="flex items-center">
                {/* Facility image - 1/3 width */}
                <div className="basis-1/3 flex-shrink-0">
                  <img src={facility.image} alt={`${facility.title} facility`} className="w-full aspect-square object-cover rounded-[10px]" />
                </div>
                {/* Icon, title, highlight - 2/3 width */}
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
              <h3 className="text-3xl font-bold text-ocean-deep mb-6">Wake Up to Paradise</h3>
              <p className="text-xl text-muted-foreground mb-8">Every spacious room offers breathtaking sea views and curated amenities for ultimate tranquility and comfort.</p>
              <Button variant="accent" size="lg" className="text-lg px-8 py-6" onClick={() => setIsRoomGalleryOpen(true)}>
                Our Room
              </Button>
            </div>
            <div className="relative">
              <Carousel
                className="w-full"
                autoplay={true}
                autoplayInterval={2000} // 2 seconds
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
          console.log("Closing popup");
          setSelectedFacility(null);
        }}
      />
    </section>
  );
};

export default FacilitiesSection;
