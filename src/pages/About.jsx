import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className=" aboutimg w-100" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content mt-20 pl-20">
                <h2 className="section__title">We Are Committed To :</h2>

                <p className="section__description">
                  ACE Advisory grew from a vision to create a world-class
                  outsourcing and professional services firm that could service
                  clients across the world and in Bangladesh. Started by two
                  dynamic individuals, the firm has in almost a decade of
                  operations, established a branch which is associated with high
                  quality professional services and in-depth insight into
                  regulatory matters. Led by some of best minds in accounting,
                  payroll, tax, and consulting, ACE Advisory employs people with
                  a diverse range of skills working collaboratively to put the
                  client first. Our people are encouraged to think beyond the
                  obvious and combines strategic thinking, innovative
                  technology, and rigorous research methods to provide advice
                  that doesn’t just solve problems but takes developments to the
                  next level. We focus on providing an integrated set of
                  multidisciplinary services with our deep local and global
                  knowledge. Whether a client wants to setup in Bangladesh or
                  outsource its payroll function, we provide the support by
                  combining deep sector expertise, local insight, and
                  technology.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+880 1616140044</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
