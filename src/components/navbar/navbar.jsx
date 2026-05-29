import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext.jsx";

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "menu", label: "Menu" },
  { id: "product", label: "Shop" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const { totalItems } = useCart();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
    setActive(id);
  };

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    NAV_LINKS.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 shadow-lg shadow-black/20"
        : "bg-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => scrollToSection("hero")}
          className="text-stone-100 font-bold text-xl cursor-pointer tracking-wide"
        >
          Logos<span className="text-amber-700">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`relative text-base transition ${active === link.id
                  ? "text-amber-700"
                  : "text-stone-300 hover:text-amber-600"
                  }`}
              >
                {link.label}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-amber-700 transition-all duration-300 ${active === link.id ? "w-full" : "w-0"
                    }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* CART BUTTON (DRAWER TRIGGER) */}
          <button
            onClick={onCartClick}
            className="relative text-stone-100 text-xl hover:text-amber-600 transition"
            aria-label="Open cart"
          >
            <i className="bi bi-bag"></i>

            <span className="absolute -top-2 -right-2 bg-amber-700 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-stone-100 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <i className={`bi ${isOpen ? "bi-x" : "bi-list"}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800">
          <ul className="flex flex-col items-center py-6 gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`text-lg transition ${active === link.id
                    ? "text-amber-700"
                    : "text-stone-300"
                    }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;