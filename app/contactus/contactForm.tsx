"use client";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";

export default function ContactForm() {

    const [messageSent, setMessageSent] = useState(false);
    const [validated, setValidated] = useState(false);
    //const [disableSend, setDisableSend] = useState(false);
    //const sendForm = useRef(null);
    const sendForm = useRef<HTMLFormElement>(null);
    
    const sendEmailSubmit = (e: any) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        else
        {
            if (sendForm.current)
                {
                    const send = sendForm.current.elements.namedItem('Send') as HTMLButtonElement;
                    send.disabled = true;
                }
            
            sendMail(e);
           
            e.preventDefault();
            e.stopPropagation();

            return;

        }
    setValidated(true);
    //
    //setDisableSend(true);
    };

    const sendMail = async (e:any) => {

        const user_name = sendForm.current!!.elements.namedItem('user_name') as HTMLInputElement;
        const user_phone = sendForm.current!!.elements.namedItem('user_phone') as HTMLInputElement;
        const user_email = sendForm.current!!.elements.namedItem('user_email') as HTMLInputElement;
        const message = sendForm.current!!.elements.namedItem('message') as HTMLInputElement;

        //e.preventDefault();
        try {
            const response = 
                await axios.post('https://4yf5huxfv0.execute-api.us-east-1.amazonaws.com/prod/send-email', 
            {
                "to": "jacobmousa@yahoo.com",
                "subject": `Email from Site ${user_name.value}`,
                "body": `From:${user_name.value}\nPhone:${user_phone.value}\nEmail:${user_email.value}\n${message.value}`
            }
            );
            console.log('Email sent successfully:', response.data);
            setMessageSent(true);
        } catch (error) {
            console.error('Error sending email:', error);
        }

        /*
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
            */
    }
    return(
        <div className="container py-5">
        <div className="row py-5">
            {messageSent && 
            <div className="text-center">
            <h2>Thank you for contacting us!</h2>
            <p>We have received your message and will get back to you as soon as possible.</p>
            </div> }
            {/*<form ref={form} className="col-md-9 m-auto needs-validation" method="post" role="form" onSubmit={sendEmailSubmit}>
            
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
                        <button type="submit" name="Send" className="btn btn-success btn-lg px-3" >Let’s Talk</button>
                       
                    </div>
                </div>
            </form>
            */}

            {!messageSent && 
            
            <Form className="col-md-8 m-auto"  noValidate validated={validated} onSubmit={sendEmailSubmit} ref={sendForm}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Name"
                            defaultValue=""
                            name="user_name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            required
                            type="phone"
                            placeholder="Phone"
                            defaultValue=""
                            name="user_phone"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                            defaultValue=""
                            name="user_email"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            rows={3}
                            placeholder="Message"
                            defaultValue=""
                            name="message"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Col className="text-end">
                        <Button type="submit" name="Send" className="btn btn-success btn-lg px-3">Let&apos;s Talk</Button>
                    </Col>               
                </Row>
            </Form>
             
             }
        </div>
    </div>

    );
}