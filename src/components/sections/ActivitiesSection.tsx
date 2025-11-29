import { useState } from "react";
import { Waves } from "lucide-react";
import ActivityGallery from "@/components/ActivityGallery";
import underwaterImage from "@/assets/underwater-diving.jpg";
import kayakingImage from "@/assets/activities/kayaking1.jpg";
import snorkelingImage from "@/assets/activities/snorkeling.jpg";
import cyclingImage from "@/assets/activities/cycling1.png";
import natureImage from "@/assets/activities/nature0a.png";

const ActivitiesSection = () => {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const activities = [
    {
      image: underwaterImage,
      title: "Diving",
      // description: "Explore the depths of crystal clear waters"
    },
    {
      image: kayakingImage,
      title: "Kayaking",
      // description: "Paddle through serene tropical waters"
    },
    {
      image: snorkelingImage,
      title: "Snorkeling",
      // description: "Discover vibrant coral reefs and marine life"
    },
    {
      image: cyclingImage,
      title: "Cycling",
      // description: "Ride along scenic coastal paths"
    },
    {
      image: natureImage,
      title: "Nature Observation & Relaxation",
      // description: "Unwind while watching spectacular sunsets"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-ocean-pearl/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Waves className="w-6 h-6 mr-3 text-ocean-primary" />
            <span className="text-ocean-primary font-medium text-lg">Amazing Activities</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-4">Encounters of Discovery</h2>
          <p className="text-lg text-ocean-primary max-w-2xl mx-auto">Discover endless adventures both above and below the surface</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg hover-scale cursor-pointer
        ${index === activities.length - 1 ? "col-span-2 aspect-[16/12] md:col-span-1 md:aspect-[4/5] lg:col-span-1" : "aspect-[4/5]"}`}
              onClick={() => setSelectedActivity(activity.title)}>
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
      <ActivityGallery activity={selectedActivity || ""} isOpen={!!selectedActivity} onClose={() => setSelectedActivity(null)} />
    </section>
  );
};

export default ActivitiesSection;
