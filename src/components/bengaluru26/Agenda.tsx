import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const AgendaNew = () => {
  const higlitbanner = "/delhi26/highlight.png";
  const adobelogo = "/partners/Adobe_Logo_Red.png";

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };








  


  const agendaData = [
    {
      time: "09:45 – 10:00",
      title: "Welcome Address ",
      description: "",
    },
    {
      time: "10:00 – 10:15 ",
      title: "Opening Address : The Autonomous Enterprise: Engineering the Shift ",
      description: "Enterprise AI is entering its third wave. The first wave focused on experimentation. The second wave introduced copilots and productivity assistants. The third wave now emerging is defined by autonomous systems capable of executing workflows, orchestrating decisions, and reshaping enterprise operating models.\n According to recent global enterprise surveys, over 70% of CIOs report active AI pilots, yet fewer than 25% have successfully scaled AI into mission-critical production systems. The gap is no longer about ambition it is about architecture, governance, and economic viability.\n This opening address frames the shift from AI augmentation to AI autonomy, outlining what it takes to engineer enterprises where intelligence is embedded into systems, not layered on top of them.",
    },
    {
      time: "10:15 – 10:30 ",
      title: "Keynote: Build and Govern the Agentic Enterprise ",
      description: "Agentic AI systems capable of goal-driven decision making represents a structural evolution in enterprise automation. Unlike static AI models, agent-based systems interact dynamically with data, applications, and workflows. \n But autonomy introduces complexity. \n Questions enterprises must answer: \n <ul> <li>How do you manage multi-agent orchestration?</li> <li>How do you monitor model drift and decision transparency?</li><li>How do you audit autonomous workflows?</li><li>What is the governance model for AI agents?</li></ul> \n Industry data shows that AI governance failures are now among the top five emerging enterprise risk categories. This keynote explores the architectural principles, governance frameworks, and control layers required to build enterprise-grade agentic systems safely and sustainably.  ",
    },
    {
      time: "10:30 – 11:15 ",
      title: "Plenary Panel :From Prototype to Production: The Economics of Enterprise AI ",
      description: "Enterprise AI success is not determined by innovation—it is determined by economics.\n Over 80% of AI initiatives stall before full-scale deployment. Key barriers include:<ul><li>Escalating GPU costs</li><li>Infrastructure complexity</li><li>Integration challenges</li><li>Unclear ROI metrics</li><li>Vendor lock-in risks</li></ul>\n AI workloads can increase cloud expenditure by 20-40% if not architected properly. Meanwhile, CFOs are demanding measurable returns on AI investments.\n <p>This panel examines:</p><ul><li>AI FinOps strategies</li><li>Infrastructure optimization</li><li>Model lifecycle management</li><li>Cost-per-inference economics</li><li>Scaling AI without exponential spend</li></ul><p>Because in 2026, AI without economic discipline is unsustainable.</p>",
    },
    {
      time: "11:15 – 11:45 ",

      title: "Technology Deep Dive Session ",
      description: "Enabling the Autonomous Enterprise ",
    },
    {
      time: "11:45 – 12:00  ",
      title: "Networking Break ",
      description: " ",
    },
    {
      time: "12:00 – 12:45 ",
      title: " Panel: AI × The Future of Work ",
      description: "Enterprise studies indicate that AI copilots can increase developer productivity by 20–55%. In enterprises, AI-assisted workflows are reducing handling time by up to 30%. Yet productivity gains raise deeper structural questions.\n <ul><li>Which decision layers move to AI?</li><li>What happens to middle management oversight?</li><li>How do you redesign accountability in AI-assisted workflows?</li><li>How do engineering organizations evolve when code is co-written by machines?</li></ul>\n This session moves beyond job displacement narratives and instead focuses on operating model redesign. As AI becomes embedded in daily enterprise workflows, leadership must redefine decision rights, governance boundaries, and human-machine collaboration frameworks.",
    },
    {
      time: "12:45 – 13:15 ",
      title: "CEO × CIO Leadership Dialogue ",
      description: "Enterprise AI transformation is no longer a technology conversation—it is a boardroom priority.\n Autonomous systems impact:<ul><li>Budget allocation</li><li>Risk exposure</li><li>Regulatory compliance</li><li>Talent models</li><li>Competitive positioning</li></ul>\n EOs are now asking: <p>“How much autonomy is acceptable?”</p><p>“What decisions should remain human?”</p><p>“How do we measure AI-driven enterprise performance?”</p>\n This high-impact dialogue brings strategic accountability into focus, examining how leadership teams align AI strategy with enterprise value creation.",
    },
    {
      time: "13:15 – 14:00 ",
      title: "Networking Lunch",
      description: "",
    },
    {
      time: "14:00 – 15:30 (Parallel Track) ",
      title: "Spotlight Parallel Tracks",
      description: "<strong>Track A: BFSI / FinTech</strong><p><strong>Autonomous Financial Systems</strong></p><br><p>Financial services institutions are among the most AI-intensive sectors globally.From fraud detection to credit risk modelling, AI systems process billions ofdata points daily.</p><p>However, regulatory scrutiny is intensifying.</p><p>According to global banking regulators, model risk management failures and algorithmic bias are emerging systemic risks. Meanwhile, AI adoption in fraud detection has shown detection improvements of 20–40%, yet integration with legacy core systems remains a bottleneck.</p> <p><strong>This track explores:</strong></p><ul><li>AI in regulated environments</li><li>Small language models for precision banking</li><li>Risk and compliance automation</li><li>Core banking modernization with AI layers</li><li>Auditability and governance in financial AI systems</li></ul><p>Autonomy in BFSI must balance innovation with accountability.</p><p><strong>Sessions may include:</strong></p><ul><li>Small Language Models in Regulated Banking</li><li>AI Risk & Compliance Automation</li><li>Core Banking + AI Architecture</li><li>Fraud, AML & AI Decision Engines</li></ul>\n <strong>Track B: Customer Experience</strong><p><strong>Autonomous Customer Platforms</strong></p><br>Customer experience is undergoing structural transformation. AI-powered agents are handling service interactions, generating dynamic content, and predicting customer intent in real time. <br> Studies show AI-driven contact centers can reduce operational costs by 25-30% while improving response time and personalization.<br><strong>Yet scaling AI in CX introduces challenges:</strong><ul><li>Data fragmentation</li><li>Omni-channel orchestration</li><li>Model bias</li><li>Measuring ROI across customer journeys</li></ul><br>This track focuses on building autonomous customer platforms that are measurable, secure, and scalable not experimental chatbots.<br><strong>Sessions may include:</strong><ul><li>Enterprise Conversational AI at Scale</li><li>AI Co-Workers in Contact Centers</li><li>Customer Data as AI Infrastructure</li><li>Measuring ROI in AI-Driven CX</li></ul>  \n <strong>Track C: Manufacturing / Digital Twins</strong><p><strong>Autonomous Industrial Systems</strong></p><br>Manufacturing is rapidly embracing AI-driven digital twins and predictive systems.<br>>Industry research shows predictive maintenance powered by AI can reduce downtime by up to 30% and maintenance costs by 10–20%. Digital twin adoption is accelerating in multi-plant enterprises to simulate operations and optimize throughput.<br><strong>However, industrial AI requires:</strong><ul><li>Edge computing integration</li><li>Secure IoT infrastructure</li><li>Cross-system interoperability</li><li>Operational resilience</li></ul><br>This track explores how enterprises are embedding AI directly into industrial control systems and supply chain orchestration to create autonomous production environments.<br><strong>Sessions may include:</strong><ul><li>Enterprise Digital Twin Architecture</li><li>Edge AI & Industrial IoT Integration</li><li>Predictive Maintenance at Scale</li><li>AI-driven Supply Chain Control Towers</li></ul> ",
    },
    {
      time: "15:30 – 15:45",
      title: "Executive Transition Break [Plenary] ",
      description: "",
    },
    {
      time: "15:45 – 16:15 [Enterprise Backbone Block] ",
      title: "Cyber Security in the Autonomous Enterprise ",
      description: "Defending the AI-Native Enterprise\n As enterprises embed AI into workflows, the attack surface expands.\n Emerging risks include:<ul><li>Model poisoning</li><li>Prompt injection attacks</li><li>Data leakage via LLMs</li><li>Autonomous system manipulation</li></ul>\n Security leaders report a significant increase in AI-related threat vectors over the past year.Protecting AI-native systems requires rethinking traditional cyber frameworks.\n This session examines how to design AI systems that are secure-by-architecture, not secure-by-addition.",
    },
    {
      time: "16:15 – 16:45 [Securing & Scaling the AI Core] ",
      title: "Data + AI Architecture ",
      description: "Turning Enterprise Data into Strategic Infrastructure \n AI performance is only as strong as its data foundation.\n Research consistently shows that over 60% of AI project failures are linked to poor data quality or fragmented data architecture. Enterprises are moving toward lakehouse models, unified data platforms, and interoperable stacks to enable scalable AI.\n This session explores:<ul><li>Open vs proprietary AI stacks</li><li>Lakehouse architecture</li><li>Model observability</li><li>Data governance frameworks</li><li>Infrastructure readiness for AI scale</li></ul>\n Because the autonomous enterprise is not powered by models alone—it is powered by data infrastructure. ",
    },
    {
      time: "16:45 – 17:15 ",
      title: "Cross Industry Power Conversation  ",
      description: "<strong>Engineering Competitive Advantage Through AI</strong>\n The competitive landscape is shifting. Enterprises that scale AI effectively are reporting faster decision cycles, improved operational efficiency, and enhanced customer personalization.\n But scaling autonomy requires:<ul><li>Strong governance</li><li>Engineering maturity</li><li>Economic discipline</li><li>Leadership alignment</li></ul>\n This closing conversation synthesizes the day’s insights and explores what separates AI adopters from AI leaders in the emerging autonomous economy.",
    },
    {
      time: "17:15 – 17:30 ",
      title: "Closing & End of the Summit  ",
      description: " Release of AI Enterprise Pulse 2026 ",
    },
    {
      time: "18:30 – 21:00 ",
      title: "Enterprise Leadership Dinner  ",
      description: "Invite-only. 40-60 CXOs. Closed-door. ",
    },
  ];
















  return (
    <section
      className="relative py-16 bg-gradient-to-b from-[#0c1a2a] to-[#203a56]"
      id="agenda"
      style={{ backgroundImage: `url(${higlitbanner})` }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Agenda
          </h2>
        </div>

        <div className="max-w-7xl mx-auto divide-y divide-gray-200 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
          {agendaData.map((item, index) => {
            const hasDescription = item.description?.trim();
            const isParallelTracks =
              item.title === "Spotlight Parallel Tracks";
            const isActive = activeIndex === index;
            const isOpen = isParallelTracks || isActive;

            return (
              <div
                key={index}
                className="py-6 border-none"
                onClick={() =>
                  hasDescription &&
                  !isParallelTracks &&
                  toggleDescription(index)
                }
              >
                <div className="flex gap-6 flex-col md:flex-row">
                  <div className="md:w-1/4">
                    <p className="text-lg font-semibold text-white">
                      {item.time}
                    </p>
                  </div>

                  <div className="md:w-3/4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      {/* Toggle only for non-parallel items */}
                      {hasDescription && !isParallelTracks && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDescription(index);
                          }}
                        >
                          {isActive ? (
                            <Minus className="w-5 h-5 text-white" />
                          ) : (
                            <Plus className="w-5 h-5 text-white" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Description */}
                    <div
                      className={`transition-all duration-500 overflow-hidden ${isOpen
                          ? "max-h-[2000px] opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                        }`}
                    >
                      {isParallelTracks ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {item.description.split("\n").map((track, i) => (
                            <div
                              key={i}
                              className="bg-white/10 border border-white/20 rounded-xl p-4 flex flex-col justify-between"
                            >
                             <div
                              className="text-white text-sm leading-relaxed mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1"
                              dangerouslySetInnerHTML={{
                                __html: track.replace(/^Track [A-C]:/, "<strong>$&</strong>")
                              }}
                            ></div>


                              {/* {i === 2 && (
                                <div className="mt-auto">
                                  <p className="text-white/70 text-xs mb-2">
                                    Sponsored by:
                                  </p>
                                  <img
                                    src={adobelogo}
                                    alt="Adobe"
                                    className="h-8 object-contain"
                                  />
                                </div>
                              )} */}

                            </div>
                          ))}
                        </div>
                      ) : (
                        item.description
                          ?.split("\n")
                          .map((para, i) => (
                            // <p
                            //   key={i}
                            //   className="text-white text-base leading-relaxed mb-3"
                            // >
                            //   {para}
                            // </p>
                            <div
                              key={i}
                              className="text-white text-base leading-relaxed mb-4"
                            >
                              {(() => {
                                const content = para || "";

                                // Matches
                                const moderatorMatch = content.match(
                                  /Moderator:(.*?)(Panelists:|Speaker:|Speakers:|$)/
                                );

                                const panelistsMatch = content.match(
                                  /Panelists:(.*?)(Speaker:|Speakers:|$)/
                                );

                                const speakersMatch = content.match(
                                  /(Speaker|Speakers):(.*)$/
                                );

                                // Clean description (remove all role-based lines)
                                const descriptionText = content
                                  .replace(/(Moderator|Panelists|Speaker|Speakers):.*$/s, "")
                                  .trim();

                                // Extract values
                                const moderatorText = moderatorMatch
                                  ? moderatorMatch[1].trim()
                                  : "";

                                const panelistsText = panelistsMatch
                                  ? panelistsMatch[1]
                                      .split("·")
                                      .map(p => p.trim())
                                      .filter(Boolean)
                                  : [];

                                const speakerLabel = speakersMatch
                                  ? speakersMatch[1] // Speaker OR Speakers
                                  : "";

                                const speakersText = speakersMatch
                                  ? speakersMatch[2]
                                      .split("·")
                                      .map(s => s.trim())
                                      .filter(Boolean)
                                  : [];

                                return (
                                  <>
                                    {/* Description */}
                                    {descriptionText && (
                                      <div
                                        className="mb-4 text-white [&_ul]:list-disc [&_ul]:pl-6 "
                                        dangerouslySetInnerHTML={{ __html: descriptionText }}
                                      ></div>

                                    )}

                                    {/* Moderator */}
                                    {moderatorText && (
                                      <div className="mb-4">
                                        <p className="font-semibold mb-1">Moderator:</p>
                                        <p>{moderatorText}</p>
                                      </div>
                                    )}

                                    {/* Panelists */}
                                    {panelistsText.length > 0 && (
                                      <div className="mb-4">
                                        <p className="font-semibold mb-2">Panelists:</p>
                                        <ul className="list-disc list-inside space-y-1">
                                          {panelistsText.map((p, idx) => (
                                            <li key={idx}>{p}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {/* Speaker / Speakers (label preserved exactly) */}
                                    {speakersText.length > 0 && (
                                      <div>
                                        <p className="font-semibold mb-2">
                                          {speakerLabel}:
                                        </p>
                                        <ul className="list-disc list-inside space-y-1">
                                          {speakersText.map((s, idx) => (
                                            <li key={idx}>{s}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </>
                                );
                              })()}
                            </div>


                          ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgendaNew;
