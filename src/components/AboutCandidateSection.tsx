import { CheckCircle } from "lucide-react";

const AboutCandidateSection = () => {
  const experiences = [
    "Professional background in education and community leadership",
    "Extensive experience in administration and organizational management",
    "Active involvement in local community initiatives and boards",
    "Strong commitment to public service and transparent governance",
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
          <div className="bg-background rounded-xl p-8 shadow-sm mb-8">
            <h3 className="font-heading text-2xl font-semibold text-navy mb-4">
              Background
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Dr. Gena L. Ross is a dedicated Platte County resident who brings 
              extensive professional experience in education and community leadership. 
              Her background includes significant work in administration, providing 
              insight into local issues and the needs of county operations.
            </p>
          </div>

          {/* Experience */}
          <div className="bg-background rounded-xl p-8 shadow-sm mb-8">
            <h3 className="font-heading text-2xl font-semibold text-navy mb-4">
              Relevant Experience
            </h3>
            <ul className="space-y-3">
              {experiences.map((experience, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-campaign-red mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{experience}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why This Office */}
          <div className="bg-background rounded-xl p-8 shadow-sm">
            <h3 className="font-heading text-2xl font-semibold text-navy mb-4">
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
