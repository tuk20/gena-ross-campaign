import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import thankYouAsset from "@/assets/thankyou-poster.png.asset.json";

const POPUP_KEY = "thank_you_popup_dismissed";

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
            src={thankYouAsset.url}
            alt="Thank you, Platte County — a message of gratitude from Dr. Gena L. Ross"
            className="w-full max-h-48 md:max-h-[70vh] h-auto object-contain bg-cream"
          />

          <div className="p-5 md:p-6 text-center flex flex-col justify-center">
            <DialogHeader className="mb-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-campaign-red/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 md:w-7 md:h-7 text-campaign-red" />
              </div>
              <DialogTitle className="font-heading text-xl md:text-2xl font-bold text-navy">
                Thank You, Platte County — God is Good!
              </DialogTitle>
              <DialogDescription className="text-foreground/80 text-sm md:text-base mt-3 leading-relaxed text-left">
                To every person who prayed for me, encouraged me, shared a post, and entrusted me with your vote — <span className="font-semibold text-navy">thank you.</span> I ran this race with integrity, faith, and purpose, and I am forever grateful for the support of this community.
                <span className="block mt-3 font-medium text-navy">
                  I could not have made it this far without God and without you.
                </span>
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>
        <div className="p-4 border-t border-border bg-background sticky bottom-0">
          <Button variant="campaign" size="lg" onClick={handleDismiss} className="w-full">
            Thank You
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VolunteerAskPopup;
