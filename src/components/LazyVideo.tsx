import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

// forwardRef so parents (HeroBanner, Innovation) can reach the <video>
// element for their play/pause buttons. Without it the ref they pass is
// dropped and the buttons silently do nothing.
const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(function LazyVideo(
  { src, poster, className },
  forwardedRef
) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useImperativeHandle(forwardedRef, () => videoRef.current as HTMLVideoElement);

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
});

export default LazyVideo;
