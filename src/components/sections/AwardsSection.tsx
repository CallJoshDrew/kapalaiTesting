import { Award, Star, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import tripAdvisorAward from "@/assets/awards/tripAdvisor2.png";
import sabahTourismAward from "@/assets/awards/sabahTourism1.png";
import sabahTopAchieversAward from "@/assets/awards/sabahTop1.png";
import { useTranslation } from "react-i18next";

const AwardsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();
  const images = [tripAdvisorAward, sabahTourismAward, sabahTopAchieversAward];
  // get items array from translations
  const awards = t("awards.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
    year: string;
  }>;

  return (
    <section className="py-20 bg-gradient-to-br from-ocean-pearl to-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-4">{t("awards.heading")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("awards.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-auto">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 flex items-center elegant-shadow smooth-transition hover:scale-105 hover:glow-effect transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{
                transitionDelay: isVisible ? `${index * 0.2}s` : "0s",
              }}>
              {/* Image on the left */}
              <img
                src={images[index]}
                alt={`${award.title} award`}
                className={`rounded-2xl object-contain mr-8 flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                style={{
                  width: index === 0 || index === 2 ? "7rem" : "6rem",
                  height: index === 0 || index === 2 ? "9rem" : "7rem",
                }}
              />

              {/* Details on the right */}
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold text-ocean-deep mb-1">{award.title}</h3>
                <p className="text-muted-foreground mb-3">{award.description}</p>
                <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">{award.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
