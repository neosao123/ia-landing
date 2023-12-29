import React, { Component } from "react";
import { Col, Container } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/styles/partner-slider.css";
import introVideo from "../assets/images/intro-video.mp4";
export default class PartnerSlider extends Component {
  render() {
    const state = {
      responsive: {
        0: {
          items: 1,
        },
        450: {
          items: 2,
        },
        600: {
          items: 3,
        },
        768: {
          items: 4,
        },
        1024: {
          items: 6,
        },
      },
    };

    return (
      <>
        <div className="d-none section-container" id="partner-slider">
          <Container>
            <OwlCarousel
              className={"owl-theme"}
              loop={true}
              margin={10}
              nav={false}
              dots={false}
              autoplay={true}
              autoplayTimeout={5000}
              items={4}
              smartSpeed={4500}
              animateIn="linear"
              animateOut="linear"
              responsive={state.responsive}
            >
              <div className={"item"}>
                <img className="" src={logo} alt="" />
              </div>
              <div className={"item"}>
                <img className="" src={logo} alt="" />
              </div>
              <div className={"item"}>
                <img className="" src={logo} alt="" />
              </div>
              <div className={"item"}>
                <img className="" src={logo} alt="" />
              </div>
              <div className={"item"}>
                <img className="" src={logo} alt="" />
              </div>
            </OwlCarousel>
          </Container>
        </div>

        <div className="section-container">
          <Container>
            <Col
              md={10}
              lg={10}
              className="text-center offset-md-1 offset-lg-1"
            >
              <div style={{ fontSize: "1.5rem", textAlign: "justify", display: "none" }}>
                Unleash the power of Indian innovation and ambition! It's time
                to rewrite the story of professional community networks, to
                carve a space that's truly ours, where our brilliance and
                aspirations shine brighter than ever before. Introducing
                IndiansAbroad - the Indian professional community network
                platform designed to celebrate our culture, our dreams, and our
                incredible potential for Indians by Indians We've seen community
                networks giants rise from distant lands, shaping the way we
                connect, communicate, and share our lives. But now, it's OUR
                turn to make our mark on the world stage.
              </div>
              <div>
                <video width="auto" height="400" controls>
                  <source src={introVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Col>
          </Container>
        </div>
      </>
    );
  }
}
