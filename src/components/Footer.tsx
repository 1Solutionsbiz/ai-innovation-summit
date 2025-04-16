
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">DIBI</h3>
            <p className="text-muted-foreground">
              The premier conference for design and development professionals.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary">About</a>
              <a href="#" className="block text-muted-foreground hover:text-primary">Speakers</a>
              <a href="#" className="block text-muted-foreground hover:text-primary">Schedule</a>
              <a href="#" className="block text-muted-foreground hover:text-primary">Tickets</a>
            </nav>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2025 DIBI Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
