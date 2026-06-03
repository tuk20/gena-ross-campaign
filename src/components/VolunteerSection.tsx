import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const VolunteerSection = () => {
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

          <div className="flex flex-col items-center gap-6">
            <a href="mailto:ross4plattecounty@gmail.com?subject=Volunteer%20for%20Dr.%20Ross%20Campaign&body=Hello%20Dr.%20Ross,%0A%0AI%20would%20like%20to%20volunteer%20for%20your%20campaign.%20Please%20let%20me%20know%20how%20I%20can%20help.%0A%0ABest%20regards,">
              <Button variant="campaign" size="xl">
                Email to Volunteer
              </Button>
            </a>
            <a
              href="https://secure.winred.com/dr-gena-ross-for-platte-county/donate-today"
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
