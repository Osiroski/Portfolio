import React from 'react';
import './function.css';
import logo from '../../images/dev.png';
import logo2 from '../../images/logo.png';

const Functions = () => {
    return (
        <section className="services-section container" id="services">
            <div className="header services-header">
                <div className="inner">
                    <div data-aos="fade-up" className="aos-init aos-animate">
                        <span>What I do</span>
                        <span className="line"></span>
                    </div>
                    <h3 data-aos="fade-up" className="aos-init aos-animate">My Services</h3>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-6 col-md-4 themed-grid-col">
                    <div className="services-card interface aos-init aos-animate" 
                    data-aos="fade-down-right" 
                    data-aos-delay="200"
                    data-aos-easing="ease-in-sine">
                        <div>
                            <img src={logo2} alt="" width={'125px'} height={'125px'} />
                        </div>
                        <h5>Frontend Development</h5>
                        <p> I work with React Framework and Typescript tools to create high-fidelity SPAs and prototypes. I design accessible and usable products. </p>
                    </div>
                </div>
                <div className="col-6 col-md-4 themed-grid-col">
                    <div className="services-card development aos-init aos-animate" 
                    data-aos="fade-down-left" 
                    data-aos-delay="400"
                    data-aos-easing="ease-in-quart">
                        <div>
                            <img src={logo} alt="" width={'100px'} height={'100px'} />
                        </div>
                        <h5>Website Development</h5>
                        <p> I use various web technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts. </p>
                    </div>
                </div>
                <div className="col-6 col-md-4 themed-grid-col">
                    <div className="services-card marketing aos-init aos-animate" 
                    data-aos="fade-up-left" 
                    data-aos-delay="600"
                    data-aos-easing="ease-in-cubic">
                        <div>
                            <img src="media/digital-marketing.svg" alt="" />
                        </div>
                        <h5>Digital Marketing</h5>
                        <p> I identify and evaluates new digital technologies and use web analytics tools to measure site traffic to better optimize marketing campaigns. </p>
                    </div>
                </div>
            </div>
        </section>);
};

export default Functions;
