import { CheckCircle, Award, Users, Briefcase, Shield } from "lucide-react";

const AboutCandidateSection = () => {
  const experiences = [
    {
      icon: Award,
      text: "Over 15 years of professional leadership experience",
    },
    {
      icon: Users,
      text: "Active community involvement in Platte County organizations",
    },
    {
      icon: Briefcase,
      text: "Background in public administration and policy development",
    },
    {
      icon: Shield,
      text: "Commitment to transparent and accountable governance",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            About Dr. Gena L. Ross
          </h2>
          <div className="w-24 h-1 bg-campaign-red mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Background */}
          <div className="bg-background rounded-xl p-8 shadow-sm mb-8 hover:shadow-lg transition-shadow duration-300 group">
            <h3 className="font-heading text-2xl font-semibold text-navy mb-4 group-hover:text-campaign-red transition-colors duration-300">
              Background
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Dr. Gena L. Ross has lived in Platte County for over 20 years and brings 
              professional experience in education and public administration. Her background 
              includes work in leadership, community involvement, and organizational management, 
              providing insight into local issues and the needs of county operations.
            </p>
          </div>

          {/* Experience */}
          <div className="bg-background rounded-xl p-8 shadow-sm mb-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-heading text-2xl font-semibold text-navy mb-6">
              Relevant Experience
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {experiences.map((experience, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-navy/5 transition-all duration-300 hover:translate-x-1 group cursor-default"
                >
                  <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-campaign-red/10 transition-colors duration-300">
                    <experience.icon className="w-5 h-5 text-navy group-hover:text-campaign-red transition-colors duration-300" />
                  </div>
                  <span className="text-foreground/80 text-sm leading-relaxed pt-2">{experience.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why This Office */}
          <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
            <h3 className="font-heading text-2xl font-semibold text-navy mb-4 group-hover:text-campaign-red transition-colors duration-300">
              Why This Office
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Dr. Gena L. Ross is seeking the office of Presiding Commissioner to 
              support effective county administration, contribute to responsible 
              oversight, and help maintain transparent and organized county operations. 
              Her goal is to serve Platte County residents with integrity and dedication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCandidateSection;
