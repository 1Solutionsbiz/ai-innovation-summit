import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditionOpen, setIsEditionOpen] = useState(false);

  const menuItems = [
    "Overview",
    "Focus Areas",
    "Speakers",
    "Partners",
    "Agenda",
    "Who Should Attend",
    "Contact Us",
  ];

  const editions = [
    { name: "Bengaluru Edition 2025", link: "/previous/bangalore-2025" },
    { name: "Mumbai Edition 2025", link: "/previous/mumbai-2025" },
    { name: "Mumbai Edition 2024", link: "/previous/mumbai-2024" },
    { name: "Bengaluru Edition 2024", link: "/previous/bangalore-2024" },
    { name: "Delhi NCR Edition 2024", link: "/previous/delhi-ncr-2024" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 dl26hbg backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        
        {/* --- TOP BAR --- */}
        <div className="flex items-center justify-between h-16">

          {/* LOGO (Left aligned) */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo/Ai-Innovation_Logo_White.png"
              alt="AI Innovation Summit"
              className="h-10 w-auto md:h-16 object-contain"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center flex-1 justify-end space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white hover:text-primary transition-colors text-sm font-medium tracking-wide"
              >
                {item}
              </a>
            ))}

            {/* Previous Editions Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-white hover:text-primary text-sm font-medium">
                Previous Editions <ChevronDown size={16} />
              </button>

              <div
                className="
                  absolute hidden group-hover:block
                  top-full right-0 w-56 
                  bg-slate-900 text-white shadow-lg rounded-md py-2 z-50
                "
              >
                {editions.map((edition, idx) => (
                  <a
                    key={idx}
                    href={edition.link}
                    className="block px-4 py-2 hover:bg-slate-800 text-sm"
                  >
                    {edition.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Previous Editions Dropdown */}
            <div className="relative group">
              <a href="#delhiregistrationform"
                  className="bg-white/10 border-2 border-white/25 text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 text-sm px-4 py-2 rounded-full font-semibold tracking-wide shadow-lg hover:shadow-xl backdrop-blur-sm"
                >
                  Register Now
              </a>
            </div>


          </div>
        </div>

        {/* --- MOBILE MENU --- */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">

              {/* Mobile Menu Items */}
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-primary transition-colors text-sm font-medium tracking-wide"
                >
                  {item}
                </a>
              ))}

              {/* Mobile Previous Editions Dropdown */}
              <div>
                <button
                  onClick={() => setIsEditionOpen(!isEditionOpen)}
                  className="flex justify-between items-center w-full text-white text-sm font-medium"
                >
                  Previous Editions
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      isEditionOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isEditionOpen && (
                  <div className="mt-2 pl-3 space-y-2">
                    {editions.map((edition, idx) => (
                      <a
                        key={idx}
                        href={edition.link}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-white/80 text-sm hover:text-primary"
                      >
                        {edition.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
