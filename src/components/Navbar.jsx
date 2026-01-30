import React, { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Sun, Moon } from "lucide-react";
import logo from "../assets/logo/logoo.png";
import gsap from "gsap";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    if (!navRef.current) return;

    const ctx = gsap.context(() => {
      const logoEl = navRef.current.querySelector(".logo");
      const menuItems = navRef.current.querySelectorAll("ul li");

      if (logoEl) {
        gsap.fromTo(
          logoEl,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
        );
      }

      if (menuItems.length) {
        gsap.fromTo(
          menuItems,
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            delay: 0.2,
            ease: "power3.out",
          }
        );
      }
    }, navRef);

    return () => ctx.revert();
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const handleNavClick = () => setIsOpen(false);

  return (
    // Make header always above Home layers
    <header className="w-full flex pt-4 pb-2 justify-center items-center relative z-[1000]">
      {/* Grid Pattern behind navbar only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 198, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 198, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      <nav
        ref={navRef}
        className="w-[90%] max-w-[1200px] shadow-[0_5px_20px_-22px_#00AEEF] bg-secondary-bg rounded-4xl px-6 sm:px-8 py-2 flex justify-between items-center relative z-10"
      >
        {/* Logo */}
        <a href="#home" className="logo flex items-center">
          <img src={logo} className="w-28 sm:w-30" alt="Logo" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-text-primary font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:border-b-blue-main py-4 hover:border-b-3 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}

          <li>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 text-text-primary"
              aria-label="Toggle theme"
              type="button"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 text-text-primary"
            aria-label="Toggle theme"
            type="button"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </button>

          <button
            type="button"
            className="text-text-primary text-3xl cursor-pointer"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay + Panel (fixed, always above everything) */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          {/* Overlay */}
          <button
            type="button"
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          />

          {/* Panel */}
          <div className="absolute top-[72px] left-0 right-0 mx-auto w-[92%] max-w-[520px] bg-secondary-bg rounded-3xl shadow-[0_18px_60px_rgba(0,0,0,0.35)] border border-white/10 overflow-hidden">
            <ul className="flex flex-col items-center gap-5 py-6 text-text-primary font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-glowBlue transition-colors duration-300 text-lg"
                    onClick={handleNavClick}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 px-5 py-4 text-center text-sm text-text-secondary">
              Tap outside to close
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
