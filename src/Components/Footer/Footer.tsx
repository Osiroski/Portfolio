import React from 'react';
import { Github, Linkedin, Twitter, Whatsapp } from 'react-bootstrap-icons';
import logo from '../../images/icon2.png'
import './footer.css'

const Footer = () => {
    return (<footer>
        <div className="container">
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <p>© Copyright 2021. All right reserved</p>
            </div>
            <div>
                <a href="https://twitter.com/SpontaneousKemi" >
                    <Twitter color='royalblue' size={20} />
                </a>
                <a href="https://www.linkedin.com/in/oluwakemi-adeleke/">
                    <Linkedin color='white' size={20} />
                </a>
                <a href="https://www.behance.net/oluwakemiolivia" >
                    <Github  size={20} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=2348136404552&amp;text=Hey%20this%20is%20Kemi.%20I'm%20looking%20forward%20to%20discussing%20with%20you%20about%20bringing%20your%20ideas%20to%20life." >
                    <Whatsapp color='green' size={20} />
                </a>
            </div>
        </div>
    </footer>
    )
};

export default Footer;
