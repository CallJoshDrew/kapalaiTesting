import { Star, Quote, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import AutoCarousel from "@/components/AutoCarousel";
import teamStaffImage from "@/assets/kapalaiReceptionisnts.png";
import ContactDialog from "@/components/ContactDialog";

const ReviewsSection = () => {
  const { t } = useTranslation();

  const reviewsData = t("reviews.items", { returnObjects: true }) as Array<{
    name: string;
    platform: string;
    review: string;
    rating: number;
  }>;

  return (
    <section className="py-20 bg-gradient-to-br from-ocean-pearl to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="w-6 h-6 mr-3 text-ocean-primary" />
            <span className="text-ocean-primary font-medium text-lg">{t("reviews.label")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-6">{t("reviews.heading")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("reviews.subtitle")}</p>
        </div>

        <AutoCarousel autoPlayInterval={3000} showDots={false}>
          {reviewsData.map((review, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-2xl p-6 elegant-shadow smooth-transition hover:scale-105 hover:glow-effect max-w-2xl mx-auto">
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-ocean-light" />
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-4 leading-relaxed">"{review.review}"</p>

                {/* Reviewer Info */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-ocean-deep">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.platform}</p>
                </div>
              </div>
            </div>
          ))}
        </AutoCarousel>

        {/* Booking Section */}
        <div className="mt-16 pt-16 border-t border-ocean-aqua/20">
          <div className="bg-ocean-light/10 rounded-2xl p-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden">
                <img src={teamStaffImage} alt="Happy resort team staff including front desk, welcoming team and diving instructors" className="w-full h-64 lg:h-80 object-cover" />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xl text-ocean-deep mb-8 leading-relaxed">
                  {t("reviews.booking_description")}
                </p>
                <ContactDialog>
                  <Button variant="accent" size="lg" className="text-lg px-8 py-6">
                    {t("reviews.booking_button")}
                  </Button>
                </ContactDialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;