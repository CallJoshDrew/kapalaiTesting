import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactDialog from "./ContactDialog";
import kapalaiLogo from "@/assets/logo/SKDR_Transparent_BlackFont.png";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);
  const { t, i18n } = useTranslation();
   const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  const isEnglish = i18n.language === 'en';
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      // setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "INBAYU", href: "https://inbayu-testing.vercel.app" },
    { name: t("nav.diving"), href: "#diving" },
    { name: t("nav.holidays"), href: "#holidays" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.facilities"), href: "#facilities" },
    { name: t("nav.reviews"), href: "#reviews" },
  ];

  return (
    <nav className={`fixed top-0 w-full h-14 bg-white/95 backdrop-blur-sm border-b border-ocean-pearl/20 shadow-lg z-50 transition-transform duration-300  "translate-y-0"`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          {/* <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-ocean-deep" style={{ lineHeight: "1.1" }}>
              <span>Sipadan Kapalai</span>
              <br />
              <span className="text-ocean-primary text-sm" style={{ marginTop: "-4px", display: "inline-block" }}>
                Dive Resort
              </span>
            </h1>
          </div> */}
          <div className="flex items-center">
            <a key="Home" href="#home" className="text-ocean-deep hover:text-ocean-primary px-3 py-2 text-sm font-medium smooth-transition whitespace-nowrap">
              <img
                src={kapalaiLogo}
                alt="Sipadan Kapalai Dive Resort Logo"
                className="h-3 w-auto" // adjust size as needed
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4 overflow-x-auto scrollbar-hide">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-ocean-deep hover:text-ocean-primary px-3 py-2 text-sm font-medium smooth-transition whitespace-nowrap">
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Temporary Disable for now */}
            <button onClick={toggleLanguage} className="px-4 py-2">
              {isEnglish ? "ENG" : "中文"}
            </button>
            <ContactDialog>
              <Button variant="book-now" className="h-8 rounded-sm">
                {t("nav.enquiry")}
              </Button>
            </ContactDialog>
            {/* <div className="flex justify-center">
              <a href="https://dive-malaysia.com/enquiries/" target="_blank" rel="noopener noreferrer">
                <Button variant="book-now" className="h-8 rounded-sm">
                  Enquiry
                </Button>
              </a>
            </div> */}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex">
            <button onClick={toggleLanguage} className="py-2 px-4 bg-[#006e8f] text-xs text-white rounded-sm">
              {isEnglish ? "ENG" : "中文"}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-ocean-deep hover:text-ocean-primary p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-ocean-pearl/20">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-ocean-deep hover:text-ocean-primary block px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 space-y-2">
                {/* Temporary disabled for now */}
                <ContactDialog>
                  <Button variant="book-now" className="h-8 rounded-sm">
                    {t("nav.enquiry")}
                  </Button>
                </ContactDialog>
                {/* <div className="flex">
                  <a href="https://dive-malaysia.com/enquiries/" target="_blank" rel="noopener noreferrer">
                    <Button variant="book-now">Enquiry</Button>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
