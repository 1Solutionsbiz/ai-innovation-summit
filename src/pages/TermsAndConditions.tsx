import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import React, { useEffect } from 'react';

const TermsAndConditions: React.FC = () => {
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
        <h2 className="text-3xl font-bold mb-6 font-orbitron text-center">Guild Live Events - Terms & Conditions</h2>

        <section className="space-y-6 text-lg leading-relaxed">
          <p className="text-xl">
            Effective Date: 01/01/2025
          </p>
          <p>
            These Terms & Conditions ("Terms") govern your participation in any in-person, virtual, or hybrid event ("Event") hosted or organized by Guild Live, a division of Polygon Media Private Limited ("The Guild", "we", "our", or "us"). By registering for, attending, or participating in the Event, you ("you", "your", or "Attendee") agree to be bound by these Terms.
          </p>

          <h3 className="text-2xl font-semibold mt-8">1. Registration & Eligibility</h3>
          <p className="text-xl">
            <strong>Eligibility:</strong> Attendees must be at least 18 years old unless otherwise specified. We reserve the right to verify age and identity at any time.
          </p>
          <p className="text-xl">
            <strong>Registration Confirmation:</strong> Your registration is confirmed only upon receipt of a confirmation email from The Guild. We reserve the right to decline or revoke registrations at our discretion.
          </p>
          <p className="text-xl">
            <strong>Access:</strong> Entry may be denied or restricted to individuals who do not comply with these Terms, event access protocols, or our Code of Conduct.
          </p>

          <h3 className="text-2xl font-semibold mt-8">2. Code of Conduct</h3>
          <p className="text-xl">
            We are committed to fostering a safe, inclusive, and respectful environment. All participants must adhere to The Guild Code of Conduct at all times. Harassment, discrimination, or disruptive behavior will result in immediate removal without refund and may lead to permanent bans from future events.
          </p>

          <h3 className="text-2xl font-semibold mt-8">3. Privacy & Data Usage</h3>
          <p className="text-xl">
            <strong>Data Collection:</strong> By registering, you consent to the collection and processing of your personal data in accordance with our Privacy Policy.
          </p>
          <p className="text-xl">
            <strong>Usage:</strong> We may use your data to communicate with you regarding the Event, share relevant content, or inform you about related offerings.
          </p>
          <p className="text-xl">
            <strong>Third-Party Sharing:</strong> With your consent, your name, designation, and organization may be shared with selected event sponsors or partners for post-event outreach.
          </p>

          <h3 className="text-2xl font-semibold mt-8">4. Photography, Audio & Video Recording</h3>
          <p className="text-xl">
            The Guild may record sessions, interactions, and ambiance of the Event through photography, video, and audio. By attending, you consent to such recording and grant The Guild the right to use your image, voice, or likeness for event documentation, marketing, promotional activities, or other lawful purposes without compensation.
          </p>
          <p className="text-xl">
            Attendees may not record or broadcast any part of the Event without prior written permission from The Guild.
          </p>

          <h3 className="text-2xl font-semibold mt-8">5. Submissions & Speaker Content</h3>
          <p className="text-xl">
            If you submit any content (e.g., presentation, talk, performance, exhibit) as a speaker, panelist, or participant, you represent that it is original, does not infringe third-party rights, and grant The Guild a non-exclusive, royalty-free, perpetual, irrevocable license to use, display, reproduce, and distribute such content for educational or promotional purposes.
          </p>

          <h3 className="text-2xl font-semibold mt-8">6. Fees, Payments & Refunds</h3>
          <p className="text-xl">
            <strong>Payment:</strong> If the Event requires payment, all fees must be paid in full prior to entry. Fees are exclusive of taxes unless stated otherwise.
          </p>
          <p className="text-xl">
            <strong>Refunds & Cancellations:</strong> Our refund and cancellation policy is published on the Event registration page and will be strictly followed. Refunds, if applicable, will be processed within 30 working days.
          </p>
          <p className="text-xl">
            <strong>No-Show:</strong> Failure to attend the Event without prior written cancellation notice will result in forfeiture of any registration fees paid.
          </p>

          <h3 className="text-2xl font-semibold mt-8">7. Event Changes or Cancellation by The Guild</h3>
          <p className="text-xl">
            The Guild reserves the right to:
          </p>
          <ul className="list-disc pl-6 text-xl space-y-2">
            <li>Modify the Event schedule, speakers, format, or content at any time.</li>
            <li>Cancel or postpone the Event due to unforeseen circumstances, including but not limited to acts of God, pandemics, government regulations, or logistical issues.</li>
          </ul>
          <p className="text-xl">
            In case of cancellation, The Guild may issue refunds or offer registration transfer options, as deemed appropriate. Liability is strictly limited to the amount paid by the attendee for the Event.
          </p>

          <h3 className="text-2xl font-semibold mt-8">8. Security, Access & Identification</h3>
          <p className="text-xl">
            For in-person events, attendees must wear visible Event badges at all times and may be subject to security screening.
          </p>
          <p className="text-xl">
            The Guild reserves the right to refuse entry or remove attendees violating terms, exhibiting unsafe behavior, or disrupting the Event.
          </p>

          <h3 className="text-2xl font-semibold mt-8">9. Intellectual Property</h3>
          <p className="text-xl">
            All Event content, branding, and materials (excluding attendee submissions) are the intellectual property of The Guild or its partners and are protected by copyright, trademark, and other laws. You may not copy, distribute, or use any such materials without express written consent.
          </p>

          <h3 className="text-2xl font-semibold mt-8">10. Disclaimer & Limitation of Liability</h3>
          <p className="text-xl">
            Attendance is voluntary and at your own risk. The Guild does not provide any warranties regarding the content, speakers, or outcomes of the Event.
          </p>
          <p className="text-xl">
            To the maximum extent permitted by law, The Guild disclaims any liability for any loss, injury, or damage to persons or property arising from attendance or participation in the Event.
          </p>
          <p className="text-xl">
            The Guild's aggregate liability shall not exceed INR 10,000 or the actual amount paid by you for the Event, whichever is lower.
          </p>

          <h3 className="text-2xl font-semibold mt-8">11. Indemnification</h3>
          <p className="text-xl">
            You agree to indemnify and hold harmless The Guild, its affiliates, sponsors, vendors, and partners from any claims, losses, or damages (including legal fees) arising out of your actions, content submissions, or violation of these Terms.
          </p>

          <h3 className="text-2xl font-semibold mt-8">12. Export Control & Compliance</h3>
          <p className="text-xl">
            You represent that you are not subject to any applicable sanctions or export restrictions and agree to comply with all relevant laws, including anti-bribery, trade control, and data privacy regulations.
          </p>

          <h3 className="text-2xl font-semibold mt-8">13. Force Majeure</h3>
          <p className="text-xl">
            The Guild shall not be held liable for any failure or delay in performing its obligations where such failure arises from circumstances beyond its reasonable control, including but not limited to natural disasters, technical failures, strikes, or pandemics.
          </p>

          <h3 className="text-2xl font-semibold mt-8">14. Governing Law & Dispute Resolution</h3>
          <p className="text-xl">
            These Terms shall be governed by the laws of India. Any disputes arising under or in connection with these Terms shall be resolved through binding arbitration in accordance with the provisions of the Arbitration and Conciliation Act, 1996. The seat and venue of arbitration shall be New Delhi, India. The language of arbitration shall be English.
          </p>

          <h3 className="text-2xl font-semibold mt-8">15. Modifications to Terms</h3>
          <p className="text-xl">
            The Guild may update these Terms at any time. The revised version will be effective as of the date posted. Continued participation in the Event after such updates constitutes acceptance of the revised Terms.
          </p>

          <h3 className="text-2xl font-semibold mt-8">16. Contact Information</h3>
          <p className="text-xl">
            For questions, concerns, or requests regarding these Terms, please contact:
          </p>
          <p className="text-xl">
            The Guild Live – Events Team<br />
            Email: guildconfereces@guildlive.com<br />
            Website: www.theguild.in
          </p>
        </section>
      </main>

      <Footer socialLinks={socialLinks} />
    </div>
  );
};

export default TermsAndConditions;