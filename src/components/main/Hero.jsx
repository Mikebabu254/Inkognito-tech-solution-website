function Hero(){
      return(
        <section className="hero" id="home">
          <div className="hero-background"></div>

          <div className="container hero-container">
            <div className="hero-content">

              <div className="eyebrow">
                <span className="status-dot"></span>
                CUSTOM SOFTWARE SOLUTIONS
              </div>

              <h1>
                Technology built
                <span> around your business.</span>
              </h1>

              <p>
                We design and develop powerful digital systems tailored
                to the way your business actually works — from LMS
                platforms and POS systems to fully customized business
                applications.
              </p>

              <div className="hero-buttons">
                <a href="#contact" className="primary-button">
                  Start a Project
                  <span>→</span>
                </a>

                <a href="#portfolio" className="secondary-button">
                  View Our Work
                </a>
              </div>

              <div className="hero-trust">
                <div>
                  <strong>Custom</strong>
                  <span>Built for you</span>
                </div>

                <div>
                  <strong>Scalable</strong>
                  <span>Ready to grow</span>
                </div>

                <div>
                  <strong>Reliable</strong>
                  <span>Built to last</span>
                </div>
              </div>

            </div>


            {/* HERO SYSTEM PREVIEW */}
            <div className="hero-visual">

              <div className="floating-card card-one">
                <span className="mini-icon">✓</span>
                <div>
                  <strong>System Online</strong>
                  <small>All services operational</small>
                </div>
              </div>

              <div className="dashboard-card">

                <div className="dashboard-top">
                  <div className="window-controls">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span className="dashboard-title">
                    Business Dashboard
                  </span>
                </div>

                <div className="dashboard-body">

                  <aside className="dashboard-sidebar">
                    <div className="side-logo">I</div>

                    <div className="side-item active">
                      <span>⌂</span>
                    </div>

                    <div className="side-item">
                      <span>▣</span>
                    </div>

                    <div className="side-item">
                      <span>◫</span>
                    </div>

                    <div className="side-item">
                      <span>⚙</span>
                    </div>
                  </aside>

                  <div className="dashboard-main">

                    <div className="dashboard-heading">
                      <div>
                        <small>WELCOME BACK</small>
                        <h3>Business Overview</h3>
                      </div>

                      <div className="profile-circle">IN</div>
                    </div>

                    <div className="stats-grid">

                      <div className="stat-box">
                        <span>Revenue</span>
                        <strong>KES 428K</strong>
                        <small className="positive">
                          ↑ 12.5%
                        </small>
                      </div>

                      <div className="stat-box">
                        <span>Customers</span>
                        <strong>1,284</strong>
                        <small className="positive">
                          ↑ 8.2%
                        </small>
                      </div>

                      <div className="stat-box">
                        <span>Orders</span>
                        <strong>864</strong>
                        <small className="positive">
                          ↑ 5.7%
                        </small>
                      </div>

                    </div>

                    <div className="chart-box">
                      <div className="chart-header">
                        <span>Business Performance</span>
                        <small>Last 7 days</small>
                      </div>

                      <div className="chart">
                        <div className="chart-line"></div>

                        <div className="chart-bars">
                          <span style={{ height: "35%" }}></span>
                          <span style={{ height: "52%" }}></span>
                          <span style={{ height: "44%" }}></span>
                          <span style={{ height: "68%" }}></span>
                          <span style={{ height: "58%" }}></span>
                          <span style={{ height: "82%" }}></span>
                          <span style={{ height: "94%" }}></span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              <div className="floating-card card-two">
                <span className="mini-icon purple">↗</span>
                <div>
                  <strong>+24.8%</strong>
                  <small>Business growth</small>
                </div>
              </div>

            </div>
          </div>
        </section>
      );
}

export default Hero;