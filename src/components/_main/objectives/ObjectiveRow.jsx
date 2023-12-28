import React from 'react';
import { Col } from 'react-bootstrap';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../../../assets/styles/objectives.css';

const ObjectiveRow = ({ num, objective }) => {
    return (
        <Col sm={12} md={6} lg={4} key={"objective-" + num}>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                <div className='objective-card'>
                    <div className="objective-card-body">
                        <div className='objective-card-title'>{objective.title}</div>
                        <div className='objective-card-text'>{objective.text}</div>
                    </div>
                </div>
            </AnimationOnScroll>
        </Col>
    )
}

export default ObjectiveRow