const VideoSection = () => {
  return (
    <section id="my-story" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            My Story
          </h2>
          <div className="w-24 h-1 bg-campaign-red mx-auto mb-4"></div>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Hear directly from Dr. Gena L. Ross about why she's running for Platte County Presiding Commissioner.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
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
    </section>
  );
};

export default VideoSection;
