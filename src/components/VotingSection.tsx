import { MapPin, Calendar, ExternalLink, FileText, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const electionDates = [
  { id: "1", event_name: "Filing Opens", event_date: "February 24, 2026" },
  { id: "2", event_name: "Filing Closes", event_date: "March 31, 2026" },
  { id: "3", event_name: "Primary Election", event_date: "August 4, 2026" },
  { id: "4", event_name: "General Election", event_date: "November 3, 2026" },
];

const clerkUrl = "https://www.co.platte.mo.us/county-clerk";

const VotingSection = () => {
  const votingResources = [
    {
      icon: MapPin,
      title: "Find Your Polling Place",
      description: "Locate your designated voting location in Platte County",
      link: "https://voteroutreach.sos.mo.gov/PRD/VoterOutreach/VOSearch.aspx",
      linkText: "Find Polling Place",
    },
    {
      icon: ClipboardCheck,
      title: "Check Voter Registration",
      description: "Verify your voter registration status in Missouri",
      link: "https://voteroutreach.sos.mo.gov/PRD/VoterOutreach/VOSearch.aspx",
      linkText: "Check Registration",
    },
    {
      icon: FileText,
      title: "Register to Vote",
      description: "Register or update your voter registration information",
      link: "https://www.sos.mo.gov/elections/goVoteMissouri/register",
      linkText: "Register Now",
    },
  ];

  return (
    <section id="voting" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Left: heading + resources */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Where to Vote
              </h2>
              <div className="w-24 h-1 bg-campaign-red mb-6"></div>
              <p className="text-foreground/80 mb-8">
                Make your voice heard in Platte County. Find everything you need to participate in the 2026 Missouri elections.
              </p>

              <div className="space-y-4">
                {votingResources.map((resource, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-campaign-red/10 transition-colors duration-300">
                      <resource.icon className="w-6 h-6 text-navy group-hover:text-campaign-red transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-navy mb-1 group-hover:text-campaign-red transition-colors duration-300">
                        {resource.title}
                      </h3>
                      <p className="text-foreground/70 text-sm mb-3">
                        {resource.description}
                      </p>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-campaign-red hover:text-red-campaign-hover font-medium text-sm transition-colors duration-300"
                      >
                        {resource.linkText}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: important dates */}
            <div>

          <div className="bg-background rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-campaign-red/10 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-campaign-red" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-navy">
                Important 2026 Election Dates
              </h3>
            </div>
            <div className="space-y-4">
              {electionDates.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-navy/5 transition-colors duration-300"
                >
                  <span className="font-medium text-navy">{item.event_name}</span>
                  <span className="text-campaign-red font-semibold">{item.event_date}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <a
                href={clerkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="campaign-outline" className="w-full group">
                  <span>Visit Platte County Clerk's Office</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default VotingSection;
