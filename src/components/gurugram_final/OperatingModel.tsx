type OperatingModelProps = {
  showCta?: boolean;
};

const OperatingModel = ({ showCta = true }: OperatingModelProps) => {
  return (
    <section className="bg-white py-16 px-6 sm:py-20">
      <div className="mx-auto max-w-5xl text-left">
        {/* <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#EF3340]">
          Concept Note
        </p> */}

        <h2 className="text-center font-black text-blue-950 text-2xl sm:text-3xl md:text-4xl leading-snug">
          The AI Innovation Summit returns for its 8th Edition in Delhi NCR
        </h2>

        <div className="mt-2 space-y-2 text-base leading-relaxed text-blue-950/80 md:text-[16px]">
          <p className="mt-1">
            The <strong className="font-bold text-blue-950">AI Innovation Summit</strong> returns for its <strong className="font-bold text-blue-950">8th Edition in Delhi NCR</strong> at a defining moment for enterprise AI.
          </p>

          <p className="mt-1">
            The summit brings together <strong className="font-bold text-blue-950">CIOs, CTOs, Chief Data Officers, CISOs, Chief AI Officers, IT Heads, and senior technology and business leaders</strong> for high-impact conversations on the future of enterprise AI.
          </p>

          <p className="mt-1">
            Designed to foster leadership dialogue and practical innovation, the summit serves as a meeting ground for decision-makers shaping the future of AI-driven transformation across industries.
          </p>

          <p className="mt-1">
            Across seven editions, the summit has convened leaders through <strong className="font-bold text-blue-950">interactive panels, expert-led sessions, live audience engagement, sponsor showcases, and curated networking</strong> — creating a platform for meaningful collaboration, practical insights, and business connections.
          </p>

          <p className="mt-1">
            With a forward-looking agenda, the summit highlights how enterprises are scaling AI adoption, advancing <strong className="font-bold text-blue-950">Agentic AI</strong>, driving intelligent automation, and deploying AI across key sectors. The program also emphasizes responsible AI, addressing governance, security, risk, and ethical frameworks essential for sustainable, enterprise-wide impact.
          </p>

          <p className="mt-1">
            The <strong className="font-bold text-blue-950">8th Edition</strong> moves the conversation from adoption to <strong className="font-bold text-blue-950">enterprise-scale execution</strong> — exploring how organizations can take <strong className="font-bold text-blue-950">Agentic AI from the demo to production</strong>, supported by the infrastructure, governance, security, and ROI required to scale.
          </p>

          <p className="mt-1">
            The agenda brings together leaders from <strong className="font-bold text-blue-950">manufacturing, automotive, BFSI, FMCG, retail, electronics &amp; electricals, fintech, telecom, and other major sectors.</strong>
          </p>

          <div className="rounded-2xl border border-blue-950/10 bg-blue-50/60 p-5">
            <p className="font-bold text-blue-950">Conversations around the Burning Questions:</p>
            <p className="mt-2">
              Every session on the agenda is designed to move one of these five conversations forward — the ones every CXO in India is genuinely wrestling with today.
            </p>
          </div>

          <p className="mt-1">
            The <strong className="font-bold text-blue-950">AI Innovation Summit — 8th Edition</strong> brings together the leaders shaping India’s AI-first future.
          </p>

          <p className="mt-1">
            Join us and engage with industry trailblazers, gain actionable strategies, build meaningful connections, and be part of the conversation defining <strong className="font-bold text-blue-950">what enterprise AI looks like at scale</strong>, and accelerate your organization’s journey toward an <strong className="font-bold text-blue-950">AI-first future.</strong>
          </p>

          <p className="mt-1 text-center text-xl font-black text-blue-950">
            #Yes, AI Can.
          </p>
        </div>

        {showCta && (
          <div className="mt-10 text-center">
            <a href="#know-more" className="rounded-full px-10 py-4 btn-bg-w">
              Know more...
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default OperatingModel;