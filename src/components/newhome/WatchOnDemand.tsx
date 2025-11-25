import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const WatchOnDemand = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const videos = [
    { image: "/edition/1-bangaluru25.jpg", link: "https://www.youtube.com/watch?v=aQ4pH33lW8k" },
    { image: "/edition/3-bangaluru25.jpg", link: "https://www.youtube.com/watch?v=DNGrBTNE0FY" },
    { image: "/edition/4-bangaluru25.jpg", link: "https://www.youtube.com/watch?v=peAQ8Y-NBcc" },
    { image: "/edition/5-bangaluru25.jpg", link: "https://www.youtube.com/watch?v=8863H6tLnQU" },
    { image: "/edition/6-bangaluru25.jpg", link: "https://www.youtube.com/watch?v=fwgJTX3epCg" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
          Watch On-Demand Videos
        </h2>

        <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto mb-12 text-center">
          Catch the Summit Highlights Anytime
        </p>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-3 rounded-full hover:scale-110 transition"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden max-w-7xl mx-auto" ref={emblaRef}>
            <div className="flex">
              {videos.map((video, index) => (
                <a
                  key={index}
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] group cursor-pointer mr10"
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

          {/* Right Arrow */}
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-3 rounded-full hover:scale-110 transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WatchOnDemand;
