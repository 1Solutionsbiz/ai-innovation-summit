import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
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
        <h2 className="text-3xl font-bold mb-6 font-orbitron text-center">Privacy Policy</h2>

        <section className="space-y-6 text-lg leading-relaxed">
          <p>
            The Guild ("we," "our," or "us") is committed to protecting your privacy and ensuring a safe online experience. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our services, including our websites, mobile applications, and events (collectively referred to as "Services").
          </p>

          <h3 className="text-2xl font-semibold mt-8">1. Information We Collect</h3>
          <ul className="list-disc pl-6 text-xl space-y-2">
            <li><strong>Personal Information:</strong> We collect personal information that you provide directly, such as your name, phone number, email address, and other contact details.</li>
            <li><strong>Account and Transaction Information:</strong> We may collect information related to your account and transactions, including payment information and subscription details.</li>
            <li><strong>Demographic Information:</strong> In some cases, we may collect demographic information such as your age, gender, and location.</li>
            <li><strong>Device and Technical Information:</strong> We collect information about your device, operating system, browser type, and IP address to improve your experience and for analytical purposes.</li>
            <li><strong>Usage Information:</strong> We gather information on how you interact with our Services, including pages viewed, links clicked, and other usage statistics.</li>
            <li><strong>Social Media Information:</strong> If you interact with us through social media platforms, we may collect information related to your social media profiles.</li>
            <li><strong>Content and Media:</strong> We may collect and process any media you submit or share, such as photos, videos, and audio recordings.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8">2. How We Use Your Information</h3>
          <ul className="list-disc pl-6 text-xl space-y-2">
            <li><strong>Service Provision:</strong> We use your information to provide and personalize our Services, including customer support, account management, and transaction processing.</li>
            <li><strong>Improvement and Development:</strong> We analyze usage data to improve our Services, develop new features, and enhance user experience.</li>
            <li><strong>Communication:</strong> We may contact you with updates, promotional offers, and information about our Services. You can opt out of marketing communications at any time.</li>
            <li><strong>Advertising:</strong> We use your information to serve relevant advertisements and measure the effectiveness of our advertising campaigns.</li>
            <li><strong>Security and Compliance:</strong> We use your information to ensure the security of our Services, prevent fraud, and comply with legal obligations.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8">3. How We Share Your Information</h3>
          <ul className="list-disc pl-6 text-xl space-y-2">
            <li><strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our Services and conducting business activities.</li>
            <li><strong>Affiliates:</strong> Your information may be shared with our affiliates for the purposes outlined in this Privacy Policy.</li>
            <li><strong>Business Partners:</strong> We may disclose your information to business partners for joint promotions and other collaborations.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or to respond to legal processes, such as court orders or subpoenas.</li>
            <li><strong>Business Transfers:</strong> In the event of a business transaction, such as a merger or acquisition, your information may be transferred as part of the transaction.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8">4. Cookies and Tracking Technologies</h3>
          <p className="text-xl">
            We use cookies and similar technologies to enhance your experience on our Services. These technologies help us remember your preferences and analyze usage patterns. You can manage your cookie preferences through your browser settings.
          </p>

          <h3 className="text-2xl font-semibold mt-8">5. Your Rights and Choices</h3>
          <ul className="list-disc pl-6 text-xl space-y-2">
            <li><strong>Access and Correction:</strong> You have the right to access and correct your personal information. You can request updates or deletions of your data by contacting us.</li>
            <li><strong>Opt-Out:</strong> You can opt out of receiving marketing communications from us by following the instructions in the emails or contacting us directly.</li>
            <li><strong>Cookies:</strong> You can manage your cookie preferences through your browser settings. Please note that disabling cookies may affect the functionality of our Services.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8">6. Data Transfers</h3>
          <p className="text-xl">
            Your information may be transferred to and processed in countries outside India, including countries with different data protection laws. We ensure that appropriate safeguards are in place to protect your information.
          </p>

          <h3 className="text-2xl font-semibold mt-8">7. Changes to This Policy</h3>
          <p className="text-xl">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.
          </p>
        </section>
      </main>

      <Footer socialLinks={socialLinks} />
    </div>
  );
};

export default PrivacyPolicy;