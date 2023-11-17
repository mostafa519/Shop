 
import React from 'react';
import { FaHeart } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"; 
import Container from 'react-bootstrap/esm/Container';  
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';
import RemoveFromStore from '../../Store/Actions/RemoveFromCard';
import AddToStore from '../../Store/Actions/AddedToCard';
import ShowDetails from '../../Store/Actions/Details';

const Brand = ({brand }) => {
  const dispatch = useDispatch(); 
  const MyProducts = useSelector((state) => state.Products)
   const isFav = (product) => {
    return MyProducts.some((Product) => Product.id === product.id);
  };

  const handleAddToFav = (Product) => {
    if (isFav(Product)) {
      dispatch(RemoveFromStore(Product.id));
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Remove From Store'
      })
    } else {
      dispatch(AddToStore(Product));
   
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Add To Store successfully'
    })
  }
  };
  const showDetails = (product) => {
    dispatch(ShowDetails(product))
  }

  return (
    <> 

      <Container className='mt-2'>

      <h3>Brands</h3>
        <hr></hr>
        <Row xs={1} md={3} xl={5} className="g-4">
          {brand.map((Product, index) => (
            <Col key={index}>
              <Card>
                <Link onClick={() => showDetails(Product)} to={`/details`} >  <Card.Img className="ImagesEdit" src={Product.data.image} /></Link>
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

export default Brand;
