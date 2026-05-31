import { useState, useEffect } from "react";

const navLinks = [
  { label: "Hoyga", href: "#hoyga" },
  { label: "Naga Warran", href: "#naga-warran" },
  { label: "Adeegyada", href: "#adeegyada" },
  { label: "Mashruucyada", href: "#mashruucyada" },
  { label: "Xiriir", href: "#xiriir" },
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Logo.</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeLink === link.label
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          {menuOpen ? (
            <span className="text-2xl">✕</span> // Astaanta xiridda
          ) : (
            <span className="text-2xl">☰</span> // Astaanta menu-ga
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg border-t mt-2 py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveLink(link.label);
                setMenuOpen(false); // Xir menu-ga marka la gujiyo link
              }}
              className={`text-base font-medium ${
                activeLink === link.label ? "text-blue-600" : "text-gray-600"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
