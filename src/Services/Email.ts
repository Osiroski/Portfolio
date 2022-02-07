import emailjs from '@emailjs/browser';

const {REACT_APP_SERVICE_ID,REACT_APP_TEMPLATE_ID,REACT_APP_USER_ID} = process.env;

export const sendEmail = (parameters:any) => {
    const templateParams = {
        name: parameters.name,
        email: parameters.email,
        message: parameters.message,
        phone: parameters.phone,
    }
    emailjs.send(REACT_APP_SERVICE_ID!, REACT_APP_TEMPLATE_ID!, templateParams, REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };