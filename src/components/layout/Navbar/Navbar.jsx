"use client";

import Link from "next/link";
import { useState } from "react";
import LogoIcon from "../../Icons/LogoIcon";
import "./Navbar.css";

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

        {/* Auth + CTA */}
        <div className="navbar-actions">
          {/* Login button */}
          <Link href="/login" className="navbar-login">
            Login
          </Link>

          {/* CTA */}
          <Link href="/contact" className="navbar-cta">
            Buy Now
          </Link>
        </div>

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

          {/* Mobile auth buttons */}
          <div className="navbar-mobile-actions">
            <Link
              href="/login"
              className="navbar-login mobile"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>

            <Link
              href="/contact"
              className="navbar-cta mobile"
              onClick={() => setMobileMenuOpen(false)}
            >
              Buy Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
