import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import flyerImage from "@/assets/talk-to-me-flyer.jpg";

const GovernmentListensSection = () => {
  return (
    <section id="government-listens" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* A Government that Listens */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              A Government that Listens
            </h2>
            <div className="w-24 h-1 bg-campaign-red mx-auto mb-6"></div>
            <p className="text-foreground/80 text-lg leading-relaxed max-w-3xl mx-auto">
              I believe leadership should be accessible and accountable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-start mb-12">
            <div>
              <p className="text-foreground/80 text-lg mb-4">
                That's why I will implement:
              </p>
              <ul className="space-y-3 text-foreground text-lg font-semibold bg-muted/30 rounded-lg p-6 mb-6">
                <li className="flex items-start">
                  <span className="text-campaign-red mr-3 text-xl">•</span>
                  Quarterly community meetings
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-red mr-3 text-xl">•</span>
                  Open discussions on growth, taxes, and priorities
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-red mr-3 text-xl">•</span>
                  Clear updates on what's being done—and what's next
                </li>
              </ul>

              <p className="text-foreground/80 text-lg mb-4">
                After each meeting, we will publish:
              </p>
              <blockquote className="border-l-4 border-campaign-red pl-6 py-2 mb-6">
                <p className="text-navy font-heading text-xl md:text-2xl font-bold italic">
                  "You spoke. Here's what we're doing."
                </p>
              </blockquote>
              <p className="text-foreground/80 text-lg">
                Because real leadership listens—and follows through.
              </p>
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
                      src={flyerImage}
                      alt="Dr. Gena L. Ross — Talk to me. Platte County Presiding Commissioner campaign flyer."
                      loading="lazy"
                      className="relative w-full max-w-md rounded-2xl shadow-2xl border border-border group-hover:shadow-3xl group-hover:scale-[1.02] transition-all duration-500"
                    />
                    <span className="sr-only">Click to enlarge</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-2 bg-background">
                  <img
                    src={flyerImage}
                    alt="Dr. Gena L. Ross — Talk to me. Platte County Presiding Commissioner campaign flyer."
                    className="w-full h-auto rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>


          {/* Vision Section */}
          <div className="border-t border-border pt-12 max-w-4xl mx-auto">

            <div className="text-center mb-8">
              <p className="text-campaign-red font-semibold text-lg mb-2">Vision</p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
                "Planning for the Next 25 Years"
              </h3>
              <div className="w-24 h-1 bg-campaign-red mx-auto mb-6"></div>
            </div>

            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              We're not just making decisions for today—we're shaping the future of Platte County.
            </p>

            <p className="text-foreground/80 text-lg mb-4">
              Over the next 25 years, I want our county to be:
            </p>
            <ul className="space-y-3 text-foreground text-lg font-semibold bg-muted/30 rounded-lg p-6 mb-6">
              <li className="flex items-start">
                <span className="text-campaign-red mr-3 text-xl">•</span>
                Financially responsible
              </li>
              <li className="flex items-start">
                <span className="text-campaign-red mr-3 text-xl">•</span>
                Thoughtfully developed
              </li>
              <li className="flex items-start">
                <span className="text-campaign-red mr-3 text-xl">•</span>
                Safe and family-focused
              </li>
              <li className="flex items-start">
                <span className="text-campaign-red mr-3 text-xl">•</span>
                And guided by the voices of its people
              </li>
            </ul>

            <p className="text-foreground/80 text-lg leading-relaxed">
              This isn't about rapid change—it's about steady, responsible leadership that protects what matters most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentListensSection;
