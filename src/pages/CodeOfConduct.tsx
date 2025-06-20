import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import React, { useEffect } from 'react';

const CodeOfConduct: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  
  const socialLinks = {
    linkedin: "https://www.linkedin.com/showcase/guild-ai-innovation-summit/about/?viewAsMember=true",
  };

  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen flex flex-col">
      <Header
        isRegistrationActive={false}
        registrationButtonName="Registration Closed"
        disabledButtonName="Register Now"
      />

      <main className="flex-grow p-6 max-w-4xl mx-auto my-[150px]">
        <h2 className="text-3xl font-bold mb-6 font-orbitron text-center">Guild Live - Code of Conduct</h2>

        <section className="space-y-6 text-lg leading-relaxed">
          <p className="text-xl">
            Guild Live - An initiative by The Guild (Polygon Media Pvt. Ltd.)
          </p>
          <p className="text-xl">
            Effective Date: 01/01/2025
          </p>
          <p>
            Guild Live is committed to providing a safe, inclusive, and respectful experience for everyone at our events, whether in-person, virtual, or hybrid. This Code of Conduct outlines the behavioral expectations applicable to all participants—including attendees, speakers, sponsors, exhibitors, staff, volunteers, and media representatives.
          </p>

          <h3 className="text-2xl font-semibold mt-8">1. Our Commitment</h3>
          <p className="text-xl">
            We aim to:
          </p>
          <ul className="list-disc pl-6 text-xl space-y-2">
            <li>Promote a collaborative and harassment-free experience.</li>
            <li>Encourage diverse perspectives and open exchange of ideas.</li>
            <li>Foster a community rooted in mutual respect and professionalism.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8">2. Expected Behavior</h3>
          <p className="text-xl">
            All participants must:
          </p>
          <ul className="list-disc pl-6 text-xl space-y-2">
            <li>Treat others with dignity, courtesy, and respect.</li>
            <li>Maintain professional conduct in all engagements, including during sessions, networking, exhibition interactions, and online channels.</li>
            <li>Comply with directions from event organizers, moderators, and security staff.</li>
            <li>Uphold privacy: refrain from sharing others' personal information without explicit permission.</li>
            <li>Ensure that all communication—verbal, written, or visual—is appropriate for a professional setting.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8">3. Unacceptable Behavior</h3>
          <p className="text-xl">
            The following actions will not be tolerated:
          </p>
          <ul className="list-disc pl-6 text-xl space-y-2">
            <li>Harassment, intimidation, or discrimination in any form.</li>
            <li>Offensive, derogatory, or inappropriate comments or imagery.</li>
            <li>Disruption of talks, panels, or other activities.</li>
            <li>Unwelcome physical contact or sexual attention.</li>
            <li>Use of event platforms or networking tools for spamming, unsolicited promotions, or personal harassment.</li>
            <li>Impersonation, misrepresentation of affiliation, or abuse of access privileges.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8">4. Virtual Participation Guidelines</h3>
          <p className="text-xl">
            For digital attendees:
          </p>
          <ul className="list-disc pl-6 text-xl space-y-2">
            <li>Use your real name and identity when engaging.</li>
            <li>Respect the session format, chat moderation, and time limits.</li>
            <li>Do not screenshot, record, or redistribute session content unless authorized.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8">5. Reporting a Concern</h3>
          <p className="text-xl">
            If you observe or experience a violation of this Code:
          </p>
          <ul className="list-disc pl-6 text-xl space-y-2">
            <li>Report it immediately to event staff or via email at guildconferences@guildlive.com.</li>
            <li>All reports will be handled confidentially and investigated promptly.</li>
            <li>Action may include a warning, removal from the event, or escalation to legal authorities.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8">6. Consequences of Misconduct</h3>
          <p className="text-xl">
            Violations may result in:
          </p>
          <ul className="list-disc pl-6 text-xl space-y-2">
            <li>Immediate removal from the event without refund.</li>
            <li>Disqualification from future events by Guild Live or other brands under Polygon Media Pvt. Ltd.</li>
            <li>Reporting to local law enforcement (if legally required).</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8">7. Acknowledgment</h3>
          <p className="text-xl">
            ☑ By registering for or participating in a Guild Live event, you agree to adhere to this Code of Conduct and help us create a respectful environment for all.
          </p>
        </section>
      </main>

      <Footer socialLinks={socialLinks} />
    </div>
  );
};

export default CodeOfConduct;