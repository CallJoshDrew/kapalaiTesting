import { useState, useEffect } from "react";
import { Plane, Settings, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, useCarousel } from "@/components/ui/carousel";
import FoodGallery from "@/components/FoodGallery";
import ServiceGallery from "@/components/ServiceGallery";
import { useTranslation } from "react-i18next";
import seamlessJourneysImage from "@/assets/service-galleries/seamless-journeys/seemless_journey.png";
import tailoredExperiencesImage from "@/assets/tailored-experiences.jpg";
import bbqImage from "@/assets/service-galleries/bbq.png";
import buffetStyleImage from "@/assets/service-galleries/buffetStyle.png";
import familyDiningImage from "@/assets/service-galleries/familyDinnerV1.png";
import kapalaiChiefImage from "@/assets/service-galleries/kapalaiChief.png";
import serviceStaffImage from "@/assets/service-galleries/serviceStaff.png";

const FoodCarouselDots = ({ foodImages }) => {
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
      {foodImages.map((_, index) => (
        <button key={index} onClick={() => api?.scrollTo(index)} className={`w-2 h-2 rounded-full smooth-transition ${index === current ? "bg-ocean-aqua" : "bg-white/50"}`} />
      ))}
    </div>
  );
};

const ServicesSection = () => {
  const { t } = useTranslation();
  const [isFoodGalleryOpen, setIsFoodGalleryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const foodImagesData = t("services.food.items", { returnObjects: true }) as Array<{
    title: string;
  }>;

  const foodImages = [
    { image: bbqImage, title: foodImagesData?.[0]?.title ?? "BBQ Night" },
    { image: buffetStyleImage, title: foodImagesData?.[1]?.title ?? "Buffet Style" },
    { image: familyDiningImage, title: foodImagesData?.[2]?.title ?? "Family Dinner" },
    { image: kapalaiChiefImage, title: foodImagesData?.[3]?.title ?? "Kapalai Chefs" },
    { image: serviceStaffImage, title: foodImagesData?.[4]?.title ?? "Service Staff" },
  ];

  const servicesData = t("services.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const services = [
    {
      id: "seamless-journeys",
      icon: Plane,
      title: servicesData?.[0]?.title ?? "Seamless Journeys",
      description: servicesData?.[0]?.description ?? "Effortless transfers from airport to your great holiday.",
      image: seamlessJourneysImage,
    },
    {
      id: "tailored-experiences",
      icon: Settings,
      title: servicesData?.[1]?.title ?? "Tailored Experiences",
      description: servicesData?.[1]?.description ?? "Personalized service crafted to exceed your expectation.",
      image: tailoredExperiencesImage,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-ocean-deep to-ocean-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 mr-3 text-ocean-aqua" />
            <span className="text-ocean-aqua font-medium text-lg">{t("services.label")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("services.heading")}</h2>
          <p className="text-xl text-ocean-aqua max-w-4xl mx-auto leading-relaxed">{t("services.subtitle")}</p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden smooth-transition hover:scale-105 group cursor-pointer shadow-lg relative" onClick={() => setSelectedService(service.id)}>
                <div className="absolute top-6 left-6 z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ocean-deep shadow-lg">
                    <service.icon className="w-6 h-6 text-white ml-0.5 mt-0.5" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 p-4 pt-4 md:pt-4">
                    <img src={service.image} alt={`${service.title} service`} className="w-full h-48 object-cover rounded-xl" />
                  </div>
                  <div className="w-full md:w-1/2 px-4 pb-4 text-left">
                    <h3 className="text-[27px] font-bold mb-1 text-ocean-deep">{service.title}</h3>
                    <p className="text-[17px] text-black leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Food Section */}
        <div className="flex justify-center mt-16 pt-16 border-t border-ocean-aqua/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-11/12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">{t("services.food.heading")}</h3>
              <p className="text-xl text-ocean-pearl mb-8 leading-relaxed">{t("services.food.subtitle")}</p>
              <Button variant="accent" size="lg" className="text-lg px-8 py-6" onClick={() => setIsFoodGalleryOpen(true)}>
                {t("services.food.button")}
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
                  {foodImages.map((food, index) => (
                    <CarouselItem key={index}>
                      <div className="relative rounded-2xl overflow-hidden">
                        <img src={food.image} alt={`${food.title} experience at the resort`} className="w-full sm:h-36 md:h-40 lg:h-48 xl:h-80 object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                          <h4 className="text-white font-semibold text-lg">{food.title}</h4>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <FoodCarouselDots foodImages={foodImages} />
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <FoodGallery isOpen={isFoodGalleryOpen} onClose={() => setIsFoodGalleryOpen(false)} />
      <ServiceGallery service={selectedService || ""} isOpen={!!selectedService} onClose={() => setSelectedService(null)} />
    </section>
  );
};

export default ServicesSection;