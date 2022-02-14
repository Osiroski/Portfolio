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
                <p>© Copyright 2022. All right reserved</p>
            </div>
            <div>
                <a href="https://twitter.com/Osiroski" >
                    <Twitter color='royalblue' size={20} />
                </a>
                <a href="https://www.linkedin.com/in/noel-osiro-645995a0/">
                    <Linkedin color='white' size={20} />
                </a>
                <a href="https://github.com/Osiroski" >
                    <Github  size={20} />
                </a>
                <a href="https://wa.me/254729732440" >
                    <Whatsapp color='green' size={20} />
                </a>
            </div>
        </div>
    </footer>
    )
};

export default Footer;
