"use client";

import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import RedesignNavigation from "./RedesignNavigation";
import Footer from "./Footer";

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
  const title = searchParams.get("title") ?? "AI Innovation Summit";
  const description =
    searchParams.get("description") ??
    "Explore the latest AI Innovation Summit insights, leadership perspectives, and enterprise transformation stories.";
  const destination =
    searchParams.get("destination") ?? "The Leela Ambience Gurugram, Delhi-NCR";

  const videoId = getYouTubeId(rawLink);

  const embedSrc = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
    : null;

  return (
    <div className="min-h-screen bg-[#050B22] text-white">
      <RedesignNavigation />

      <main className="relative py-10 md:py-16 mt-10">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-8 flex items-center gap-2 text-[15px] font-semibold text-white/80 transition-colors duration-300 hover:text-white"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <div className="grid items-start gap-8 lg:grid-cols-2 mt-10">
            <div className="relative w-full overflow-hidden rounded-[20px] bg-black shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
              <div className="aspect-video">
                {embedSrc ? (
                  <iframe
                    src={embedSrc}
                    title={title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-white/60">
                    Video not found.
                  </div>
                )}
              </div>
            </div>

            <div className="pt-2">
              <h1 className="text-3xl font-black leading-tight tracking-[-0.8px] text-white md:text-5xl">
                {title}
              </h1>

              <div className="mt-6 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 inline-flex items-center">
                {destination}
              </div>

              <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
                {description}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WatchPage;