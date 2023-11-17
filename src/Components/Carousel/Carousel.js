import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-bootstrap/Carousel"; 

const Carousell = ({myProduct}) => { 
    return (
      <Container className="details mt-3">
      <Row>
        <Col className="col-12 col-lg-4">
          <div className="product-slider w-100">
          </div>
        </Col>
        <Col className="col-12 col-lg-4">
          <div className="product-slider w-100">
          <Carousel variant="dark">
        {myProduct.map((Product) => (
          <Carousel.Item key={Product.id} style={{ color: "white" }}>
            <img
               className="d-block w-100"
               style={{ height: "400px" }}
              src={Product.data.image} 
              alt="First slide"
            />
            <Carousel.Caption>
              <h5 style={{ color: "white" }}>  {Product.data.name}</h5>
              <h5 style={{ color: "white" }}>  {Product.data.description}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
          </div>
        </Col>
        </Row>
        </Container>
       
    );
}

export default Carousell;
