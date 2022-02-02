import React from 'react';
import './process.css';
import {Bezier2, Journals, LightbulbFill, Sliders } from 'react-bootstrap-icons';

const Process = () => {
    return (
        <section className="workflow-section container">
            <div className="header workflow-header">
                <div className="inner">
                    <div data-aos="fade-up" className="aos-init aos-animate">
                        <span>Work Flow</span>
                        <span className="line"></span>
                    </div>
                    <h3 data-aos="fade-up" className="aos-init aos-animate">My Work Process</h3>
                </div>
            </div>
            <div className="cards-wrapper">
                <div className="card idea aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                    <LightbulbFill color="royalblue" size={40} style={{marginBottom:'20px'}}/>
                    <h6>Discover</h6>
                    <p>I conduct user research to identify the problem I want to solve.</p>
                </div>
                <div className="card plan aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">
                    <Journals color="yellow" size={40} style={{marginBottom:'20px'}}/>
                    <h6>Define</h6>
                    <p>I brainstorm possible design solutions to the identified problem.</p>
                </div>
                <div className="card sketch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="600">
                    <Bezier2 color="pink" size={40} style={{marginBottom:'20px'}}/>
                    <img src="media/work-sketch.svg" alt="" />
                    <h6>Ideate</h6> <p>I create wireframes and sketches of the product I’m about to design.</p>
                </div>
                <div className="card design aos-init aos-animate" data-aos="zoom-in" data-aos-delay="800">
                    <Sliders color="green" size={40} style={{marginBottom:'20px'}}/>
                    <h6>Prototype</h6>
                    <p>I create high fidelity design and prototype the screens.</p>
                </div>
            </div>
        </section>
    );
};
export default Process;
