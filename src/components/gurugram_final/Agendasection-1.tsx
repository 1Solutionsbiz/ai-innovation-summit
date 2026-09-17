import { useState } from "react";

// ---------- Types ----------
type Speaker = {
  name: string;
  role: string; // can include \n for multi-line via array below instead
  roleLines?: string[]; // optional multi-line role/company breakup
  image: string;
};

type DescriptionBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

type AgendaItem = {
  time: string;
  title: string;
  description?: string | DescriptionBlock[];
  speakers?: Speaker[];
  isTrack?: boolean;
};

type DescriptionParts = {
  summary: string;
  details: DescriptionBlock[];
};

type Track = {
  id: string;
  label: string;
  items: AgendaItem[];
};

type DayData = {
  id: string;
  label: string;
  tracks: Track[];
};

const getDescriptionBlocks = (
  description: string | DescriptionBlock[],
): DescriptionBlock[] => {
  if (Array.isArray(description)) return description;

  return description
    .replace(/\\n/g, "\n")
    .split(/\n+/)
    .flatMap((paragraph) => {
      const parts = paragraph
        .split(/\s+-\s+/)
        .map((part) => part.trim())
        .filter(Boolean);

      if (parts.length <= 1) {
        return [{ type: "paragraph", text: paragraph.trim() }];
      }

      return [
        { type: "paragraph", text: parts[0] },
        { type: "list", items: parts.slice(1) },
      ];
    });
};

const getDescriptionParts = (
  description: string | DescriptionBlock[],
): DescriptionParts => {
  const blocks = getDescriptionBlocks(description);
  const firstParagraph = blocks.find((block) => block.type === "paragraph");

  if (!firstParagraph || firstParagraph.type !== "paragraph") {
    return { summary: "", details: blocks };
  }

  const sentenceMatch = firstParagraph.text.match(/^(.+?[.!?])(?:\s|$)/);
  const summary = sentenceMatch?.[1] ?? firstParagraph.text;
  const remainingText = firstParagraph.text.slice(summary.length).trim();
  const details = [
    ...(remainingText ? [{ type: "paragraph" as const, text: remainingText }] : []),
    ...blocks.slice(blocks.indexOf(firstParagraph) + 1),
  ];

  return { summary, details };
};

type AgendaGroup = {
  time: string;
  items: AgendaItem[];
};

const normalizeTime = (time: string) =>
  time.trim().replace(/\s+/g, " ").replace(/\s*[-–—]\s*/g, "-");

const getAgendaGroups = (items: AgendaItem[]): AgendaGroup[] =>
  items.reduce<AgendaGroup[]>((groups, item) => {
    const lastGroup = groups[groups.length - 1];
    const normalizedTime = normalizeTime(item.time);

    if (
      lastGroup &&
      normalizeTime(lastGroup.time) === normalizedTime &&
      Boolean(lastGroup.items[0].isTrack) === Boolean(item.isTrack)
    ) {
      lastGroup.items.push(item);
      return groups;
    }

    groups.push({ time: item.time, items: [item] });
    return groups;
  }, []);

// ---------- Sample data (swap with real data) ----------
const AGENDA_DATA: DayData[] = [
  {
    id: "day1",
    label: "Day 1",
    tracks: [
      {
        id: "Detailed-Agenda",
        label: "Detailed Agenda",
        items: [
          {
            time: "08:30 AM - 09:15 AM",
            title: "Registration & Networking Breakfast ",
            description: "Delegates arrive and collect registration kits. Lucky Draw QR codes active. Engagement Zone open in pre-function area. Sponsor booths open. ",
            speakers: [
              {
                name: "Charu Lamba",
                role: "Deputy Editor",
                roleLines: ["Deputy", "Editor", "ETRetail"],
                image: "/speakers/charu-lamba.jpg",
              },
            ],
          },
          {
            time: "09:15 AM - 09:20 AM",
            title: "Welcome Address",
            description: "Welcome note by The Guild and Guild Live. Context setting for the day. ",
          },
          {
            time: "9:20 AM - 9:40 AM",
            title: "Opening Keynote From Assistance to Autonomy: The Enterprise AI Mandate for 2026",
            description: "hat enterprise AI leadership actually looks like when the boardroom demands ROI, the regulators demand governance, and the technology moves faster than either can keep up with. - Where enterprise AI stands in India in 2026, the state of the union across sectors - Why the shift from AI assistance to AI autonomy is not a technology decision, but a leadership decision - The structural choices, architectural, economic, cultural, that separate AI deployments that endure from those that stall - What the intelligent enterprise looks like from the inside ",
          },
          {
            time: "09:40 AM- 09:55 AM",
            title: "Partner Keynote Address",
          },
          {
            time: "09:55 AM - 10:10 AM",
            title: "Partner Keynote Address",
          },
          {
            time: "10:10 AM – 10:25 AM ",
            title: "Inaugural / Dignitary Address ",
          },
          {
            time: "10:25 AM – 10:45 AM ",
            title: "Tea & Coffee Break",
            description: "Sponsor booths and engagement zone. ",
          },
          {
            time: "10:45 AM – 11:30 AM ",
            title: "Session 1: Leadership Panel The Technology Mandate: Scaling AI Where the Board Is Watching ",
            description:"The role of Technology CXOs has been permanently rewritten. From technology custodians to enterprise intelligence architects. Accountable to boards for AI ROI. Accountable to regulators for AI governance. Accountable to the workforce for how AI reshapes their jobs. This panel brings together India's most senior Tech-CXOs from manufacturing, BFSI, pharma, FMCG, and cross-industry enterprises for a frank conversation on how they are navigating the most consequential mandate transformation in a generation. - Turning AI investment into a board-level ROI narrative, with the same rigour as capital expenditure - AI FinOps: governing GPU costs, model lifecycle, and cloud AI infrastructure at enterprise scale - Solving legacy integration, architectural debt, and vendor lock-in without slowing the roadmap - Redrawing accountability lines across the technology leadership bench as AI ownership fragments across the C-suite - Making the case internally for the intelligent enterprise operating model, and the structural decisions it demands from the top of the tech org - Leading the workforce through the shift from AI as a tool to AI as a colleague, and owning the trust, capability, and culture that shift requires . ",
          },
          {
            time: "11:30 AM – 11:40 AM  ",
            title: "Partner Keynote Address",
          },
          {
            time: "11:40 AM – 12:25 PM ",
            title: " Session 2:Agents at Work: From Pilot to Production",
            description:"Agentic AI is the most consequential shift in enterprise technology since cloud. The question in 2026 is no longer what it can do, it is whether enterprises have the architecture, governance, and leadership conviction to let it run. This session brings together India's most senior AI and technology leaders from across industries for the most execution-focused conversation of the day. - 100% of enterprises plan to expand agentic AI in 2026, yet 88% of agent pilots never reach production. What separates the 12% that do - Multi-agent orchestration, agent memory, human-in-the-loop design, the engineering disciplines that make autonomous AI production-grade - Who owns agentic AI inside the enterprise, and why the fragmented ownership question is the single biggest governance gap in Indian companies today - Use cases moving into production across sectors: autonomous quality inspection, agentic customer service, AI-driven procurement, real-time fraud response, predictive supply chain orchestration - The measurement problem: proving agentic AI ROI when the value shows up in cycle time, error rate, and workforce leverage rather than direct revenue - The leadership shift: building the internal conviction, cross-functional alignment, and workforce readiness that separates enterprises that let agents run from enterprises that keep them on a leash ",
          },
          {
            time: "12:25 PM – 12:55 PM ",
            title: "Session 3: Fireside Chat The CEO x CIO Dialogue: When the Machine Takes the Wheel",
            description:"The most honest conversation of the day. A CEO and a CIO, unscripted, sitting across from each other, on what building an autonomous enterprise actually feels like from the inside. The governance moments that tested everything. The board conversations that changed the mandate. The architectural bets that defined where the enterprise stands today. - How the CEO-CIO relationship permanently changes when AI systems make decisions that used to require a committee - Governing AI that moves faster than your audit cycle, and what happens when it does not - The uncomfortable moment most enterprises discover they are not as AI-ready as they thought - The one structural decision each leader would reverse, knowing everything they now know  ",
          },
          {
            time: "12:55 PM – 01:40 PM",
            title: "Session 4: Data as Destiny: Building the Foundation Autonomous AI Runs On ",
            description:"The most sophisticated AI model cannot outperform the data that feeds it. This panel brings together India's most senior data and AI leaders from across the country's most data-intensive sectors for a session on what it actually takes to build data infrastructure that can carry the weight of autonomous AI. - Lakehouse architectures, federated data platforms, and unified data fabrics, the infrastructure replacing legacy warehouses - The India Stack advantage: how DPI, Account Aggregator, and ONDC are reshaping enterprise data availability - Data governance as competitive advantage: how the enterprises that govern data well are deploying AI faster and with more confidence - Model observability, data lineage, and explainability, now demanded simultaneously by boards, regulators, and enterprise risk teams - Data readiness in capital-intensive sectors: the shift from operational data systems (MES, SCADA, ERP) to AI-ready infrastructure across manufacturing, pharma, and supply chains - Building the data culture: how enterprises are moving data ownership out of a siloed function and into a shared, cross-functional responsibility that scales with autonomous AI ",
          },
          {
            time: "01:40 PM – 02:20 PM  ",
            title: "Networking Lunch",
            description:"Open networking. Sponsor exhibition and engagement zone active. ",
          },
          {
            time: "02:20 PM– 03:35 PM ",
            title: "Track 1: AI Security Security • Governance • Trust The Trust Layer: Securing, Governing, and Scaling AI Enterprises Can Actually Rely On",
            isTrack: true,
            description:"The dedicated AI security, governance, and trust track, where the enterprises deploying AI at scale are being forced to confront a hard truth: innovation without trust does not survive contact with the boardroom, the regulator, or the customer. This track brings together India's most senior CISOs, Heads of AI Governance, Chief Risk Officers, and security architects for a practitioner-level deep dive on what it takes to make enterprise AI safe, defensible, and durable in 2026. - Agent access is the new privileged access: fewer than half of CISOs can confidently say where their AI agents are, what they can access, or what actions they are authorised to take. Closing this gap is the single biggest identity mandate of 2026 - Shadow AI at scale: 29% of employees are already using unsanctioned AI agents. How security teams are building AI inventories that extend beyond applications to models, datasets, APIs, agents, and vector databases - Governance frameworks that actually work: moving from principle-based responsible AI to enforceable, runtime guardrails, continuous red-teaming, and adversarial testing embedded into the deployment pipeline - The dual-clock compliance reality: CERT-In's 6-hour reporting window, the DPDP Act's 72-hour notification requirement, and sector-specific mandates from RBI, IRDAI, and SEBI, all running on parallel clocks - Board alignment on AI risk: only 31% of CISOs feel fully aligned with their board on acceptable AI risk. What it takes to move the boardroom from viewing AI security as a compliance checkbox to a business enabler - Building the trust infrastructure: AI-specific audit trails, model access governance, zero-trust for autonomous agents, and the crypto-agility decisions that cannot wait for quantum to arrive ",
          },
          {
            time: "02:20 PM – 03:35 PM ",
            title: "Track 2: Autonomous Industry Manufacturing • Robotics • Industrial AI The Autonomous Factory: Where Agentic AI, Robotics, and Industrial Intelligence Are Rewriting How India Makes Things ",
            isTrack: true,
            description:"The dedicated autonomous industry track, and the most operationally grounded conversation of the day. India's manufacturing sector is undergoing its most consequential transformation in a generation, moving from cost-led production to intelligence-led manufacturing. Agentic AI, advanced robotics, digital twins, and industrial IoT are converging to create factories where machines negotiate, plan, and execute autonomously. This track brings together senior technology, AI, engineering, and operations leaders from automotive, heavy industry, pharma manufacturing, FMCG production, and industrial automation. - From automation to autonomy: the shift from pre-programmed assembly lines to intelligent cells where autonomous agents (robots and software alike) handle high-mix, low-volume production without extensive retooling - Physical AI on the factory floor: how cloud robotics, software-defined automation, and Physical AI are moving industrial systems from hardware-fixed to software-flexible, enabling continuous production optimisation - Predictive maintenance and quality inspection at scale: the two use cases delivering the fastest ROI on Indian factory floors, and what separates production deployments from long-running pilots - Digital twins as live operational intelligence: the shift from engineering simulation to real-time factory brains that self-optimise across energy, output, and quality - AI-driven supply chain orchestration: from raw material forecasting to autonomous procurement to real-time logistics, with agents that negotiate across tiers of suppliers - PLI-scheme readiness: how AI-driven process control is separating PLI winners from the rest in electronics, semiconductors, and precision manufacturing - The workforce shift: what happens on the plant floor when AI takes the repetitive decisions, and how manufacturing leaders are managing the human side of autonomous operations ",
          },
          {
            time: "02:20 PM – 03:35 PM ",
            title: "Track 3: Enterprise AI in Action Agents • Automation • Enterprise Applications Agents in Production: How Enterprise AI Is Rewiring Work, Not Just Augmenting It ",
            isTrack: true,
            description:"The dedicated enterprise AI in action track, where the theoretical becomes the operational. 79% of enterprises say AI agents are already being adopted; 66% report measurable productivity gains. Yet 88% of agent pilots never reach production. This track brings together the enterprise technology, AI, and business leaders who have crossed that gap, deploying agents that are actually shipping work across customer service, finance, procurement, engineering, and internal operations. Practical, in-production, with real ROI data. - The proven ROI zones: where enterprise agents are delivering measurable value today, customer service, finance and receivables, document processing, engineering copilots, and internal helpdesks, and why these categories clear the business case fastest in the Indian cost structure - Multi-agent orchestration in production: 22% of production deployments now coordinate three or more agents. What the architecture, memory, and hand-off patterns look like when it works at enterprise scale - The observability mandate: why deploying an agent without observability is like running a production database without monitoring, and the tracing, cost, quality, and human-feedback stack enterprises are standardising on - From workflow to agent-native design: why the enterprises winning in 2026 are redesigning business processes around agent capabilities rather than layering AI on top of legacy workflows - The measurement problem: proving agentic AI ROI when the value shows up in cycle time, error rate, and workforce leverage rather than direct revenue, and how CFOs are being brought along - Enterprise-grade agent platforms: Salesforce Agentforce, ServiceNow, Microsoft Copilot Studio, SAP Business AI at the application layer; AWS Bedrock, Google Vertex, Azure AI Foundry at the infrastructure layer, how enterprises are choosing between them - Governance before scale: why only 34% of enterprises have AI-specific security controls, and how the leaders are building agent registries, least-privilege credentials, and human-in-the-loop thresholds into every workflow from day one ",
          },
          {
            time: "03:35 PM – 03:50 PM ",
            title: "Transition Break",
            description:"Delegates reconvene in main ballroom for afternoon plenary sessions.",
          },
          {
            time: "03:50 PM – 04:00 PM ",
            title: "Partner Keynote Address",
          },
          {
            time: "04:00 PM – 04:45 PM ",
            title: "Session 5: Securing the Autonomous Enterprise: When AI Becomes the Attack Surface",
            description:"As AI agents move from assistants to autonomous actors across enterprise workflows, the attack surface expands in ways traditional security architecture was not built to handle. Simultaneously, AI-native security is becoming the only viable defence against AI-powered adversaries. India's most senior CISOs across sectors. - Live threats, not theoretical: model poisoning, prompt injection, adversarial inputs, shadow AI, and data exfiltration through LLMs - In manufacturing and industrial: securing OT/IT convergence when the connected factory becomes an AI attack surface - AI-native threat detection and autonomous incident response, matching the speed of AI-powered adversaries without losing human oversight - Zero-trust architectures for AI agents, model access governance, and AI-specific audit trails, the new CISO mandate - Gartner predicts $5 billion in AI compliance investment by 2027, the CISOs in this room are deciding today where and how that investment gets made ",
          },
          {
            time: "04:45 PM – 05:30 PM ",
            title: "Session 6: Cross-Industry Power Conversation From Assistance to Autonomy: What India's Enterprise AI Leaders Are Building Next",
            description:"The closing session of the 8th Edition, and the most forward-looking. Leaders from manufacturing, BFSI, healthcare, FMCG, and retail in one room for a candid conversation that converges the day's insights into a declaration. - Where is the real frontier of enterprise AI in India in 2026, and which sectors and organisations are closest to it? - What does the gap between AI ambition and AI architecture feel like from the inside, right now, in the room? - If every leader here could make one structural AI decision tomorrow with full benefit of hindsight, what would it be? - What is the collective responsibility of the leaders in this room, as the people defining how India's enterprises think about, deploy, govern, and trust AI?" 
          },
          {
            time: "05:30 PM – 05:45 PM",
            title: "Closing Address & Vote of Thanks",
            description:"Closing address by The Guild and Guild Live. Acknowledgement of partners, speakers, and delegates. Lucky Draw prize reveal. Engagement Zone top winners announced.",
          },
          {
            time: "05:45 PM onwards",
            title: "Hi-Tea & Networking",
            description:"Open networking. Delegates collect attendee gift on submission of feedback form.",
          },
          {
            time: "Evening — By Invitation Only",
            title: "AI Leadership Exchange | Gala Dinner",
            description:"An exclusive CXO sundowner for a select group of technology leaders. Cocktails, keynote, fireside conversation, and a chef-curated dining experience. Brought to you by The Guild & Guild Live",
          },
          
        ]
      },
      // {
      //   id: "Detailed-Agenda-2",
      //   label: "Detailed Agenda 2",
      //   items: [
      //     {
      //       time: "Time",
      //       title: "Soon",
      //     },
      //   ],
      // },
    ],
  },
  // {
  //   id: "day2",
  //   label: "Day 2",
  //   tracks: [
  //     {
  //       id: "day2-track",
  //       label: "Main Stage",
  //       items: [
  //         {
  //           time: "10:00 AM - 10:15 AM",
  //           title: "Day 2 Welcome",
  //         },
  //       ],
  //     },
  //   ],
  // },
];

// ---------- Component ----------
const AgendaSection = () => {
  const [activeDayId, setActiveDayId] = useState(AGENDA_DATA[0].id);
  const activeDay = AGENDA_DATA.find((d) => d.id === activeDayId) ?? AGENDA_DATA[0];

  const [activeTrackId, setActiveTrackId] = useState(activeDay.tracks[0].id);
  const activeTrack =
    activeDay.tracks.find((t) => t.id === activeTrackId) ?? activeDay.tracks[0];
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const handleDayChange = (dayId: string) => {
    setActiveDayId(dayId);
    const newDay = AGENDA_DATA.find((d) => d.id === dayId);
    if (newDay) setActiveTrackId(newDay.tracks[0].id);
  };

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-[1080px] mx-auto">
        {/* Heading */}
        <h2 className="mt-10 text-center text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
          <span className="agendatitle">Agenda</span>
        </h2>

        {/* Day tabs */}
        {/* <div className="mt-10 flex justify-center gap-10">
          {AGENDA_DATA.map((day) => (
            <button
              key={day.id}
              onClick={() => handleDayChange(day.id)}
              className={`pb-2 text-lg font-semibold transition-colors border-b-2 ${
                activeDayId === day.id
                  ? "text-fuchsia-500 border-fuchsia-500"
                  : "text-white/30 border-transparent hover:text-white/50"
              }`}
            >
              {day.label}
            </button>
          ))}
        </div> */}

        {/* Track pills */}
        <div className="mt-10 flex justify-center">
          <div className="flex max-w-full overflow-x-auto rounded-full bg-white/10 p-1">
            {activeDay.tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => setActiveTrackId(track.id)}
                className={`whitespace-nowrap rounded-full px-4 py-3 text-sm font-semibold transition-colors sm:px-6 ${
                  activeTrackId === track.id
                    ? "bg-color text-white"
                    : "text-white/60 hover:text-white/80"
                }`}
              >
                {track.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-14">
          {getAgendaGroups(activeTrack.items).map((group, idx) => (
            <div
              key={idx}
              className="grid min-w-0 grid-cols-[78px_minmax(0,1fr)] gap-x-3 border-t border-white/15 py-8 first:border-t-0 sm:gap-x-6 md:grid-cols-[auto_minmax(0,1fr)] md:gap-x-10"
            >
              {/* Time column */}
              <div className="w-[78px] pt-1 text-sm font-semibold text-white sm:w-[110px] md:w-[190px] md:text-base">
                {group.time}
              </div>

              {/* Content column */}
              <div
                className={`min-w-0 border-l-2 border-fuchsia-600 pl-3 sm:pl-5 md:pl-8 ${
                  group.items.length > 1
                    ? "grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6"
                    : ""
                }`}
              >
                {group.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className={`min-w-0 ${
                      item.isTrack
                        ? "rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/5 p-4"
                        : ""
                    }`}
                  >
                    <h3 className="break-words text-base font-bold text-white md:text-lg">
                      {item.title}
                    </h3>

                    {item.description && (
                      (() => {
                        const descriptionParts = getDescriptionParts(item.description);
                        const itemKey = `${idx}-${itemIdx}`;
                        const isExpanded = Boolean(expandedItems[itemKey]);

                        return (
                          <div className="mt-2 max-w-3xl break-words text-sm leading-relaxed text-white/65">
                            {descriptionParts.summary && <p>{descriptionParts.summary}</p>}

                            {descriptionParts.details.length > 0 && (
                              <>
                                <button
                                  type="button"
                                  onClick={() =>
                                    setExpandedItems((current) => ({
                                      ...current,
                                      [itemKey]: !current[itemKey],
                                    }))
                                  }
                                  className="mt-3 font-semibold text-fuchsia-300 transition-colors hover:text-fuchsia-200"
                                  aria-expanded={isExpanded}
                                >
                                  {isExpanded ? "Read Less" : "Read More"}
                                </button>

                                {isExpanded && (
                                  <div className="mt-3 space-y-4">
                                    {descriptionParts.details.map((block, blockIdx) =>
                                      block.type === "paragraph" ? (
                                        <p key={blockIdx}>{block.text}</p>
                                      ) : (
                                        <ul key={blockIdx} className="list-disc space-y-2 pl-5">
                                          {block.items.map((itemText, detailIdx) => (
                                            <li key={detailIdx}>{itemText}</li>
                                          ))}
                                        </ul>
                                      ),
                                    )}
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        );
                      })()
                    )}

                    {item.speakers && item.speakers.length > 0 && (
                      <div className="mt-4 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                        {item.speakers.map((speaker, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-3">
                            <img
                              src={speaker.image}
                              alt={speaker.name}
                              className="w-12 h-12 rounded-md object-cover flex-shrink-0 bg-white/10"
                            />
                            <div className="text-sm">
                              <p className="text-white font-semibold">{speaker.name}</p>
                              {(speaker.roleLines ?? [speaker.role]).map((line, lIdx) => (
                                <p key={lIdx} className="text-white/60 leading-tight">
                                  {line}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;