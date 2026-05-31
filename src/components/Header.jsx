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
    <div>Header</div>
  )
}

export default Header