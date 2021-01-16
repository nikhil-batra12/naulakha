import React from "react";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";

const ContactUs = (props) => {
  return (
    <>
      <h2>Contact Us</h2>
      <Container fluid>
        <Row>
          <Col md={1}></Col>
          <Col xs={12} sm={6} md={5} className="d-flex">
            <Jumbotron fluid className="w-100">
              <Container>
                <h4>Address</h4>

                <p>
                  <h5>Naulakha Industries</h5>
                  B-11, Wazirpur (Group) Industrial Area,
                  <br />
                  Delhi - 110052, <br />
                  India Phone : +91-11-45085556 <br />
                  FAX : +91-11-27371029
                  <br /> enquiry@naulakha.com <br />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13998.188115725678!2d77.1731722!3d28.7031937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x67ba0a2b0bf0560d!2sNaulakha%20Industries!5e0!3m2!1sen!2sin!4v1610388395182!5m2!1sen!2sin"
                    width="400"
                    height="400"
                    aria-hidden="false"
                  ></iframe>
                </p>
              </Container>
            </Jumbotron>
          </Col>
          <Col xs={12} sm={6} md={5} className="d-flex">
            <Jumbotron fluid className="w-100">
              <Container>
                <h4>Who Are We?</h4>
                <img src="images/naulakha_fb_profile.jpg" />

                <p>
                  We are a pioneer manufacturer and exporter of a wide range of
                  medical components and equipments such as Nebulizer, Blood
                  Presure Monitor, Steam Vaporiser, Bed Pan, Urine Pot, Kidney
                  Trays, Specimen Container, Douche Can, Douche Tube, Syringe,
                  Glycerine Syringe, Dispensing Cup Conical, Eye Wash Cup etc.
                  Our company aims to help patients lead healthier lives through
                  two parallel objectives: delivering affordable and accessible
                  medical components and equipments to all parts of the world;
                  and discovering, developing and commercializing innovative
                  products that satisfy unmet medical needs.
                </p>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
