function Contact (){
      return(
            <section className="cta" id="contact">

          <div className="container">

            <div className="cta-box">

              <div className="cta-content">

                <span className="section-label">
                  HAVE AN IDEA?
                </span>

                <h2>
                  Let's build something
                  <span> that works.</span>
                </h2>

                <p>
                  Tell us about your business, your challenges
                  and what you want to achieve. We'll help turn
                  your idea into a working digital solution.
                </p>

                <div className="cta-buttons">

                  <a
                    href="mailto:hello@inkognitotechsolutions.com"
                    className="primary-button"
                  >
                    Contact Us
                    <span>→</span>
                  </a>

                  <a
                    href="https://wa.me/254781325424"
                    className="secondary-button"
                  >
                    WhatsApp
                  </a>

                </div>

              </div>

              <div className="cta-decoration">
                <span>I</span>
              </div>

            </div>

          </div>

        </section>
      );
}

export default Contact;