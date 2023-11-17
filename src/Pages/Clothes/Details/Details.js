import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./details.css";
import {
  IoIosCheckmarkCircleOutline,
  IoMdAdd,
  IoMdRemove,
  IoMdCart,
} from "react-icons/io";
import { BsChatLeftDots, BsHandbag } from "react-icons/bs";
import { TbArrowsShuffle } from "react-icons/tb";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp ,FaArrowRight
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import AddToStore from "../../../Store/Actions/AddedToCard";
import ShowDetails from "../../../Store/Actions/Details";
import Rate from "../../Rate/Rate";
const Details = () => { 
  const product = useSelector((state) => state.Details)
  const [quntity, setQuntity] = useState(1);
  const MyProducts = useSelector((state) => state.Products)
  const dispatch = useDispatch();
  const isFav = (products) => {
    return MyProducts.some((Product) => Product.id === products.id);
  };

  const handleAddToFav = (Product) => {
    if (!isFav(Product)) {
      dispatch(AddToStore(Product));
    }
  }; 
  let increment = () => {
    setQuntity((q) => q + 1);
  };
  let decrement = () => {
    if (quntity > 1) {
      setQuntity((q) => q - 1);
    }
  };
 
  const showDetails = (product) => {
    dispatch(ShowDetails(product))
  }
  var today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  return (
    <Container className="details mt-5">
      <Row>
        <Col className="col-12 col-lg-4">
          <div className="product-slider w-100">
            <img src={product.data.image} alt="" className=" w-100" />
          </div>
        </Col>
        <Col className="col-12 col-lg-8 mt-5 mt-lg-0">
          <Row>
            <Col className="col-lg-8 col-md-8 col-12">
              <div className="product-details-center">
                <div className="product-details-header">
                  <h2 className="title text-capitalize">
                    {product.data.name}
                  </h2>
                  <h2 className="title text-capitalize">
                    {product.data.description}
                  </h2>
                  <p className="stock-in mt-5 d-flex align-items-center">
                    {" "}
                    <span className="icon">
                      {" "}
                      <IoIosCheckmarkCircleOutline />
                    </span>
                    In Stock
                  </p>
                  <div className="price">
                    
                    <p className="discount">
                      {product.data.discount}% EGP
                    </p>
                    <h3 className="mainColor">{product.data.price}.00 EGP</h3>
                  </div>
                  <div className="wrap-color mt-2">
                    <h5>color</h5>

                  </div>
                </div>
                <div className=" wrap-size mt-2">
                  <h5><Rate rate={product.data.rate}></Rate></h5>
                  {/* <div className="product-details-size ">
                      {colorID > 0 && (
                        <ItemSize colorID={colorID} clotheID={clotheID} />
                      )}
                    </div> */}
                </div>
                <div className="product-details-totalPrice ">
                  <div className="count-quantity">
                    <div className="increment" onClick={() => increment()}>
                      <IoMdAdd />
                    </div>
                    <input
                      type="text"
                      className="w-100 form-control input-quntity"
                      value={quntity}
                      onChange={(e) => setQuntity(e.target.value)}
                    />
                    <div className="decrement" onClick={() => decrement()}>
                      <IoMdRemove />
                    </div>
                  </div>
                  <h3>
                    Total Price:{" "}
                    <span className="mainColor">
                    {(product.data.price - (product.data.price) * ((product.data.discount) / 100)) * quntity}.00 EGP
                    </span>{" "}
                  </h3>
                </div>
                <div className="product-details-query product-border mt-3">
                  <h3>3 Days | Estimated delivery time</h3>
                  <div className=" sg-quantity mt-3">
                    <Link className="addtocart"  onClick={() => handleAddToFav(product)}  >
                      <BsHandbag className="mb-1"/> ADD TO CART
                    </Link>
                    <Link className="buynow">
                      <IoMdCart /> BUY NOW
                    </Link>
                    <Link className="compare" >
                      <TbArrowsShuffle /> Compare
                    </Link>
                  </div>
                </div>
                <div className="social-media-icon my-3">
                  <ul>
                    <li>
                      <FaFacebook className="facebock" />
                    </li>
                    <li>
                      <FaTwitter className="twiter" />
                    </li>
                    <li>
                      <FaLinkedin className="linkedin" />
                    </li>
                    <li>
                      <FaWhatsapp className="whatsapp" />
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col className="col-lg-4 col-md-4">
              <div className="sg-seller-product pb-sm-3 w-100">
                <Card> 
                      <div className="img-shop position-relative" key={product.id}>
                          <Card.Img variant="top" src={product.data.image} alt="Error"/>  
                        <img src={product.icon} className="seller-logo" alt="Error"/>
                      </div> 
                    <Card.Body className="d-flex justify-content-between">
                      <div>
                        <p>Products: {product.data.name}</p>
                        <p>Joined: {date}</p>
                      </div>
                      <Link className=" store" to={"/storeProduct"}>
                       
                        VISIT STORE <FaArrowRight className="ms-2" />
                      </Link>
                    </Card.Body>  
                  </Card>
                <div className="chat my-3">
                  <BsChatLeftDots /> Chat With Seller
                </div>
                <div className="product-widget-recent-entries">
                  <h4>Recent Products</h4> 
                    <Row xs={1} md={3} xl={3} className="g-4">
          {MyProducts.map((Product, index) => (
            <Col key={index}>
              <Card>
                <Link onClick={() => showDetails(Product)} to={`/details`} >  <Card.Img className="ImagesEditdetails" src={Product.data.image} /></Link>
                </Card></Col>))}</Row> 
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>


    </Container>
  );
};

export default Details;
