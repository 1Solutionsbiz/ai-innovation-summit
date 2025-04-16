
import { Button } from "./ui/button";

export const PartnershipCTA = () => {
  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg mb-6">
              <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-white">
                Interested in becoming a partner for 2025?
              </h2>
            </div>
            <p className="text-gray-400 mb-8">
              More information about becoming a partner will be released shortly.
            </p>
            <Button size="lg" className="bg-neon-purple hover:bg-neon-purple/90">
              Learn more about Partnerships
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-grid-white/10 -z-10" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-orange/20 rounded-full blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80"
              alt="Partnership"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
