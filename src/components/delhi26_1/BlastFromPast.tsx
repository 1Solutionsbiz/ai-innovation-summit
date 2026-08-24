const BlastFromPast = () => {
  const videoSrc = "videos/Promo-21-August.mp4";
  const videoTitle = "AI Innovation Summit 2024 Highlights";

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
          Experience the Summit in Action  
        </h2>
        <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 text-center">
          Where enterprise leaders connect, exchange ideas, and shape the future of AI
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="aspect-video">
                {/* Local Video */}
                <div className="mb-16">
                  <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                  
                      className="w-full h-full object-cover"
                    >
                      <source src={videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default BlastFromPast;
