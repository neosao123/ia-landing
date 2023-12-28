import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../assets/styles/success.css";
import { Link } from 'react-router-dom';
import exploreImg from '../assets/images/bg-explore.jpg';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Explore = () => {

    const backgroundStyle = {
        background: `url(${exploreImg}) rgba(0, 0, 0, 0.5)`,
        minHeight: "500px",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply"
    }

    return (
        <div style={backgroundStyle}>
            <div className='section-container'>
                <div style={{ height: "400px", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff" }}>
                    <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true}>
                        <Container>
                            <Col sm={10} md={8} lg={8} className='text-center offset-ms-1 offset-md-2 offset-lg-2'>
                                <p className='success-title text-light mb-4'>Explore the World with Ease</p>
                                <div className='text-center' style={{ fontSize: "1.2rem", marginBottom: "2.5rem" }}>
                                    Get our Android and iOS application to connect with Indians abroad. Never feel lost or alone again.
                                </div>
                                <Row>
                                    <Col>
                                        <Link className='btn-get-started-xl me-2 animate__animated animate__fadeInLeft animate__delay-1s'><AiOutlineCloudDownload className='me-2' />Download</Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Container>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}

export default Explore