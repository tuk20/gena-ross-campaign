import { Calendar } from "lucide-react";
import firstRecapImage from "@/assets/campaign-flyer.png.asset.json";

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
            Catch up on the latest from the campaign trail — new posts every week.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {recaps.map((recap) => (
            <article
              key={recap.id}
              className="bg-background rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyRecapSection;
