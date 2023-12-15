import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from "reactstrap";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

function Team() {
  return (
    <Helmet title="Out Team">
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
  )
}

export default Team