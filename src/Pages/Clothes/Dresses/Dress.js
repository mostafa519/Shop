
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'; 
import { FaHeart } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col"; 
import Row from "react-bootstrap/Row"; 
import "./Dresses.css" 
import { db } from '../../../Constants/Firebase/Firebase'; 
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AddToStore from '../../../Store/Actions/AddedToCard';
import RemoveFromStore from '../../../Store/Actions/RemoveFromCard'; 
import ShowDetails from '../../../Store/Actions/Details';
const Dresses = () => { 
    const [Dresses,setDresses]=useState([]);  
    const MyProducts =useSelector((state)=>state.Products);
    const dispatch =useDispatch(); 
    const showDetails=(product)=>{
      dispatch(ShowDetails(product))
    }
    const isFav=(Product)=>{
      return MyProducts.some((product)=>product.id==Product.id)
    }
const handleAddToFav=(product)=>{
  if (isFav(product)){
    dispatch(RemoveFromStore(product.id));

  }
  else {
    dispatch(AddToStore(product));

  }
}
    function getDressesData() {
        const resultsCollection=collection(db,"Dresses");
        getDocs(resultsCollection).then(res=>{ 
         const result =res.docs.map(doc=>({
          data:doc.data(),
          id:doc.id
         }))
         setDresses(result);   
      
        }).catch(err=>{console.log(err);});
    }
    useEffect(()=>{
    
        getDressesData();
    },[]); 
   
    return (
        <> 
        <Container className='mt-2'>
       <Row xs={1} md={3} xl={5} className="g-4">
          <Col>
          <div>
            <h3>Dresses</h3>
            <hr></hr>
            </div></Col>
        </Row>
        <Row xs={1} md={3} xl={5} className="g-4">
     {Dresses.map((Product, index) => (
          <Col key={index}>
            <Card>
           <Link onClick={()=>showDetails(Product)} to={`/details`} >  <Card.Img className="ImagesEdit" src={Product.data.image} /></Link>            
            <Link onClick={() => handleAddToFav(Product)}>
              {isFav(Product) ? (
                <FaHeart
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "80%",
                    color: "blue",
                  }}
                  size={25}
                />
              ) : (
                <FaHeart
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "80%",
                    color: "red",
                  }}
                  size={25}
                />
              )}
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
      </Container>
        </>
    );
}

export default Dresses ;
