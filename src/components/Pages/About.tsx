
import React from "react";

const AboutUs = () => {
  return (
    <section className="zindex2 w-full bg-white py-32 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* About AI Innovation Summit */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            About AI Innovation Summit
          </h2>

          <h3 className="text-xl md:text-2xl font-semibold mb-5 text-gray-800">
            Bringing Enterprise AI and Business Innovation Together
          </h3>

          <p className="text-gray-700 leading-8 mb-4">
            Artificial Intelligence is transforming how businesses operate,
            compete and grow. From Generative AI and intelligent automation to
            predictive analytics and enterprise-wide AI adoption, organisations
            are increasingly exploring new ways to integrate AI into their
            business strategies.
          </p>

          <p className="text-gray-700 leading-8 mb-4">
            AI Innovation Summit is a platform dedicated to bringing together
            technology leaders, business decision-makers, AI experts and
            industry innovators to explore the evolving landscape of Artificial
            Intelligence.
          </p>

          <p className="text-gray-700 leading-8 mb-4">
            As an emerging destination for enterprise AI conversations, the
            summit aims to bridge the gap between technological innovation and
            real-world business applications. It creates opportunities for
            meaningful discussions, knowledge exchange and collaboration around
            the technologies shaping the future of businesses.
          </p>

          <p className="text-gray-700 leading-8">
            Positioned within the growing landscape of{" "}
            <a
              href="https://www.aiinnovationsummit.in/"
              className="text-blue-700 hover:underline font-medium"
            >
              AI Events in India
            </a>
            , AI Innovation Summit brings enterprise perspectives, industry
            insights and practical discussions to the forefront of India's AI
            ecosystem.
          </p>
        </div>

        {/* By the Numbers */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            AI Innovation Summit: By the Numbers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { number: "700+", label: "Enterprise Leaders" },
              { number: "2,100+", label: "Registrations" },
              { number: "40+", label: "Thought Leaders" },
              { number: "400+", label: "Industry Experts" },
              { number: "8+", label: "Strategic Sessions" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {item.number}
                </h3>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-8 mt-5">
            These milestones reflect the growing interest in enterprise AI and
            the importance of creating platforms where industry leaders can
            learn, connect and collaborate.
          </p>
        </div>

        {/* India's AI Landscape */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-900">
            India's Growing AI Landscape
          </h2>

          <p className="text-gray-700 leading-8 mb-4">
            India is emerging as a major player in artificial intelligence,
            with growing enterprise adoption, investment and AI talent.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-7">
            <li><strong>87%</strong> of enterprises actively use AI solutions.</li>
            <li><strong>3rd</strong> in Stanford University's 2025 Global AI Vibrancy Ranking.</li>
            <li><strong>6 million+</strong> people employed in India's technology and AI ecosystem.</li>
          </ul>

          <p className="text-gray-700 leading-8 mt-5 mb-4">
            As Artificial Intelligence becomes an important part of business
            strategy, organisations are looking beyond experimentation towards
            practical implementation, responsible adoption and enterprise-wide
            transformation.
          </p>

          <p className="text-gray-700 leading-8">
            AI Innovation Summit aims to support these conversations by
            bringing together the leaders, experts and organisations driving
            this change.
          </p>
        </div>

        {/* Vision */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-900">
            Our Vision
          </h2>

          <p className="text-gray-700 leading-8 mb-4">
            To create a connected ecosystem where enterprise leaders,
            technology innovators and industry experts can exchange ideas,
            explore emerging technologies and accelerate meaningful AI
            adoption.
          </p>

          <p className="text-gray-700 leading-8">
            We envision a future where Artificial Intelligence becomes a
            strategic driver of business transformation, operational
            efficiency, innovation and sustainable growth across industries.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-900">
            Our Mission
          </h2>

          <p className="text-gray-700 leading-8 mb-4">
            Our mission is to make enterprise AI conversations more practical,
            collaborative and outcome-driven.
          </p>

          <p className="text-gray-700 leading-8 mb-3">We aim to:</p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-7">
            <li>Connect enterprise technology leaders with AI innovators, solution providers and industry experts.</li>
            <li>Encourage discussions around real-world AI applications, challenges and opportunities.</li>
            <li>Explore how organisations can move beyond AI experimentation towards scalable enterprise adoption.</li>
            <li>Highlight emerging technologies, including Generative AI, Agentic AI, intelligent automation and advanced analytics.</li>
            <li>Create opportunities for strategic partnerships, business networking and technology collaboration.</li>
            <li>Support organisations in understanding the business impact of AI adoption.</li>
          </ul>
        </div>

        {/* Who Should Attend */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-900">
            Who Should Attend?
          </h2>

          <p className="text-gray-700 leading-8 mb-4">
            AI Innovation Summit brings together senior decision-makers,
            including CIOs, CTOs, CDOs, CISOs and CAIOs, along with business
            leaders and technology professionals.
          </p>

          <p className="text-gray-700 leading-8">
            Discussions cover AI applications and challenges across automotive,
            BFSI, manufacturing, healthcare and other industries.
          </p>
        </div>

        {/* Industries */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-900">
            Exploring AI Across Industries
          </h2>

          <p className="text-gray-700 leading-8 mb-5">
            Artificial Intelligence is no longer limited to the technology
            sector. Its applications are expanding across traditional
            industries, creating new opportunities for efficiency, innovation
            and business growth.
          </p>

          <p className="text-gray-700 leading-8 mb-3">
            AI Business Summit explores the role of AI across key industry
            verticals, including:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-7">
            <li><strong>Automotive:</strong> AI-powered manufacturing, autonomous technologies, predictive maintenance and connected mobility.</li>
            <li><strong>Banking, Financial Services and Insurance (BFSI):</strong> Fraud detection, intelligent risk assessment, financial automation and customer intelligence.</li>
            <li><strong>Manufacturing:</strong> Smart factories, industrial automation, predictive analytics and AI-driven quality control.</li>
            <li><strong>Healthcare:</strong> AI-assisted diagnostics, healthcare analytics, intelligent patient management and medical innovation.</li>
            <li><strong>Technology:</strong> Enterprise AI infrastructure, Generative AI, Agentic AI, cloud computing and next-generation digital solutions.</li>
          </ul>

          <p className="text-gray-700 leading-8 mt-5">
            These industry-focused conversations help organisations
            understand how AI can address sector-specific challenges and
            unlock new business opportunities.
          </p>
        </div>

        {/* Why Attend */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-900">
            Why Be Part of the AI Innovation Summit?
          </h2>

          <p className="text-gray-700 leading-8 mb-5">
            As organisations move from AI experimentation to enterprise-wide
            implementation, the need for practical knowledge, strategic
            direction and industry collaboration continues to grow.
          </p>

          <p className="text-gray-700 leading-8 mb-3">
            AI Innovation Summit aims to create an environment where
            participants can:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-7">
            <li><strong>Discover Emerging Technologies:</strong> Understand the latest developments in Artificial Intelligence and enterprise technology.</li>
            <li><strong>Gain Industry Insights:</strong> Learn how organisations across sectors are approaching AI adoption and business transformation.</li>
            <li><strong>Connect with Decision-Makers:</strong> Engage with CIOs, CTOs, CDOs, CISOs, CAIOs and senior business leaders.</li>
            <li><strong>Explore Business Opportunities:</strong> Discover AI solutions, technology partnerships and potential collaborations.</li>
            <li><strong>Understand Enterprise Challenges:</strong> Discuss AI governance, data security, infrastructure, implementation and scalability.</li>
            <li><strong>Build Strategic Relationships:</strong> Connect with technology providers, enterprise buyers, innovators and industry stakeholders.</li>
          </ul>
        </div>

        {/* Sponsors */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-900">
            Opportunities for Sponsors and Technology Partners
          </h2>

          <p className="text-gray-700 leading-8 mb-4">
            AI Innovation Summit also provides opportunities for organisations
            operating in the enterprise technology and AI ecosystem to connect
            with relevant business audiences.
          </p>

          <p className="text-gray-700 leading-8 mb-4">
            For AI companies, technology providers, consulting firms and
            enterprise solution vendors, the summit offers a platform to
            explore brand visibility, industry engagement and business
            networking opportunities.
          </p>

          <p className="text-gray-700 leading-8 mb-3">
            Organisations interested in AI Conference Sponsorship in India can
            explore opportunities to:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-7">
            <li>Showcase AI products, platforms and enterprise solutions.</li>
            <li>Connect with senior technology and business decision-makers.</li>
            <li>Build relationships with potential enterprise customers and partners.</li>
            <li>Strengthen brand positioning within India's growing AI ecosystem.</li>
            <li>Participate in conversations around enterprise AI innovation and digital transformation.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="border-t border-gray-200 pt-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-900">
            Be Part of the AI Conversation
          </h2>

          <p className="text-gray-700 leading-8 mb-4">
            Artificial Intelligence is shaping the next phase of enterprise
            innovation. As businesses continue to explore its potential,
            collaboration between technology leaders, industry experts and
            solution providers will play an important role in determining how
            AI creates real business value.
          </p>

          <p className="text-gray-700 leading-8 mb-4">
            AI Innovation Summit aims to be part of this journey by bringing
            together the people, ideas and technologies driving the future of
            enterprise AI.
          </p>

          <p className="text-gray-700 leading-8 mb-6">
            Whether you are a technology leader, business decision-maker, AI
            innovator or organisation exploring new business opportunities, be
            part of the conversation shaping the future of Artificial
            Intelligence.
          </p>

          <p className="text-xl font-bold text-gray-900 mb-7">
            Explore. Connect. Innovate. Transform.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.aiinnovationsummit.in/#delhincrregistrationform"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              Register
            </a>

            <a
              href="https://www.aiinnovationsummit.in/partner-form"
              className="inline-block border border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Become a Partner
            </a>

            <a
              href="mailto:guildconferences@guildlive.com"
              className="inline-block border border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
