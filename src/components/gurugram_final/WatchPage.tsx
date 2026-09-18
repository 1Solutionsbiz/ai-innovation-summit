"use client";

import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Check, Share2 } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { useEffect, useState } from "react";
import RedesignNavigation from "./RedesignNavigation";
import Footer from "./Footer";
import { watchVideos } from "../../data/watchVideos";

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

const renderDescription = (description: string) => {
  const lines = description
    .replace(/<br\s*\/?>/gi, "\n")
    .split(/\r?\n/);

  const renderLine = (line: string) => {
    const parts = line.trim().split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }

      if (part.startsWith("*") && part.endsWith("*")) {
        return <strong key={index}>{part.slice(1, -1)}</strong>;
      }

      return <span key={index}>{part}</span>;
    });
  };

  return lines.map((line, index) => (
    <span
      key={`${line}-${index}`}
      className={line.trim() ? "block" : "block h-5"}
      aria-hidden={!line.trim()}
    >
      {line.trim() && renderLine(line)}
    </span>
  ));
};

const WatchPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const videoKey = searchParams.get("id");
  const currentVideo = watchVideos.find((video) => video.id === videoKey);
  const [linkCopied, setLinkCopied] = useState(false);

  useEffect(() => {
    if (!currentVideo) {
      navigate("/", { replace: true });
    }
  }, [currentVideo, navigate]);

  if (!currentVideo) {
    return null;
  }

  const { link, title, description } = currentVideo;
  const destination = "";
  const videoId = getYouTubeId(link);

  const embedSrc = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
    : null;
  const pageUrl = window.location.href;
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedText = encodeURIComponent(`${title} - ${pageUrl}`);

  const socialShareLinks = [
    {
      label: "",
      icon: <FaWhatsapp className="text-[#25D366]" size={17} />,
      href: `https://wa.me/?text=${encodedText}`,
    },
    {
      label: "",
      icon: <FaXTwitter className="text-black" size={16} />,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodedUrl}`,
    },
    {
      label: "",
      icon: <FaLinkedinIn className="text-[#0A66C2]" size={17} />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "",
      icon: <FaFacebookF className="text-[#1877F2]" size={17} />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
  ];

  const sharePage = async () => {
    const shareData = {
      title,
      text: description,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      }
    }

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(pageUrl);
      setLinkCopied(true);
      window.setTimeout(() => setLinkCopied(false), 2200);
    }
  };

  return (
    <div className="min-h-screen bg-[#050B22] text-white">
      <RedesignNavigation />

      <main className="relative py-10 md:py-16 mt-20 md:mt-10">
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
              <h1 className="text-3xl font-black leading-tight tracking-[-0.8px] text-white md:text-3xl">
                {title}
              </h1>

              {/* <div className="mt-6 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 inline-flex items-center">
                {destination}
              </div> */}

              <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
                {renderDescription(description)}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-sm font-semibold text-white/80">
                  Share :
                </span>
                {socialShareLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#050B22]"
                  >
                    {social.icon}
                    {social.label}
                  </a>
                ))}

                <button
                  type="button"
                  onClick={sharePage}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#050B22]"
                >
                  {linkCopied ? <Check size={17} /> : <Share2 size={17} />}
                  {linkCopied ? "Link copied" : "Share"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WatchPage;