import { FileText, Shield, Users } from "lucide-react";

const AboutWebsiteSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Transparent Information",
      description: "Clear and factual details about county administration",
    },
    {
      icon: Shield,
      title: "County Oversight",
      description: "Understanding budgeting, safety, and public works",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Representing residents in regional planning",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Left: heading + copy */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                About This Website
              </h2>
              <div className="w-24 h-1 bg-campaign-red mb-6"></div>
              <p className="text-foreground/80 leading-relaxed text-lg">
                This website is dedicated to sharing transparent, factual information
                about the role of the Presiding Commissioner and the responsibilities
                involved in county administration. Residents can explore topics such as
                county budgeting, public works, planning and zoning, safety coordination,
                and intergovernmental representation.
              </p>
            </div>

            {/* Right: feature cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWebsiteSection;
