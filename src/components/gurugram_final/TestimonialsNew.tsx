import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
};

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Great to see so many minds coming together to discuss how we can collectively shape the future of AI in India.",
    name: "Amit Atri",
    designation: "Global CIO, Tata Consumer Products",
  },
  {
    quote:
      "The energy in the room was incredible — this is exactly the kind of conversation enterprise AI needs right now.",
    name: "Priya Menon",
    designation: "CTO, Reliance Retail",
  },
  {
    quote:
      "A rare space where builders, leaders and policymakers actually talk to each other instead of past each other.",
    name: "Rahul Sinha",
    designation: "VP Engineering, Flipkart",
  },
];

const AUTOPLAY_INTERVAL = 6000;

const TestimonialSection = ({
  testimonials = defaultTestimonials,
  backgroundImage = "gurugram/testimonial/bg.jpg",
}: {
  testimonials?: Testimonial[];
  backgroundImage?: string;
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = testimonials.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % total) + total) % total);
    },
    [total]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  /* =====================================================
     AUTOPLAY — loops continuously, resets on manual nav
  ===================================================== */
  useEffect(() => {
    if (total <= 1) return;

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, total]);

  const handleManualNav = (direction: "prev" | "next") => {
    if (timerRef.current) clearInterval(timerRef.current);
    direction === "next" ? goNext() : goPrev();
  };

  const current = testimonials[activeIndex];

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
      className="testimonial-section relative w-full min-h-[600px] md:min-h-[720px] overflow-hidden"
    >
      {/* =================================================
          BACKGROUND IMAGE
      ================================================= */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK GRADIENT for text legibility on the left */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/85
          via-black/40
          to-transparent
        "
      />

      {/* =================================================
          CONTENT
      ================================================= */}
      <div className="relative z-10 h-full min-h-[600px] md:min-h-[720px] max-w-[1500px] mx-auto px-6 flex items-center">
        <div
          className={`w-full max-w-[760px] py-16 testimonial-reveal ${sectionVisible ? "is-visible" : ""}`}
        >
          {/* QUOTE — fades between testimonials */}
          <div
            key={activeIndex}
            className="testimonial-quote animate-[fadeIn_600ms_ease-out]"
          >
            <p className="text-white font-black text-[28px] sm:text-[36px] md:text-[42px] leading-[1.15] tracking-[-0.5px]">
              &ldquo;{current.quote}&rdquo;
            </p>

            <p className="mt-6 text-white/80 text-[16px] md:text-[18px]">
              — {current.name}, {current.designation}
            </p>
          </div>

          {/* NAV ARROWS */}
          <div className="mt-12 flex items-center gap-4 testimonial-nav">
            <button
              onClick={() => handleManualNav("prev")}
              aria-label="Previous testimonial"
              className="
                w-11 h-11
                rounded-full
                border border-white/50
                text-white
                flex items-center justify-center

                transition-all
                duration-300

                hover:bg-white
                hover:text-black
              "
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={() => handleManualNav("next")}
              aria-label="Next testimonial"
              className="
                w-11 h-11
                rounded-full
                border border-white/50
                text-white
                flex items-center justify-center

                transition-all
                duration-300

                hover:bg-white
                hover:text-black
              "
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes testimonialReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 44px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .testimonial-reveal {
          opacity: 0;
          will-change: opacity, transform;
        }

        .testimonial-reveal.is-visible {
          animation: testimonialReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .testimonial-quote {
          animation-delay: 150ms;
        }

        .testimonial-nav {
          opacity: 0;
          transform: translate3d(0, 24px, 0);
        }

        .testimonial-reveal.is-visible .testimonial-nav {
          animation: testimonialReveal 1.1s 450ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;