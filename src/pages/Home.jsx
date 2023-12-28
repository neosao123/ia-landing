import React, { useEffect } from "react";
import "../assets/styles/main.css";
import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Statement from "../components/Statement";
import Objectives from "../components/Objectives";
import Success from "../components/Success";
import PartnerSlider from "../components/PartnerSlider";
import AppScreens from "../components/AppScreens";
import Explore from "../components/Explore";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <Header />
      <PartnerSlider />
      <Success />
      <AppScreens />
      <Services />
      <Objectives />
      <Statement />
      <About />
      <Explore />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
