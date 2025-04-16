import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left - Info */}
          <div className="md:w-1/2">
            <img
              src="/cloud_new.png"
              alt="AI Innovation Summit Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 pl-4">
              The premier conference for artificial intelligence professionals and enthusiasts.
            </p>
            <p className="mt-4 text-gray-300 pl-4">
              © 2025 AI Innovation Summit. All rights reserved.
            </p>
          </div>

          {/* Right - Links & Social */}
          <div className="flex flex-col sm:flex-row gap-12 md:w-1/2 justify-end">
            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-neon-blue transition-colors">About</a>
                <a href="#speakers" className="block text-gray-300 hover:text-neon-blue transition-colors">Speakers</a>
                <a href="#schedule" className="block text-gray-300 hover:text-neon-blue transition-colors">Schedule</a>
                <a href="#sponsors" className="block text-gray-300 hover:text-neon-blue transition-colors">Sponsors</a>
                <a href="#" className="block text-gray-300 hover:text-neon-blue transition-colors">Code of Conduct</a>
              </nav>
            </div>

            {/* Connect With Us */}
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
              <p className="text-gray-300">info@aiinnovationsummit.com</p>
              <p className="text-gray-300">San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-500" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4">
          <p>© 2025 AI Innovation Summit</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
