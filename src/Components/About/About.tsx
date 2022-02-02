import React from 'react';
import { Row } from 'react-bootstrap';
import image from '../../images/profile.jpg';
import './about.css';

const About = () => {
    return (
        <section className="about-section container" id="About">
            <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="about-text-div col-lg-6">
                    <div className="header about-header">
                        <div className="inner">
                            <div data-aos="fade-left" className="aos-init aos-animate" data-aos-delay="200">
                                <span>Who I am</span>
                                <span className="line"></span>
                            </div>
                            <h3 data-aos="fade-right" className="aos-init aos-animate" data-aos-delay="300">About Me</h3>
                        </div>
                    </div>
                    <div className="text">
                        <p data-aos="fade-up" className="aos-init aos-animate" data-aos-delay="400"> I’m Noel Osiro, a professional and talented <code>Software Developer</code> with front end and backend development development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at frontend React/Typescript/Nodejs development, backend Django/DRF/REST API. </p>
                        <p data-aos="fade-up-left" className="aos-init aos-animate" data-aos-delay="400"> I develop websites with HTML, CSS and TypescriptScript. I have skills in using design methodologies like Test Driven Design to generate robust code, testing tools like Cypress to run tests. </p>
                        <p data-aos="fade-up-right" className="aos-init aos-animate" data-aos-delay="400"> Being a diligent, hardworking and result oriented, I always work towards achieving best result on each project I lay my hands on. </p>
                    </div>
                    <a href="#CV" data-aos="fade-down" className="aos-init aos-animate" data-aos-delay="500">
                        <span>Download CV</span>
                    </a>
                </div>
                <div className=" col-10 col-sm-8 col-lg-6 image-div aos-init aos-animate" data-aos="fade-right" data-aos-delay="200">
                    <img src={image} alt="" loading="lazy" />
                </div>
                
            </Row>
        </section>);
};

export default About;
