import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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

  const handleVolunteer = () => {
    handleDismiss();
    window.location.href = "mailto:ross4plattecounty@gmail.com?subject=I'd%20Like%20to%20Deliver%20Flyers%20for%20Dr.%20Ross&body=Hello%20Dr.%20Ross,%0A%0AI%20would%20like%20to%20volunteer%20to%20help%20deliver%20campaign%20flyers.%20Please%20let%20me%20know%20how%20I%20can%20help.%0A%0ABest%20regards,";
  };

  return (
    <Dialog open={open} onOpenChange={(val) => { if (!val) handleDismiss(); else setOpen(val); }}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden border-border">
        <div className="p-6 md:p-8 text-center">
          <DialogHeader className="mb-5">
            <div className="w-16 h-16 bg-campaign-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-campaign-red" />
            </div>
            <DialogTitle className="font-heading text-2xl md:text-3xl font-bold text-navy">
              A Personal Ask from Dr. Ross
            </DialogTitle>
            <DialogDescription className="text-foreground/80 text-base mt-3 leading-relaxed text-left">
              Friends, because of my mobility limitations, I can't walk neighborhoods to share flyers myself. I'm asking for an hour or two of your time to help deliver campaign flyers where voters gather.
              <span className="block mt-3 font-medium text-navy">
                Every flyer reaches someone I cannot. Will you help?
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="campaign" size="lg" onClick={handleVolunteer}>
              <Mail className="w-4 h-4" />
              Email to Volunteer
            </Button>
            <Button variant="campaign-outline" size="lg" onClick={handleDismiss}>
              Maybe Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VolunteerAskPopup;
