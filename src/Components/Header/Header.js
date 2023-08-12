import React from "react"; 
import Container from "react-bootstrap/Container"; 
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"; 
import { AiOutlineMenu } from "react-icons/ai"; 
import "./Header.css"; 
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar expand="lg" className="naav">
      <Container>
        <div>
          <AiOutlineMenu className="me-3 fs-3 menu-icon" />

          <Navbar.Brand>ALL Clothes</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="EdittingNavBar" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="EdittingNavBar" as={Link} to="/shop">
              Shops
            </Nav.Link>
            <Nav.Link className="EdittingNavBar" as={Link} to="/brand">
              Brands
            </Nav.Link>
            <Nav.Link className="EdittingNavBar" as={Link} to="/Category">
              Categories
            </Nav.Link>
            <Nav.Link className="EdittingNavBar"   as={Link} to="/storeProduct">
              Store
            </Nav.Link>
            <Nav.Link className="EdittingNavBar"  as={Link} to="/Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
