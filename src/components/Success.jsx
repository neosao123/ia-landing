import React from "react";
import { Col, Container } from "react-bootstrap";
import "../assets/styles/success.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Success = () => {
  return (
    <div className="section-container bg-theme-color">
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <Container>
          <Col
            sm={10}
            md={10}
            lg={10}
            className="text-center offset-md-1 offset-lg-1"
          >
            <p className="success-title text-light mb-4">
              Your Success, Our Priority!
            </p>
            <div
              className=""
              style={{
                fontSize: "1.2rem",
                textAlign: "justify",
                marginBottom: "2.5rem",
              }}
            >
              At IndiansAbroad we're more than just an app. We are your trusted partner in success. Your
              journey, your aspirations, and your achievements are at the heart of everything we do.
            </div>
            <div
              className=""
              style={{
                fontSize: "1.2rem",
                textAlign: "justify",
                marginBottom: "2.5rem",
              }}
            >
              We curate opportunities specifically for you, connecting you with like-minded Indian
              professionals and organizations that align with your career goals.
            </div>
            <div
              className=""
              style={{
                fontSize: "1.2rem",
                textAlign: "justify",
                marginBottom: "2.5rem",
              }}
            >
              Your success is our greatest achievement. We are here to celebrate your victories, support
              you through challenges, and provide you with the resources you need to thrive.
            </div>
            <div
              className=""
              style={{
                fontSize: "1.2rem",
                textAlign: "justify",
                marginBottom: "2.5rem",
              }}
            >
              Join IndiansAbroad and experience the benefits of being part of a community that cares
              about your growth, your dreams, and your future.
            </div>
          </Col>
        </Container>
      </AnimationOnScroll>
    </div>
  );
};

export default Success;
