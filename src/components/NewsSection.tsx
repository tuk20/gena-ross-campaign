import { Calendar, FileText, Megaphone, Play } from "lucide-react";

const newsUpdates = [
  {
    id: "1",
    category: "Filing",
    title: "Filing Announcement",
    content: "Dr. Gena L. Ross has officially filed with the Missouri Ethics Commission to run for Platte County Presiding Commissioner in 2026.",
    date: "2026",
    icon: FileText,
  },
  {
    id: "2",
    category: "Events",
    title: "Public Meetings & Events",
    content: "Stay tuned for upcoming community forums and public meetings where you can meet Dr. Ross and discuss issues important to Platte County.",
    date: null,
    icon: Calendar,
  },
  {
    id: "3",
    category: "Campaign",
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
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-campaign-red font-semibold tracking-widest text-sm uppercase mb-2">
              Stay Informed
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy">
              News & Updates
            </h2>
            <div className="w-24 h-1 bg-campaign-red mt-4"></div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Featured Video Card */}
          <div className="bg-background rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
            <div className="relative aspect-video bg-navy">
              <video
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                poster=""
              >
                <source src="/videos/drgena1.mov" type="video/quicktime" />
                <source src="/videos/drgena1.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-4 left-4">
                <span className="inline-block bg-campaign-red text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                My Story — Why I'm Running
              </h3>
              <p className="text-foreground/70">
                Watch Dr. Gena L. Ross share her vision for Platte County.
              </p>
            </div>
          </div>

          {/* News Items List */}
          <div className="space-y-0 divide-y divide-border bg-background rounded-2xl border border-border shadow-sm">
            {newsUpdates.map((update) => {
              const IconComponent = update.icon;
              return (
                <div
                  key={update.id}
                  className="p-6 md:p-8 hover:bg-muted/30 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-campaign-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-campaign-red" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-navy/10 text-navy">
                          {update.category}
                        </span>
                        {update.date && (
                          <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {update.date}
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                        {update.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {update.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
