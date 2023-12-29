import React, { Component } from "react";
import { Container } from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import s1img from '../assets/images/app-screens/1.png';
import s2img from '../assets/images/app-screens/2.png';
import s3img from '../assets/images/app-screens/3.png';
import s4img from '../assets/images/app-screens/4.png';
import s5img from '../assets/images/app-screens/5.png';
import s6img from '../assets/images/app-screens/6.png';
import s7img from '../assets/images/app-screens/7.png';
import s8img from '../assets/images/app-screens/8.png';
import s9img from '../assets/images/app-screens/9.png';
import s10img from '../assets/images/app-screens/10.png';
import s11img from '../assets/images/app-screens/11.png';
import s12img from '../assets/images/app-screens/12.png';
import s13img from '../assets/images/app-screens/13.png';
import s14img from '../assets/images/app-screens/14.png';
import s15img from '../assets/images/app-screens/15.png';
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
            <div className="slider-item">
              <img className="img-fluid" src={s8img} alt="" />
            </div>
            <div className="slider-item">
              <img className="img-fluid" src={s9img} alt="" />
            </div>
            <div className="slider-item">
              <img className="img-fluid" src={s10img} alt="" />
            </div>
            <div className="slider-item">
              <img className="img-fluid" src={s11img} alt="" />
            </div>
            <div className="slider-item">
              <img className="img-fluid" src={s12img} alt="" />
            </div>
            <div className="slider-item">
              <img className="img-fluid" src={s13img} alt="" />
            </div>
            <div className="slider-item">
              <img className="img-fluid" src={s14img} alt="" />
            </div>
          </OwlCarousel>
        </Container>
      </div >
    );
  }
}