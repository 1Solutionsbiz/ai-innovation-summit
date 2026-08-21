import { useRef } from "react";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";

const speakers = [
  { name: "Arjun Mehta", role: "Chief Technology Officer, Northbridge Retail", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" },
  { name: "Priya Nair", role: "VP of Data & AI, Meridian Financial", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80" },
  { name: "Rohan Kapoor", role: "Head of Engineering, Solstice Health", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
  { name: "Ananya Rao", role: "Chief Digital Officer, Vertex Manufacturing", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80" },
  { name: "Karan Malhotra", role: "Founder, Orbit AI Labs", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80" },
  { name: "Vikram Suri", role: "CIO, Cobalt Logistics", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80" },
  { name: "Aditya Bose", role: "Director of AI Strategy, Lumen Insurance", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80" },
  { name: "Sanya Chopra", role: "Head of Product, Nova Analytics", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" },
];

const FeaturedSpeakers = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: direction * 340, behavior: "smooth" });
  };

  return (
    <section id="speakers" className="bg-white pt-16 pb-16 md:pt-20 md:pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center">
          <p className="text-base font-extrabold text-fuchsia-600 mb-2">
            Featured speakers
          </p>
          <h2 className="font-inter font-black text-slate-900 text-[36px] sm:text-[44px] md:text-[56px] leading-[1.1] tracking-[-1.44px]">
            Big ideas, inspired voices.
          </h2>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Scroll speakers left"
            className="w-11 h-11 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-slate-500" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Scroll speakers right"
            className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Full-bleed carousel, left edge aligned with the 1200px container above */}
      <div
        ref={scrollerRef}
        className="mt-4 flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pl-6 pr-6 md:pl-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))] md:pr-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {speakers.map((speaker) => (
          <div
            key={speaker.name}
            className="group shrink-0 w-[220px] sm:w-[260px] snap-start rounded-2xl p-0 hover:p-3 transition-all duration-300 hover:bg-slate-900"
          >
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-slate-900 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Plus className="w-4 h-4" />
              </span>
            </div>
            <p className="mt-4 font-bold text-lg text-slate-900 group-hover:text-white transition-colors">
              {speaker.name}
            </p>
            <p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">
              {speaker.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
