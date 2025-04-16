
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export const Header = () => {
  const isMobile = useIsMobile();
  
  const NavItems = () => (
    <>
      <a href="#about" className="hover:text-neon-blue transition-colors">About</a>
      <a href="#speakers" className="hover:text-neon-blue transition-colors">Speakers</a>
      <a href="#schedule" className="hover:text-neon-blue transition-colors">Schedule</a>
      <a href="#sponsors" className="hover:text-neon-blue transition-colors">Sponsors</a>
      <a href="#venue" className="hover:text-neon-blue transition-colors">Venue</a>
      <a href="#register" className="hover:text-neon-blue transition-colors">
        <Button className="btn-gradient">Register</Button>
      </a>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark/80 border-b border-neon-purple/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="font-orbitron font-bold text-2xl text-gradient">AI INNOVATION SUMMIT</a>
        
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
