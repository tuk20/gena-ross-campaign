const WhyRunningSection = () => {
  return (
    <section id="why-running" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header — left-aligned */}
          <div className="mb-12">
            <p className="text-campaign-red font-semibold text-lg mb-2">
              Serving people, taxpayers first, leadership.
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              "Serving Platte County—Not for a Title, But for the People."
            </h2>
            <div className="w-24 h-1 bg-campaign-red mb-6"></div>
            <p className="text-foreground/70 text-base max-w-3xl">
              Responsible Leadership for Platte County. Accountability. Common sense. A county government that works.
            </p>
          </div>

          {/* Two-column: message + leadership pledge */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-start mb-16">
            <div className="space-y-6">
              <p className="text-foreground/80 leading-relaxed text-lg">
                I'm Dr. Gena L. Ross, and I'm running because I believe county government should work for the people—not the other way around.
              </p>

              <p className="text-foreground/80 leading-relaxed text-lg">
                Platte County is growing, and with that growth comes real challenges—higher costs, more traffic, and pressure on our communities.
              </p>

              <p className="text-foreground/80 leading-relaxed text-lg">
                This campaign is about putting people first, transparency first, and accountability first.
              </p>
            </div>

            <div>
              <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                We need leadership that:
              </p>
              <ul className="space-y-3 text-foreground text-lg font-semibold bg-muted/30 rounded-lg p-6 border-l-4 border-campaign-red">
                <li className="flex items-start">
                  <span className="text-campaign-red mr-3 text-xl">•</span>
                  Respects taxpayers
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-red mr-3 text-xl">•</span>
                  Plans for the future
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-red mr-3 text-xl">•</span>
                  And makes decisions with the people—not without them
                </li>
              </ul>
            </div>
          </div>

          {/* Four Priorities Section */}
          <div className="mb-16">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-10">
              4 Priorities for Platte County
            </h3>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">

            {/* Priority 1 */}
            <div className="bg-muted/30 rounded-lg p-6 md:p-8">
              <h4 className="font-heading text-xl md:text-2xl font-bold text-navy mb-3">
                1. Putting Taxpayers First
              </h4>
              <p className="text-foreground/70 mb-4">
                "Putting taxpayers first" means more than just words.
              </p>
              <p className="text-foreground/70 mb-2">It means:</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  clear, transparent budgets
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  responsible spending
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  and no surprises when it comes to taxes
                </li>
              </ul>
              <p className="text-foreground/70 mt-4">
                You deserve to know where your money is going—and why.
              </p>
            </div>

            {/* Priority 2 */}
            <div className="bg-muted/30 rounded-lg p-6 md:p-8">
              <h4 className="font-heading text-xl md:text-2xl font-bold text-navy mb-3">
                2. Smart Growth & Planning
              </h4>
              <p className="text-foreground/70 mb-4">
                Growth is already impacting Platte County—especially with expansion from Kansas City.
              </p>
              <p className="text-foreground/70 mb-4">
                We can't ignore it. But we can manage it.
              </p>
              <p className="text-foreground/70 mb-2">I support:</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  long-term planning that protects our communities
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  responsible development—not overdevelopment
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  infrastructure that keeps up with growth
                </li>
              </ul>
              <p className="text-foreground/70 mt-4">
                We should shape growth—not let it control us.
              </p>
            </div>

            {/* Priority 3 */}
            <div className="bg-muted/30 rounded-lg p-6 md:p-8">
              <h4 className="font-heading text-xl md:text-2xl font-bold text-navy mb-3">
                3. Public Safety & Community Wellbeing
              </h4>
              <p className="text-foreground/70 mb-4">
                Public safety is not optional—it's essential.
              </p>
              <p className="text-foreground/70 mb-2">That means:</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  supporting law enforcement and first responders
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  ensuring fast response times
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  planning for future community needs
                </li>
              </ul>
              <p className="text-foreground/70 mt-4">
                Safe communities are the foundation of everything else we build.
              </p>
            </div>

            {/* Priority 4 */}
            <div className="bg-muted/30 rounded-lg p-6 md:p-8">
              <h4 className="font-heading text-xl md:text-2xl font-bold text-navy mb-3">
                4. Economic Opportunity
              </h4>
              <p className="text-foreground/70 mb-4">
                Economic development should benefit the people who already live here.
              </p>
              <p className="text-foreground/70 mb-2">My focus is:</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  attracting quality jobs
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  supporting small businesses
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  creating opportunities for future generations
                </li>
              </ul>
              <p className="text-foreground/70 mt-4">
                Platte County should be a place where families can stay—not leave to find opportunity.
              </p>
            </div>
          </div>
        </div>

          {/* Closing Section */}
          <div className="bg-navy text-white rounded-lg p-8 md:p-10 grid md:grid-cols-[auto,1fr] gap-6 items-start">
            <h3 className="font-heading text-2xl md:text-3xl font-bold md:max-w-xs">
              Leadership You Can Count On
            </h3>
            <p className="text-white/90 leading-relaxed text-lg">
              I'm running to help strengthen trust in county leadership by focusing on cooperation, transparency, and practical problem-solving—not politics as usual. By keeping taxpayers in mind and working together, we can ensure Platte County remains a great place to live, work, and raise a family.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyRunningSection;
