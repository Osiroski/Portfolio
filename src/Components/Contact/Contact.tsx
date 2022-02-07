import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';
import { Mailbox, PhoneVibrateFill, PinMap, SendDash } from 'react-bootstrap-icons';
import { sendEmail } from '../../Services/Email';
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
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const sendContact=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        sendEmail(data)
        console.log(event)
    }
    return (
    <section className="contact-section container" id="contact">
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
            <form className="contact-form aos-init aos-animate" data-aos="fade-up" name="contact" onSubmit={sendContact}>
                <input type="text" placeholder="Full Name" name="name" id="name" required onChange={onDataChange} value={data.name} />
                <div>
                    <input type="email" placeholder="Email" name="email" id="email" required onChange={onDataChange} value={data.email} />
                    <input type="number" placeholder="Phone Number" name="phone" id="phone" required onChange={onDataChange} value={data.phone} />
                </div>
                <textarea name="message" cols={30} rows={10} placeholder="Enter your message" id="message" required onChange={onDataChange} value={data.message}></textarea>
                <button type="submit">
                    <SendDash color='black' size={35} />
                    <span style={{ marginLeft: "10px" }}>Submit</span>
                </button>
            </form>
        </div>
    </section>
    );
};

export default Contact;


