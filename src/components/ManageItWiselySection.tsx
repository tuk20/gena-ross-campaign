import { MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import flyerAsset from "@/assets/letsmanageit.png.asset.json";

const ManageItWiselySection = () => {
  return (
    <section id="manage-it-wisely" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Platte County Is Growing — Let's Manage It Wisely
            </h2>
            <div className="w-24 h-1 bg-campaign-red mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="relative group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-campaign-red rounded-2xl"
                    aria-label="View full Let's Manage It Wisely flyer"
                  >
                    <div className="absolute -inset-3 bg-gradient-to-br from-campaign-red/20 to-navy/20 rounded-2xl blur-2xl group-hover:from-campaign-red/30 group-hover:to-navy/30 transition-all duration-500"></div>
                    <img
                      src={flyerAsset.url}
                      alt="Platte County Is Growing — Let's Manage It Wisely. Dr. Gena Ross for Presiding Commissioner."
                      className="relative w-full max-w-xl rounded-xl shadow-lg border border-border group-hover:scale-[1.02] transition-all duration-500"
                      loading="lazy"
                    />
                    <span className="sr-only">Click to enlarge</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-2 bg-background max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-center min-h-0">
                    <img
                      src={flyerAsset.url}
                      alt="Platte County Is Growing — Let's Manage It Wisely. Dr. Gena Ross for Presiding Commissioner."
                      className="max-h-[85vh] max-w-full h-auto w-auto object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="space-y-5">
              <p className="text-foreground/80 leading-relaxed text-lg">
                Platte County is growing, and with that growth comes both opportunity
                and responsibility. We need roads, infrastructure, public safety, and
                county services that can keep pace with our families, businesses, and
                communities.
              </p>

              <p className="text-foreground/80 leading-relaxed text-lg">
                As your candidate for Presiding Commissioner, I believe in planning
                ahead, investing wisely, and protecting the quality of life that makes
                Platte County such a great place to call home.
              </p>

              <div className="bg-campaign-red text-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-3 mb-3">
                  <MessageCircle className="w-6 h-6 flex-shrink-0 mt-1 text-white" />
                  <h3 className="font-heading text-xl font-bold text-white">
                    I'd love to hear from you
                  </h3>
                </div>
                <p className="leading-relaxed mb-3 text-white">
                  What infrastructure or transportation improvement would you most
                  like to see in Platte County?
                </p>
                <p className="italic font-heading text-lg text-white">
                  "Traffic? Roads? Public safety? Development? What's your top
                  priority for Platte County?"
                </p>
                <a
                  href="mailto:ross4plattecounty@gmail.com?subject=My%20Top%20Priority%20for%20Platte%20County"
                  className="inline-block mt-4 px-6 py-3 bg-white text-campaign-red font-bold rounded-md shadow-md border-2 border-white hover:bg-cream hover:shadow-lg transition-all"
                >
                  Share Your Thoughts
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageItWiselySection;
