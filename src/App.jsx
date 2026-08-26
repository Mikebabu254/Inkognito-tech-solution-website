import React from "react";
import "./App.css";
import {useState, useEffect} from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/main/Hero";
import Services from "./components/main/Services";
import Solution from "./components/main/Solution";
import Portfolio from "./components/main/Portfolio";

function App() {
  return (
    <div className="app">
      <NavBar/>
  


      {/* ================= HERO ================= */}
      <main>
        <Hero/>


        {/* ================= SERVICES ================= */}
        <Services/>


        {/* ================= SOLUTIONS ================= */}
        <Solution/>


        {/* ================= PORTFOLIO ================= */}
        <Portfolio/>


        {/* ================= ABOUT ================= */}
        <section className="about section" id="about">

          <div className="container">

            <div className="about-grid">

              <div className="about-number">
                <span>INK</span>
                <strong>01</strong>
              </div>

              <div className="about-content">

                <span className="section-label">
                  ABOUT INKOGNITO
                </span>

                <h2>
                  We don't just build
                  <span> software.</span>
                </h2>

                <p>
                  Inkognito Tech Solutions is a technology company
                  focused on creating practical digital solutions
                  for modern businesses.
                </p>

                <p>
                  From educational platforms and POS systems to
                  completely customized business applications,
                  our goal is simple: understand how your business
                  works and build technology that makes it better.
                </p>

                <div className="about-points">

                  <div>
                    <strong>01</strong>
                    <span>Understand</span>
                  </div>

                  <div>
                    <strong>02</strong>
                    <span>Design</span>
                  </div>

                  <div>
                    <strong>03</strong>
                    <span>Develop</span>
                  </div>

                  <div>
                    <strong>04</strong>
                    <span>Support</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}
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

      </main>


      {/* ================= FOOTER ================= */}

      <Footer/>

    </div>
  );
}

export default App;