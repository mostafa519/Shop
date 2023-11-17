import { useRef, useState } from "react";
import "./List.scss";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"; 
import ListItems from "../Items/Items";

export default function List({Products}) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0); 
  const [currentPage, setCurrentPage] = useState(8);
  const listRef = useRef();


  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 60;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      if (slideNumber===0){
        if (currentPage !== 0) {
          setCurrentPage(currentPage - 1);
        }
        else{
          setCurrentPage(20);
        }
      }
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      
    }
    if (direction === "right" && slideNumber <= Products.length - 7) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      if (slideNumber===Products.length-1){
        setCurrentPage(currentPage +1);
      }

    }
  }; 
  return (
    <div className="list "> 
      <div className="WrapperTest">
      <div className="wrapperList">
        <ArrowBackIos
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="containerItemlist" ref={listRef}>
      {Products.map((product, index) => (
         
         <ListItems key={index} index={index} product={product} />
        ))}
       </div>
        <ArrowForwardIos
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
      </div>
    </div> 
  );
}
