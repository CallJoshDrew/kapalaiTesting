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
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Check if departure date is after arrival date only when both provided
    if (formData.arrivalDate && formData.departureDate && formData.departureDate <= formData.arrivalDate) {
      toast({
        title: "Departure date must be after arrival date",
        variant: "destructive",
      });
      return;
    }

    // Create email content for mailto:
    const arrivalText = formData.arrivalDate ? format(formData.arrivalDate, "PPPP") : "Not provided";
    const departureText = formData.departureDate ? format(formData.departureDate, "PPPP") : "Not provided";

    const subject = `Booking Inquiry from ${formData.fullName}`;
    const emailBody = `
BOOKING INQUIRY - Sipadan Kapalai Dive Resort

PERSONAL INFORMATION:
• Full Name: ${formData.fullName}
• Alias: ${formData.alias || "Not provided"}
• Email: ${formData.email}
• Nationality: ${formData.nationality}
• Contact Number: ${formData.countryCode} ${formData.contactNumber}

BOOKING DETAILS:
• Arrival Date: ${arrivalText}
• Departure Date: ${departureText}
• Number of Rooms: ${formData.numberOfRooms}
• Number of Divers: ${formData.numberOfDivers}
• Number of Non-divers: ${formData.numberOfNonDivers}

SPECIAL REQUIREMENTS:
${formData.specialRequirements || "None"}

---
This inquiry was submitted via the website on ${new Date().toLocaleString()}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:mail@sipadan-kapalai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open the email client
    window.open(mailtoLink, "_blank");

    // Show success message
    toast({
      title: "Email client opened!",
      description: "Please review and send the pre-filled email to complete your booking inquiry.",
    });

    // Optional: Reset form and close dialog
    // You might want to keep the form open so users can reference it
    // setFormData({
    //   fullName: "",
    //   alias: "",
    //   email: "",
    //   nationality: "",
    //   countryCode: "+60",
    //   contactNumber: "",
    //   arrivalDate: undefined,
    //   departureDate: undefined,
    //   numberOfRooms: "",
    //   numberOfDivers: "",
    //   numberOfNonDivers: "",
    //   specialRequirements: "",
    // });
    // setIsOpen(false);
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
          <DialogTitle className="text-ocean-deep text-left">Booking Inquiry</DialogTitle>
          <DialogDescription className="text-left">Get in touch with us for reservations or inquiries about your dream vacation. Your inquiry will be sent via email.</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Contact Info */}
          {/* <div className="bg-ocean-light/10 rounded-lg p-4 space-y-3">
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-ocean-primary" />
              <span className="text-sm">+60 89-781-378</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-ocean-primary" />
              <span className="text-sm">info@sipadan-kapalai.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-ocean-primary" />
              <span className="text-sm">Semporna, Sabah, Malaysia</span>
            </div>
          </div> */}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name and Alias */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name (As Per ID/Passport) *</Label>
                <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="As shown on your passport" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="alias">Alias</Label>
                <Input id="alias" name="alias" value={formData.alias} onChange={handleChange} placeholder="Preferred name (optional)" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
              </div>
              {/* Nationality */}
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality *</Label>
                <Select value={formData.nationality} onValueChange={(value) => handleSelectChange("nationality", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your nationality" />
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
                <Label htmlFor="countryCode">Country Code *</Label>
                <Select value={formData.countryCode} onValueChange={(value) => handleSelectChange("countryCode", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select code" />
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
                <Label htmlFor="contactNumber">Contact Number *</Label>
                <Input id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Phone number" required />
              </div>
            </div>

            {/* Arrival and Departure Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Arrival Date</Label> {/* removed required asterisk */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !formData.arrivalDate && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.arrivalDate ? format(formData.arrivalDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={formData.arrivalDate} onSelect={(date) => handleDateChange("arrivalDate", date)} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label>Departure Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !formData.departureDate && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.departureDate ? format(formData.departureDate, "PPP") : <span>Pick a date</span>}
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
                <Label htmlFor="numberOfRooms">Number of Rooms *</Label>
                <Select value={formData.numberOfRooms} onValueChange={(value) => handleSelectChange("numberOfRooms", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
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
                <Label htmlFor="numberOfDivers">Number of Divers *</Label>
                <Select value={formData.numberOfDivers} onValueChange={(value) => handleSelectChange("numberOfDivers", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
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
                <Label htmlFor="numberOfNonDivers">Number of Non-divers *</Label>
                <Select value={formData.numberOfNonDivers} onValueChange={(value) => handleSelectChange("numberOfNonDivers", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
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
              <Label htmlFor="specialRequirements">Special Requirements</Label>
              <Textarea id="specialRequirements" name="specialRequirements" value={formData.specialRequirements} onChange={handleChange} placeholder="Any special requirements, dietary restrictions, or additional information..." rows={3} />
            </div>

            <Button type="submit" className="w-full bg-ocean-primary/80 text-white hover:bg-ocean-primary">
              <Send className="w-4 h-4 mr-2" />
              Open Email to Send Inquiry
            </Button>
          </form>

          {/* Help Text */}
          <div className="text-sm text-muted-foreground text-left">
            <p>After clicking the button, your email client will open with a pre-filled message.</p>
            <p>Please review and click "Send" to complete your booking inquiry.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
