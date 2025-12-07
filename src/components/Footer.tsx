import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";
import kapalaiLogo from "@/assets/logo/SKDR_Transparent_HR.png";
import tiktok from "@/assets/logo/tiktok.png";
import rednote from "@/assets/logo/rednote.png";
import inbayuRightReserved from "@/assets/logo/All_right_reserved.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-ocean-deep text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {/* Contact Info */}
          {/* Sandakan Office */}
          <div className="space-y-4 mx-4 md:mx-0">
            <h4 className="text-lg font-semibold text-white">{t("footer.sandakan_office")}</h4>
            <a href="https://maps.app.goo.gl/pkaqfYKCzzatt6kC9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
              <span>{t("footer.sandakan_address")}</span>
            </a>
            <div className="flex items-start gap-2">
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
                <a href="tel:+60178927100" className="hover:underline transition-all duration-300 hover:scale-105">
                  (+60) 17-892 7100 (Caroline)
                </a>
                <a href="tel:+60178992700" className="hover:underline transition-all duration-300 hover:scale-105">
                  (+60) 17-899 2700 (Stella)
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a href="mailto:mail@sipadan-kapalai.com" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
                <span>mail@sipadan-kapalai.com</span>
              </a>
            </div>
          </div>

          {/* Tawau Office */}
          <div className="space-y-4 mx-4 md:mx-0">
            <h4 className="text-lg font-semibold text-ocean-pearl">{t("footer.tawau_office")}</h4>
            <a href="https://maps.app.goo.gl/7mouAogF627ktS2H7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
              <span>{t("footer.tawau_address")}</span>
            </a>
            <div className="flex flex-col gap-2">
              <a href="tel:+6089765200" className="hover:underline transition-all duration-300 hover:scale-105">
                (+60) 89-765200
              </a>
              <a href="tel:+60178991700" className="hover:underline transition-all duration-300 hover:scale-105">
                  (+60) 17-899 1700 (Veronica)
                </a>
            </div>
            <div className="flex items-center gap-2">
              <a href="mailto:mail@sipadan-kapalai.com" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
                <span>mail@sipadan-kapalai.com</span>
              </a>
            </div>
          </div>

          {/* KK Office */}
          <div className="space-y-4 mx-4 md:mx-0">
            <h4 className="text-lg font-semibold text-ocean-pearl">{t("footer.kk_office")}</h4>
            <a href="https://maps.app.goo.gl/7mouAogF627ktS2H7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
              <span>{t("footer.kk_address")}</span>
            </a>
            <div className="flex items-center gap-2">
              <a href="tel:+60178995700" className="hover:underline transition-all duration-300 hover:scale-105">
                (+60) 17-899 5700 (Shannel)
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a href="mailto:mail@sipadan-kapalai.com" className="flex items-center gap-2 hover:underline transition-all duration-300 hover:scale-105">
                <span>mail@sipadan-kapalai.com</span>
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4 mx-4 md:mx-0">
            <h3 className="text-lg font-bold text-ocean-pearl">{t("footer.follow_us")}</h3>
            <p className="text-gray-300 leading-relaxed">{t("footer.follow_description")}</p>
            <div className="flex space-x-5 items-center">
              <a href="https://www.facebook.com/SipadanKapalaiDiveResort" target="_blank" className="text-ocean-pearl hover:text-white smooth-transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/sipadankapalaidiveresort/" target="_blank" className="text-ocean-pearl hover:text-white smooth-transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4 mx-4 md:mx-0">
            <h4 className="text-lg font-semibold text-ocean-pearl">{t("footer.certifications")}</h4>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">{t("footer.cert_padi")}</p>
              <p className="text-gray-300 text-sm">{t("footer.cert_green_fins")}</p>
              <p className="text-gray-300 text-sm">{t("footer.cert_tripadvisor")}</p>
              <p className="text-gray-300 text-sm">{t("footer.cert_sabah_achievers")}</p>
              <p className="text-gray-300 text-sm">{t("footer.cert_sabah_tourism")}</p>
              <p className="text-gray-300 text-sm">{t("footer.cert_sabah_association")}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex items-center justify-center pt-20 mb-2 md:mb-10">
              <img
                src={kapalaiLogo}
                alt="Sipadan Kapalai Resort"
                className="h-28 md:h-72 w-auto"
              />
            </div>
            <p className="text-gray-400 text-xs md:text-sm">{t("footer.copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;