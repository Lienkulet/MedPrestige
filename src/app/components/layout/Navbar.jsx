"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctors" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link href="/" className="navbar-logo">
            <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M18 3C11.5 3 7 8 7 14c0 9 11 19 11 19s11-10 11-19c0-6-3.5-11-11-11z"
                  fill="#4A7BF7"
              />
              <rect x="15.5" y="10" width="5" height="12" rx="2.5" fill="white" />
              <rect
                  x="12"
                  y="13.5"
                  width="12"
                  height="5"
                  rx="2.5"
                  fill="white"
              />
            </svg>
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