import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import kapalaiLogo from "@/assets/logo/SKDR_Transparent_HR.png";
import tiktok from "@/assets/logo/tiktok.png";
import rednote from "@/assets/logo/rednote.png";
import inbayuRightReserved from "@/assets/logo/All_right_reserved.png";

const Footer = () => {
  return (
    <footer className="bg-ocean-deep text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {/* Contact Info */}
          {/* Sandakan Office */}
          <div className="space-y-4 mx-4 md:mx-0">
            <h4 className="text-lg font-semibold text-white">Sandakan Office</h4>
            <a href="https://maps.app.goo.gl/pkaqfYKCzzatt6kC9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
              {/* <MapPin size={20} className="text-white shrink-0" /> */}
              <span>Ground Floor, Lot 38 &amp; 39, Block C, Bandar Tyng, Mile 5, North Road, PPM 255 Elopura, 90000 Sandakan, Sabah, Malaysia.</span>
            </a>
            <div className="flex items-start gap-2">
              {/* Phone Icon Column - Centered */}
              {/* <div className="flex justify-center items-center h-6 shrink-0">
                    <Phone size={18} className="text-white mt-1" />
                  </div> */}

              {/* Phone Numbers Column - Stacked */}
              <div className="flex flex-col gap-2">
                <a href="tel:+6089673999" className="hover:underline transition-all duration-300 hover:scale-105">
                  (+60) 89-673999
                </a>
                <a href="tel:+6089674999" className="hover:underline transition-all duration-300 hover:scale-105">
                  (+60) 89-674999
                </a>
                <a href="tel:+6089675999" className="hover:underline transition-all duration-300 hover:scale-105">
                  (+60) 89-675999
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a href="mailto:mail@sipadan-kapalai.com" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
                {/* <Mail size={18} className="text-white shrink-0 mt-0.5" /> */}
                <span>mail@sipadan-kapalai.com</span>
              </a>
            </div>
          </div>
          {/* Tawau Office */}
          <div className="space-y-4 mx-4 md:mx-0">
            <h4 className="text-lg font-semibold text-ocean-pearl">Tawau Office</h4>
            <a href="https://maps.app.goo.gl/7mouAogF627ktS2H7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
              {/* <MapPin size={20} className="text-white shrink-0" /> */}
              <span>1st Floor, No. 484, Block P, Bandar Sabindo, P.O Box 61120, 91021 Tawau, Sabah, Malaysia.</span>
            </a>
            <div className="flex items-center gap-2">
              {/* <Phone size={18} className="text-white shrink-0" /> */}
              <a href="tel:+6089765200" className="hover:underline transition-all duration-300 hover:scale-105">
                (+60) 89-765200
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a href="mailto:mail@sipadan-kapalai.com" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
                {/* <Mail size={18} className="text-white shrink-0 mt-0.5" /> */}
                <span>mail@sipadan-kapalai.com</span>
              </a>
            </div>
          </div>
          {/* KK Office */}
          <div className="space-y-4 mx-4 md:mx-0">
            <h4 className="text-lg font-semibold text-ocean-pearl">Kota Kinabalu Office</h4>
            <a href="https://maps.app.goo.gl/7mouAogF627ktS2H7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
              {/* <MapPin size={20} className="text-white shrink-0" /> */}
              <span>Block B, 1st Floor, Lot B-1-1, Plaza Tanjung Aru, Jalan Mat Salleh, Tanjung Aru, 88100 Kota Kinabalu, Sabah, Malaysia.</span>
            </a>
            <div className="flex items-center gap-2">
              {/* <Phone size={18} className="text-white shrink-0" /> */}
              <a href="tel:+60178995700" className="hover:underline transition-all duration-300 hover:scale-105">
                (+60) 17-899 5700
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a href="mailto:mail@sipadan-kapalai.com" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
                {/* <Mail size={18} className="text-white shrink-0 mt-0.5" /> */}
                <span>mail@sipadan-kapalai.com</span>
              </a>
            </div>
          </div>
          {/* <div className="space-y-4">
            <h4 className="text-lg font-semibold text-ocean-pearl">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-ocean-primary mt-0.5" />
                <div>
                  <p className="text-gray-300">Sipadan Kapalai Dive Resort</p>
                  <p className="text-gray-300">Semporna, Sabah, Malaysia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-ocean-primary" />
                <p className="text-gray-300">+6089-673999, +6089-765200</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-ocean-primary" />
                <p className="text-gray-300">mail@sipadan-kapalai.com</p>
              </div>
            </div>
          </div> */}
          {/* Follow Us */}
          <div className="space-y-4 mx-4 md:mx-0">
            <h3 className="text-lg font-bold text-ocean-pearl">Follow Us</h3>
            <p className="text-gray-300 leading-relaxed">Experience the ultimate underwater paradise in the heart of the Semporna, Sabah.</p>
            <div className="flex space-x-5 items-center">
              <a href="https://www.facebook.com/SipadanKapalaiDiveResort" target="_blank" className="text-ocean-pearl hover:text-white smooth-transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/sipadankapalaidiveresort/" target="_blank" className="text-ocean-pearl hover:text-white smooth-transition">
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a href="#" className="text-ocean-pearl hover:text-white smooth-transition">
                <img src={tiktok} alt="Sipadan Kapalai TikTok Social Media" className="w-4 h-4" />
              </a>
              <a href="#" className="text-ocean-pearl hover:text-white smooth-transition">
                <img src={rednote} alt="Sipadan Kapalai Rednote Social Media" className="w-10 h-10" />
              </a> */}
            </div>
            {/* SVG icons from lucide-react */}
            {/* <div className="flex space-x-4">
              <a href="#" className="text-ocean-pearl hover:text-white smooth-transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook-icon lucide-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-ocean-pearl hover:text-white smooth-transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram-icon lucide-instagram">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div> */}
          </div>

          {/* Certifications */}
          <div className="space-y-4 mx-4 md:mx-0">
            <h4 className="text-lg font-semibold text-ocean-pearl">Certifications</h4>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">PADI Dive Resort</p>
              <p className="text-gray-300 text-sm">Green Fins Certified</p>
              <p className="text-gray-300 text-sm">TripAdvisor Hall of Fame</p>
              <p className="text-gray-300 text-sm">Sabah Top Achievers</p>
              <p className="text-gray-300 text-sm">Sabah Tourism Award</p>
              <p className="text-gray-300 text-sm">Sabah Tourist Association</p>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div className="space-y-4">
            <h4 className="text-lg font-semibold text-ocean-pearl">Quick Links</h4>
            <div className="space-y-2">
              <a href="#diving" className="block text-gray-300 hover:text-ocean-pearl smooth-transition">
                Diving
              </a>
              <a href="#holidays" className="block text-gray-300 hover:text-ocean-pearl smooth-transition">
                Holidays
              </a>
              <a href="#services" className="block text-gray-300 hover:text-ocean-pearl smooth-transition">
                Services
              </a>
              <a href="#facilities" className="block text-gray-300 hover:text-ocean-pearl smooth-transition">
                Facilities
              </a>
              <a href="#reviews" className="block text-gray-300 hover:text-ocean-pearl smooth-transition">
                Reviews
              </a>
            </div>
          </div> */}
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex items-center justify-center pt-20 mb-2 md:mb-10">
              <img
                src={kapalaiLogo}
                alt="Sipadan Kapalai Resort"
                className="h-28 md:h-72 w-auto" // h-40 on mobile, h-48 on md screens and up
              />
            </div>
            <p className="text-gray-400 text-xs md:text-sm">© 2025 All Rights Reserved.</p>
            {/* <img src={inbayuRightReserved} alt="an INBAYU Collection logo" className="h-4 md:h-4 object-cover" /> */}
            {/* Temporary Disable this for now */}
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-ocean-pearl text-sm smooth-transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-ocean-pearl text-sm smooth-transition">
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
