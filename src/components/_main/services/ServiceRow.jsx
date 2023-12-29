import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ServiceRow = ({ num, service }) => {
    return (
        <Col sm={12} md={6} lg={4} key={"objective-" + num} >
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                <div
                    className='service-card'
                    key={"services" + num}
                >
                    <div className='img-container'>
                        <img src={service.image} alt="Service 1" className='card-image' />
                    </div>
                    <div className="service-card-body">
                        <div className='service-card-title'>{service.title}</div>
                        <div className='service-card-text'>{service.text}</div>
                    </div>
                </div>
            </AnimationOnScroll>
        </Col>
    )
}

export default ServiceRow