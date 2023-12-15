import React from "react";

import Services from "./Services";
import ServicesList from "../components/UI/ServicesList";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const Service_page = () => {
  return (
    <Helmet title="Services">
      <CommonSection title="Our Service" />

          {/* ========== services section ============ */}
          <Services />

{/* ========== services section ============ */}
<section>
  <Container>
    <Row>
      <Col lg="12" className="mb-5 text-center">
        <h6 className="section__subtitle">See our</h6>
        <h2 className="section__title">Popular Services</h2>
      </Col>

      <ServicesList />
    </Row>
  </Container>
</section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Our Meeting</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>

    </Helmet>
  );
};

export default Service_page;