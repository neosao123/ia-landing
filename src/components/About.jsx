import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import indiansImg from "../assets/images/indians.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "../assets/styles/about.css";

const About = () => {
  return (
    <div className="section-container" id="about">
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <Container>
          <div className="section-title">
            <h2>About</h2>
            <p>IndiansAbroad</p>
          </div>
          <Row>
            <Col
              md={12}
              lg={6}
              className="about-section-text order-sm-1 order-md-0"
            >
              <Stack>
                <div className="txt mb-3">
                  IndiansAbroad is a global Android and iOS application that caters to the needs of Indians
                  living outside of India.
                </div>
                <div className="txt mb-3">
                  Our purpose is to provide a platform for Indians in abroad to connect, share, and stay
                  informed about their homeland and culture. With our user-friendly interface and
                  extensive features, we strive to make the transition to a new country as seamless as
                  possible.
                </div>
                <div className="txt mb-3">
                  At IndiansAbroad we're committed to making your journey as an Indian living abroad
                  more enriching, enjoyable, and connected. Our platform is designed to be your virtual
                  bridge to India, ensuring that you can cherish your heritage while embracing the
                  opportunities that come with your global adventures. Join our community today and
                  embark on a new chapter of your life with the support and companionship of your fellow
                  Indians abroad. Together, we can make the world feel a little more like home.
                </div>
              </Stack>
            </Col>
            <Col md={12} lg={6} className="order-sm-0 order-md-1 mb-sm-3">
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOnce={true}
              >
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src={indiansImg}
                    alt="Indians Abroad Logo"
                    style={{ maxHeight: "300px", borderRadius: "2rem" }}
                  />
                </div>
              </AnimationOnScroll>
            </Col>
          </Row>
        </Container>
      </AnimationOnScroll>
    </div>
  );
};

export default About;
