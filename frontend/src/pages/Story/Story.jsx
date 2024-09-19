// import React from 'react'
import './Story.css';


import { Container, Row, Col } from "reactstrap";

import CountUp from "react-countup";
import ChooseUs from '../../components/ChooseUs/Choose';


const Story = () => {
  return (<>
    <section className='kol'>
      <Container>
        <h1 className='centree allo'>Notre Histoire.</h1>
        <h6 className='centreee allo'>Fondatrice</h6>
        <p className='centre allo'>Titulaire d’un bachelor en génie informatique et électronique de Northeastern University

et un MBA en Management de Bentley College à Boston, Zina Lazrak, fondatrice de la 1ère agence de conseil en organisation au Maroc.

Spécialisée dans le rangement et l’organisation, elle a su développer la marque Family Organizer depuis plus de 5 ans, la 1ère marque d’outils de planification au Maroc connue pour les organisateurs de vie 100% made in Morocco.

En février 2021, elle est devenue la 1ère Consultante Certifiée KonMari™ au Maroc. « ZL Organisez-vous« .</p>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src="story.jpg" alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2 className='fofa'>About Us</h2>
              <p >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K"  />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='choose'>
      <ChooseUs/>
      </div>
      
    </section>

    
    </>
  );
};

export default Story;

