import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../images/logo.png";
import navIcon1 from "../images/facebook.svg";
import navIcon2 from "../images/linkedin.svg";
import navIcon3 from "../images/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.facebook.com/profile.php?id=100093679211654"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/sirkew-chakma-b400851b8/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/Sirkew"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved By Sirkew</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}