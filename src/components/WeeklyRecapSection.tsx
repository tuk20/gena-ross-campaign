import { Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import firstRecapImage from "@/assets/ross-report-week-1.png.asset.json";
import secondRecapImage from "@/assets/ross-report-week-2.png.asset.json";
import fourthRecapImage from "@/assets/ross-report-week-4.png.asset.json";

interface Recap {
  id: string;
  dateLabel: string;
  title: string;
  image: string;
  imageAlt: string;
  caption: string;
}

const recaps: Recap[] = [
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
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Weekly Recap
          </h2>
          <div className="w-24 h-1 bg-campaign-red mx-auto mb-4"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Catch up on the latest from the campaign trail — swipe through new issues each week.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Carousel opts={{ loop: true, align: "start" }} className="relative">
            <CarouselContent>
              {recaps.map((recap) => (
                <CarouselItem key={recap.id}>
                  <article className="bg-background rounded-xl overflow-hidden shadow-sm border border-border h-full">
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-campaign-red" />
                        <span className="text-sm font-medium text-campaign-red uppercase tracking-wide">
                          {recap.dateLabel}
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-5">
                        {recap.title}
                      </h3>
                      <div className="rounded-lg overflow-hidden border border-border mb-5 bg-muted/40">
                        <img
                          src={recap.image}
                          alt={recap.imageAlt}
                          className="w-full h-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-foreground/80 leading-relaxed">
                        {recap.caption}
                      </p>
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
