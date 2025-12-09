import { Calendar, FileText, Bell } from "lucide-react";

const NewsSection = () => {
  const updates = [
    {
      icon: FileText,
      title: "Filing Announcement",
      date: "2026",
      content:
        "Dr. Gena L. Ross has officially filed as a candidate for Platte County Presiding Commissioner in the 2026 election. Filing is conducted in accordance with county and state election procedures.",
    },
    {
      icon: Calendar,
      title: "Public Meetings & Events",
      date: null,
      content:
        "Recent participation includes community forums and public meetings throughout Platte County. Additional updates will be posted as they occur.",
    },
    {
      icon: Bell,
      title: "Campaign Administrative Notices",
      date: null,
      content:
        "Administrative updates and scheduling notices will appear here throughout the campaign.",
    },
  ];

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
          {updates.map((update, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 md:p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-campaign-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <update.icon className="w-6 h-6 text-campaign-red" />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
