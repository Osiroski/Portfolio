import React from 'react';
import './function.css';
import logo from '../../images/dev.png';
import logo2 from '../../images/logo.png';
import { BagCheck, CloudFogFill } from 'react-bootstrap-icons';

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
                            <CloudFogFill size={125} color='yellow' className='mb-4'/>
                        </div>
                        <h5>Cloud Services</h5>
                        <p> I identify with Microsoft Azure Cloud and IBM Cloud solutions. I am capable of deploying full scalable applications, serverless, computing, Dockerization and cloud resource monitoring.</p>
                    </div>
                </div>
                <div className="col-6 col-md-4 themed-grid-col">
                    <div className="services-card backend aos-init aos-animate" 
                    data-aos="fade-up-left" 
                    data-aos-delay="600"
                    data-aos-easing="ease-in-cubic">
                        <div>
                            <BagCheck size={125} color='blue' className='mb-4'/>
                        </div>
                        <h5>Backend Development</h5>
                        <p> I am well proficient with Django Python and Express Node when building backend services with RESTFul APIs. I do  API security and testing to develop robust API endpoints </p>
                    </div>
                </div>
            </div>
        </section>);
};

export default Functions;
