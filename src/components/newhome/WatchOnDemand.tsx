import { Play } from "lucide-react";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const WatchOnDemand = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });

  // Auto Scroll
  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  // Your Given Video Data
  const videos = [
    { image: "/edition/1-mumbai25.png", link: "https://youtu.be/drYtFmjo3vE?feature=shared" },
    { image: "/edition/2-mumbai25.png", link: "https://youtu.be/ER-8Lmp1G08?feature=shared" },
    { image: "/edition/3-mumbai25.png", link: "https://youtu.be/Wv8-atWSgjU?feature=shared" },
    { image: "/edition/4-mumbai25.png", link: "https://youtu.be/bXZDTUKKlWQ?feature=shared" },
    { image: "/edition/5-mumbai25.png", link: "https://youtu.be/aDkRMPjUkC8?feature=shared" },
    { image: "/edition/6-mumbai25.png", link: "https://youtu.be/zGk_zzPK98o?feature=shared" },
    { image: "/edition/7-mumbai25.png", link: "https://youtu.be/L6T3HXP2zHU?feature=shared" },
    { image: "/edition/8-mumbai25.png", link: "https://youtu.be/i3_ciFPnrrE?feature=shared" },
    { image: "/edition/9-mumbai25.png", link: "https://youtu.be/i3_ciFPnrrE?feature=shared" },
    { image: "/edition/10-mumbai25.png", link: "https://youtu.be/mKWMoV77GPU?feature=shared" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
          Watch On-Demand Videos
        </h2>

        <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto mb-12 text-center">
          Catch the Summit Highlights Anytime
        </p>

        <div className="overflow-hidden max-w-7xl mx-auto" ref={emblaRef}>
          <div className="flex gap-6">
            {videos.map((video, index) => (
              <a
                key={index}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={video.image}
                    alt="Summit Video"
                    className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="text-white" size={32} fill="white" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchOnDemand;
