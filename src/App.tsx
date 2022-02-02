import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Jumbo from './Components/Intro/Jumbo';
import AOS from "aos";
import "aos/dist/aos.css";
import About from './Components/About/About';
import Functions from './Components/Function/Functions';
import Process from './Components/Process/Process';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Header />
      <Jumbo />
      <About />
      <Functions />
      <Process />
      <Portfolio />
      <Contact />
      <Footer />
      
      <div className="mobile-nav">
        <div className="container">
          <nav className="nav-bar">
            <ul className="nav-list">
              <li className="nav-list-item mobile-link">
                <a href="#home" className="nav-link">Home</a>

              </li> <li className="nav-list-item mobile-link">
                <a href="#about" className="nav-link">About</a>
              </li> <li className="nav-list-item mobile-link">
                <a href="#services" className="nav-link">Services</a>
              </li> <li className="nav-list-item mobile-link">
                <a href="#portfolio" className="nav-link">Portfolio</a>
              </li> <li className="nav-list-item mobile-link">
                <a href="#contact" className="nav-link">Contact Me</a>
              </li> <li className="nav-list-item mobile-link case-studies">
                <a className="nav-link case-studies" href="./caseStudies.html">Case Studies</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </div>
  );
}

export default App;
