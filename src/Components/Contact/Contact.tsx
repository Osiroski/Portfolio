import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Mailbox, PhoneVibrateFill, PinMap, SendDash } from 'react-bootstrap-icons';
import './contact.css';

const initialState = {
    name: "",
    email: "",
    phone: "",
    message: ""
}

const Contact = () => {
    const [data, setData] = useState(initialState);
    const onDataChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const title = event.currentTarget.name;
        const value = event.currentTarget.value;
        setData({ ...data, [title]: value })
    }
    const sendEmail=(event:FormEvent)=>{
        event.preventDefault();
        console.log(data)
    }
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
                        <PinMap color='black' size={35} />
                    </div>
                    <p> Nairobi, Kenya</p>
                </div>
                <div className="contact-info aos-init aos-animate" data-aos="fade-up">
                    <div className="contact-image-div">
                        <Mailbox color='black' size={35} />
                    </div>
                    <a href="mailto:noelosiroski@gmail.com">noelosiroski@gmail.com</a>
                </div>
                <div className="contact-info aos-init aos-animate" data-aos="fade-up">
                    <div className="contact-image-div">
                        <PhoneVibrateFill color='black' size={35} />
                    </div>
                    <a href="tel:+234-813-640-4552">+254-729-732-440</a>
                </div>
            </div>
            <form className="contact-form aos-init aos-animate" data-aos="fade-up" name="contact" onSubmit={sendEmail}>
                <input type="text" placeholder="Full Name" name="name" required onChange={onDataChange} />
                <div>
                    <input type="email" placeholder="Email" name="email" required onChange={onDataChange} />
                    <input type="number" placeholder="Phone Number" name="phone" required onChange={onDataChange} />
                </div>
                <textarea name="message" id="" cols={30} rows={10} placeholder="Enter your message" required onChange={onDataChange}></textarea>
                <button type="submit">
                    <SendDash color='black' size={35} />
                    <span style={{ marginLeft: "10px" }}>Submit</span>
                </button>
            </form>
        </div>
    </section>);
};

export default Contact;
