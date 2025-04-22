import { useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header = () => {
  const isMobile = useIsMobile();

  // Handle Dropdown State
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // Toggle dropdown on click
  const handleDropdownClick = () => {
    setDropdownOpen(prevState => !prevState);
  };

  const NavItems = () => (
    <>
      <a href="#about" className="hover:text-neon-blue transition-colors">About</a>
      <a href="#speakers" className="hover:text-neon-blue transition-colors">Speakers</a>
      <a href="#partners" className="hover:text-neon-blue transition-colors">Partners</a>
      <a href="#upcoming-editions" className="hover:text-neon-blue transition-colors">Upcoming Editions</a>

      {/* Dropdown for Previous Editions */}
      <div className="relative">
        <button 
          className="hover:text-neon-blue transition-colors" 
          onClick={handleDropdownClick}
        >
          Previous Editions
        </button>
        {dropdownOpen && (
          <div className="absolute left-0 mt-2 w-56 bg-dark-lighter border border-neon-purple/20 shadow-lg z-10">
            <a href="/previous/mumbai-2024" className="block px-4 py-2 hover:bg-dark hover:text-neon-blue transition-colors">
              Mumbai Edition 2024
            </a>
            <a href="/previous/bengaluru-2024" className="block px-4 py-2 hover:bg-dark hover:text-neon-blue transition-colors">
              Bengaluru Edition 2024
            </a>
            <a href="/previous/gurugram-2024" className="block px-4 py-2 hover:bg-dark hover:text-neon-blue transition-colors">
              Gurugram Edition 2024
            </a>
          </div>
        )}
      </div>

      <a href="#register" className="hover:text-neon-blue transition-colors">
        <Button className="btn-gradient">Register Now</Button>
      </a>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark/80 border-b border-neon-purple/10 z-10000">
      <div className="container mx-auto px-4 h-26 flex items-center justify-between py-3">
        <a href="/">
          <img
            src="/logo/Ai-Innovation_Logo_White.png"
            alt="AI Innovation Summit"
            className="h-20 w-auto"
          />
        </a>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-dark-lighter text-white">
              <nav className="flex flex-col space-y-4 mt-8">
                <NavItems />
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center space-x-8 text-white">
            <NavItems />
          </nav>
        )}
      </div>
    </header>
  );
};
