import React from "react";
import Heading from "../common/Heading";
import { about } from "../data/Data";

export default function About() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to{" "}
                <span className="text-primary text-uppercase">Luxury Gardens</span>
              </h1>
              <p className="mb-4">
                Discover the epitome of elegance and comfort at Luxury Gardens, your 
                home away from home. Nestled in the heart of the city, our hotel offers 
                unparalleled service and amenities that cater to both leisure and business 
                travelers. Whether you're here to unwind in our lush gardens or to host 
                a corporate event in our state-of-the-art facilities, we promise an 
                unforgettable stay filled with luxury and relaxation.
              </p>
              <p className="mb-4">
                Our rooms and suites are designed with your utmost comfort in mind, 
                featuring modern décor, plush bedding, and breathtaking views. Enjoy 
                gourmet dining at our on-site restaurant, relax by the pool, or indulge 
                in a spa treatment. At Luxury Gardens, we strive to make every moment 
                of your stay exceptional.
              </p>
              <div className="row g-3 pb-4">
                {about.map((item, key) => (
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s" key={key}>
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        {item.icon}
                        <h2 className="mb-1" data-toggle="counter-up">
                          {item.count}
                        </h2>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="">
                Explore More
              </a>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="/assets/img/about-1.jpg"
                    style={{ marginTop: "25%" }}
                    alt="Luxury Gardens Hotel Room"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="/assets/img/about-2.jpg"
                    alt="Luxury Gardens Dining"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-50 wow zoomIn"
                    data-wow-delay="0.5s"
                    src="/assets/img/about-3.jpg"
                    alt="Luxury Gardens Pool"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="/assets/img/about-4.jpg"
                    alt="Luxury Gardens Spa"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
