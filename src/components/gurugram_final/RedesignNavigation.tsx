import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const RedesignNavigation = () => {
  const [open, setOpen] = useState(false);
  const [editionsOpen, setEditionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSrc = isScrolled ? "/logo/logo-dg26-color.png" : "/logo/logo-dg26.png";
  const logoSrcg = isScrolled ? "/logo/the-guild-dg26-color.png" : "/logo/the-guild-dg26.png";

  const links = [
    { label: "Overview", href: "/#overview" },
    { label: "Focus Areas", href: "/#focus" },
    { label: "Speakers", href: "/#speakers" },
    { label: "Partners", href: "/#partners" },
    { label: "Agenda", href: "delhi-gurugram_edition-26-agenda" },
    { label: "Who Should Attend", href: "/#roommatters" },
    { label: "Contact", href: "/#contact" },
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
    <header
      className={`redesign-nav sticky ${isScrolled ? "scrolled" : ""}`}
      style={{ marginBottom: "-90px" }}
    >
      <div className="redesign-nav-inner">


       <div className="flex gap-[25px]">
          <a href="/" className="redesign-logo redesign-logo-gurugram-26">
            <img
              src={logoSrc}
              alt="AI Innovation Summit"
            />
          </a>

          <nav className="hidden xl:flex items-center gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="redesign-nav-link redesign-nav-link-guru26 text-[13px] text-white hover:text-[#ec262d]"
              >
                {link.label}
              </a>
            ))}

              {/* Previous Editions Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1.2 text-white hover:text-[#ec262d] text-[13px] ">
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


        <div>

          <div className="flex guru-26-right-sec">
            <a href="/#delhincrregistrationform" className="register-btn-guru-26 register-btn-guru-26-sticky">
              Register Interest 
            </a>            
            <a href="/" className="redesign-logo redesign-logo-gurugram-26">
              <img
                src={logoSrcg}
                alt="AI Innovation Summit"
              />
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className={`mobile-menu-toggle xl:hidden ${isScrolled ? "is-scrolled" : ""}`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {open && (
        <div className="mobile-redesign-menu mobile-redesign-menu-open gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <div className="mobile-editions">
            <button
              type="button"
              className="mobile-editions-toggle"
              aria-expanded={editionsOpen}
              onClick={() => setEditionsOpen(!editionsOpen)}
            >
              <span>Previous Editions</span>
              <ChevronDown
                size={18}
                className={editionsOpen ? "rotate-180" : ""}
              />
            </button>

            {editionsOpen && (
              <div className="mobile-editions-list">
                {editions.map((edition) => (
                  <a
                    key={edition.name}
                    href={edition.link}
                    onClick={() => setOpen(false)}
                  >
                    - {edition.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default RedesignNavigation;