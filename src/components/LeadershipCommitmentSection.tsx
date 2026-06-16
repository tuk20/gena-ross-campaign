import { Handshake, Eye, Scale, Users } from "lucide-react";
import flyerAsset from "@/assets/campaign-flyer.png.asset.json";

const LeadershipCommitmentSection = () => {
  const pillars = [
    {
      icon: Eye,
      title: "Transparency",
      description: "Open processes, honest reporting, and clear communication to earn and keep public trust.",
    },
    {
      icon: Scale,
      title: "Accountability",
      description: "Responsible stewardship of taxpayer dollars and standing behind every decision made.",
    },
    {
      icon: Handshake,
      title: "Integrity",
      description: "Listening, collaborating, and bringing people together to solve problems the right way.",
    },
    {
      icon: Users,
      title: "Representation",
      description: "Every voice matters. Every neighborhood. Every resident. We represent you.",
    },
  ];

  const hashtags = [
    "#DrGenaRoss",
    "#PlatteCounty",
    "#PlatteCountyMO",
    "#LeadingThroughCollaboration",
    "#TransparencyMatters",
    "#CommunityFirst",
    "#StrongerTogether",
    "#OneCountyOneFuture",
  ];

  return (
    <section id="leadership-commitment" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Together, We Build a Stronger Platte County
            </h2>
            <div className="w-24 h-1 bg-campaign-red mx-auto mb-6"></div>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-3xl mx-auto">
              One County. One Team. One Future.
            </p>
          </div>

          {/* Campaign Flyer */}
          <div className="mb-12 flex justify-center">
            <img
              src={flyerAsset.url}
              alt="Together, We Build a Stronger Platte County — Dr. Gena Ross for Presiding Commissioner"
              className="max-w-full md:max-w-2xl rounded-xl shadow-lg border border-border"
              loading="lazy"
            />
          </div>

          {/* Main Message */}
          <div className="space-y-6 mb-16">
            <p className="text-foreground/80 leading-relaxed text-lg">
              One of the things I believe most strongly is that no one office can move Platte County forward alone.
            </p>

            <p className="text-foreground/80 leading-relaxed text-lg">
              If elected Presiding Commissioner, I will work to build strong partnerships with county officials, local communities, state leaders, and federal partners to help ensure Platte County remains a place where families thrive, businesses grow, and residents are heard, valued, and represented.
            </p>

            <p className="text-foreground/80 leading-relaxed text-lg">
              Leadership is not about telling people what to do. It is about listening, collaborating, and bringing people together to solve problems and plan for the future.
            </p>

            <blockquote className="border-l-4 border-campaign-red pl-6 py-2">
              <p className="text-navy font-heading text-xl md:text-2xl font-bold italic">
                "My commitment is simple: transparency, accountability, integrity, and representation for all."
              </p>
            </blockquote>

            <p className="text-foreground/80 leading-relaxed text-lg">
              Together, we can build a stronger Platte County — one county, one team, one future.
            </p>
          </div>

          {/* Four Pillars */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-background rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border-l-4 border-campaign-red"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-campaign-red" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-navy">
                    {title}
                  </h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* Closing tagline */}
          <div className="text-center mb-8">
            <p className="font-heading text-2xl md:text-3xl font-bold text-navy mb-2">
              One County. One Team. One Future.
            </p>
            <div className="w-24 h-1 bg-campaign-red mx-auto"></div>
          </div>

          {/* Hashtags */}
          <div className="flex flex-wrap justify-center gap-2">
            {hashtags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-navy/10 rounded-full text-navy text-sm font-medium hover:bg-campaign-red/10 hover:text-campaign-red transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipCommitmentSection;
