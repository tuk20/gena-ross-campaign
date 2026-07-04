import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BookOpen, MapPin, ZoomIn } from "lucide-react";
import knowYourPowerFlyer from "@/assets/know-your-power-flyer.png.asset.json";
import platteCountyMap from "@/assets/do-you-live-in-platte-county.png.asset.json";

const KnowYourPowerSection = () => {
  return (
    <section
      id="know-your-power"
      className="py-16 md:py-24 bg-gradient-to-br from-navy/5 via-background to-campaign-red/5"
    >
      <div className="container mx-auto px-4">
        <Carousel
          opts={{ loop: true, align: "start" }}
          className="max-w-6xl mx-auto"
        >
          <CarouselContent>
            {/* Slide 1: Know Your Power */}
            <CarouselItem>
              <div className="grid lg:grid-cols-2 gap-12 items-center px-2 md:px-8">
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
                    Take a moment to review what's on your ballot before you
                    head to the polls. Be informed. Be engaged. Be heard.
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
            </CarouselItem>

            {/* Slide 2: Do You Live in Platte County */}
            <CarouselItem>
              <div className="grid lg:grid-cols-2 gap-12 items-center px-2 md:px-8">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 bg-campaign-red/10 text-campaign-red px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                    <MapPin className="w-4 h-4" />
                    Know Your County
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 leading-tight">
                    Do You Live in Platte County?
                  </h2>
                  <div className="w-24 h-1 bg-campaign-red mb-6"></div>
                  <p className="text-foreground/80 text-lg mb-4 leading-relaxed">
                    You might be surprised! Many people aren't always sure which
                    communities are part of Platte County.
                  </p>
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    Take a moment to see if your community is on the map, verify
                    your voter registration, and know where to vote before the{" "}
                    <strong className="text-navy">
                      August 4, 2026 Primary Election
                    </strong>
                    .
                  </p>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    An informed voter is an empowered voter. Let's build a
                    stronger Platte County through knowledge, civic engagement,
                    and participation.
                  </p>
                  <p className="font-heading text-navy font-semibold mb-8">
                    Know Your County. Know Your Polling Place. Know Your Vote.
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="campaign" size="lg" className="group">
                        <ZoomIn className="w-5 h-5 mr-2" />
                        View Full Map
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl p-2 bg-background max-h-[90vh] overflow-y-auto">
                      <img
                        src={platteCountyMap.url}
                        alt="Do You Live in Platte County? Map and list of communities in Platte County, Missouri, with a reminder to vote on August 4, 2026."
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
                        aria-label="View full Platte County communities map"
                      >
                        <div className="absolute -inset-4 bg-gradient-to-br from-campaign-red/30 to-navy/30 rounded-2xl blur-2xl group-hover:from-campaign-red/40 group-hover:to-navy/40 transition-all duration-500"></div>
                        <img
                          src={platteCountyMap.url}
                          alt="Do You Live in Platte County? Map and list of communities in Platte County, Missouri, with a reminder to vote on August 4, 2026."
                          loading="lazy"
                          className="relative w-full max-w-md rounded-2xl shadow-2xl border border-border group-hover:scale-[1.02] transition-all duration-500"
                        />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl p-2 bg-background max-h-[90vh] overflow-y-auto">
                      <img
                        src={platteCountyMap.url}
                        alt="Do You Live in Platte County? Map and list of communities in Platte County, Missouri, with a reminder to vote on August 4, 2026."
                        className="w-full h-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 bg-background border-campaign-red text-campaign-red hover:bg-campaign-red hover:text-white" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-6 bg-background border-campaign-red text-campaign-red hover:bg-campaign-red hover:text-white" />
        </Carousel>

        <p className="text-center text-sm text-foreground/60 mt-8">
          Swipe or use the arrows to see more →
        </p>
      </div>
    </section>
  );
};

export default KnowYourPowerSection;
