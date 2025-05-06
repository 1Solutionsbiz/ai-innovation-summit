import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  isRegistrationActive?: boolean;
  registrationButtonName?: string;
  disabledButtonName?: string;
}

export const Header = ({
  isRegistrationActive = true,
  registrationButtonName = "Register Now",
  disabledButtonName = "Registration Closed",
}: HeaderProps) => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const currentPath = location.pathname;
  const isEditionsPage =
    currentPath.includes("upcoming") || currentPath.includes("previous");

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownClick = (dropdownName: string) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const NavItems = () => {
    const navLinks = [
      { id: "about", label: "About" },
      { id: "speakers", label: "Speakers" },
      { id: "partners", label: "Partners" },
      { id: "agenda", label: "Agenda" },
      { id: "footer", label: "Contact Us" },
    ];

    return (
      <>
        {navLinks.map((item) =>
          isEditionsPage ? (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-neon-blue transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.id}
              to={`/#${item.id}`}
              className="hover:text-neon-blue transition-colors"
            >
              {item.label}
            </Link>
          )
        )}

        {/* Upcoming Editions Dropdown */}
        <div className="relative">
          <button
            className="hover:text-neon-blue transition-colors"
            onClick={() => handleDropdownClick("upcoming")}
          >
            Upcoming Editions
          </button>
          {openDropdown === "upcoming" && (
            <div className="absolute left-0 mt-2 w-56 bg-dark-lighter border border-neon-purple/20 shadow-lg z-10">
              <Link
                to="/upcoming/bangalore-2025"
                className="block px-4 py-2 hover:bg-dark hover:text-neon-blue transition-colors"
              >
                Bangalore Edition 2025
              </Link>
              <Link
                to="/upcoming/delhi-ncr-2025"
                className="block px-4 py-2 hover:bg-dark hover:text-neon-blue transition-colors"
              >
                Delhi-NCR Edition 2025
              </Link>
            </div>
          )}
        </div>

        {/* Previous Editions Dropdown */}
        <div className="relative">
          <button
            className="hover:text-neon-blue transition-colors"
            onClick={() => handleDropdownClick("previous")}
          >
            Previous Editions
          </button>
          {openDropdown === "previous" && (
            <div className="absolute left-0 mt-2 w-56 bg-dark-lighter border border-neon-purple/20 shadow-lg z-10">
              <Link
                to="/previous/mumbai-2024"
                className="block px-4 py-2 hover:bg-dark hover:text-neon-blue transition-colors"
              >
                Mumbai Edition 2024
              </Link>
              <Link
                to="/previous/bangalore-2024"
                className="block px-4 py-2 hover:bg-dark hover:text-neon-blue transition-colors"
              >
                Bengaluru Edition 2024
              </Link>
              <Link
                to="/previous/gurugram-2024"
                className="block px-4 py-2 hover:bg-dark hover:text-neon-blue transition-colors"
              >
                Gurugram Edition 2024
              </Link>
            </div>
          )}
        </div>

        {isRegistrationActive ? (
          isEditionsPage ? (
            <a
              href="#register"
              className="hover:text-neon-blue transition-colors"
            >
              <Button className="btn-gradient">{registrationButtonName}</Button>
            </a>
          ) : (
            <Link
              to="/#register"
              className="hover:text-neon-blue transition-colors"
            >
              <Button className="btn-gradient">{registrationButtonName}</Button>
            </Link>
          )
        ) : (
          <Button className="btn-gradient" disabled>
            {disabledButtonName}
          </Button>
        )}
      </>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark/80 border-b border-neon-purple/10 z-10000">
      <div className="container mx-auto px-4 h-26 flex items-center justify-between py-3">
        <Link to="/">
          <img
            src="/logo/Ai-Innovation_Logo_White.png"
            alt="AI Innovation Summit"
            className="h-20 w-auto"
          />
        </Link>

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
