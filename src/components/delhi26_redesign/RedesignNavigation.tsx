import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const RedesignNavigation = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Overview", href: "#overview" },
    { label: "Focus Areas", href: "#focus" },
    { label: "Speakers", href: "#speakers" },
    { label: "Partners", href: "#partners" },
    { label: "Agenda", href: "#agenda" },
    { label: "Who Should Attend", href: "#who-should-attend" },
    { label: "Contact", href: "#contact" },
  ];

  const editions = [
    { name: "Bengaluru Edition 2026", link: "/previous/bangalore-2026" },
    { name: "Delhi Edition 2026", link: "/previous/delhi-2026" },
    { name: "Bengaluru Edition 2025", link: "/previous/bangalore-2025" },
    { name: "Mumbai Edition 2025", link: "/previous/mumbai-2025" },
    { name: "Mumbai Edition 2024", link: "/previous/mumbai-2024" },
    { name: "Bengaluru Edition 2024", link: "/previous/bangalore-2024" },
    { name: "Delhi NCR Edition 2024", link: "/previous/delhi-ncr-2024" },
  ];

  return (
    <header className="redesign-nav">
      <div className="redesign-nav-inner">


       <div className="flex gap-[25px]">
          <a href="#" className="redesign-logo">
            <img
              src="/delhi26_redesign/logo.png"
              alt="AI Innovation Summit"
            />
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="redesign-nav-link"
              >
                {link.label}
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


          </nav>
        </div>


        <button className="redesign-register-btn register-btn">
          Register 
        </button>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="mobile-redesign-menu">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <button className="redesign-register-btn w-full">
            Register Now
          </button>
        </div>
      )}
    </header>
  );
};

export default RedesignNavigation;