"use client";

import { Link } from "react-router-dom";
import { Play } from "lucide-react";

type VideoItem = {
  image: string;
  link: string;
  title: string;
};

const videos: VideoItem[] = [
  {
    image: "/gurugram/videos/1.png",
    link: "https://youtu.be/ihVia4zok2o?si=77qr1sOPwkr7cHM8",
    title: "The AI ROI Illusion: Why teams struggle to prove AI impact",
  },
  {
    image: "/gurugram/videos/2.png",
    link: "https://youtu.be/O0uTMQC4wLU?si=cq05f9m8vmhRT7zk",
    title: "Cyber Resilience: The foundation of AI-Powered Business Transformation",
  },
  {
    image: "/gurugram/videos/3.png",
    link: "https://youtu.be/HKblUL42uAw?si=wZ1-TIMTghd12Jzz",
    title: "The Autonomous Enterprise: Engineering the Shift",
  },
  {
    image: "/gurugram/videos/2.png",
    link: "https://youtu.be/qyP3-zDsjfk?si=uZYSXHN7qxAAJox3",
    title: "Cyber Resilience: The foundation of AI-Powered Business Transformation",
  },
  {
    image: "/gurugram/videos/3.png",
    link: "https://youtu.be/rTy2iuzmZxM?si=eLUO3RXaG_9kUcEx",
    title: "The Autonomous Enterprise: Engineering the Shift",
  },
];

/* =====================================================
   Builds the internal watch-page URL for a video.
   The player page reads these query params and embeds
   the YouTube video with autoplay enabled.
===================================================== */
const buildWatchHref = (item: VideoItem) =>
  `/watch?v=${encodeURIComponent(item.link)}&title=${encodeURIComponent(
    item.title
  )}`;

const OnDemandSection = () => {
  const [featured, ...rest] = videos;
  const gridItems = rest.slice(0, 4);

  return (
    <section className="relative bg-[#050B22] py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          {/* =================================================
              LEFT TEXT
          ================================================= */}
          <div className="lg:w-[22%] flex-shrink-0">
            <p className="text-[#EF3340] text-[18px] mb-3">
              On-Demand Content
            </p>

            <h2 className="text-white font-[500] text-[36px] sm:text-[43px] leading-[1.05] tracking-[-1px]">
              Ideas That Inspire. On Your Schedule.
            </h2>

            <a
              href="#"
              className="
                mt-5
                inline-block
                px-7
                py-3
                rounded-full
                btn-bg
              "
            >
              Explore More
            </a>
          </div>

          {/* =================================================
              FEATURED VIDEO
          ================================================= */}
          <Link href={buildWatchHref(featured)} className="group lg:w-[36%] w-full flex-shrink-0">
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
                  src={featured.image}
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
            </div>
          </Link>

          {/* =================================================
              GRID OF SMALLER VIDEOS
          ================================================= */}
          <div className="lg:w-[42%] w-full grid grid-cols-2 gap-3 md:gap-4">
            {gridItems.map((item) => (
              <Link key={item.link} href={buildWatchHref(item)} className="group">
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
                      src={item.image}
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnDemandSection;