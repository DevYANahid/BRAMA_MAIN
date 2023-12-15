import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "30px" }
          : { marginTop: "0px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content mt-20">
              <h4 className="section__subtitle">About Us :</h4><br />
              <h4 className="section__subtitle">Founder Partner</h4>
              <h2 className="section__title">Fazlul Karim Aney</h2>
              <p className="section__description">
              At ACE Advisory we not only endeavor to simplify complex regulations <br /> and processes for clients, but also assist them in managing their <br /> operations to remain compliant in a cost effective manner.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
              <button className="btn reserve__btn  mt-4">
              <Link to="/cars"> For Details</Link>
            </button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="aboutimg w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
