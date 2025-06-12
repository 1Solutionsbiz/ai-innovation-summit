import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from 'react-router-dom';
export const Footer = ({ socialLinks }) => {
  return (
    <footer className="bg-dark text-white py-12" id="footer">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left - Info */}
          <div className="md:w-1/2">
            <img
              src="/logo/Ai-Innovation_Logo_White.png"
              alt="AI Innovation Summit Logo"
              className="h-24 w-auto mb-4"
            />
            <p className="text-gray-300 lg:pl-4 sm:pl-0 ">
              From prompt to impact — the premier summit for artificial intelligence leaders and enthusiasts, making it the most impactful AI Summit.
            </p>
              <img
              src="/guild-logo.png"
              alt="Guild Logo"
              className="h-auto w-auto mt-5"
            />
          </div>

          {/* Right - Links & Social */}
          <div className="flex flex-col sm:flex-row gap-12 md:w-1/2 justify-end">
            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-neon-blue transition-colors">About</a>
                <a href="#speakers" className="block text-gray-300 hover:text-neon-blue transition-colors">Speakers</a>
                <a href="#partners" className="block text-gray-300 hover:text-neon-blue transition-colors">Partners</a>
              </nav>
            </div>

            {/* Connect With Us */}
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                {socialLinks?.twitter && (
                  <a href={socialLinks.twitter} className="text-gray-300 hover:text-neon-blue transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                )}
                {socialLinks?.facebook && (
                  <a href={socialLinks.facebook} className="text-gray-300 hover:text-neon-blue transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                )}
                {socialLinks?.instagram && (
                  <a href={socialLinks.instagram} className="text-gray-300 hover:text-neon-blue transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                )}
                {socialLinks?.linkedin && (
                  <a href={socialLinks.linkedin} className="text-gray-300 hover:text-neon-blue transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                )}
              </div>
              <p>
                <a
                  href="mailto:guildconferences@guildlive.com"
                  className="text-gray-300 hover:text-neon-blue hover:underline"
                >
                  guildconferences@guildlive.com
                </a>
              </p>
              <p className="text-gray-300">
                Smartworks Corporate Park Tower A, Second Floor Sector 125, Noida Uttar Pradesh 201303
              </p>

              <h4 className="font-bold my-3">For Speakership Opportunity,</h4>
              <p>
                Email at{" "}
               
                 <a
                  href="mailto:aditi.malik@guildlive.com"
                  className="text-neon-blue hover:underline"
                >
                   aditi.malik@guildlive.com
                </a>
                &nbsp;
                 or 
                 &nbsp;
                 <a
                  href="mailto:nishant.batra@guildlive.com"
                  className="text-neon-blue hover:underline"
                >
                  nishant.batra@guildlive.com
                </a>
              </p>

              <h4 className="font-bold my-3">For Partnerships,</h4>
              <p>
                Email at{" "}
                <a
                  href="mailto:annu@guildlive.com"
                  className="text-neon-blue hover:underline"
                >
                  annu@guildlive.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-500" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between lg:items-center text-sm text-gray-300 gap-4">
          <p className="sm:text-left">© Copyright 2025,<Link to="https://theguild.in/">The Guild</Link></p>
          <div className="flex flex-wrap gap-4">


            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>

            {/* <a href="#" className="hover:text-white transition-colors">Cookie Settings</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
