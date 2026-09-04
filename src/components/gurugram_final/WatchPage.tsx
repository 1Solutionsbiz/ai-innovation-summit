"use client";

import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/* =====================================================
   Extracts the YouTube video ID from either a
   youtu.be/ID or youtube.com/watch?v=ID style link.
===================================================== */
const getYouTubeId = (url: string): string | null => {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }

    if (parsed.hostname.includes("youtube.com")) {
      return parsed.searchParams.get("v");
    }

    return null;
  } catch {
    return null;
  }
};

const WatchPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const rawLink = searchParams.get("v") ?? "";
  const title = searchParams.get("title") ?? "";

  const videoId = getYouTubeId(rawLink);

  const embedSrc = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
    : null;

  return (
    <section className="relative min-h-screen bg-[#050B22] py-10 md:py-16">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="
            flex items-center gap-2

            text-white/80
            text-[15px]
            font-semibold

            mb-8

            transition-colors
            duration-300

            hover:text-white
          "
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* PLAYER */}
        <div className="relative w-full aspect-video rounded-[18px] overflow-hidden bg-black">
          {embedSrc ? (
            <iframe
              src={embedSrc}
              title={title || "Video player"}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/60 text-sm">
              Video not found.
            </div>
          )}
        </div>

        {/* TITLE */}
        {title && (
          <h1 className="mt-6 text-white font-black text-[24px] md:text-[30px] leading-tight tracking-[-0.5px]">
            {title}
          </h1>
        )}
      </div>
    </section>
  );
};

export default WatchPage;