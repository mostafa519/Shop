
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'; 
import { FaHeart } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col"; 
import Row from "react-bootstrap/Row"; 
import "./Tshart.css" 
import { db } from '../../../Constants/Firebase/Firebase'; 
import Container from 'react-bootstrap/esm/Container';
import { useDispatch, useSelector } from 'react-redux';
import RemoveFromStore from '../../../Store/Actions/RemoveFromCard';
import AddToStore from '../../../Store/Actions/AddedToCard';
import { Link } from 'react-router-dom'; 
import ShowDetails from '../../../Store/Actions/Details';
const TShart = () => {
    const [tShart,setTshart]=useState([]);   
    const MyProducts =useSelector((state)=>state.Products) 
    const dispatch=useDispatch();
    function getTshartData() {
      const resultsCollection=collection(db,"T-sharts");
      getDocs(resultsCollection).then(res=>{ 
       const result =res.docs.map(doc=>({
        data:doc.data(),
        id:doc.id
       }))
       setTshart(result);  
       
      }).catch(err=>{console.log(err);});
  }
  useEffect(()=>{
      getTshartData();
     
  },[]);
    const isFav = (product) => {
      return MyProducts.some((Product) => Product.id == product.id);
    };

    const handleAddToFav  = (Product) => {
      if (isFav(Product)) {
        dispatch(RemoveFromStore(Product.id));
      } else {
        dispatch(AddToStore(Product));
      }
    };
    const showDetails=(product)=>{
      dispatch(ShowDetails(product))
    }
     
    return (
        <> 
        <Container className='mt-2'>
       <Row xs={1} md={3} xl={5} className="g-4">
          <Col>
          <div>
            <h3>T-Sharts</h3>
            <hr></hr>
            </div></Col>
        </Row>
        <Row xs={1} md={3} xl={5} className="g-4">
     {tShart.map((Product, index) => (
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

export default TShart;
