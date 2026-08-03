import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Handshake, Eye, Scale, Users } from "lucide-react";
import flyerAsset from "@/assets/campaign-flyer.png.asset.json";

const pillars = [
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Open processes, honest reporting, and clear communication to earn and keep public trust.",
  },
  {
    icon: Scale,
    title: "Accountability",
    description:
      "Responsible stewardship of taxpayer dollars and standing behind every decision made.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "Listening, collaborating, and bringing people together to solve problems the right way.",
  },
  {
    icon: Users,
    title: "Representation",
    description:
      "Every voice matters. Every neighborhood. Every resident. We represent you.",
  },
];

const LeadershipCommitmentSection = () => {
  return (
    <section id="leadership-commitment" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header — left-aligned */}
          <div className="mb-12">
            <p className="text-campaign-red font-semibold text-lg mb-2">
              A Commitment from Dr. Gena L. Ross
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Together, We Build a Stronger Platte County
            </h2>
            <div className="w-24 h-1 bg-campaign-red mb-6"></div>
            <p className="text-foreground/80 text-lg leading-relaxed max-w-3xl">
              One County. One Team. One Future.
            </p>
          </div>

          {/* Two-column: message + flyer */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-start mb-12">
            <div className="space-y-6">
              <p className="text-foreground/80 text-lg leading-relaxed">
                One of the things I believe most strongly is that no one office can move Platte County forward alone.
              </p>

              <p className="text-foreground/80 text-lg leading-relaxed">
                If elected Presiding Commissioner, I will work to build strong partnerships with county officials, local communities, state leaders, and federal partners to help ensure Platte County remains a place where families thrive, businesses grow, and residents are heard, valued, and represented.
              </p>

              <div className="bg-muted/30 rounded-lg p-6 border-l-4 border-campaign-red">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-navy mb-3">
                  Leadership Through Collaboration
                </h3>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Leadership is not about telling people what to do. It is about listening, collaborating, and bringing people together to solve problems and plan for the future.
                </p>
              </div>

              <blockquote className="border-l-4 border-campaign-red pl-6 py-2">
                <p className="text-navy font-heading text-xl font-bold italic">
                  "My commitment is simple: transparency, accountability, integrity, and representation for all."
                </p>
              </blockquote>
            </div>

            <div className="flex justify-center md:justify-end">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="relative group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-campaign-red rounded-2xl"
                    aria-label="View full campaign flyer"
                  >
                    <div className="absolute -inset-3 bg-gradient-to-br from-campaign-red/20 to-navy/20 rounded-2xl blur-2xl group-hover:from-campaign-red/30 group-hover:to-navy/30 transition-all duration-500"></div>
                    <img
                      src={flyerAsset.url}
                      alt="Together, We Build a Stronger Platte County — Dr. Gena Ross for Presiding Commissioner"
                      loading="lazy"
                      className="relative w-full max-w-md rounded-2xl shadow-2xl border border-border group-hover:scale-[1.02] transition-all duration-500"
                    />
                    <span className="sr-only">Click to enlarge</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-2 bg-background max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-center min-h-0">
                    <img
                      src={flyerAsset.url}
                      alt="Together, We Build a Stronger Platte County — Dr. Gena Ross for Presiding Commissioner"
                      className="max-h-[85vh] max-w-full h-auto w-auto object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Pillars */}
          <div className="mb-12">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-8">
              Our Commitment to You
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {pillars.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-muted/30 rounded-lg p-6 flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-campaign-red/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-campaign-red" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-navy mb-1">
                      {title}
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing commitment */}
          <div className="bg-navy text-white rounded-lg p-8 md:p-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              One County. One Team. One Future.
            </h3>
            <p className="text-white/90 text-lg leading-relaxed">
              Together, we can build a stronger Platte County — where every resident is heard, every taxpayer dollar is respected, and every decision is made with integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipCommitmentSection;
