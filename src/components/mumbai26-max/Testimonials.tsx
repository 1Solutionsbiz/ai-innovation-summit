import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "Great to see so many minds coming together to discuss how we can collectively shape the future of AI in India.",
    name: "Amit Atri",
    title: "Global CIO, Tata Consumer Products",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1600&q=80",
  },
  {
    quote: "It's energising to be at the AI Innovation Summit and witness the intensity of conversations across the room.",
    name: "Vyshak Venugopalan",
    title: "Sr. Director, Solution Consulting, Adobe",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1600&q=80",
  },
  {
    quote: "It's great to see leaders come together on a common platform. The emphasis on collaboration and shared learning made this a valuable experience.",
    name: "Vinod Kumar Pathak",
    title: "Senior Partner & Leader – Manufacturing, PwC India",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1600&q=80",
  },
];

// How much extra scroll runway (in viewport heights) the pin/inset transition plays over.
const RUNWAY_VH = 1.4;

const Testimonials = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const vh = window.innerHeight;
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = Math.max(1, rect.height - vh);
      const p = Math.min(1, Math.max(0, scrolled / Math.min(total, vh * RUNWAY_VH)));
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollBy = (direction: 1 | -1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollBy({ left: direction * scroller.clientWidth, behavior: "smooth" });
  };

  const insetX = progress * 64; // grows to 64px side inset
  const radius = progress * 24; // grows to 24px corner radius

  return (
    <section
      ref={wrapperRef}
      className="relative bg-white"
      style={{ height: `${100 * (1 + RUNWAY_VH)}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-white">
        <div
          className="relative w-full"
          style={{ paddingLeft: insetX, paddingRight: insetX }}
        >
          <div
            ref={scrollerRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ borderRadius: radius }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative shrink-0 w-full snap-center overflow-hidden aspect-[4/5] sm:aspect-[16/9] md:aspect-[2.4/1]"
                style={{ borderRadius: radius }}
              >
                <img
                  src={t.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 max-w-2xl">
                  <p className="font-inter font-bold text-white text-2xl sm:text-3xl md:text-4xl leading-tight">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-6 text-slate-300 text-sm md:text-base">
                    — {t.name}, {t.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous testimonial"
          style={{ opacity: progress, pointerEvents: progress > 0.6 ? "auto" : "none" }}
          className="hidden sm:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg items-center justify-center transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-slate-900" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next testimonial"
          style={{ opacity: progress, pointerEvents: progress > 0.6 ? "auto" : "none" }}
          className="hidden sm:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg items-center justify-center transition-colors"
        >
          <ArrowRight className="w-5 h-5 text-slate-900" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
