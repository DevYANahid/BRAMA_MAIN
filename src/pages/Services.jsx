import React from "react";
import Img1 from "../assets/website/choose-us-1.png";
import Img2 from "../assets/website/choose-us-2.png";
import Img3 from "../assets/website/choose-us-3.png";
import Img4 from "../assets/website/choose-us-4.png";
import Img5 from "../assets/website/choose-us-5.png";
import Img6 from "../assets/website/choose-us-6.png";
import '../styles/service.css'

import { FaStar } from "react-icons/fa";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    title: "INTEGRATED SOLUTIONS",
    description:
      "Our teams are trained to advise clients on multi-dimensional areas to ensure compliance to all areas of regulations such as tax, accounting, audit, and secretarial.",
  },
  {
    id: 2,
    img: Img2,
    title: "TECHNOLOGY AS PART OF SERVICE",
    description:
      "Each part of our service delivery model incorporates the use of cutting-edge technology to ensure effciency, accuracy and data security.",
  },
  {
    id: 3,
    img: Img3,
    title: "ADAPTIVE SOLUTIONS",
    description:
      "Our services are designed so that they can be tailored for clients of any size.",
  },
  {
    id: 4,
    img: Img4,
    title: "LOCATED CENTRALLY",
    description:
      "Modern Office with an emphasis on openness and communication located in the heart of Dhaka – Banani.",
  },
  {
    id: 5,
    img: Img5,
    title: "COST EFFECTIVE",
    description:
      "Our services are more cost effective than maintaining an in-house team.",
  },
  {
    id: 6,
    img: Img6,
    title: "IN-DEPTH RESEARCH",
    description:
      "Clients get access to in-depth research, regular updates on changes in regulations, and high-quality publications.",
  },
];

const Services = ({ handleOrderPopup }) => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Trending Works
            </p>
            <h1 className="text-3xl font-bold">Why Choose Us</h1>
            <p className="text-xs text-gray-400">
            With over 10 years of experience, I have successfully navigated the complex landscapes of finance, accounting, and corporate affairs. 
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20  md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                className="m-9  nedd rounded-2xl bg-white relative shadow-xl duration-high group max-w-[300px]">
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[100px] block mx-auto transform -translate-y-14  duration-300 shadow-md honbg"
                  />
                </div>
                <div className=" p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1 ">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{service.title}</h1>
                  <p className="text-gray-500 text-sm ">
                    {service.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    
                  >
                    Need Service?
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
