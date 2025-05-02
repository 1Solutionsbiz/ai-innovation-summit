
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import React from 'react';


const PrivacyPolicy: React.FC = () => {
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
        <h2 className="text-3xl font-bold mb-6 font-orbitron text-center">Privacy Policy</h2>
        
        <section className="space-y-6 text-lg leading-relaxed">
          <p>
            AI Innovation Summit is the technology conference organized by The Guild (Polygon Media Pvt. Ltd.)—a B2B media organization dedicated to empowering the global business community through platforms like SME Futures, Guild Live, and Guild TV. We aim to foster collaboration, innovation, and knowledge-sharing that drive sustainable business practices and support enterprises as they grow.
          </p>

          <h3 className="text-xl font-semibold mt-6">Registration and Attendance</h3>
          <p>
            By registering, you’re confirming that all details you provide are accurate. We may accept or decline registrations at our discretion, and we expect all attendees to follow the participation guidelines we provide.
          </p>

          <h3 className="text-xl font-semibold mt-6">Data Protection and Privacy</h3>
          <p>
            Your privacy is important to us. By signing up, you consent to the use of your personal data in line with our privacy policy, including sharing relevant information with our event partners and sponsors to create engagement opportunities. You’ll also receive event-related updates from us—but you can unsubscribe whenever you’d like.
          </p>

          <h3 className="text-xl font-semibold mt-6">Event Content</h3>
          <p>
            We work hard to ensure that the content we share during the event is accurate and informative. However, it’s for general purposes only, so for any major decisions, we recommend seeking professional advice that fits your specific needs.
          </p>

          <h3 className="text-xl font-semibold mt-6">Code of Conduct</h3>
          <p>
            We’re committed to creating a welcoming and respectful environment for all. Please be courteous and professional during the event. Any harassment, discrimination, or disruptive behavior won’t be tolerated, and we reserve the right to revoke access for any inappropriate conduct.
          </p>

          <h3 className="text-xl font-semibold mt-6">Media and Intellectual Property</h3>
          <p>
            By participating, you’re allowing us to capture and use photos, videos, or recordings of you during the event for promotional purposes. Also, the materials and presentations shared are the intellectual property of The Guild (Polygon Media Pvt. Ltd.) and our partners—please don’t use or share them without permission.
          </p>

          <h3 className="text-xl font-semibold mt-6">Event Changes</h3>
          <p>
            Sometimes, we might need to tweak the event schedule, speakers, or sessions. We’ll do our best to notify you of any changes as soon as possible.
          </p>

          <h3 className="text-xl font-semibold mt-6">Cancellations and Notifications</h3>
          <p>
            If you need to cancel, let us know in writing, and we’ll handle your request according to our policy. Should we need to cancel the event due to unforeseen circumstances, we’ll do our best to notify you well in advance.
          </p>

          <h3 className="text-xl font-semibold mt-6">Liability</h3>
          <p>
            While we strive to provide a smooth experience, The Guild (Polygon Media Pvt. Ltd.) isn’t responsible for any technical issues, data loss, or other disruptions that might affect your participation in the event.
          </p>

          <h3 className="text-xl font-semibold mt-6">Governing Law</h3>
          <p>
            These terms are governed by the laws of India, and any disputes will be settled in Noida, Uttar Pradesh.
          </p>

          <p className="mt-4">
            For any questions or concerns, feel free to reach out to us at <a href="mailto:guildconferences@guildlive.com" className="text-blue-400">guildconferences@guildlive.com</a>.
          </p>
        </section>
      </main>

           <Footer socialLinks={socialLinks} />
    </div>
  );
};

export default PrivacyPolicy;
