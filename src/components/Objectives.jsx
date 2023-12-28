import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Container, Row } from 'react-bootstrap'
import ObjectiveRow from './_main/objectives/ObjectiveRow';

const objectivesData = [
  {

    title: "Foster Community",
    text: "Create a vibrant online community of Indians living abroad, fostering connections, shared experiences, and support networks."
  },
  {

    title: "Provide Resources",
    text: "Offer a comprehensive platform that provides resources and information relevant to expatriates."
  },
  {

    title: "Support Networking",//Strong customized search option
    text: "Enable networking opportunities for professionals, students, and entrepreneurs among the Indian community abroad."
  },
  {

    title: "Accessible Information",
    text: "Ensure easy access to information, news, and updates from India, keeping the diaspora connected to their home country."
  },
  {

    title: "Social Integration",
    text: "Promote social integration and understanding between Indians and the local communities in their host countries."
  },
  {

    title: "Feedback and Improvement Forum",
    text: "Collect feedback from users to continually improve the application’s features and services to better meet the needs of the Indian diaspora abroad."
  },
  {

    title: "Privacy and Security",
    text: "Ensure the safety and privacy of user data and interactions on the platform."
  },
];

const Objectives = () => {
  return (
    <div className='section-container' id="objectives">
      <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true}>
        <Container>
          <div className="section-title">
            <h2>Our</h2>
            <p>Objectives</p>
          </div>
          <Row>
            {
              objectivesData.map((objective, index) => {
                return <ObjectiveRow objective={objective} num={index} />
              })
            }
          </Row>
        </Container>
      </AnimationOnScroll>
    </div>
  )
}

export default Objectives