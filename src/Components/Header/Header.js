import React from "react"; 
import Container from "react-bootstrap/Container"; 
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"; 
import { AiOutlineMenu } from "react-icons/ai"; 
import "./Header.css"; 
import { 
  IoMdCart,
} from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavDropdown } from "react-bootstrap";
const Header = () => {
  const MyProducts =useSelector((state)=>state.Products)
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
            <Nav.Link className="EdittingNavBar" as={Link} to="/home">
              Home
            </Nav.Link> 
            <Nav.Link className="EdittingNavBar" as={Link} to="/brand">
              Brands
            </Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item to={"/tshart"} as={Link}>T-sharts</NavDropdown.Item>
              <NavDropdown.Item to={"/dress"}as={Link}>Dresses
              </NavDropdown.Item>
              <NavDropdown.Item to={"/Children"}as={Link}>Child Fashion
              </NavDropdown.Item>
              <NavDropdown.Item  to={"/brand"}as={Link}>Brands
              </NavDropdown.Item> 
              <NavDropdown.Item  to={"/Category"}as={Link}>All
              </NavDropdown.Item> 
            </NavDropdown> 
            <Nav.Link className="EdittingNavBar" style={{
              position: "relative", 
            }} as={Link} to="/storeProduct">
            <IoMdCart  /> 
            <span  
           style={{
            width: "50px",
            height: "50px", 
            color:"red",
            backgroundColor:"white",
            zIndex: 5,
            borderRadius: "50%", 
            justifyContent: "center",
            alignItems: "center",
          }}>{MyProducts.length}</span>
            </Nav.Link>
            
          </Nav>
          <Nav.Link   as={Link} to="/AboutUS">
          AboutUs
            </Nav.Link> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
