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
    { image: "/edition/1-mumbai26.jpg", link: "https://youtu.be/CXRwxHSrpYw?si=KinB_I6Fz_8HAsxe" },
    { image: "/edition/2-mumbai26.jpg", link: "https://youtu.be/1H6zUN-oz_U?si=uX-TnryJPy1bdapT" },
    { image: "/edition/3-mumbai26.jpg", link: "https://youtu.be/JMqQtsNfVnI?si=oMuHUgWdUhwwoU8E" },
    { image: "/edition/4-mumbai26.jpg", link: "https://www.youtube.com/watch?v=5Lw9q1ILh6w"},
    { image: "/edition/5-mumbai26.jpg", link: "https://youtu.be/zGFZ0zij4gk?si=M_iF0CpXlu5Jd9Pr" },
    { image: "/edition/6-mumbai26.jpg", link: "https://youtu.be/KsrDwXjq2AQ?si=5TA66XcDpUapyyQ9" },
    { image: "/edition/7-mumbai26.jpg", link: "https://youtu.be/9kGZQ85jsbI?si=Il3Flqbfq97Gqp6x" },
    { image: "/edition/8-mumbai26.jpg", link: "https://youtu.be/LWw6Nh7DnL8?si=_JxE9DTBMk99mbfz" },
    { image: "/edition/9-mumbai26.jpg", link: "https://youtu.be/8SZRh4UvG8A?si=su7nJXVlAWFQp70C" },
    { image: "/edition/10-mumbai26.jpg", link: "https://youtu.be/Zi16skPVcuY?si=2q8TfNRsBtZmRKo_" },

    { image: "/edition/1-delhi26.jpg", link: "https://youtu.be/1H6zUN-oz_U?si=hqKcKvXgSlEcFr1j" },
    { image: "/edition/2-delhi26.jpg", link: "https://youtu.be/ISM8I81gv_4?si=PZ7TXdt8VyGEumtZ" },
    { image: "/edition/3-delhi26.jpg", link: "https://youtu.be/5VI-Adm2pog?si=NAMDSveIOquic2hp" },
    { image: "/edition/4-delhi26.jpg", link: "https://youtu.be/A0SmaoIxPr0?si=Unz4rZKChuJw0_z6" },
    { image: "/edition/5-delhi26.jpg", link: "https://youtu.be/Z-j3Z_NgjgA?si=1R4aoMd6eR_BYslZ" },

    { image: "/edition/1-bangaluru25.jpg", link: "https://www.youtube.com/watch?v=aQ4pH33lW8k" },
    { image: "/edition/3-bangaluru25.jpg", link: "https://www.youtube.com/watch?v=DNGrBTNE0FY" },
    { image: "/edition/4-bangaluru25.jpg", link: "https://www.youtube.com/watch?v=peAQ8Y-NBcc" },
    { image: "/edition/5-bangaluru25.jpg", link: "https://www.youtube.com/watch?v=8863H6tLnQU" },
    { image: "/edition/6-bangaluru25.jpg", link: "https://www.youtube.com/watch?v=fwgJTX3epCg" },

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
    { image: "/edition/11-mumbai25.png", link: "https://youtu.be/rwCFMYyqBAE" },
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
