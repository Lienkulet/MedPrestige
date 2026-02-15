import Link from "next/link";

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <h3 className="footer-logo">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M16 2C10 2 6 6.5 6 12c0 8 10 18 10 18s10-10 10-18c0-5.5-4-10-10-10z"
                      fill="#4A7BF7"
                  />
                  <path d="M16 8a4 4 0 100 8 4 4 0 000-8z" fill="white" />
                </svg>
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