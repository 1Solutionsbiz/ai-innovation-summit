import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import React from 'react';

const TermsAndConditions: React.FC = () => {
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
        <h2 className="text-3xl font-bold mb-6 font-orbitron text-center">Terms & Conditions</h2>

        <section className="space-y-6 text-lg leading-relaxed">
          <p>
            This website is operated by The Guild. Throughout the site, the terms “company”, “we”, “us” and “our” refer to The Guild. The following describes The Guild’s “Terms of Service”, “Terms”, or “Terms and Conditions”.
          </p>

          <h3 className="text-xl font-semibold mt-6">User Agreement</h3>
          <p>
            These Terms of Use govern your access to and use of this website and all content, services, tools, and information provided. By using any of The Guild’s websites (including smefutures.com and others), you agree to be bound by these Terms, policies, and notices.
          </p>
          <p>
            These Terms apply to all users including browsers, vendors, customers, merchants, and contributors of content. If you do not agree, please do not use the site or our services.
          </p>
          <p>
            We may change these Terms at any time without prior notice. Updates become effective immediately upon being posted. Continued use of the site indicates acceptance of the revised Terms.
          </p>

          <h3 className="text-xl font-semibold mt-6">Online Website Terms</h3>
          <p>
            You may not use this site for unlawful purposes or to violate laws in your jurisdiction, including but not limited to copyright laws. Do not transmit any viruses or destructive code.
          </p>
          <p>
            We are not responsible for harm or damages related to any purchases or use of third-party services linked through our site. Please review the third-party’s terms and policies before engaging with them.
          </p>
          <p>
            We do not endorse any third-party services, tools, or products accessible through our site. Using them is at your own discretion and risk.
          </p>
          <p>
            Future services or features (e.g., new events or conferences) will also be subject to these Terms.
          </p>

          <h3 className="text-xl font-semibold mt-6">Personal Information</h3>
          <p>
            Your submission of personal data is governed by our Privacy Policy.
          </p>

          <h3 className="text-xl font-semibold mt-6">Changes to Terms of Service</h3>
          <p>
            You can review the latest version of these Terms at any time on this page. We reserve the right to update or modify them without notice. It’s your responsibility to check periodically for changes. Continued use of the site after any modifications constitutes acceptance of the new Terms.
          </p>
        </section>
      </main>

      <Footer socialLinks={socialLinks} />
    </div>
  );
};

export default TermsAndConditions;
