"use client";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Blog", to: "blog" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-gray-200 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Abdullah Javed Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
            priority
          />
          <span className="text-lg font-semibold text-[#7817b6] hidden sm:inline">
            Abdullah.dev
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-gray-700 hover:text-[#7817b6] font-medium cursor-pointer transition-all"
            >
              {item.name}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-gray-700"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 bg-white border-t border-gray-100 shadow-inner">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-700 hover:text-[#7817b6] text-base font-medium transition-all"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
