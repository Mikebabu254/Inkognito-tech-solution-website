function Portfolio (){
      return(
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
      );
}

export default Portfolio;
