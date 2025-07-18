import { Play } from "lucide-react";

interface PastHighlightsProps {
  videoSrc: string; // Define prop type
}

export const PastHighlights = ({ videoSrc }: PastHighlightsProps) => {
  return (
    <section className="py-20 bg-secondary/10 btn-gradient">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-orbitron">
          Blast from the Past
        </h2>
        <p className="text-dark mb-12">
          Take a glimpse of the past three overwhelmingly successful editions of
          previously titled, “Cloud+Ai Innovation Summit”.
        </p>

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
    </section>
  );
};