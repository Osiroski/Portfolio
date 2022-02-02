import React from 'react';
import './Header.css';
import logo from '../../images/icon2.png';

const Header = () => {
  return (
    <div className='container-fluid'>
    <header className="header-section" id="home">
      <span style={{ display: "block", width: "100vw", height: "84px" }}>
        <nav className="navbar navbar-expand-md px-0 main-nav sticky nav-index stuck" 
        data-sticky-wrap="true" 
        data-sticky-class="stuck" 
        style={{ opacity: "1", position: "fixed", top: "0px", left: "0px", width: "100vw" }}>
          <div className="container px-4">
            <a className="navbar-brand" href="#home">
              <img src={logo} alt="" style={{borderRadius: "1.3rem"}} />
            </a>
            <button className="navbar-toggler open-nav" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <div className="toggle-menu-wrapper">
                <div className="toggle-menu">
                  <div className="line line1"></div>
                  <div className="line line2"></div>
                  <div className="line line3"></div>
                </div>
              </div>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#About">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#contact">Contact Me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link case-studies" href="./caseStudies.html">Case Studies</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </span>
       </header>
       </div>
  )
};

export default Header;
