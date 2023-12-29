import React from "react";
import { Container, Row } from "react-bootstrap";
import ServiceRow from "./_main/services/ServiceRow";
import s1img from "../assets/images/services/s1.jpeg";
import s2img from "../assets/images/services/s2.jpeg";
import s3img from "../assets/images/services/s3.jpeg";
import s4img from "../assets/images/services/s4.jpeg";
import s5img from "../assets/images/services/s5.jpeg";
import s6img from "../assets/images/services/s6.jpeg";
import s7img from "../assets/images/services/s7.jpeg"; 

import "../assets/styles/services.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const servicesData = [
  {
    image: s1img,
    title: "User Profile",
    text: "Create professional user profiles that includes profile pictures, your place in India, current living country, university/company.",
  },
  {
    image: s2img,
    title: "Content Sharing",
    text: "Users can share articles, posts, images, and videos to demonstrate their expertise and engage with their network. Enable users to engage with posts by liking, commenting, and sharing them. ",
  },
  {
    image: s3img,
    title: "Customized Search", //Strong customized search option
    text: "Our application offers a powerful and customizable search option that allows you to find the right connections tailored specifically to name, country, city, university and company. With our search tool, you can discover everyone you need to make your life abroad more comfortable and enjoyable.",
  },
  {
    image: s4img,
    title: "Private Chat Room",
    text: "Private messaging allows users to have one-on-one conversations that are not visible to others. Experience conversations that are more than just words on a screen; they're exchanges of love, understanding, and a shared sense of belonging.",
  },
  {
    image: s5img,
    title: "Group Room",
    text: "Form or join groups that celebrate your hometown, language, or favorite interests. It's like bringing a piece of 'home' with you wherever you go.",
  },
  {
    image: s6img,
    title: "Discussion Forum",
    text: "Engage in meaningful conversations, gain valuable insights, and participate in discussions on topics that matter to you. Write your queries and get responses from the people who have experienced exactly the same thing. Connect with fellow expatriates, and enthusiasts who are passionate about what you're interested in.",
  },
];

const servicesData2 = [
  {
    image: s7img,
    title: "Community Pages",
    text: "Join or create community pages dedicated to your city, region, interests or cultural background. You can even create a page for your consultancy, company or organization through which you can connect with plethora of Indians easily and swiftly. Our community page also allows chat feature.",
  },
];

const Services = () => {
  return (
    <div className="section-container bg-theme-color" id="services">
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <Container>
          <div className="section-title">
            <h2 className="text-white">Features</h2>
            <p className="text-white">Services</p>
          </div>
          <Row>
            {servicesData.map((service, index) => {
              return <ServiceRow num={index} service={service} />;
            })}
          </Row>
          <Row className="justify-content-center">
            {servicesData2.map((service, index) => {
              return <ServiceRow num={index} service={service} />;
            })}
          </Row>
        </Container>
      </AnimationOnScroll>
    </div>
  );
};

export default Services;
