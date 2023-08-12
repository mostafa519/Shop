import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col"; 
import Row from "react-bootstrap/Row"; 
import React from 'react';
import { FaHeart } from "react-icons/fa"; 
import { useSelector, useDispatch } from "react-redux";  
import { Link } from "react-router-dom";
import RemoveFromStore from "../../Store/Actions/RemoveFromCard";
import ShowDetails from "../../Store/Actions/Details";

const StoreProduct = () => { 
    const MyProducts=useSelector((state)=>state.Products);
    const dispatch =useDispatch();
    const handleRemoveProduct=(Product)=>{
      dispatch(RemoveFromStore(Product));
    }
    const showDetails=(product)=>{ 
      dispatch(ShowDetails(product))
    }
    return (
        <>
  <Row xs={1} md={3} xl={5} className="g-4 m-4">
     {MyProducts.map((Product, index) => (
          <Col key={index}>
            <Card>
            <Link onClick={()=>showDetails(Product)} to={`/details`} >  <Card.Img className="ImagesEdit" src={Product.data.image} /></Link>            
            
            <Link onClick={() => handleRemoveProduct(Product.id)}>
               
                <FaHeart
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "80%",
                    color: "blue",
                  }}
                  size={25}
                />
             
            </Link> 

              <Card.Body>
              <Card.Title><div>{Product.data.name}</div></Card.Title>   
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                {Product.data.description}
                </small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>  
        </>
    );
}

export default StoreProduct;
