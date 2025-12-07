import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface ContactDialogProps {
  children: React.ReactNode;
}

// Country codes and nationalities data
const countryCodes = [
  { code: "+60", country: "Malaysia" },
  { code: "+65", country: "Singapore" },
  { code: "+66", country: "Thailand" },
  { code: "+62", country: "Indonesia" },
  { code: "+63", country: "Philippines" },
  { code: "+84", country: "Vietnam" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  { code: "+82", country: "South Korea" },
  { code: "+1", country: "USA/Canada" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+64", country: "New Zealand" },
  { code: "+33", country: "France" },
  { code: "+49", country: "Germany" },
  { code: "+39", country: "Italy" },
  { code: "+34", country: "Spain" },
];

const nationalities = ["Malaysian", "Singaporean", "Thai", "Indonesian", "Filipino", "Vietnamese", "Chinese", "Japanese", "Korean", "American", "Canadian", "British", "Australian", "New Zealander", "French", "German", "Italian", "Spanish", "Other"];

const roomOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20+"];
const diverOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20+"];

const ContactDialog = ({ children }: ContactDialogProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    alias: "",
    email: "",
    nationality: "",
    countryCode: "+60",
    contactNumber: "",
    arrivalDate: undefined as Date | undefined,
    departureDate: undefined as Date | undefined,
    numberOfRooms: "",
    numberOfDivers: "",
    numberOfNonDivers: "",
    specialRequirements: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation for required fields (arrivalDate is now optional)
    if (!formData.fullName || !formData.email || !formData.contactNumber || !formData.nationality || !formData.departureDate || !formData.numberOfRooms || !formData.numberOfDivers || !formData.numberOfNonDivers) {
      toast({
        title: t("contact.validation_error"),
        variant: "destructive",
      });
      return;
    }

    // Check if departure date is after arrival date only when both provided
    if (formData.arrivalDate && formData.departureDate && formData.departureDate <= formData.arrivalDate) {
      toast({
        title: t("contact.date_error"),
        variant: "destructive",
      });
      return;
    }

    // Create email content for mailto:
    const arrivalText = formData.arrivalDate ? format(formData.arrivalDate, "PPPP") : t("contact.not_provided");
    const departureText = formData.departureDate ? format(formData.departureDate, "PPPP") : t("contact.not_provided");

    const subject = `${t("contact.booking_inquiry")} - ${formData.fullName}`;
    const emailBody = `
${t("contact.email_header")}

${t("contact.section_personal")}
• ${t("contact.form_full_name")}: ${formData.fullName}
• ${t("contact.form_alias")}: ${formData.alias || t("contact.not_provided")}
• ${t("contact.form_email")}: ${formData.email}
• ${t("contact.form_nationality")}: ${formData.nationality}
• ${t("contact.form_contact")}: ${formData.countryCode} ${formData.contactNumber}

${t("contact.section_booking")}
• ${t("contact.form_arrival")}: ${arrivalText}
• ${t("contact.form_departure")}: ${departureText}
• ${t("contact.form_rooms")}: ${formData.numberOfRooms}
• ${t("contact.form_divers")}: ${formData.numberOfDivers}
• ${t("contact.form_non_divers")}: ${formData.numberOfNonDivers}

${t("contact.section_requirements")}
${formData.specialRequirements || t("contact.none")}

---
${t("contact.email_footer")} ${new Date().toLocaleString()}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:mail@sipadan-kapalai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open the email client
    window.open(mailtoLink, "_blank");

    // Show success message
    toast({
      title: t("contact.success_title"),
      description: t("contact.success_description"),
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (name: string, date: Date | undefined) => {
    setFormData({
      ...formData,
      [name]: date,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-ocean-deep text-left">{t("contact.title")}</DialogTitle>
          <DialogDescription className="text-left">{t("contact.description")}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name and Alias */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">{t("contact.form_full_name")} *</Label>
                <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder={t("contact.placeholder_full_name")} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="alias">{t("contact.form_alias")}</Label>
                <Input id="alias" name="alias" value={formData.alias} onChange={handleChange} placeholder={t("contact.placeholder_alias")} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">{t("contact.form_email")} *</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
              </div>
              {/* Nationality */}
              <div className="space-y-2">
                <Label htmlFor="nationality">{t("contact.form_nationality")} *</Label>
                <Select value={formData.nationality} onValueChange={(value) => handleSelectChange("nationality", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t("contact.placeholder_nationality")} />
                  </SelectTrigger>
                  <SelectContent>
                    {nationalities.map((nationality) => (
                      <SelectItem key={nationality} value={nationality}>
                        {nationality}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Contact Number with Country Code */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="countryCode">{t("contact.form_country_code")} *</Label>
                <Select value={formData.countryCode} onValueChange={(value) => handleSelectChange("countryCode", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t("contact.placeholder_code")} />
                  </SelectTrigger>
                  <SelectContent>
                    {countryCodes.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.code} ({country.country})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactNumber">{t("contact.form_contact")} *</Label>
                <Input id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder={t("contact.placeholder_contact")} required />
              </div>
            </div>

            {/* Arrival and Departure Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>{t("contact.form_arrival")}</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !formData.arrivalDate && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.arrivalDate ? format(formData.arrivalDate, "PPP") : <span>{t("contact.placeholder_date")}</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={formData.arrivalDate} onSelect={(date) => handleDateChange("arrivalDate", date)} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label>{t("contact.form_departure")} *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !formData.departureDate && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.departureDate ? format(formData.departureDate, "PPP") : <span>{t("contact.placeholder_date")}</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={formData.departureDate} onSelect={(date) => handleDateChange("departureDate", date)} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Room and Guest Numbers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="numberOfRooms">{t("contact.form_rooms")} *</Label>
                <Select value={formData.numberOfRooms} onValueChange={(value) => handleSelectChange("numberOfRooms", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t("contact.placeholder_select")} />
                  </SelectTrigger>
                  <SelectContent>
                    {roomOptions.map((rooms) => (
                      <SelectItem key={rooms} value={rooms}>
                        {rooms}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="numberOfDivers">{t("contact.form_divers")} *</Label>
                <Select value={formData.numberOfDivers} onValueChange={(value) => handleSelectChange("numberOfDivers", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t("contact.placeholder_select")} />
                  </SelectTrigger>
                  <SelectContent>
                    {diverOptions.map((divers) => (
                      <SelectItem key={divers} value={divers}>
                        {divers}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="numberOfNonDivers">{t("contact.form_non_divers")} *</Label>
                <Select value={formData.numberOfNonDivers} onValueChange={(value) => handleSelectChange("numberOfNonDivers", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t("contact.placeholder_select")} />
                  </SelectTrigger>
                  <SelectContent>
                    {diverOptions.map((nonDivers) => (
                      <SelectItem key={nonDivers} value={nonDivers}>
                        {nonDivers}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Special Requirements */}
            <div className="space-y-2">
              <Label htmlFor="specialRequirements">{t("contact.form_special_requirements")}</Label>
              <Textarea id="specialRequirements" name="specialRequirements" value={formData.specialRequirements} onChange={handleChange} placeholder={t("contact.placeholder_requirements")} rows={3} />
            </div>

            <Button type="submit" className="w-full bg-ocean-primary/80 text-white hover:bg-ocean-primary">
              <Send className="w-4 h-4 mr-2" />
              {t("contact.button_submit")}
            </Button>
          </form>

          {/* Help Text */}
          <div className="text-sm text-muted-foreground text-left">
            <p>{t("contact.help_text_1")}</p>
            <p>{t("contact.help_text_2")}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;