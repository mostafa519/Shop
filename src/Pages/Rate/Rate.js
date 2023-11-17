import React from "react";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";
import "./Rate.css";
const Rate = ({ rate }) => {
  return (
    <div className="rate text-center">
      {rate === 10 ? (
        <>
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
        </>
      ) : rate === 9  ? (
        <>
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarHalf />
        </>
      ) : rate === 8? (
        <>
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarEmpty />
        </>
      ) : rate === 7 ? (
        <>
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarHalf />
          <ImStarEmpty />
        </>
      ) : rate === 6 ? (
        <>
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarEmpty />
          <ImStarEmpty />
        </>
      ) : rate === 5 ? (
        <>
          <ImStarFull />
          <ImStarFull />
          <ImStarHalf />
          <ImStarEmpty />
          <ImStarEmpty />
        </>
      ) : rate === 4 ? (
        <>
          <ImStarFull />
          <ImStarFull />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
        </>
      ) : rate === 3 ? (
        <>
          <ImStarFull />
          <ImStarHalf />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
        </>
      ) : rate === 2 ? (
        <>
          <ImStarFull />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
        </>
      ) : rate === 1 ? (
        <>
          <ImStarHalf />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
        </>
      ) : (
        <>
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
        </>
      )}
    </div>
  );
};

export default Rate;
