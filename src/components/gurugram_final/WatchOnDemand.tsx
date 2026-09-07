"use client";

import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type VideoItem = {
  image?: string;
  link: string;
  title: string;
  description: string;
};

const videos: VideoItem[] = [
  {
    link: "https://youtu.be/Q1jh_EXeIF0?si=V7q2Oe6TzlAEyAc7",
    title: "Inaugural Address | Dr. N. Manjula, IAS",
    description: "Dr. N. Manjula, IAS, Hon'ble Secretary, Government of Karnataka, shares Karnataka's vision for AI, deep tech and digital innovation.",
  },
  {
    link: "https://youtu.be/zqVcqrTrrKI?si=FLfUx7LudUw-a-TA",
    title: "The India AI Playbook | CXOs & Senior Industry Leaders",
    description: "CXOs and senior industry leaders share practical lessons on moving AI from experimentation to measurable business impact.",
  },
  {
    link: "https://youtu.be/aym63ZXFHqU?si=QcjPbssuo9hgH9dH",
    title: "Amit Sharma | Sr. Vice President – Enterprise Information Management and Analytics, Canara HSBC Life Insurance",
    description: "Insights on the evolving maturity of AI models, their growing applications in BFSI, and the challenges of scaling AI across legacy enterprise systems.",
  },
  {
    link: "https://youtu.be/mE-YiCnwzHA?si=gVCkH2li3M-rwnMC",
    title: "Autonomous Finance | Akbar Ali Shaikh",
    description: "Akbar Ali Shaikh, Partner - Autonomous Finance, Deloitte, explores how AI, interoperability and real-time data are reshaping finance.",
  },
  {
    link: "https://youtu.be/jRHSGJcoAkE?si=GwSOnmpf83a8YNcR",
    title: "Unlocking Enterprise AI Value | Manpreet Singh Ahuja",
    description: "Manpreet Singh Ahuja, Partner and Chief Client & TMT Sector Leader, PwC India, shares how organisations can move from pilots to transformation.",
  },
];

const getYoutubeThumbnail = (link: string) => {
  const videoId = link.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^?&/]+)/)?.[1];
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
};

const getVideoImage = (item: VideoItem) => item.image ?? getYoutubeThumbnail(item.link);

const OnDemandSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [featured, ...rest] = videos;
  const gridItems = rest.slice(0, 4);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(false);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setSectionVisible(true));
          });
        } else {
          setSectionVisible(false);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="ondemand-section relative bg-[#050B22] py-16 md:py-20 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          {/* =================================================
              LEFT TEXT
          ================================================= */}
          <div className="lg:w-[22%] flex-shrink-0">
            <p
              className={`ondemand-reveal-up ondemand-delay-0 text-[#EF3340] text-[18px] mb-3 ${sectionVisible ? "is-visible" : ""}`}
            >
              On-Demand Content
            </p>

            <h2 className="text-white font-[500] text-[36px] sm:text-[43px] leading-[1.05] tracking-[-1px]">
              <span className={`ondemand-line ondemand-reveal-up ondemand-delay-1 ${sectionVisible ? "is-visible" : ""}`}>
                Ideas That Inspire.
              </span>
              <span className={`ondemand-line ondemand-reveal-up ondemand-delay-2 ${sectionVisible ? "is-visible" : ""}`}>
                On Your Schedule.
              </span>
            </h2>

            <a
              href="#"
              className={`ondemand-reveal-up ondemand-delay-3
                mt-5
                inline-block
                px-7
                py-3
                rounded-full
                btn-bg
                ${sectionVisible ? "is-visible" : ""}`}
            >
              Explore More
            </a>
          </div>

          {/* =================================================
              FEATURED VIDEO
          ================================================= */}
          <a
            href={featured.link}
            target="_blank"
            rel="noreferrer"
            className={`group lg:w-[36%] w-full flex-shrink-0 ondemand-card ondemand-card-featured ${sectionVisible ? "is-visible" : ""}`}
          >
            <div
              className="
                rounded-[18px]
                overflow-hidden
                p-1
                bg-[#fff]

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

                    w-16 h-16

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

                  text-[#022158]
                  text-[26px]
                  font-bold
                  leading-snug

                  transition-colors
                  duration-300

                  group-hover:text-white
                "
              >
                {featured.title}
              </p>
              <p className="px-1 pb-4 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-white/80">
                {featured.description}
              </p>
            </div>
          </a>

          {/* =================================================
              GRID OF SMALLER VIDEOS
          ================================================= */}
          <div className="lg:w-[42%] w-full grid grid-cols-2 gap-3 md:gap-4">
            {gridItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`group ondemand-card ondemand-card-${gridItems.indexOf(item)} ${sectionVisible ? "is-visible" : ""}`}
              >
                <div
                  className="
                    rounded-[14px]
                    overflow-hidden
                    p-1

                    bg-[#fff]

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

                        w-10 h-10

                        rounded-full

                        bg-white/90

                        flex items-center justify-center

                        transition-transform
                        duration-300

                        group-hover:scale-110
                      "
                    >
                      <Play
                        size={15}
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

                      text-[#022158]
                      text-[13px]
                      font-bold
                      leading-snug

                      transition-colors
                      duration-300

                      group-hover:text-white
                    "
                  >
                    {item.title}
                  </p>
                  <p className="px-0.5 pb-2 text-xs leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-white/80">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ondemandFadeInUp {
          from { opacity: 0; transform: translate3d(0, 38px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @keyframes ondemandCardsMerge {
          from { opacity: 0; transform: translate3d(var(--ondemand-x), var(--ondemand-y), 0) scale(0.82); }
          to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
        }

        .ondemand-reveal-up,
        .ondemand-card {
          opacity: 0;
          will-change: opacity, transform;
        }

        .ondemand-line {
          display: block;
        }

        .ondemand-reveal-up.is-visible {
          animation: ondemandFadeInUp 1.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .ondemand-card.is-visible {
          animation: ondemandCardsMerge 1.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .ondemand-card-featured { --ondemand-x: 80px; --ondemand-y: -50px; animation-delay: 150ms; }
        .ondemand-card-0 { --ondemand-x: -70px; --ondemand-y: -45px; animation-delay: 300ms; }
        .ondemand-card-1 { --ondemand-x: 70px; --ondemand-y: -45px; animation-delay: 450ms; }
        .ondemand-card-2 { --ondemand-x: -70px; --ondemand-y: 55px; animation-delay: 600ms; }
        .ondemand-card-3 { --ondemand-x: 70px; --ondemand-y: 55px; animation-delay: 750ms; }

        .ondemand-delay-1 { animation-delay: 250ms; }
        .ondemand-delay-2 { animation-delay: 550ms; }
        .ondemand-delay-3 { animation-delay: 850ms; }

        @media (prefers-reduced-motion: reduce) {
          .ondemand-reveal-up.is-visible,
          .ondemand-card.is-visible {
            animation-duration: 1ms;
            animation-delay: 0ms;
          }
        }
      `}</style>
    </section>
  );
};

export default OnDemandSection;