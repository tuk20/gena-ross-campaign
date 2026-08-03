const VideoSection = () => {
  return (
    <section id="my-story" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-campaign-red font-semibold text-lg mb-2">
              Hear From the Candidate
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              My Story
            </h2>
            <div className="w-24 h-1 bg-campaign-red mb-6"></div>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Hear directly from Dr. Gena L. Ross about why she's running for Platte County Presiding Commissioner.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                controls
                preload="metadata"
                className="w-full aspect-video"
                poster=""
              >
                <source src="/videos/DrRossVid1.MOV" type="video/quicktime" />
                <source src="/videos/DrRossVid1.MOV" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
