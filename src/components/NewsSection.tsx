import { Calendar, FileText, Megaphone, Play } from "lucide-react";

const newsUpdates = [
  {
    id: "1",
    title: "Filing Announcement",
    content: "Dr. Gena L. Ross has officially filed with the Missouri Ethics Commission to run for Platte County Presiding Commissioner in 2026.",
    date: "2026",
    icon: FileText,
  },
  {
    id: "2",
    title: "Public Meetings & Events",
    content: "Stay tuned for upcoming community forums and public meetings where you can meet Dr. Ross and discuss issues important to Platte County.",
    date: null,
    icon: Calendar,
  },
  {
    id: "3",
    title: "Campaign Administrative Notices",
    content: "For campaign updates and administrative information, please check back regularly or sign up as a volunteer to receive direct communications.",
    date: null,
    icon: Megaphone,
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            News & Updates
          </h2>
          <div className="w-24 h-1 bg-campaign-red mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Featured PSA Video */}
          <div className="bg-background rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 bg-campaign-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Play className="w-6 h-6 text-campaign-red" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      Public Service Announcement
                    </h3>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                      2026
                    </span>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    An important update from Dr. Gena L. Ross on her campaign for Platte County Presiding Commissioner.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden bg-black">
                <video
                  controls
                  preload="metadata"
                  className="w-full aspect-video"
                >
                  <source src="/videos/drgena1.mov" type="video/quicktime" />
                  <source src="/videos/drgena1.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {newsUpdates.map((update) => {
            const IconComponent = update.icon;
            return (
              <div
                key={update.id}
                className="bg-background rounded-xl p-6 md:p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-campaign-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-campaign-red" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {update.title}
                      </h3>
                      {update.date && (
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                          {update.date}
                        </span>
                      )}
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {update.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
