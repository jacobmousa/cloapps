"use client";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactForm() {

    const [messageSent, setMessageSent] = useState(false);
    const [disableSend, setDisableSend] = useState(false);
    const form = useRef();
    
    const sendEmail = (e: any) => {
      e.preventDefault();
      
      setDisableSend(true);
      emailjs
        .sendForm('service_2nf8fbc', 'template_y5tl4ho', e.target, {
          publicKey: 'h5bPoqNtkz6ExeyAE',
        })
        .then(
          () => {
            setMessageSent(true);
            console.log('SUCCESS!');
           },
          (error:any) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return(
        <div className="container py-5">
        <div className="row py-5">
            {messageSent && 
            <div className="text-center">
            <h2>Thank you for contacting us!</h2>
            <p>We have received your message and will get back to you as soon as possible.</p>
            </div> }
            {!messageSent && 
            <form className="col-md-9 m-auto" method="post" role="form" onSubmit={sendEmail}>
                <div className="row">
                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="inputname">Name</label>
                        <input type="text" className="form-control mt-1" id="user_name" name="user_name" placeholder="Name" />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="inputPhone">Phone</label>
                        <input type="phone" className="form-control mt-1" id="user_phone" name="user_phone" placeholder="Phone" />
                    </div>
                </div>
                <div className="mb-3">
                        <label htmlFor="inputemail">Email</label>
                        <input type="email" className="form-control mt-1" id="user_email" name="user_email" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputmessage">Message</label>
                    <textarea className="form-control mt-1" id="message" name="message" placeholder="Message" rows={8} ></textarea>
                </div>
                <div className="row">
                    <div className="col text-end mt-2">
                        <button type="submit" className="btn btn-success btn-lg px-3" disabled={disableSend} >Let’s Talk</button>
                    </div>
                </div>
            </form>
             }
        </div>
    </div>

    );
}