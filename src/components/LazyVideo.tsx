
import { useEffect, useRef } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function LazyVideo({
  src,
  poster,
  className,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!video.src) {
              video.src = src;
              video.load();
            }

            video.play().catch(() => {
              // Browser autoplay may be restricted
            });
          } else {
            video.pause();
          }
        });
      },
      {
        rootMargin: "300px",
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      className={className}
      muted
      playsInline
      loop
      preload="none"
    />
  );
}
