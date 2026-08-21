import { useRef } from "react";
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

const Testimonials = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollBy({ left: direction * scroller.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 text-center mb-10">
        <p className="text-base font-extrabold text-fuchsia-600 mb-2">
          Why attendees keep coming back
        </p>
        <h2 className="font-inter font-black text-slate-900 text-[36px] sm:text-[44px] md:text-[56px] leading-[1.1] tracking-[-1.44px]">
          Told by the people who were there.
        </h2>
      </div>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-8 sm:px-16 md:px-24 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative shrink-0 w-full snap-center rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[2/1]"
            >
              <img
                src={t.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-14 max-w-2xl">
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

        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous testimonial"
          className="hidden sm:flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg items-center justify-center transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-slate-900" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next testimonial"
          className="hidden sm:flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg items-center justify-center transition-colors"
        >
          <ArrowRight className="w-5 h-5 text-slate-900" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
