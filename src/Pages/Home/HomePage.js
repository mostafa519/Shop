import React from 'react';  
import FirstSlide from './firstSlide/FirstSlide';
import SecondSlide from './SecondSlide/SecondSlide';
import "./HomePage.css";
import TShart from '../Clothes/T_Sharts/Tshart'; 
import Brand from '../Brand/Brand';  
import Carousell from '../../Components/Carousel/Carousel';
const HomePage = ({tShart,brand,MyProducts,Children,Dresses}) => {
   
    return (
        <> 
        <FirstSlide></FirstSlide>
        <Carousell myProduct={brand}></Carousell>
        <SecondSlide></SecondSlide> 
    
                

        <TShart tShart={tShart} MyProducts={MyProducts} FieldName={"T-Shart"}></TShart> 

            <TShart tShart={Dresses} MyProducts={MyProducts} FieldName={"Dresses"}></TShart>  

            <TShart tShart={Children} MyProducts={MyProducts} FieldName={"Children"}></TShart> 

            <Brand brand={brand} /> 
        </>
    );
}

export default HomePage;
