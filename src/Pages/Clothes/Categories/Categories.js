import React from 'react';
import TShart from '../T_Sharts/Tshart'; 
import Brand from '../../Brand/Brand';

const Categories = ({tShart,brand,MyProducts,Children,Dresses}) => {
    return ( <>
            <TShart tShart={tShart} MyProducts={MyProducts} FieldName={"T-Shart"}></TShart> 
            <TShart tShart={Dresses} MyProducts={MyProducts} FieldName={"Dresses"}></TShart> 
            <TShart tShart={Children} MyProducts={MyProducts} FieldName={"Children"}></TShart> 
            <Brand brand={brand} /> 
            </>
    );
}

export default Categories;
