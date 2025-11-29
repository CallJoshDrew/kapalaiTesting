import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/scenery/pic8.jpg";
import greenFinsAward from "@/assets/green-fins-award.jpg";
import padiAward from "@/assets/padi-5-star-award.png";
import ecoFriendlyAward from "@/assets/best-eco-friendly-award.png";
import guestChoiceAward from "@/assets/guest-choice-award.jpg";
import worldTravelAward from "@/assets/world-travel-award.png";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const { displayText, isComplete } = useTypewriter({
    text: "Your journey deserves its destination, where pristine waters meets exquisite service.",
    speed: 30, // 2x faster (80 / 2 = 40)
    delay: 500,
    trigger: isVisible,
  });

  const scrollToDiveExpert = () => {
    // Trigger audio play from parent component
    const audioEvent = new CustomEvent("playAudio");
    window.dispatchEvent(audioEvent);

    // Unlock scroll via custom event
    window.dispatchEvent(new Event("unlockScroll"));

    const element = document.getElementById("awards");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="h-auto bg-background overflow-x-hidden">
      {" "}
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "20% center", // Start with 25%, adjust as needed
          transform: isVisible ? "scale(1.3)" : "scale(1.0)",
          transition: isVisible ? "transform 10s ease-out" : "none",
        }}
      /> */}
      {/* Overlay */}
      {/* <div className="absolute inset-0 hero-overlay" /> */}
      {/* <div className="min-h-screen bg-background overflow-x-hidden"> */}

      {/* Hero Section */}
      <section id="hero" className="relative h-[28vh] mt-14 md:h-[90vh] overflow-hidden bg-gradient-to-b from-background to-secondary/20">
        <div className="relative z-10 w-full h-full">
          <iframe src="https://www.youtube.com/embed/E4jOVLTIE38?si=P4YGV7lNk7ATeN-5&autoplay=1&mute=0&loop=1&playlist=E4jOVLTIE38&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&vq=hd1080" className="w-full h-full object-cover" allow="autoplay; encrypted-media" title="Sipadan Kapalai Dive Resort" />
        </div>
      </section>
      {/* Content */}
      {/* <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="flex items-center justify-center mb-2"> */}
          {/* <MapPin className="w-5 h-5 mr-2 text-ocean-aqua" /> */}
          {/* <span className="text-ocean-aqua font-medium">@ Semporna, Sabah Malaysia</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Sipadan Kapalai
          <br />
          <span className="text-ocean-aqua">Dive Resort</span>
        </h1> */}

        {/* Fixed: Set a fixed height that accommodates the maximum text lines */}
        {/* <div className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-ocean-pearl min-h-[6rem] md:min-h-[5rem] flex items-center justify-center">{displayText}</div>

        <div className="flex justify-center items-center opacity-0 animate-fade-in delay-1500">
          <Button variant="accent" size="lg" className="text-lg px-8 py-6" onClick={scrollToDiveExpert}>
            Enter
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
