import React from "react";
import "./App.css";
import {useState, useEffect} from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/main/Hero";
import Services from "./components/main/Services";
import Solution from "./components/main/Solution";
import Portfolio from "./components/main/Portfolio";
import About from "./components/main/about";

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
        <About/>


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