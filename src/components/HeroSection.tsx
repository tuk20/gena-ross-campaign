import { Button } from "@/components/ui/button";
import candidateImage from "@/assets/dr-gena-ross.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 md:pt-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-4">
              Dr. Gena L. Ross
            </h1>
            <p className="font-heading text-xl md:text-2xl text-campaign-red font-medium mb-2">
              for Platte County Presiding Commissioner
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              Informational Website for the 2026 Election
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              Welcome to the official informational website for Dr. Gena L. Ross, 
              candidate for Platte County Presiding Commissioner. This site provides 
              background information, qualifications, and an overview of county 
              responsibilities related to this office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#about">
                <Button variant="campaign" size="lg">
                  Learn About the Candidate
                </Button>
              </a>
              <a href="#priorities">
                <Button variant="campaign-outline" size="lg">
                  County Responsibilities
                </Button>
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-campaign-red/20 to-navy/20 rounded-2xl blur-2xl"></div>
              <img
                src={candidateImage}
                alt="Dr. Gena L. Ross"
                className="relative w-full max-w-md rounded-2xl shadow-2xl object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
