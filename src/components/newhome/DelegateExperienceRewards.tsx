import { useState } from "react";

const DelegateExperienceRewards = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section
      className="py-20 text-white"
      style={{ backgroundColor: "#0b122c" }}
    >
      <div className="container mx-auto px-4">

        {/* Tabs Header */}
        <div className="flex justify-center mb-14">
          <div className="flex bg-white/10 rounded-full p-2 backdrop-blur">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all
                ${
                  activeTab === "experience"
                    ? "bg-white text-[#0b122c]"
                    : "text-white hover:bg-white/10"
                }`}
            >
              Delegate Experience
            </button>

            <button
              onClick={() => setActiveTab("rewards")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all
                ${
                  activeTab === "rewards"
                    ? "bg-white text-[#0b122c]"
                    : "text-white hover:bg-white/10"
                }`}
            >
              Rewards
            </button>
          </div>
        </div>

        {/* TAB CONTENT */}
        {activeTab === "experience" && (
          <div className="text-center max-w-5xl mx-auto">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Delegate Experience & Rewards
            </h2>

            <p className="text-gray-300 text-lg mb-16">
              Every registered delegate at the AI Innovation Summit is part of a
              thoughtfully curated experience—designed to recognize engagement,
              participation, and the conversations that move the ecosystem forward.
            </p>

            <h3 className="text-3xl font-semibold mb-10">
              What Awaits You
            </h3>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:scale-105 transition">
                <div className="text-5xl mb-4">🎁</div>
                <h4 className="text-xl font-semibold mb-3">
                  Curated Delegate Gifts
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  All attendees receive exclusive delegate gifts at the conclusion
                  of the summit, thoughtfully selected in collaboration with our
                  brand partners.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:scale-105 transition">
                <div className="text-5xl mb-4">✨</div>
                <h4 className="text-xl font-semibold mb-3">
                  Exclusive Lucky Draw Rewards
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Selected delegates stand a chance to win premium rewards through
                  curated lucky draws held during the summit and at its close.
                </p>
              </div>

            </div>
          </div>
        )}

        {activeTab === "rewards" && (
          <div className="max-w-4xl mx-auto text-center">

            <h3 className="text-4xl font-bold mb-6">
              Why It Matters
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed bg-white/5 border border-white/10 rounded-2xl p-10">
              Your participation fuels better conversations and stronger future
              editions—rewarded through a thoughtfully designed delegate experience.
            </p>

          </div>
        )}

      </div>
    </section>
  );
};

export default DelegateExperienceRewards;
