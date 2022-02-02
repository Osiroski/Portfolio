import React from 'react';
import './contact.css';

const Contact = () => {
    return (<section className="contact-section container" id="contact">
        <div className="header contact-header">
            <div className="inner">
                <div data-aos="fade-up" className="aos-init aos-animate">
                    <span>Contact Me</span>
                    <span className="line"></span>
                </div>
                <h3 data-aos="fade-up" className="aos-init aos-animate">Get In Touch</h3>
            </div>
        </div>
        <div className="contact-header-text aos-init aos-animate" data-aos="fade-up">
            <p>I am available to work on your projects and bring your ideas to life. I am just a click away.</p>
        </div>
        <div className="contact-flex">
            <div className="left-icons">
                <div className="contact-info aos-init aos-animate" data-aos="fade-up">
                    <div className="contact-image-div">
                        <img src="media/contact-address.svg" alt="" />
                    </div>
                    <p>G.R.A Ikeja, Lagos</p>
                </div>
                <div className="contact-info aos-init aos-animate" data-aos="fade-up">
                    <div className="contact-image-div">
                        <img src="media/contact-email.svg" alt="" />
                    </div>
                    <a href="mailto:oluwakemiadeleke20@gmail.com">oluwakemiadeleke20@gmail.com</a>
                </div>
                <div className="contact-info aos-init aos-animate" data-aos="fade-up">
                    <div className="contact-image-div">
                        <img src="media/contact-phone.svg" alt="" />
                    </div>
                    <a href="tel:+234-813-640-4552">+234-813-640-4552</a>
                </div>
            </div>
            <form className="contact-form aos-init aos-animate" data-aos="fade-up" name="contact" method="POST">
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden" style={{ visibility: "hidden", height: "0" }}>
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <input type="text" placeholder="Full Name" name="name" required />
                <div>
                    <input type="email" placeholder="Email" name="email" required />
                    <input type="number" placeholder="Phone Number" name="phone-number" required />
                </div>
                <textarea name="message" id="" cols={30} rows={10} placeholder="Enter your message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    </section>);
};

export default Contact;
