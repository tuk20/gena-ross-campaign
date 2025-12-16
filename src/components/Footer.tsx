import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="font-heading text-lg text-white/90 mb-2">
            Dr. Gena L. Ross for Platte County Presiding Commissioner
          </p>
          <p className="text-white/60 text-sm mb-4">
            2026 Election Campaign
          </p>
          <div className="flex items-center justify-center gap-2 text-white/70">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:ross4plattecounty@gmail.com"
              className="hover:text-white transition-colors"
            >
              ross4plattecounty@gmail.com
            </a>
          </div>
          <p className="text-white/40 text-xs mt-6">
            Paid for by the Committee to Elect Dr. Gena L. Ross
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
