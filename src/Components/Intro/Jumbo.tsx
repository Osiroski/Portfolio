import React from 'react';
import image from '../../images/myAvatar.png';
import { Container, Row} from 'react-bootstrap';
import './jumbo.css';
const Jumbo = () => {
  return (
  <Container fluid className=" col-xxl-11 col-lg-10 px-4 py-5" style={{marginTop:"5%"}} id='Intro'>
        <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 intro-text">Noel Osiro</h1>
            <h3 className='display-5'>Fullstack Web Developer 💻</h3>
            <p className='lead'>I am a professional Developer with great experience on <br/> Frontend and Backend Stacks</p>   
            <a href='#Contacts' className='hire' style={{transform: "translate(0px, 0px)", opacity: "1"}}> <span>Hire Me</span> </a>
          </div>
        </Row>
      </Container>
  )};

export default Jumbo;
