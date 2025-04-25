import { Button } from "./ui/button";

export const PartnershipCTA = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE - TEXT CONTENT */}
          <div className="relative z-10">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold font-orbitron text-white leading-snug">
                Interested in becoming a partner for 2025?
              </h2>
            </div>
            <p className="text-gray-400 text-lg lg:text-xl mb-8 max-w-xl pl-4">
              More information about becoming a partner will be released shortly.
            </p>
            <Button size="lg" className="btn-gradient hover:bg-neon-purple/90 text-white px-6 py-3 text-base ml-4">
              Learn more about Partnerships
            </Button>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="relative group">
            <div className="absolute inset-0 bg-grid-white/10 -z-10" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-orange/20 rounded-full blur-2xl" />
            <img
              src="/partnership.png"
              alt="Partnership"
              className="rounded-lg w-full h-auto object-contain max-h-[500px] transform transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
