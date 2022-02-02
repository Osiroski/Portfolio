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
                            <h4>Tadio Mobile App</h4>
                            <p>A cryptocurrency mobile app which allows users buy and sell bitcoins, Etherum, Coinbase and Gift cards. Users can also recharge their mobile numbers from the app directly. </p>
                            <a href="https://www.behance.net/gallery/104144345/Crypto-App">View Design</a>
                        </div>
                    </div>
                </div>
                <div className="profile-container port-container-2">
                    <div className="profile-wrapper"> <div className="profile-card">
                        <h4>ITB Agency Website</h4>
                        <p> ITB media agency is a company into corporate communications and business development. The website was designed to increase the company’s conversion rate of customers. </p>
                        <a href="https://www.behance.net/gallery/103542267/Media-Agency-website">View Design</a>
                    </div>
                    </div>
                </div>
                <div className="profile-container port-container-3">
                    <div className="profile-wrapper">
                        <div className="profile-card">
                            <h4>DesignPal Mobile App</h4>
                            <p> DesignPal is an AR mobile app which assists users to scan their new apartment and suggest various interior decorations and styles suitable for that particular apartment. </p>
                            <a href="https://www.behance.net/gallery/103838241/Interior-Design-App">View Design</a>
                        </div>
                    </div>
                </div>
                <div className="profile-container port-container-4">
                    <div className="profile-wrapper">
                        <div className="profile-card">
                            <h4>Afigo Website</h4>
                            <p> Afigo website is a platform that shows tourists great places in Nigeria. The website was designed with quite a number of features that serves its purpose as a travel agency. </p>
                            <a href="https://www.behance.net/gallery/103838821/Travel-Website">View Design</a>
                        </div>
                    </div>
                </div>
                <div className="profile-container port-container-5">
                    <div className="profile-wrapper">
                        <div className="profile-card">
                            <h4>Pixelshub Mobile App</h4>
                            <p> PixelsHub is a mobile app which connects professional photographers and creative artists to their potential clients globally. </p>
                            <a href="https://www.behance.net/gallery/104417865/Photographers-Platform">View Profile</a>
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
