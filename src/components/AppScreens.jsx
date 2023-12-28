import React, { Component } from "react";
import { Container } from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import s1img from '../assets/images/services/s1.jpeg';
import s2img from '../assets/images/services/s2.jpeg';
import s3img from '../assets/images/services/s3.jpeg';
import s4img from '../assets/images/services/s4.jpeg';
import s5img from '../assets/images/services/s5.jpeg';
import s6img from '../assets/images/services/s6.jpeg';
import s7img from '../assets/images/services/s7.jpeg';
import "../assets/styles/app-slider.css"
export default class AppScreens extends Component {
  render() {
    const state = {
      responsive: {
        0: {
          items: 1,
        },
        450: {
          items: 1,
        },
        600: {
          items: 3,
        },
        768: {
          items: 3,
        },
        1024: {
          items: 5,
        },
      },
    }
    return (
      <div className="section-container" id="app-slider">
        <Container>
          <div className="section-title">
            <h2>App</h2>
            <p>Gallery</p>
          </div>
          <OwlCarousel
            className={'owl-theme'}
            center={true}
            loop={true}
            margin={20}
            nav={false}
            dots={true}
            autoplay={true}
            items={4}
            responsive={state.responsive}
            autoplayTimeout={5000}
            smartSpeed={4500}
            animateIn='linear'
            animateOut='linear'
          >
            <div className="slider-item">
              <img className="img-fluid" src={s1img} alt="" />
            </div>
            <div className="slider-item">
              <img className="img-fluid" src={s2img} alt="" />
            </div>
            <div className="slider-item">
              <img className="img-fluid" src={s3img} alt="" />
            </div>
            <div className="slider-item">
              <img className="img-fluid" src={s4img} alt="" />
            </div>
            <div className="slider-item">
              <img className="img-fluid" src={s5img} alt="" />
            </div>
            <div className="slider-item">
              <img className="img-fluid" src={s6img} alt="" />
            </div>
            <div className="slider-item">
              <img className="img-fluid" src={s7img} alt="" />
            </div>
          </OwlCarousel>
        </Container>
      </div >
    );
  }
}