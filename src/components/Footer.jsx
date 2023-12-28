import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="section-container footer">
      <Container>
        <div className="row">
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="copyright">
              &copy; Copyright <strong><span>Indians Abroad</span></strong>. All Rights Reserved
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="credits">
              <Link to="/terms">Terms & Conditions</Link> | <Link to="/privacy">Privacy Policy</Link> | <Link to="/refund-policy">Refund Policy</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer