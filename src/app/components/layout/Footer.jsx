import Link from "next/link";
import LogoIcon from "../ui/LogoIcon";

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <h3 className="footer-logo">
                <LogoIcon />
                MedPrestige
              </h3>
              <p className="footer-tagline">
                Advanced healthcare services made personal for every patient.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/doctors">Doctors</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul>
                <li>info@MedPrestige.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Medical Drive, Suite 100</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} MedPrestige. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;