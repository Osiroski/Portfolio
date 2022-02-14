import React from 'react';
import './portfolio.css';

const Portfolio = () => {
    return (
        <section className="portfolio-section container" id="portfolio">
            <div className="header portfolio-header">
                <div className="inner"> <div data-aos="fade-up" className="aos-init aos-animate">
                    <span>My Project</span> <span className="line"></span>
                </div>
                    <h3 data-aos="fade-up" className="aos-init aos-animate">My Portfolio</h3>
                </div>
            </div>
            <div className="flex-container aos-init aos-animate" data-aos="fade">
                <div className="profile-container port-container-1">
                    <div className="profile-wrapper">
                        <div className="profile-card">
                            <h4>Recyski App</h4>
                            <p>A digital waste recycling platfrom mobile app which allows users to capitalize on recycling by trading on wastes. Users can also compete with friends for points, prizes and other rewards. </p>
                            <a href="https://young-wave-31304.herokuapp.com/">View Design</a>
                        </div>
                    </div>
                </div>
                <div className="profile-container port-container-2">
                    <div className="profile-wrapper"> <div className="profile-card">
                        <h4>Techie Website</h4>
                        <p> A frontend SPA to showcase solutions to the Pesapal Junior Developer Challange. The application consists of a webserver that serves static/dnyamic content with a configurable tcp port. </p>
                        <a href="https://pesapaldev.herokuapp.com/">View Design</a>
                    </div>
                    </div>
                </div>
                <div className="profile-container port-container-3">
                    <div className="profile-wrapper">
                        <div className="profile-card">
                        <h4>Django Python</h4>
                            <p> Building and testing RESTFul APIs with Django Restframework and Python 3. The backend supports JWT authenication for login, CRUD requests and Postgresql database </p>
                            <a href="https://github.com/Osiroski/Recyski_backend">View Design</a>
                        </div>
                    </div>
                </div>
                <div className="profile-container port-container-4">
                    <div className="profile-wrapper">
                        <div className="profile-card">
                            <h4>IBM Cloud Computing V2</h4>
                            <p> This badge is awarded to candidates that have passed the Foundations of IBM Cloud certification exam. They have demonstrated the necessary skills to engage with clients that are looking to select and design a solution that is based on IBM Cloud.</p>
                            <a href="https://www.credly.com/badges/c9fa417a-64a5-4273-aaf5-0fee889fe88c/public_url">View Design</a>
                        </div>
                    </div>
                </div>
                <div className="profile-container port-container-5">
                    <div className="profile-wrapper">
                        <div className="profile-card">
                            <h4>Plum profile</h4>
                            <p> Plum is a revolutionary talent assessment platform that powers more objective talent decisions across the employee lifecycle using the predictive power of psychometric data.</p>
                            <a href="https://secure.plum.io/p/fk4kFYfZC3DKTY88V-jJZg">View Profile</a>
                        </div>
                    </div>
                </div>
                <div className="profile-container port-container-6">
                    <div className="profile-wrapper">
                        <div className="profile-card">
                            <h4>Tuteria Website</h4>
                            <p> Tuteria Limited is a company which offers both onine and offline tutoring services to people. The landing page was designed to increase customer’s conversion rate and improve usability. </p>
                            <a href="https://www.behance.net/gallery/104473567/School-Landing-Page">View Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
