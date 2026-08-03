import { Calendar, Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import firstRecapImage from "@/assets/ross-report-week-1.png.asset.json";
import secondRecapImage from "@/assets/ross-report-week-2.png.asset.json";
import thirdRecapImage from "@/assets/ross-report-week-3.png.asset.json";
import fourthRecapImage from "@/assets/ross-report-week-4.png.asset.json";
import fifthRecapImage from "@/assets/ross-report-week-5.png.asset.json";
import sixthRecapImage from "@/assets/ross-report-week-6.png.asset.json";
import specialEditionImage from "@/assets/RossReport_FlockCam.png.asset.json";

interface Recap {
  id: string;
  dateLabel: string;
  title: string;
  image: string;
  imageAlt: string;
  caption: string;
  isSpecial?: boolean;
}

const recaps: Recap[] = [
  {
    id: "recap-6",
    dateLabel: "Issue No. 6 — August 2–8, 2026",
    title: "The Ross Report — Election Week Is Here",
    image: sixthRecapImage.url,
    imageAlt:
      "The Ross Report Issue No. 6 — August 2-8, 2026 weekly newsletter from Dr. Gena L. Ross.",
    caption:
      "Election Week is here. No matter where you stand politically, I encourage every eligible voter to take time to research the candidates, learn about the issues, and make your voice heard on Tuesday, August 4. An informed community is a stronger community, and after Election Day, we are still neighbors working together to build an even better Platte County. This week’s Ross Report also highlights one of our community’s newest family destinations, the beautiful Castle Playground at Michael Gunn Park at Platte Meadows. Thank you for following The Ross Report throughout this primary season. Have a safe, blessed, and wonderful week!",
  },
  {
    id: "recap-special-flock",
    dateLabel: "Special Edition — Community Conversation",
    title: "Flock Safety Cameras in Platte County",
    image: specialEditionImage.url,
    imageAlt:
      "The Ross Report Special Edition — Community Conversation: Flock Safety Cameras in Platte County.",
    caption:
      "There has been a lot of conversation lately about Flock Safety cameras here in Platte County and across our region. Rather than make assumptions, I’d like to hear directly from the people who live and work in our community. This isn’t about taking sides — it’s about listening. Do you support Flock Safety cameras? Do you have concerns about privacy? If they’re used, what safeguards do you think should be in place? Please keep the conversation respectful. Every perspective matters, and I look forward to hearing from you. Let’s have a thoughtful community conversation.",
    isSpecial: true,
  },
  {
    id: "recap-5",
    dateLabel: "Issue No. 5 — July 26 – August 1, 2026",
    title: "The Ross Report — Early Voting Is Underway",
    image: fifthRecapImage.url,
    imageAlt:
      "The Ross Report Issue No. 5 — July 26-August 1, 2026 weekly newsletter from Dr. Gena L. Ross.",
    caption:
      "As we get closer to the August 4 Primary Election, I encourage every resident to take a few minutes to stay informed about the issues that affect Platte County. This week’s Ross Report highlights early voting, responsible growth, taxpayer accountability, and the importance of community involvement. No matter where you stand, an informed community is a stronger community. Thank you for taking the time to read, stay engaged, and make your voice heard. Have a safe and blessed week, Platte County! – Dr. Gena L. Ross, Republican Candidate for Platte County Presiding Commissioner",
  },
  {
    id: "recap-4",
    dateLabel: "Issue No. 4 — July 19–25, 2026",
    title: "The Ross Report — Election Day Is Approaching",
    image: fourthRecapImage.url,
    imageAlt:
      "The Ross Report Issue No. 4 — July 19-25, 2026 weekly newsletter from Dr. Gena L. Ross.",
    caption:
      "Election Day is getting closer, and every informed vote helps shape the future of Platte County. This week’s Ross Report highlights community growth, preserving our local history, and the importance of staying informed as we approach the August 4 Primary Election. No matter where you stand on the issues, I encourage everyone to do their homework, learn about the candidates and ballot issues, and make a plan to vote. Strong communities are built by informed citizens who stay engaged and work together. Have a safe and blessed week, Platte County! — Dr. Gena L. Ross",
  },
  {
    id: "recap-3",
    dateLabel: "Issue No. 3 — July 12–18, 2026",
    title: "The Ross Report — Community Growth & Local Spotlight",
    image: thirdRecapImage.url,
    imageAlt:
      "The Ross Report Issue No. 3 — July 12-18, 2026 weekly newsletter from Dr. Gena L. Ross.",
    caption:
      "Happy Sunday, Platte County! This week's Ross Report includes a reminder that the August 4 Primary Election is approaching, a message about thoughtful community growth, and a Community Spotlight on Popculture Gourmet Popcorn & Ice Cream in Parkville — trust me, it's worth the visit! My goal is to continue sharing positive, factual, and community-focused updates each week. Have a wonderful and blessed Sunday! Working Together. Listening First. Building a Better Platte County. — Dr. Gena Ross",
  },
  {
    id: "recap-2",
    dateLabel: "Issue No. 2 — July 5–11, 2026",
    title: "The Ross Report — 30 Days Until the Primary",
    image: secondRecapImage.url,
    imageAlt:
      "The Ross Report Issue No. 2 — July 5-11, 2026 weekly newsletter from Dr. Gena L. Ross.",
    caption:
      "My goal is simple: keep our community informed, encourage civic engagement, and recognize the people who make Platte County a wonderful place to live, work, and raise a family. This week's Community Spotlight honors Dr. David Lowry for his years of compassionate service to the children and families of Platte County — as a mother of three, I'll always be grateful for the exceptional care he gave my children. Thank you for taking a few moments to read The Ross Report. Have a blessed and wonderful week!",
  },
  {
    id: "recap-1",
    dateLabel: "Week of June 29, 2026",
    title: "Meet the Candidate & Community Kickoff",
    image: firstRecapImage.url,
    imageAlt:
      "Weekly recap flyer for Dr. Gena L. Ross for Platte County Presiding Commissioner.",
    caption:
      "A look back at this week on the trail — connecting with neighbors, listening to community priorities, and sharing our vision for Platte County's future.",
  },
];

const WeeklyRecapSection = () => {
  return (
    <section id="weekly-recap" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header — left-aligned */}
          <div className="mb-12">
            <p className="text-campaign-red font-semibold text-lg mb-2">
              From the Campaign Trail
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Weekly Recap
            </h2>
            <div className="w-24 h-1 bg-campaign-red mb-6"></div>
            <p className="text-foreground/80 text-lg leading-relaxed max-w-3xl">
              Catch up on the latest updates from Dr. Gena L. Ross — each issue
              shares campaign highlights, community spotlights, and important
              reminders for Platte County residents.
            </p>
          </div>

          <Carousel opts={{ loop: true, align: "start" }} className="relative">
            <CarouselContent>
              {recaps.map((recap) => (
                <CarouselItem key={recap.id}>
                  <article
                    className={`bg-background rounded-xl overflow-hidden shadow-sm h-full ${
                      recap.isSpecial
                        ? "border-2 border-campaign-red ring-4 ring-campaign-red/10"
                        : "border border-border"
                    }`}
                  >
                    <div className="p-6 md:p-8 lg:p-10">
                      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Text content */}
                        <div className="order-2 md:order-1 space-y-5">
                          <div className="flex flex-wrap items-center gap-2">
                            {recap.isSpecial ? (
                              <>
                                <Sparkles className="w-4 h-4 text-campaign-red" />
                                <span className="text-sm font-bold text-campaign-red uppercase tracking-wide">
                                  {recap.dateLabel}
                                </span>
                                <span className="inline-flex items-center rounded-full bg-campaign-red px-2.5 py-0.5 text-xs font-bold text-white uppercase tracking-wide">
                                  Special Edition
                                </span>
                              </>
                            ) : (
                              <>
                                <Calendar className="w-4 h-4 text-campaign-red" />
                                <span className="text-sm font-medium text-campaign-red uppercase tracking-wide">
                                  {recap.dateLabel}
                                </span>
                              </>
                            )}
                          </div>

                          <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy">
                            {recap.title}
                          </h3>

                          <p className="text-foreground/80 text-lg leading-relaxed">
                            {recap.caption}
                          </p>
                        </div>

                        {/* Image */}
                        <div className="order-1 md:order-2 flex justify-center md:justify-end">
                          <Dialog>
                            <DialogTrigger asChild>
                              <button
                                type="button"
                                className="relative group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-campaign-red rounded-2xl"
                                aria-label={`View full ${recap.title} flyer`}
                              >
                                <div className="absolute -inset-3 bg-gradient-to-br from-campaign-red/20 to-navy/20 rounded-2xl blur-2xl group-hover:from-campaign-red/30 group-hover:to-navy/30 transition-all duration-500"></div>
                                <img
                                  src={recap.image}
                                  alt={recap.imageAlt}
                                  loading="lazy"
                                  className="relative w-full max-w-md rounded-2xl shadow-2xl border border-border group-hover:scale-[1.02] transition-all duration-500"
                                />
                                <span className="sr-only">Click to enlarge</span>
                              </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl p-2 bg-background max-h-[90vh] overflow-y-auto">
                              <div className="flex items-center justify-center min-h-0">
                                <img
                                  src={recap.image}
                                  alt={recap.imageAlt}
                                  className="max-h-[85vh] max-w-full h-auto w-auto object-contain rounded-lg"
                                />
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 md:-left-12 bg-background border-campaign-red text-campaign-red hover:bg-campaign-red hover:text-white" />
            <CarouselNext className="hidden sm:flex -right-4 md:-right-12 bg-background border-campaign-red text-campaign-red hover:bg-campaign-red hover:text-white" />
          </Carousel>
          <p className="text-center text-sm text-foreground/60 mt-4 sm:hidden">
            Swipe to see more issues →
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeeklyRecapSection;
