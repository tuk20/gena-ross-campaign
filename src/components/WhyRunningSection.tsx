const WhyRunningSection = () => {
  return (
    <section id="why-running" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-campaign-red font-semibold text-lg mb-2">
            Putting Taxpayers First.
          </p>
          <p className="text-foreground/70 text-base max-w-2xl mx-auto">
            Responsible Leadership for Platte County.
          </p>
          <p className="text-foreground/70 text-base max-w-2xl mx-auto mt-1">
            Accountability. Common sense.
          </p>
          <p className="text-foreground/70 text-base max-w-2xl mx-auto mt-1">
            A county government that works.
          </p>
        </div>

        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Why I'm Running
          </h2>
          <div className="w-24 h-1 bg-campaign-red mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          <p className="text-foreground/80 leading-relaxed text-lg">
            I'm running for Platte County Presiding Commissioner because I believe county government should be responsible, transparent, and focused on the people it serves.
          </p>

          <p className="text-foreground/80 leading-relaxed text-lg">
            As a Platte County resident and taxpayer, I see firsthand how county decisions affect families, businesses, and our quality of life. Those decisions should be made carefully, openly, and with respect for the people who fund county government.
          </p>

          <p className="text-foreground/80 leading-relaxed text-lg">
            Throughout my career, I've worked in the real world—where budgets matter, accountability is expected, and trust is earned. Those same principles should guide county government. Residents deserve leadership that treats public dollars responsibly and makes thoughtful, well-reasoned decisions.
          </p>
        </div>

        {/* Three Priorities Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy text-center mb-10">
            Three Priorities for Platte County
          </h3>

          <div className="space-y-10">
            {/* Priority 1 */}
            <div className="bg-muted/30 rounded-lg p-6 md:p-8">
              <h4 className="font-heading text-xl md:text-2xl font-bold text-navy mb-3">
                1. Responsible Spending & Taxpayer Protection
              </h4>
              <p className="text-foreground/70 mb-4">
                County government must live within its means and respect household budgets.
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  Reduce waste and improve efficiency
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  No property tax increases without voter approval
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  Any tax questions placed only on November general election ballots, when participation is highest
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  Protect homeowners and working families
                </li>
              </ul>
            </div>

            {/* Priority 2 */}
            <div className="bg-muted/30 rounded-lg p-6 md:p-8">
              <h4 className="font-heading text-xl md:text-2xl font-bold text-navy mb-3">
                2. Accountability & Transparency
              </h4>
              <p className="text-foreground/70 mb-4">
                Good government depends on trust and clear decision-making.
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  Careful, responsible leadership
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  No bad deals with taxpayer dollars
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  Open communication between county government and residents
                </li>
              </ul>
            </div>

            {/* Priority 3 */}
            <div className="bg-muted/30 rounded-lg p-6 md:p-8">
              <h4 className="font-heading text-xl md:text-2xl font-bold text-navy mb-3">
                3. Public Safety & Economic Opportunity
              </h4>
              <p className="text-foreground/70 mb-4">
                Strong communities require safety and opportunity.
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  Support law enforcement and community safety
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  Encourage business growth and job creation
                </li>
                <li className="flex items-start">
                  <span className="text-campaign-red mr-2">•</span>
                  Expand the tax base without increasing the burden on homeowners
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Closing Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
            Leadership You Can Count On
          </h3>
          <p className="text-foreground/80 leading-relaxed text-lg">
            I'm running to help strengthen trust in county leadership by focusing on cooperation, transparency, and practical problem-solving—not politics as usual. By keeping taxpayers in mind and working together, we can ensure Platte County remains a great place to live, work, and raise a family.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyRunningSection;
