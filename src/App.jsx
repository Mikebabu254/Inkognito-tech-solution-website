import React from "react";
import "./App.css";
import {useState, useEffect} from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/main/Hero";
import Services from "./components/main/Services";
import Solution from "./components/main/Solution";
import Portfolio from "./components/main/Portfolio";
import Contact from "./components/main/Contact";
import About from "./components/main/about";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <main>
        <Hero/>
        <Services/>
        <Solution/>
        <Portfolio/>
        <About/>
        <Contact/>
      </main>
      <Footer/>

    </div>
  );
}

export default App;