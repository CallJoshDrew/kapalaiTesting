import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SoundControl from "@/components/SoundControl";
import { useAudio } from "@/hooks/useAudio";
import HeroSection from "@/components/sections/HeroSection";
import AwardsSection from "@/components/sections/AwardsSection";
import DiveExpertSection from "@/components/sections/DiveExpertSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import HolidaysSection from "@/components/sections/HolidaysSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import "@/i18n/config"; // ensure i18n is initialized

const Index = () => {
  const { isPlaying, toggle, play } = useAudio("/sounds/ocean-wavesV1.mp3");
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollLocked, setScrollLocked] = useState(true);

  // Lock/unlock scroll based on scroll position
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (heroRef.current) {
  //       const rect = heroRef.current.getBoundingClientRect();
  //       // If hero section is not visible, unlock scroll
  //       if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
  //         setScrollLocked(false);
  //       }
  //     }
  //   };
  //   if (scrollLocked) {
  //     document.body.style.overflow = "hidden";
  //     document.documentElement.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //     document.documentElement.style.overflow = "";
  //   }
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     document.body.style.overflow = "";
  //     document.documentElement.style.overflow = "";
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollLocked]);

  // Listen for custom event to unlock scroll (e.g., from HeroSection)
  // useEffect(() => {
  //   const handleUnlock = () => setScrollLocked(false);
  //   window.addEventListener("unlockScroll", handleUnlock);
  //   return () => window.removeEventListener("unlockScroll", handleUnlock);
  // }, []);

  // useEffect(() => {
  //   const handlePlayAudio = () => {
  //     play();
  //   };
  //   window.addEventListener("playAudio", handlePlayAudio);
  //   return () => window.removeEventListener("playAudio", handlePlayAudio);
  // }, [play]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <section id="home" ref={heroRef}>
        <HeroSection />
      </section>
      <section id="awards">
        <AwardsSection />
      </section>
      <section id="diving">
        <DiveExpertSection />
      </section>
      <section id="holidays">
        <HolidaysSection />
      </section>
      <ActivitiesSection />
      <section id="services">
        <ServicesSection />
      </section>
      <section id="facilities">
        <FacilitiesSection />
      </section>
      <section id="reviews">
        <ReviewsSection />
      </section>
      <Footer />
      {/* <SoundControl isPlaying={isPlaying} onToggle={toggle} /> */}
    </div>
  );
};

export default Index;
