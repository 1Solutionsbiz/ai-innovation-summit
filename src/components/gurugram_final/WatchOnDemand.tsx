"use client";

import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { watchVideos as videos, type VideoItem } from "../../data/watchVideos";
import { getScrollDirection } from "@/hooks/useScrollDirection";

const getYoutubeThumbnail = (link: string) => {
  const videoId = link.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^?&/]+)/)?.[1];
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
};

const getVideoImage = (item: VideoItem) => item.image ?? getYoutubeThumbnail(item.link);

const buildWatchHref = (item: VideoItem) => {
  return `/watch?id=${encodeURIComponent(item.id)}`;
};

const OnDemandSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [revealDirection, setRevealDirection] = useState<"up" | "down">("down");
  const [featured, ...rest] = videos;
  const gridItems = rest.slice(0, 4);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealDirection(getScrollDirection());
          setSectionVisible(false);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setSectionVisible(true));
          });
        } else {
          setSectionVisible(false);
        }
      },
      { threshold: 0, rootMargin: "-15% 0px -15% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const upDelay = (order: number, total: number) =>
    `${(revealDirection === "up" ? total - 1 - order : order) * 200}ms`;

  return (
    <section
      ref={sectionRef}
      className="ondemand-section relative bg-[#050B22] py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
          {/* =================================================
              LEFT TEXT
          ================================================= */}
          <div className="lg:w-[30%] flex-shrink-0">
            <p
              className={`partners-reveal-up text-[#EF3340] text-[18px] mb-3 ${sectionVisible ? "is-visible" : ""}`}
              style={{ animationDelay: upDelay(0, 4) }}
            >
              On-Demand Content
            </p>

            <h2 className="
                text-white
                font-black
                text-[34px]
                sm:text-[48px]
                md:text-[64px]
                xl:text-[42px]
                leading-[0.94]">
              <span className={`ondemand-line partners-reveal-up ${sectionVisible ? "is-visible" : ""}`} style={{ animationDelay: upDelay(1, 4) }}>
                Ideas That
              </span>
              <span className={`ondemand-line partners-reveal-up ${sectionVisible ? "is-visible" : ""}`} style={{ animationDelay: upDelay(2, 4) }}>
                Inspire. On Your Schedule.
              </span>
            </h2>

            <a
              href="/watch-On-Demand-videos"
              className={`partners-reveal-up
                mt-4
                sm:mt-5
                inline-block
                px-7
                py-3
                rounded-full
                btn-bg
                ${sectionVisible ? "is-visible" : ""}`}
              style={{ animationDelay: upDelay(3, 4) }}
            >
              Know More
            </a>
          </div>

          {/* =================================================
              FEATURED VIDEO
          ================================================= */}
          <a
            target="_blank"
            href={buildWatchHref(featured)}
            className={`group lg:w-[36%] w-full flex-shrink-0 partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
            style={{ animationDelay: "150ms" }}
          >
            <div
              className="
                rounded-[18px]
                overflow-hidden
                p-1
                bg-[#000128]

                transition-colors
                duration-300

                group-hover:bg-[#022158]
              "
            >
              <div className="relative aspect-[16/10] rounded-[12px] overflow-hidden bg-black">
                <img
                  src={getVideoImage(featured)}
                  alt={featured.title}
                  className="
                    absolute inset-0
                    w-full h-full
                    object-cover

                    transition-transform
                    duration-700

                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute inset-0
                    bg-black/10
                    transition-colors
                    duration-300
                    group-hover:bg-black/25
                  "
                />

                <div
                  className="
                    absolute
                    top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2

                    w-14 h-14
                    sm:w-16 sm:h-16

                    rounded-full

                    bg-white/90

                    flex items-center justify-center

                    transition-transform
                    duration-300

                    group-hover:scale-110
                  "
                >
                  <Play size={24} className="ml-1 text-[#050B22]" fill="currentColor" />
                </div>
              </div>

              <p
                className="
                  mt-4
                  px-1
                  pb-1

                  text-[#fff]
                  text-[18px]
                  sm:text-[26px]
                  font-bold
                  leading-snug

                  transition-colors
                  duration-300

                  group-hover:text-white
                "
              >
                {featured.title}
              </p>
              {/* <p className="px-1 pb-4 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-white/80">
                {featured.description}
              </p> */}
            </div>
          </a>

          {/* =================================================
              GRID OF SMALLER VIDEOS
          ================================================= */}
          <div className="lg:w-[42%] w-full grid grid-cols-2 gap-3 sm:gap-4">
            {gridItems.map((item) => (
              <a
                key={item.link}
                href={buildWatchHref(item)}
                target="_blank"
                className={`group partners-reveal-up ${sectionVisible ? "is-visible" : ""}`}
                style={{ animationDelay: `${300 + gridItems.indexOf(item) * 150}ms` }}
              >
                <div
                  className="
                    rounded-[14px]
                    overflow-hidden
                    p-1

                    bg-[#000128]

                    transition-colors
                    duration-300

                    group-hover:bg-[#022158]
                  "
                >
                  <div className="relative aspect-[16/10] rounded-[10px] overflow-hidden bg-black">
                    <img
                      src={getVideoImage(item)}
                      alt={item.title}
                      className="
                        absolute inset-0
                        w-full h-full
                        object-cover

                        transition-transform
                        duration-700

                        group-hover:scale-105
                      "
                    />

                    <div
                      className="
                        absolute inset-0
                        bg-black/10
                        transition-colors
                        duration-300
                        group-hover:bg-black/25
                      "
                    />

                    <div
                      className="
                        absolute
                        top-1/2 left-1/2
                        -translate-x-1/2 -translate-y-1/2

                        w-9 h-9
                        sm:w-10 sm:h-10

                        rounded-full

                        bg-white/90

                        flex items-center justify-center

                        transition-transform
                        duration-300

                        group-hover:scale-110
                      "
                    >
                      <Play
                        size={14}
                        className="ml-0.5 text-[#050B22]"
                        fill="currentColor"
                      />
                    </div>
                  </div>

                  <p
                    className="
                      mt-3
                      px-0.5
                      pb-0.5

                      text-[#fff]
                      text-[12px]
                      sm:text-[13px]
                      font-bold
                      leading-snug

                      transition-colors
                      duration-300

                      group-hover:text-white
                    "
                  >
                    {item.title}
                  </p>
                  {/* <p className="px-0.5 pb-2 text-xs leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-white/80">
                    {item.description}
                  </p> */}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .ondemand-line {
          display: block;
        }
      `}</style>
    </section>
  );
};

export default OnDemandSection;