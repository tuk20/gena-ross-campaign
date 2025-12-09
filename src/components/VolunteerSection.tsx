import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Heart } from "lucide-react";

const VolunteerSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: [] as string[],
    message: "",
  });

  const volunteerOptions = [
    { id: "canvassing", label: "Door-to-door canvassing" },
    { id: "phone-banking", label: "Phone banking" },
    { id: "events", label: "Event support" },
    { id: "social-media", label: "Social media assistance" },
    { id: "other", label: "Other" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (id: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, id]
        : prev.interests.filter((i) => i !== id),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/glross2026@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interests: formData.interests.join(", "),
          message: formData.message,
          _subject: "New Volunteer Sign-up - Dr. Gena L. Ross Campaign",
        }),
      });

      if (response.ok) {
        toast({
          title: "Thank you for volunteering!",
          description: "We'll be in touch soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          interests: [],
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      toast({
        title: "Submission Error",
        description: "Please try again or email us directly at glross2026@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="volunteer" className="py-16 md:py-24 bg-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-campaign-red rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Volunteer With Us
            </h2>
            <p className="text-white/80">
              Join our team and help make a difference in Platte County
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="name" className="text-foreground font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1.5"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1.5"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="phone" className="text-foreground font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1.5"
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="mb-6">
              <Label className="text-foreground font-medium mb-3 block">
                Areas of Interest
              </Label>
              <div className="grid sm:grid-cols-2 gap-3">
                {volunteerOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={option.id}
                      checked={formData.interests.includes(option.id)}
                      onCheckedChange={(checked) =>
                        handleInterestChange(option.id, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={option.id}
                      className="text-sm text-foreground/80 cursor-pointer"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="message" className="text-foreground font-medium">
                Message (Optional)
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="mt-1.5"
                placeholder="Tell us about yourself or how you'd like to help..."
                rows={4}
              />
            </div>

            <Button
              type="submit"
              variant="campaign"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Volunteer Form"}
            </Button>
          </form>

          <div className="text-center mt-8">
            <a
              href="https://example.com/donate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="donate" size="xl">
                Donate to the Campaign
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
