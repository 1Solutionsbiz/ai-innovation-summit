import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  image?: string;
};

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "AI delivers real impact when it moves beyond experimentation and translates into measurable business outcomes—accelerating growth, improving underwriting quality, and driving efficiency across the lending ecosystem.",
    name: "Parvez Mulla",
    designation: "MD & CEO, Fedbank Financial Services Ltd.",
    image: "gurugram/testimonial/a.png",
  },
  {
    quote:
      "AI enables companies to understand consumer preferences and behaviors far more precisely. When applied to meaningful business challenges, it can deliver strong ROI while helping organizations create more relevant and personalized experiences for their consumers.",
    name: "Mithun Appaiah",
    designation: "CEO, Wow! Momo FMCG",
    image: "gurugram/testimonial/a.png",
  },
  {
    quote:
      "AI is not just an enabler—it changes how businesses operate. The real opportunity for enterprises is to rethink their operating models, move beyond experimentation, and unlock the transformative impact AI can create at scale.",
    name: "Raghav Aggarwal",
    designation: "Co-Founder, Fluid AI",
    image: "gurugram/testimonial/a.png",
  },
  {
    quote:
      "Great to see so many minds coming together to discuss how we can collectively shape the future of AI in India. The AI Innovation Summit provides a strong platform for meaningful dialogue and collaboration across the ecosystem.",
    name: "Amit Atri",
    designation: "Global CIO, Tata Consumer Products",
    image: "gurugram/testimonial/a.png",
  },
  {
    quote:
      "The panel at AI Innovation Summit was a great platform to reflect on how enterprise architecture must evolve to be truly AI-ready. We explored how cloud-native infrastructure and data pipelines foster a culture of innovation, and why AI must move from being a standalone tool to becoming a core business enabler.",
    name: "Shashwat Singh",
    designation: "CIO, boAt",
    image: "gurugram/testimonial/a.png",
  },
  {
    quote:
      "The way tons of data is getting created in the last 3-4 years, the amount of data which is getting generated is humongous, so what we need is an infrastructure which can basically manage on-demand situation, and the infrastructure which is a secure infrastructure and has a lot of inbuilt facilities.",
    name: "Vinod Bhat",
    designation: "Former CIO, Vistara",
    image: "gurugram/testimonial/a.png",
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
      className="testimonial-section relative w-full min-h-[520px] sm:min-h-[600px] md:min-h-[720px] overflow-hidden"
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
      <div className="relative z-10 h-full min-h-[520px] sm:min-h-[600px] md:min-h-[720px] max-w-[1500px] mx-auto px-4 sm:px-6 flex items-center">
        <div
          className={`w-full max-w-[760px] py-10 sm:py-16 testimonial-reveal ${sectionVisible ? "is-visible" : ""}`}
        >
          {/* QUOTE — fades between testimonials */}
          <div
            key={activeIndex}
            className="testimonial-quote animate-[fadeIn_600ms_ease-out]"
          >
            <p className="text-white font-black text-[18px] sm:text-[25px] md:text-[30px] leading-[1.2] tracking-[-0.25px] sm:tracking-[-0.5px]">
              &ldquo;{current.quote}&rdquo;
            </p>

            <div className="mt-5 flex items-center gap-3 sm:mt-6 sm:gap-4">
              {current.image ? (
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-14 sm:w-20"
                />
              ) : null}

              <div>
                <p className="text-white text-[16px] sm:text-[20px] font-semibold leading-tight">
                  {current.name}
                </p>
                <p className="text-white/80 text-[14px] sm:text-[17px] leading-tight mt-1">
                  {current.designation}
                </p>
              </div>
            </div>
          </div>

          {/* NAV ARROWS */}
          <div className="mt-8 flex items-center gap-3 sm:mt-12 sm:gap-4 testimonial-nav">
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