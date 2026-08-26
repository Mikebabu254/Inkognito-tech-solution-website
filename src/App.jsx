import React from "react";
import "./App.css";
import {useState, useEffect} from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/main/Hero";

function App() {
  return (
    <div className="app">
      <NavBar/>
  


      {/* ================= HERO ================= */}
      <main>
        <Hero/>


        {/* ================= SERVICES ================= */}
        <section className="services section" id="services">

          <div className="container">

            <div className="section-heading">

              <div>
                <span className="section-label">WHAT WE DO</span>

                <h2>
                  Software designed for
                  <span> your business.</span>
                </h2>
              </div>

              <p>
                We transform business processes into simple,
                powerful and reliable digital systems.
              </p>

            </div>


            <div className="services-grid">

              <article className="service-card featured">
                <div className="service-number">01</div>

                <div className="service-icon">
                  🎓
                </div>

                <h3>Learning Management Systems</h3>

                <p>
                  Complete LMS platforms for schools, training
                  institutions and organizations. Manage students,
                  courses, instructors, assessments and learning
                  content from one platform.
                </p>

                <a href="#contact">
                  Build an LMS <span>→</span>
                </a>
              </article>


              <article className="service-card">
                <div className="service-number">02</div>

                <div className="service-icon">
                  🛒
                </div>

                <h3>POS Systems</h3>

                <p>
                  Customized Point of Sale systems that help
                  businesses manage sales, inventory, customers,
                  payments and reports.
                </p>

                <a href="#contact">
                  Build a POS <span>→</span>
                </a>
              </article>


              <article className="service-card">
                <div className="service-number">03</div>

                <div className="service-icon">
                  ⚙️
                </div>

                <h3>Custom Business Systems</h3>

                <p>
                  We build software around your exact workflow,
                  eliminating unnecessary manual processes and
                  improving productivity.
                </p>

                <a href="#contact">
                  Discuss Your Idea <span>→</span>
                </a>
              </article>


              <article className="service-card">
                <div className="service-number">04</div>

                <div className="service-icon">
                  🌐
                </div>

                <h3>Web Applications</h3>

                <p>
                  Modern, responsive web applications designed
                  for performance, security and scalability.
                </p>

                <a href="#contact">
                  Start Building <span>→</span>
                </a>
              </article>

            </div>

          </div>

        </section>


        {/* ================= SOLUTIONS ================= */}
        <section className="solutions section" id="solutions">

          <div className="container">

            <div className="solutions-wrapper">

              <div className="solutions-content">

                <span className="section-label">
                  BUILT FOR YOUR INDUSTRY
                </span>

                <h2>
                  One technology partner.
                  <span> Endless possibilities.</span>
                </h2>

                <p>
                  Every business operates differently. Instead of
                  forcing your business into an existing system,
                  we build technology that adapts to your workflow.
                </p>

                <div className="solution-list">

                  <div>
                    <span>01</span>
                    <strong>Education</strong>
                    <p>Schools, colleges and training institutions.</p>
                  </div>

                  <div>
                    <span>02</span>
                    <strong>Retail</strong>
                    <p>POS, inventory and sales management.</p>
                  </div>

                  <div>
                    <span>03</span>
                    <strong>Small & Medium Businesses</strong>
                    <p>Systems that automate everyday operations.</p>
                  </div>

                  <div>
                    <span>04</span>
                    <strong>Custom Industries</strong>
                    <p>Software designed around unique workflows.</p>
                  </div>

                </div>

              </div>


              <div className="solution-visual">

                <div className="orbit orbit-one"></div>
                <div className="orbit orbit-two"></div>
                <div className="orbit orbit-three"></div>

                <div className="solution-center">
                  <span>I</span>
                  <strong>INKOGNITO</strong>
                  <small>TECH SOLUTIONS</small>
                </div>

                <div className="tech-node node-one">LMS</div>
                <div className="tech-node node-two">POS</div>
                <div className="tech-node node-three">CRM</div>
                <div className="tech-node node-four">ERP</div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= PORTFOLIO ================= */}
        <section className="portfolio section" id="portfolio">

          <div className="container">

            <div className="section-heading">

              <div>
                <span className="section-label">OUR WORK</span>

                <h2>
                  Systems that solve
                  <span> real problems.</span>
                </h2>
              </div>

              <p>
                A look at some of the systems and digital
                solutions we can build for businesses.
              </p>

            </div>


            <div className="portfolio-grid">

              <article className="project-card">

                <div className="project-image project-lms">
                  <div className="mock-browser">
                    <div className="browser-bar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="mock-content">
                      <div className="mock-sidebar"></div>

                      <div className="mock-dashboard">
                        <div className="mock-title"></div>

                        <div className="mock-stats">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>

                        <div className="mock-chart"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <span>EDUCATION TECHNOLOGY</span>
                  <h3>Learning Management System</h3>
                  <p>
                    A complete platform for managing students,
                    courses, instructors and assessments.
                  </p>
                </div>

              </article>


              <article className="project-card">

                <div className="project-image project-pos">

                  <div className="pos-screen">

                    <div className="pos-header">
                      <strong>POINT OF SALE</strong>
                      <span>● ONLINE</span>
                    </div>

                    <div className="pos-products">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>

                    <div className="pos-total">
                      <span>Total</span>
                      <strong>KES 12,450</strong>
                    </div>

                  </div>

                </div>

                <div className="project-info">
                  <span>RETAIL TECHNOLOGY</span>
                  <h3>Custom POS System</h3>
                  <p>
                    Sales, inventory, customer and payment
                    management in one system.
                  </p>
                </div>

              </article>

            </div>

          </div>

        </section>


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