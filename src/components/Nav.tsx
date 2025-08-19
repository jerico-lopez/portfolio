import React, { useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

interface NavProps {
  links: NavLink[];
  className?: string;
}

const Nav: React.FC<NavProps> = ({ links, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`w-full fixed top-0 right-0 z-50 px-8 py-6 ${className}`}>
      <div className="flex justify-end items-center">
        <ul className="hidden md:flex gap-7 text-white text-sm md:text-lg font-sm">
          {links.map((link) => (
            <li key={link.href} className="relative group">
              <a
                href={link.href}
                className="transition-colors duration-300 hover:text-cyan-500"
              >
                {link.label}
                <span className="block h-[2px] max-w-0 bg-cyan-500 transition-all duration-300 group-hover:max-w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger / X Toggle */}
        <button
          className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center group z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`absolute w-6 h-[2px] bg-white transition-transform duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute w-6 h-[2px] bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute w-6 h-[2px] bg-white transition-transform duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#0f1115] bg-opacity-95 flex flex-col items-center justify-center z-40 space-y-6 md:hidden transition-all duration-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl font-semibold hover:underline transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
