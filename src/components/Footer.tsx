
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-orbitron text-gradient mb-4">AI Innovation Summit</h3>
            <p className="text-gray-400">
              The premier conference for artificial intelligence professionals and enthusiasts.
            </p>
            <p className="mt-4 text-gray-400">
              © 2025 AI Innovation Summit. All rights reserved.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-neon-blue transition-colors">About</a>
              <a href="#speakers" className="block text-gray-400 hover:text-neon-blue transition-colors">Speakers</a>
              <a href="#schedule" className="block text-gray-400 hover:text-neon-blue transition-colors">Schedule</a>
              <a href="#sponsors" className="block text-gray-400 hover:text-neon-blue transition-colors">Sponsors</a>
              <a href="#" className="block text-gray-400 hover:text-neon-blue transition-colors">Code of Conduct</a>
            </nav>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-400">info@aiinnovationsummit.com</p>
              <p className="text-gray-400">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
