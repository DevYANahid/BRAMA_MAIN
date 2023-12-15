import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For Contact A Day</h4>
            <h1 className="mb-4" style={{color:"red"}}>MK ASSOCIATE</h1>
            <h3 className="text-light mb-4"> very own cloud-based SaaS solution to all your HR & payroll needs.</h3>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars"> For Details</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For Given A Day</h4>
            <h1 className="mb-4" style={{color:"red"}}>ANDERSEN</h1>
            <h3 className="text-light mb-4">  Establishes Presence in Bangladesh with Collaborating Firm ACE Advisory.</h3>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">For Details</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For Given A Day</h4>
            <h1 className="mb-4" style={{color:"red"}}>We Are</h1>
            <h3 className="text-light mb-4">ISAE 3000 Type 1 Certified!</h3>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">For Details</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
