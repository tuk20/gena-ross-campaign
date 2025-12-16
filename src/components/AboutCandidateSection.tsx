import { GraduationCap, Briefcase, Target, Award, DollarSign, Users, BarChart3, Building2, Vote, User } from "lucide-react";

const AboutCandidateSection = () => {
  const education = [
    { degree: "Ph.D., Public Policy & Administration", focus: "Local Government Management", school: "Walden University", year: "2018" },
    { degree: "Master of Public Administration", school: "Walden University", year: "2010" },
    { degree: "Bachelor of Business Administration", school: "American Intercontinental University", year: "2008" },
    { degree: "Associate of Urban Ministries", school: "North Central University", year: "2005" },
  ];

  const experiences = [
    {
      title: "Director of Student Support",
      org: "Kansas City Kansas Community College",
      period: "2023–Present",
      points: [
        "Managed a $1.7M federal budget with strict accountability and compliance.",
        "Strengthened operations and streamlined services using conservative, efficiency-focused management.",
        "Led staff across multiple departments with a focus on performance, results, and responsible use of taxpayer dollars.",
      ],
    },
    {
      title: "Associate Professor of Business",
      period: "2016–2023",
      points: [
        "Taught business, leadership, and workforce development courses that support strong local economies.",
        "Served on committees focused on accreditation, standards, and improving institutional effectiveness.",
      ],
    },
    {
      title: "Constituent Services Representative",
      org: "Office of U.S. Senator Claire McCaskill",
      period: "2015",
      note: "Service role; not a political endorsement",
      points: [
        "Helped citizens navigate federal agencies and access government support.",
        "Managed sensitive constituent cases with professionalism and integrity.",
      ],
    },
    {
      title: "Missouri Department of Corrections",
      period: "2015–2016",
      points: [
        "Supported public safety professionals.",
        "Maintained accurate legal, personnel, and investigative records.",
      ],
    },
  ];

  const skills = [
    { icon: DollarSign, text: "Fiscal Oversight & Budget Management" },
    { icon: Target, text: "Conservative, Results-Based Leadership" },
    { icon: Building2, text: "Public Administration & Local Government" },
    { icon: BarChart3, text: "Strategic Planning & Efficiency Improvements" },
    { icon: Users, text: "Community and Constituent Outreach" },
    { icon: Award, text: "Policy Analysis & Data-Driven Decision Making" },
    { icon: Briefcase, text: "Workforce Development & Business Education" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            About Dr. Gena L. Ross
          </h2>
          <div className="w-24 h-1 bg-campaign-red mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Background */}
          <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border-l-4 border-navy">
            <h3 className="font-heading text-2xl font-semibold text-navy mb-4 flex items-center gap-3">
              <User className="w-6 h-6 text-campaign-red" />
              Background
            </h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Dr. Gena L. Ross has lived in Platte County for over 16 years and brings professional 
              experience in education and public administration. Her background includes work in leadership, 
              community involvement, and organizational management, providing insight into local issues 
              and the needs of county operations.
            </p>
          </div>

          {/* Objective */}
          <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border-l-4 border-campaign-red">
            <h3 className="font-heading text-2xl font-semibold text-navy mb-4 flex items-center gap-3">
              <Target className="w-6 h-6 text-campaign-red" />
              Objective
            </h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Conservative, community-driven leader with extensive experience in public administration, 
              fiscal oversight, and strategic leadership. Committed to strengthening local government, 
              protecting taxpayer dollars, and promoting safe, responsible growth as Platte County Presiding Commissioner.
            </p>
          </div>

          {/* Education */}
          <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-heading text-2xl font-semibold text-navy mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-campaign-red" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg bg-muted/50 hover:bg-navy/5 transition-all duration-300 hover:translate-x-1 group cursor-default border-l-2 border-transparent hover:border-campaign-red"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div>
                      <p className="font-semibold text-navy group-hover:text-campaign-red transition-colors duration-300">
                        {edu.degree}
                        {edu.focus && <span className="font-normal text-foreground/70"> ({edu.focus})</span>}
                      </p>
                      <p className="text-foreground/70 text-sm">{edu.school}</p>
                    </div>
                    <span className="text-campaign-red font-medium text-sm">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Relevant Experience */}
          <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-heading text-2xl font-semibold text-navy mb-6 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-campaign-red" />
              Relevant Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="p-5 rounded-lg bg-muted/50 hover:bg-navy/5 transition-all duration-300 group border-l-2 border-transparent hover:border-campaign-red"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <p className="font-semibold text-navy group-hover:text-campaign-red transition-colors duration-300 text-lg">
                        {exp.title}
                      </p>
                      {exp.org && <p className="text-foreground/70">{exp.org}</p>}
                      {exp.note && <p className="text-foreground/50 text-sm italic">({exp.note})</p>}
                    </div>
                    <span className="text-campaign-red font-medium text-sm whitespace-nowrap">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-foreground/80 text-sm leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-campaign-red rounded-full mt-2 flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Political Experience */}
          <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border-l-4 border-navy">
            <h3 className="font-heading text-2xl font-semibold text-navy mb-4 flex items-center gap-3">
              <Vote className="w-6 h-6 text-campaign-red" />
              Political Experience
            </h3>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-navy/10 rounded-full text-navy font-medium hover:bg-campaign-red/10 hover:text-campaign-red transition-colors duration-300 cursor-default">
                Ran for U.S. House of Representatives
              </div>
              <div className="px-4 py-2 bg-navy/10 rounded-full text-navy font-medium hover:bg-campaign-red/10 hover:text-campaign-red transition-colors duration-300 cursor-default">
                Ran for U.S. Senate
              </div>
              <div className="px-4 py-2 bg-navy/10 rounded-full text-navy font-medium hover:bg-campaign-red/10 hover:text-campaign-red transition-colors duration-300 cursor-default">
                Ran for Platte County School Board (2019)
              </div>
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-heading text-2xl font-semibold text-navy mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-campaign-red" />
              Areas of Expertise
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-navy/5 transition-all duration-300 hover:translate-x-1 group cursor-default"
                >
                  <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-campaign-red/10 transition-colors duration-300">
                    <skill.icon className="w-5 h-5 text-navy group-hover:text-campaign-red transition-colors duration-300" />
                  </div>
                  <span className="text-foreground/80 text-sm leading-tight">{skill.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why This Office */}
          <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
            <h3 className="font-heading text-2xl font-semibold text-navy mb-4 group-hover:text-campaign-red transition-colors duration-300">
              Why This Office
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Dr. Gena L. Ross is seeking the office of Presiding Commissioner to 
              support effective county administration, contribute to responsible 
              oversight, and help maintain transparent and organized county operations. 
              Her goal is to serve Platte County residents with integrity and dedication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCandidateSection;
