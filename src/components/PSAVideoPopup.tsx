import { useState, useEffect } from "react";
import { X, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const PSA_POPUP_KEY = "psa_popup_dismissed";

const PSAVideoPopup = () => {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(PSA_POPUP_KEY);
    if (!dismissed) {
      const timer = setTimeout(() => setOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setOpen(false);
    sessionStorage.setItem(PSA_POPUP_KEY, "true");
  };

  const handleWatch = () => {
    setPlaying(true);
  };

  return (
    <Dialog open={open} onOpenChange={(val) => { if (!val) handleDismiss(); else setOpen(val); }}>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden border-border">
        {!playing ? (
          <div className="p-6 md:p-8 text-center">
            <DialogHeader className="mb-6">
              <div className="w-16 h-16 bg-campaign-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-campaign-red" />
              </div>
              <DialogTitle className="font-heading text-2xl md:text-3xl font-bold text-navy">
                A Message from Dr. Ross
              </DialogTitle>
              <DialogDescription className="text-foreground/70 text-base mt-2">
                Watch an important update on the campaign for Platte County Presiding Commissioner.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="campaign" size="lg" onClick={handleWatch} className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch Now
              </Button>
              <Button variant="campaign-outline" size="lg" onClick={handleDismiss}>
                Maybe Later
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="p-4 pb-0 flex items-center justify-between">
              <h3 className="font-heading text-lg font-semibold text-navy">
                Public Service Announcement
              </h3>
              <button
                onClick={handleDismiss}
                className="rounded-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="p-4">
              <div className="rounded-xl overflow-hidden bg-black">
                <video
                  controls
                  autoPlay
                  preload="metadata"
                  className="w-full aspect-video"
                >
                  <source src="/videos/drgena1.mov" type="video/quicktime" />
                  <source src="/videos/drgena1.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PSAVideoPopup;
