import React from "react";
import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";
import "./Items.scss"; 
import ShowDetails from "../../Store/Actions/Details";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RemoveFromStore from "../../Store/Actions/RemoveFromCard";
import AddToStore from "../../Store/Actions/AddedToCard";

function ListItems({  product }) { 
  const MyProducts =useSelector((state)=>state.Products) 
  const dispatch =useDispatch()
  const isFav = (product) => {
    return MyProducts.some((Product) => Product.id === product.id);
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
    <div className="test">
      
  
      <Card >
           <Link onClick={()=>showDetails(product)} to={`/details`} > 
            <Card.Img className="ImagesEdit" src={product.data.image} /></Link>            
            <Link onClick={() => handleAddToFav(product)}>
              {isFav(product) ? (
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
            </Card>  
    </div>
  );
}

export default ListItems;
