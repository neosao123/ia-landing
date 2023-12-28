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
import s8img from "../assets/images/services/s8.jpeg";

import "../assets/styles/services.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const servicesData = [
  {
    image: s1img,
    title: "User Profile",
    text: "Create professional user profiles that includes profile pictures, current living country, university/company, languages they speak. ",
  },
  {
    image: s2img,
    title: "Content Sharing",
    text: "Users can share articles, posts, images, and videos to demonstrate their expertise and engage with their network. Enable users to engage with posts by liking, commenting, and sharing them. ",
  },
  {
    image: s3img,
    title: "Customized Search", //Strong customized search option
    text: "Our application offers a powerful and customizable search option that allows you to find the right connections tailored specifically to name, country, city, university and company. With our search tool, you can discover everyone you need to make your life abroad more comfortable and enjoyable",
  },
  {
    image: s4img,
    title: "Private Chat Room",
    text: "Private messaging allows users to have one-on-one conversations that are not visible to others. It's a secure and confidential way for community members to communicate privately.",
  },
  {
    image: s5img,
    title: "Group Room",
    text: "Group chats are real-time chat rooms where multiple users can join and converse together. They are designed for discussions among a specific group of people, often centered around a particular topic or shared interest within the community.",
  },
  {
    image: s6img,
    title: "Discussion Forum",
    text: "Engage in meaningful conversations, gain valuable insights, and participate in discussions on topics that matter to you. Our discussion forums cover a wide range of subjects, from career advice and travel tips to cultural exchange and news updates. Connect with fellow expatriates, and enthusiasts who are passionate about what you're interested in.",
  },
];

const servicesData2 = [
  {
    image: s8img,
    title: "Community Pages and Groups",
    text: "Join or create community pages and groups dedicated to your city, region, interests, or cultural background. These spaces are where you can connect with others who understand the unique blend of nostalgia and excitement that comes with being an Indian living abroad. Share stories, experiences, and tips, and foster a sense of belonging within your local and global Indian community.",
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
