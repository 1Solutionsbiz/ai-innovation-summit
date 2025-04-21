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
             src="/logo/Ai-Innovation_Logo_White.png"
              alt="AI Innovation Summit Logo"
              className="h-24 w-auto mb-4"
            />
            <p className="text-gray-300 pl-4">
              From prompt to impact — the premier summit for artificial intelligence leaders and enthusiasts, making it the most impactful AI Summit.
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
                {/* <a href="#schedule" className="block text-gray-300 hover:text-neon-blue transition-colors">Schedule</a> */}
                <a href="#partners" className="block text-gray-300 hover:text-neon-blue transition-colors">Partners</a>
       
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
              <p className="text-gray-300">guildconferences@guildlive.com</p>
              <p className="text-gray-300">Smartworks Corporate Park Tower A, Second Floor Sector 125, Noida Uttar Pradesh 201303</p>
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
