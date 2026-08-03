import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Wallet, 
  Building2, 
  Map, 
  ShieldCheck, 
  Users, 
  Handshake 
} from "lucide-react";

const PrioritiesSection = () => {
  const responsibilities = [
    {
      id: "budget",
      icon: Wallet,
      title: "County Budget Oversight",
      content:
        "The Presiding Commissioner participates in preparing the county budget, reviewing expenditures, and allocating resources across county departments.",
    },
    {
      id: "infrastructure",
      icon: Building2,
      title: "Infrastructure & Public Works",
      content:
        "This includes coordination with county Public Works regarding roads, bridges, county buildings, and infrastructure improvements.",
    },
    {
      id: "planning",
      icon: Map,
      title: "Planning & Zoning",
      content:
        "The commission reviews zoning proposals, land-use planning recommendations, and development considerations to ensure compliance with county regulations.",
    },
    {
      id: "safety",
      icon: ShieldCheck,
      title: "Public Safety Coordination",
      content:
        "The Presiding Commissioner cooperates with the Sheriff's Office, emergency management, and fire and EMS partners to support safety planning and preparedness.",
    },
    {
      id: "services",
      icon: Users,
      title: "County Services & Departments",
      content:
        "Collaboration with departments such as the Health Department, Assessor, Collector, Recorder, Clerk, and others.",
    },
    {
      id: "relations",
      icon: Handshake,
      title: "Intergovernmental Relations",
      content:
        "Represents the county in regional planning organizations and works with municipalities and state partners on collaborative projects.",
    },
  ];

  return (
    <section id="priorities" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            County Responsibilities & Administrative Priorities
          </h2>
          <div className="w-24 h-1 bg-campaign-red mx-auto mb-6"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-muted rounded-xl p-6 md:p-8">
            <h3 className="font-heading text-xl font-semibold text-navy mb-3">
              Understanding the Role
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              The Presiding Commissioner oversees county administration, works with 
              elected officials and department heads, and participates in decisions 
              that affect services, budgeting, and development throughout Platte County.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {responsibilities.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-lg transition-all duration-300 hover:border-navy/30"
              >
                <AccordionTrigger className="hover:no-underline py-4 group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-campaign-red/10 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-navy group-hover:text-campaign-red transition-colors duration-300" />
                    </div>
                    <span className="font-heading text-lg font-medium text-foreground text-left group-hover:text-navy transition-colors duration-300">
                      {item.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pl-14">
                  <p className="text-foreground/80 leading-relaxed animate-fade-in">
                    {item.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        </div>
      </div>
    </section>
  );
};

export default PrioritiesSection;
