import { Star, Quote, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import AutoCarousel from "@/components/AutoCarousel";
import teamStaffImage from "@/assets/kapalaiReceptionisnts.png";
import ContactDialog from "@/components/ContactDialog";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Michael M",
      platform: "TripAdvisor",
      review: "This is our second visit and we love everything about the resort. Staff is great, rooms are really nice and the tub is great for warming up after a dive. The dive center is top notch with great guides (good evening karaoke too!) Food is fine, but could improve.",
      rating: 4,
    },
    {
      name: "Rebecca K",
      platform: "TripAdvisor",
      review: "My expectations were low when booking this due to previous average reviews. But I was pleasantly surprised. This place is stunning! We saw turtles around the overwater villas everyday as well as so many schools of fish. Highly recommend this place!",
      rating: 5,
    },
    {
      name: "Chinwong69",
      platform: "TripAdvisor",
      review: "Stayed at the resort for my dive trip. From pick up at the airport till transfer to the airport on the last day, the service was reasonably good from the different staff. The accomodation was tidy and importantly, well maintained.",
      rating: 5,
    },
    {
      name: "Cswanston",
      platform: "TripAdvisor",
      review: "We had the most amazing 5 days there as a family of 4 with 2 rooms. The place is even more beautiful than the photographs and just strolling along the walkways you see so much wildlife.",
      rating: 5,
    },
    {
      name: "Werner G",
      platform: "Agoda.com",
      review: "A diving resort with great standardized processes. The diving center is super functional with a super friendly team. The artificial house reef is great and there is always something to see. Sleeping comfort in Villa 19 is great. The food is OK and the people are super nice.",
      rating: 5,
    },
    {
      name: "Lankylee",
      platform: "TripAdvisor",
      review: "Perfect place to chill out and dive surroundings. Sipadan is accessible. Resort without diving is already fantastic. It is an unbeatable combination with a well run diving outfit. Rates are cheap considering what you get. There is a marine police at one corner of large resort.",
      rating: 5,
    },
    {
      name: "mypassionmyobsession",
      platform: "TripAdvisor",
      review: "This is heaven on earth. If you're a diver, this is one of the top diving site in the world. Even if you're not, I would highly recommend for you to start taking lesson and get your license. It's worth it! The food is delicious. Bit spicy for those who doesn't take any spice.",
      rating: 5,
    },
    {
      name: "Ferry R",
      platform: "TripAdvisor",
      review: "If diving is your passion then you must have Kapalai in your diving checklist! But if you're not then don't worry because the place also is great for those who wants to escape the hustle and bustle. Spacious room and very serene. The food were great and the staffs are very helpful. Take a break and go Kapalai!",
      rating: 5,
    },
    {
      name: "Lee Meng",
      platform: "Trip.com",
      review: "Had a relaxing 4D3N surrounded with awesome view and lots of turtles and fish could be seen from the chalet. Resort staff are welcoming, approachable and helpful. Food provided was pleasantly prepared. However, the public toilet need thorough cleaning & refurbishment, wifi to be made available, more lighting along all the walkways at night.",
      rating: 4,
    },
    {
      name: "Man Chung",
      platform: "Trip.com",
      review: "The sea was so clear. Sea turtles can be seen from the balcony every night. very nice diving coaches. Highly recommended.",
      rating: 4,
    },
    {
      name: "Chiu",
      platform: "Trip.com",
      review: "Good resort for holiday, highly recommend.I had a very good experience in the resort, clean and safe. Overall is good.",
      rating: 5,
    },
    {
      name: "Rachel",
      platform: "Agoda.com",
      review: "The unique geographical location is unmatched by any other hotel. The room has a terrace where you can soak in the bath, view the sea, and daydream. The environment is truly perfect; those who love the sea will adore it.",
      rating: 4,
    },
    // {
    //   name: "Hafizan",
    //   platform: "Agoda.com",
    //   review: "This is a resort built on a sand bank, with the sandy beach, on one end of the resort, barely visible during high tide. Besides diving, this is where one spends time doing nothing. Even snorkeling in the designated areas gets you acquainted with sea creatures of various sorts. Amenities are more than adequate. Anyone expecting a luxurious holiday with butler service and Michelin-starred cuisine will be utterly disappointed. Staff are friendly and helpful. It was cloudy during my stay and the promise of a breathtaking sunset remained a dream. The presence of armed forces gives you a sense of ensured security.",
    //   rating: 4,
    // },
    {
      name: "Mohd Lutfi",
      platform: "Google Review",
      review: "Room - spacious., have 1 queen size & 1 single for std room Food - a lots. One of the chalet that provide lots of food. View - masha ALLAH... So beautiful Safety - have esscom that patrol daily basis of every chalet Looking forward to come again",
      rating: 5,
    },
    {
      name: "KSPG",
      platform: "Google Review",
      review: "Nice environment, extremely clean emeralds colour sea water, though the sandy beach is small but is white beach and good for photo taking. Consider big compound area for visitors to walk around, no daily tourists visit which keep the area with better privacy.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-ocean-pearl to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="w-6 h-6 mr-3 text-ocean-primary" />
            <span className="text-ocean-primary font-medium text-lg">Your Unforgettable</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-6">Guest Experiences</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">See why our guests consistently share outstanding feedback across all platforms.</p>
        </div>

        <AutoCarousel autoPlayInterval={3000} showDots={false}>
          {reviews.map((review, index) => (
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
                  Discover <span className="font-bold">Sipadan Kapalai Dive Resort in Semporna, Sabah, Malaysia</span>—a legendary destination above crystal-clear waters, offering <span className="font-bold">world-class diving</span> and <span className="font-bold">three decades of iconic hospitality</span>. Book your unforgettable island escape today!
                </p>
                <ContactDialog>
                  <Button variant="accent" size="lg" className="text-lg px-8 py-6">
                    Enquiry
                  </Button>
                </ContactDialog>
                {/* <a href="https://dive-malaysia.com/enquiries/" target="_blank" rel="noopener noreferrer">
                  <Button variant="accent" size="lg" className="text-lg px-8 py-6">
                    Enquiry
                  </Button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
