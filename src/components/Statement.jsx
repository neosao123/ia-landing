import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import "../assets/styles/statement.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Statement = () => {
  return (
    <div className="section-container bg-theme-color">
      <Container>
        <Row>
          <Col md={6} className="mb-5 mb-lg-0 pe-md-5">
            <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
              <div className="statement-card">
                <div className="section-title">
                  <h2 className="d-none text-light">Indians Abroad's</h2>
                  <p className="text-light text-center">Mission</p>
                </div>
                <Stack>
                  <div className="justify-text">
                    Our Mission is to connect and empower the global Indian
                    diaspora by providing a comprehensive online platform that
                    fosters community, preserves culture, and facilitates
                    meaningful connections. We are dedicated to supporting
                    Indians living abroad throughout their journey, making them
                    feel at home no matter where they are in the world.
                  </div>
                </Stack>
              </div>
            </AnimationOnScroll>
          </Col>
          <Col md={6} className="mb-5 mb-lg-0 ps-md-5">
            <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
              <div className="statement-card">
                <div className="section-title">
                  <h2 className="d-none text-light">Indians Abroad's</h2>
                  <p className="text-light text-center">Vision</p>
                </div>
                <Stack>
                  <div className="justify-text">
                    Our Vision is to become the go-to platform for Indians
                    living abroad, a virtual bridge connecting them to their
                    roots, to each other, and to a wealth of resources. We
                    aspire to create a united and thriving global Indian
                    community that thrives on cultural richness, mutual support,
                    and the shared joy of embracing both their heritage and the
                    opportunities of the world.
                  </div>
                </Stack>
              </div>
            </AnimationOnScroll>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Statement;
