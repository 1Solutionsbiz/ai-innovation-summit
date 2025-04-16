
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header = () => {
  const isMobile = useIsMobile();
  
  const NavItems = () => (
    <>
      <a href="#speakers" className="hover:text-primary transition-colors">Speakers</a>
      <a href="#about" className="hover:text-primary transition-colors">About</a>
      <a href="#schedule" className="hover:text-primary transition-colors">Schedule</a>
      <a href="#tickets" className="hover:text-primary transition-colors">
        <Button variant="default">Get Tickets</Button>
      </a>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="font-bold text-2xl text-gradient">DIBI</a>
        
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-8">
                <NavItems />
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center space-x-8">
            <NavItems />
          </nav>
        )}
      </div>
    </header>
  );
};
