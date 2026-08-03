import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Users, Shield, Scale, Landmark } from "lucide-react";
import flyerImage from "@/assets/high-participation-policy-flyer.png";

const reasons = [
  {
    icon: Users,
    title: "More Voices Heard",
    text: "Important decisions should reflect the will of the largest possible number of county residents.",
  },
  {
    icon: Shield,
    title: "Greater Public Confidence",
    text: "Higher participation strengthens trust in the outcome and the decision-making process.",
  },
  {
    icon: Scale,
    title: "Better Representation",
    text: "Major financial commitments deserve input from a broad cross-section of the community.",
  },
  {
    icon: Landmark,
    title: "Transparent Government",
    text: "Citizens should have every opportunity to engage in decisions that affect their taxes and their future.",
  },
];

const HighParticipationSection = () => {
  return (
    <section id="high-participation" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-campaign-red font-semibold text-lg mb-2">
              A Policy Proposal from Dr. Gena L. Ross
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Major Decisions Deserve Maximum Participation
            </h2>
            <div className="w-24 h-1 bg-campaign-red mx-auto mb-6"></div>
            <p className="text-foreground/80 text-lg leading-relaxed max-w-3xl mx-auto">
              I believe major county decisions should be made when the greatest number of residents are participating in the process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-start mb-12">
            <div className="space-y-6">
              <p className="text-foreground/80 text-lg leading-relaxed">
                When Platte County considers matters that significantly impact taxpayers—such as tax increases, major bond issues, long-term debt obligations, or large funding proposals—those decisions should be presented to voters during elections with the highest voter turnout whenever permitted by Missouri law.
              </p>

              <div className="bg-muted/30 rounded-lg p-6 border-l-4 border-campaign-red">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-navy mb-3">
                  Introducing the High Participation Voting Policy
                </h3>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  As Presiding Commissioner, I will advocate for a policy that encourages major countywide measures to be placed on <span className="font-semibold text-navy">November General Election ballots</span> whenever legally possible.
                </p>
              </div>

              <blockquote className="border-l-4 border-campaign-red pl-6 py-2">
                <p className="text-navy font-heading text-xl font-bold italic">
                  "Major decisions. Maximum participation. Stronger public trust."
                </p>
              </blockquote>
            </div>

            <div className="flex justify-center md:justify-end">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="relative group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-campaign-red rounded-2xl"
                    aria-label="View full policy proposal flyer"
                  >
                    <div className="absolute -inset-3 bg-gradient-to-br from-campaign-red/20 to-navy/20 rounded-2xl blur-2xl group-hover:from-campaign-red/30 group-hover:to-navy/30 transition-all duration-500"></div>
                    <img
                      src={flyerImage}
                      alt="Dr. Gena L. Ross — Major Decisions Deserve Maximum Participation policy proposal flyer."
                      loading="lazy"
                      className="relative w-full max-w-md rounded-2xl shadow-2xl border border-border group-hover:scale-[1.02] transition-all duration-500"
                    />
                    <span className="sr-only">Click to enlarge</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-2 bg-background max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-center min-h-0">
                    <img
                      src={flyerImage}
                      alt="Dr. Gena L. Ross — Major Decisions Deserve Maximum Participation policy proposal flyer."
                      className="max-h-[85vh] max-w-full h-auto w-auto object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Why This Matters */}
          <div className="mb-12">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy text-center mb-8">
              Why This Matters
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-muted/30 rounded-lg p-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-campaign-red/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-campaign-red" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-navy mb-1">{title}</h4>
                    <p className="text-foreground/80 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* My Commitment */}
          <div className="bg-navy text-white rounded-lg p-8 md:p-10 mb-8">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              My Commitment
            </h3>
            <p className="text-white/90 text-lg leading-relaxed mb-4">
              Government works best when citizens are fully involved. When county leaders ask taxpayers to make significant decisions, those decisions should be made during elections that attract the highest level of public participation whenever state law allows.
            </p>
            <p className="text-white/90 text-lg leading-relaxed">
              This proposal is not about politics—it is about ensuring that the people of Platte County have the strongest possible voice in decisions that affect their families, businesses, and communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighParticipationSection;
