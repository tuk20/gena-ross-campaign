import { useState, useEffect } from "react";
import { Vote } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import ballotAsset from "@/assets/rossballot.png.asset.json";

const POPUP_KEY = "volunteer_ask_popup_dismissed";

const VolunteerAskPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(POPUP_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setOpen(false);
    sessionStorage.setItem(POPUP_KEY, "true");
  };

  return (
    <Dialog open={open} onOpenChange={(val) => { if (!val) handleDismiss(); else setOpen(val); }}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden border-border max-h-[90vh] overflow-y-auto">
        <img
          src={ballotAsset.url}
          alt="Sample ballot showing Gena L. Ross listed first for Presiding Commissioner"
          className="w-full h-auto"
        />
        <div className="p-6 text-center">
          <DialogHeader className="mb-4">
            <div className="w-14 h-14 bg-campaign-red/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Vote className="w-7 h-7 text-campaign-red" />
            </div>
            <DialogTitle className="font-heading text-2xl font-bold text-navy">
              Get Ready to Vote — August 4, 2026
            </DialogTitle>
            <DialogDescription className="text-foreground/80 text-base mt-3 leading-relaxed text-left">
              Every election is an opportunity to help shape the future of Platte County. Here's a look at the sample ballot for the Presiding Commissioner race — if you're supporting my campaign, you'll find <span className="font-semibold text-navy">Gena L. Ross listed first on the ballot.</span>
              <span className="block mt-3 font-medium text-navy">
                Please get out and vote on August 4, 2026. Your voice matters.
              </span>
            </DialogDescription>
          </DialogHeader>
          <Button variant="campaign-outline" size="lg" onClick={handleDismiss}>
            Got It
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VolunteerAskPopup;
