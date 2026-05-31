import { useState, useEffect } from "react";

const navLinks = [
  { label: "Hoyga", href: "#" },
  { label: "Naga Warran", href: "#" },
  { label: "Adeegyada", href: "#" },
  { label: "Mashruucyada", href: "#" },
  { label: "Xiriir", href: "#" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Hoyga");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');

        .header-font { font-family: 'Playfair Display', serif; }
        .body-font { font-family: 'DM Sans', sans-serif; }

        .nav-link-underline {
          position: relative;
        }
        .nav-link-underline::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #f59e0b, #ef4444);
          transition: width 0.3s ease;
        }
        .nav-link-underline:hover::after,
        .nav-link-underline.active::after {
          width: 100%;
        }

        .glow-btn {
          box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
          transition: all 0.3s ease;
        }
        .glow-btn:hover {
          box-shadow: 0 0 35px rgba(245, 158, 11, 0.6);
          transform: translateY(-1px);
        }

        .logo-shimmer {
          background: linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #f59e0b 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .mobile-menu {
          animation: slideDown 0.3s ease;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.15;
          pointer-events: none;
        }
      `}</style>

      {/* Demo Page Background */}
      <div className="min-h-screen bg-gray-950 body-font">
        {/* HEADER */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled
              ? "bg-gray-950/90 backdrop-blur-xl border-b border-white/10 py-3"
              : "bg-transparent py-5"
          }`}
        >
          {/* Decorative orbs */}
          <div className="orb w-64 h-64 bg-amber-400 top-[-80px] left-[-40px]" />
          <div className="orb w-48 h-48 bg-red-500 top-[-60px] right-[10%]" />

          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-red-500 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <span className="text-white font-black text-lg header-font">
                  S
                </span>
              </div>
              <span className="header-font text-2xl font-black logo-shimmer">
                Shirkad
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={`nav-link-underline body-font text-sm font-medium tracking-wide transition-colors duration-200 ${
                    activeLink === link.label
                      ? "text-amber-400 active"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button + Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="glow-btn hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-red-500 text-gray-950 font-semibold text-sm px-5 py-2.5 rounded-full body-font"
              >
                <span>Bilow Hadda</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="mobile-menu md:hidden mt-2 mx-4 rounded-2xl bg-gray-900/95 backdrop-blur-xl border border-white/10 overflow-hidden">
              <nav className="flex flex-col p-4 gap-1">
                {navLinks.map((link, i) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.label);
                      setMenuOpen(false);
                    }}
                    className={`body-font text-sm font-medium px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                      activeLink === link.label
                        ? "bg-amber-400/10 text-amber-400"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {link.label}
                    {activeLink === link.label && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    )}
                  </a>
                ))}
                <div className="mt-3 pt-3 border-t border-white/10">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-red-500 text-gray-950 font-semibold text-sm px-5 py-3 rounded-xl body-font"
                  >
                    Bilow Hadda
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>
              </nav>
            </div>
          )}
        </header>
      </div>
    </>
  );
}
