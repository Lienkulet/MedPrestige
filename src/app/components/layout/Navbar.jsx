"use client";

import Link from "next/link";
import { useState } from "react";
import LogoIcon from "../ui/LogoIcon";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctors" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  return (
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link href="/" className="navbar-logo">
            <LogoIcon />
            <span className="navbar-brand">MedPrestige</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="navbar-link">
                    {link.name}
                  </Link>
                </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link href="/contact" className="navbar-cta">
            Buy Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button
              className="navbar-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
          >
          <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <div className="navbar-mobile-menu">
              <ul>
                {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                          href={link.href}
                          className="navbar-mobile-link"
                          onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                ))}
              </ul>
              <Link
                  href="/contact"
                  className="navbar-cta mobile"
                  onClick={() => setMobileMenuOpen(false)}
              >
                Buy Now
              </Link>
            </div>
        )}
      </nav>
  );
};

export default Navbar;