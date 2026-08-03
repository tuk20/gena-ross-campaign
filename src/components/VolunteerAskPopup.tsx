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
      <DialogContent className="sm:max-w-3xl p-0 overflow-hidden border-border max-h-[95vh] flex flex-col">
        <div className="grid md:grid-cols-2 gap-0 items-stretch flex-1 overflow-y-auto">
          <img
            src={ballotAsset.url}
            alt="Sample ballot showing Gena L. Ross listed first for Presiding Commissioner"
            className="w-full max-h-48 md:max-h-[70vh] h-auto object-contain bg-cream"
          />

          <div className="p-5 md:p-6 text-center flex flex-col justify-center">
            <DialogHeader className="mb-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-campaign-red/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Vote className="w-6 h-6 md:w-7 md:h-7 text-campaign-red" />
              </div>
              <DialogTitle className="font-heading text-xl md:text-2xl font-bold text-navy">
                Get Ready to Vote — August 4, 2026
              </DialogTitle>
              <DialogDescription className="text-foreground/80 text-sm md:text-base mt-3 leading-relaxed text-left">
                Every election is an opportunity to help shape the future of Platte County. Here's the sample ballot for the Presiding Commissioner race — if you're supporting my campaign, you'll find <span className="font-semibold text-navy">Gena L. Ross listed first.</span>
                <span className="block mt-3 font-medium text-navy">
                  Please get out and vote on August 4, 2026. Your voice matters.
                </span>
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>
        <div className="p-4 border-t border-border bg-background sticky bottom-0">
          <Button variant="campaign" size="lg" onClick={handleDismiss} className="w-full">
            Got It
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VolunteerAskPopup;
