import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./navigationPanel.css";
import { Link } from "react-router-dom";

const NavigationPanel = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark" sticky="top">
      <Navbar.Brand>
        <Link to="/">
          <img src="images/naulakha_logo.png" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link className="mr-3">
            <Link to="/home">Home</Link>
          </Nav.Link>
          <NavDropdown
            title="Products"
            id="basic-nav-dropdown"
            className="mr-3"
          >
            <NavDropdown.Item>
              <Link to="/products">Medical Devices</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link to="/products">Surgical Wares</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link to="/products">Scientific Wares</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <Nav.Link className="mr-3">
            <Link to="/aboutus">About Us</Link>
          </Nav.Link>
          <Nav.Link className="mr-3">
            <Link to="/downloads">Downloads</Link>
          </Nav.Link>
          <Nav.Link className="mr-3">
            <Link to="/contactus">Contact Us</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationPanel;
