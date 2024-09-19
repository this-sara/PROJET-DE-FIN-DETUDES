// import React from 'react'
import "./join.css"
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { useRef } from 'react';

import { Container, Row, Col } from "reactstrap";

const Newsletter = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_p31zlt4', 'template_zdz8ykg', form.current, {
        publicKey: 'RoV5gqS8ijad3rlHp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({title:'bien reçu',icon:'success',timer:3500});
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Subscribe & get 5% off</h2>
            <p className="p">Stay up to date with our monthly e-newsletter, which features specials, new product launches & planning tips.</p>
            <form className="subscribe" ref={form} onSubmit={sendEmail}>
              <input type="email" placeholder="Email" required name="user_email"/>
              <button className="btn">Subscribe</button>
            </form>
            <p className="p">* We will never share your email address & you can opt out at any time, we promise.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
