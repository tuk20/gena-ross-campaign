import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { BookOpen, ZoomIn } from "lucide-react";
import knowYourPowerFlyer from "@/assets/know-your-power-flyer.png.asset.json";

const KnowYourPowerSection = () => {
  return (
    <section
      id="know-your-power"
      className="py-16 md:py-24 bg-gradient-to-br from-navy/5 via-background to-campaign-red/5"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-2 md:px-8">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-campaign-red/10 text-campaign-red px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <BookOpen className="w-4 h-4" />
              2026 Ballot Education
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 leading-tight">
              Know Your Power on the 2026 Ballot
            </h2>
            <div className="w-24 h-1 bg-campaign-red mb-6"></div>
            <p className="text-foreground/80 text-lg mb-4 leading-relaxed">
              Missouri voters will decide{" "}
              <strong className="text-navy">
                four constitutional amendments
              </strong>{" "}
              in the 2026 Primary Election. These decisions will shape our
              communities for years to come.
            </p>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Take a moment to review what's on your ballot before you head to
              the polls. Be informed. Be engaged. Be heard.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="campaign" size="lg" className="group">
                  <ZoomIn className="w-5 h-5 mr-2" />
                  View Full Flyer
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-2 bg-background max-h-[90vh] overflow-y-auto">
                <img
                  src={knowYourPowerFlyer.url}
                  alt="Know Your Power. Please Vote. 2026 Primary Election Ballot — Four important Missouri constitutional amendments explained by Dr. Gena L. Ross."
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="relative group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-campaign-red rounded-2xl"
                  aria-label="View full 2026 Primary Election Ballot guide"
                >
                  <div className="absolute -inset-4 bg-gradient-to-br from-campaign-red/30 to-navy/30 rounded-2xl blur-2xl group-hover:from-campaign-red/40 group-hover:to-navy/40 transition-all duration-500"></div>
                  <img
                    src={knowYourPowerFlyer.url}
                    alt="Know Your Power. Please Vote. 2026 Primary Election Ballot — Four important Missouri constitutional amendments explained by Dr. Gena L. Ross."
                    loading="lazy"
                    className="relative w-full max-w-md rounded-2xl shadow-2xl border border-border group-hover:scale-[1.02] transition-all duration-500"
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-2 bg-background max-h-[90vh] overflow-y-auto">
                <img
                  src={knowYourPowerFlyer.url}
                  alt="Know Your Power. Please Vote. 2026 Primary Election Ballot — Four important Missouri constitutional amendments explained by Dr. Gena L. Ross."
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowYourPowerSection;
