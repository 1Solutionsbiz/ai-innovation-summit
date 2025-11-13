import { Play } from "lucide-react";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const WatchOnDemand = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    dragFree: true 
  });

  // Autoscroll functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(autoScroll);
  }, [emblaApi]);
  // Placeholder videos - replace with actual video URLs
  const videos = [
    {
      id: 1,
      title: "AI Innovation Summit 2024 - Day 1 Highlights",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      duration: "45:30",
    },
    {
      id: 2,
      title: "Panel Discussion: Future of AI in Enterprise",
      thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
      duration: "38:15",
    },
    {
      id: 3,
      title: "Keynote: AI-Driven Transformation",
      thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      duration: "52:20",
    },
    {
      id: 4,
      title: "Workshop: Implementing AI Solutions",
      thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
      duration: "1:15:45",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
          Watch On-Demand Videos
        </h2>
        <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 text-center">
          Explore highlights from previous summits
        </p>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 group cursor-pointer hover-scale"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="text-white" size={32} fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <h3 className="mt-3 text-slate-800 font-semibold text-sm leading-tight">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchOnDemand;
