function Footer() {
  return (
      <footer className="footer">

        <div className="container">

          <div className="footer-grid">

            <div className="footer-brand">

              <a href="#home" className="logo">
                <span className="logo-mark">I</span>

                <span>
                  <strong>Inkognito</strong>
                  <small>TECH SOLUTIONS</small>
                </span>
              </a>

              <p>
                Building practical technology for
                modern businesses.
              </p>

            </div>


            <div className="footer-column">

              <h4>Company</h4>

              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>

            </div>


            <div className="footer-column">

              <h4>Solutions</h4>

              <a href="#services">LMS Systems</a>
              <a href="#services">POS Systems</a>
              <a href="#services">Business Systems</a>

            </div>


            <div className="footer-column">

              <h4>Contact</h4>

              <a href="mailto:hello@inkognitotechsolutions.com">
                Email Us
              </a>

              <a href="tel:+254700000000">
                +254 700 000 000
              </a>

              <span>Nairobi, Kenya</span>

            </div>

          </div>


          <div className="footer-bottom">

            <span>
              © 2026 Inkognito Tech Solutions. All rights reserved.
            </span>

            <span>
              Built with purpose.
            </span>

          </div>

        </div>

      </footer>
  );
}

export default Footer;