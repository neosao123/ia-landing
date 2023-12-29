import React from "react";
import NavMenu from "./_main/NavMenu";
import { Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GrAppleAppStore } from "react-icons/gr";
import { BiLogoPlayStore } from "react-icons/bi";
import "../assets/styles/header.css";

const Header = () => {
  return (
    <div>
      <NavMenu />
      <div
        className="section-container p-0 m-0 d-flex align-items-center"
        id="home"
      >
        <section id="hero">
          <Container>
            <Row className="justify-content-between">
              <Col
                lg={7}
                className="pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center"
              >
                <div>
                  <h1 className="animate__animated animate__fadeInLeft">
                    Connect with <span>Indian Expats</span>
                  </h1>
                  <h2 className="animate__animated animate__fadeInRight">
                    Connecting Indians Worldwide!<br />
                    Welcome to IndiansAbroad - Your connection to home,
                    wherever you are!
                  </h2>
                  <div className="text-center text-lg-start">
                    <Link
                      href="#about"
                      className="btn-get-started me-2 animate__animated animate__fadeInLeft animate__delay-1s"
                    >
                      {" "}
                      <BiLogoPlayStore /> Play Store
                    </Link>
                    <Link
                      href="#about"
                      className="btn-get-started animate__animated animate__fadeInRight animate__delay-1s"
                    >
                      {" "}
                      <GrAppleAppStore /> App Store
                    </Link>
                  </div>
                </div>
              </Col>
              <div
                className="col-lg-4 order-1 order-lg-2 hero-img"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <img src="" className="img-fluid animated" alt="" />
              </div>
            </Row>
          </Container>
        </section>
      </div>
      <div className="section-container bg-theme-color">
        <Container>
          <Col md={10} lg={10} className="offset-md-1 offset-lg-1">
            <div style={{ fontSize: "1.7rem", marginBottom: "2rem", fontWeight: "bold", textAlign: "center" }}>
              Indian professional community network platform designed specifically for <span style={{ textDecoration: "underline" }}>Indians by Indians</span>.
            </div>
            <div style={{ fontSize: "1.5rem", textAlign: "justify" }}>
              Introducing IndiansAbroad, the ultimate Android and iOS application
              designed to connect Indians across the globe. Our platform brings together
              the Indian diaspora, providing a seamless experience for networking,
              cultural exchange, and community building. Whether you're a student,
              professional, or simply passionate about Indian culture, IndiansAbroad
              offers a one-stop solution to connect, collaborate, and celebrate together.
              Join our global community today and unlock a world of opportunities,
              friendships, and shared experiences.
            </div>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default Header;
