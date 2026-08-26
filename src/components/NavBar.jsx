import {useState, useEffect} from "react";

function NavBar(){
        const [theme, setTheme] = useState(
          localStorage.getItem("theme") ||"system"
        );
      
        useEffect(() => {
          const root = document.documentElement;
      
          if (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            root.classList.add("dark");
            root.classList.remove("light");
          } else if (theme === "light" || (theme === "system" && window.matchMedia("(prefers-color-scheme: light)").matches)) {
            root.classList.remove("dark");
            root.classList.add("light");
          } else {
            root.classList.remove("dark", "light");
          }
      
          localStorage.setItem("theme", theme);
        }, [theme]);
      return (
      <header className="navbar">
          <div className="container nav-container">
        
            <a href="#home" className="logo">
              <span className="logo-mark">I</span>
        
              <span>
                <strong>Inkognito</strong>
                <small>TECH SOLUTIONS</small>
              </span>
            </a>
        
            <nav className="nav-links">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#solutions">Solutions</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
        
            <div className="nav-actions">
        
              <div className="theme-switcher">
        
                <button
                  className={`theme-option ${
                    theme === "light" ? "active" : ""
                  }`}
                  onClick={() => setTheme("light")}
                  aria-label="Light mode"
                >
                  ☀
                </button>
        
                <button
                  className={`theme-option ${
                    theme === "system" ? "active" : ""
                  }`}
                  onClick={() => setTheme("system")}
                  aria-label="System mode"
                >
                  💻
                </button>
        
                <button
                  className={`theme-option ${
                    theme === "dark" ? "active" : ""
                  }`}
                  onClick={() => setTheme("dark")}
                  aria-label="Dark mode"
                >
                  ☾
                </button>
        
              </div>
        
              <a href="#contact" className="nav-button">
                Get Started
              </a>
        
            </div>
        
          </div>
        </header>
      );
}

export default NavBar;