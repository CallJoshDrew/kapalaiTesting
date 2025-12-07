import { useState } from "react";
import { Waves } from "lucide-react";
import ActivityGallery from "@/components/ActivityGallery";
import underwaterImage from "@/assets/underwater-diving.jpg";
import kayakingImage from "@/assets/activities/kayaking1.jpg";
import snorkelingImage from "@/assets/activities/snorkeling.jpg";
import cyclingImage from "@/assets/activities/cycling1.png";
import natureImage from "@/assets/activities/nature0a.png";
import { useTranslation } from "react-i18next";

const ActivitiesSection = () => {
  const { t } = useTranslation();
  const [selectedActivityTitle, setSelectedActivityTitle] = useState<string | null>(null);
  
  // load activities from translations
  const activitiesData = t("activities.items", { returnObjects: true }) as Array<{
    title: string;
  }>;

  const activities = [
    {
      id: "diving",
      image: underwaterImage,
      title: activitiesData?.[0]?.title ?? "Diving",
    },
    {
      id: "kayaking",
      image: kayakingImage,
      title: activitiesData?.[1]?.title ?? "Kayaking",
    },
    {
      id: "snorkeling",
      image: snorkelingImage,
      title: activitiesData?.[2]?.title ?? "Snorkeling",
    },
    {
      id: "cycling",
      image: cyclingImage,
      title: activitiesData?.[3]?.title ?? "Cycling",
    },
    {
      id: "nature",
      image: natureImage,
      title: activitiesData?.[4]?.title ?? "Nature Observation & Relaxation",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-ocean-pearl/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Waves className="w-6 h-6 mr-3 text-ocean-primary" />
            <span className="text-ocean-primary font-medium text-lg">{t("activities.label")}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-4">{t("activities.heading")}</h2>
          <p className="text-lg text-ocean-primary max-w-2xl mx-auto">{t("activities.subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg hover-scale cursor-pointer
        ${index === activities.length - 1 ? "col-span-2 aspect-[16/12] md:col-span-1 md:aspect-[4/5] lg:col-span-1" : "aspect-[4/5]"}`}
              onClick={() => setSelectedActivityTitle(activity.id)}>
              <img src={activity.image} alt={activity.title} className="w-full h-full object-cover smooth-transition group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-base font-bold mb-1 xs:text-sm sm:text-sm md:text-lg">{activity.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Gallery Modal */}
      <ActivityGallery 
        activity={selectedActivityTitle || ""} 
        isOpen={!!selectedActivityTitle} 
        onClose={() => setSelectedActivityTitle(null)} 
      />
    </section>
  );
};

export default ActivitiesSection;