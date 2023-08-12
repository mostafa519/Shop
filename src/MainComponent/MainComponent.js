
import React from 'react';
import { Route, Router, Routes } from 'react-router';
import TShart from '../Pages/Clothes/T_Sharts/Tshart';
import Header from '../Components/Header/Header';
import FooterComponent from '../Components/Footer/Footer';
import StoreProduct from '../Pages/StoresProduct/StoreProduct';
import Dresses from '../Pages/Clothes/Dresses/Dress';
import Categories from '../Pages/Clothes/Categories/Categories'; 
import Details from '../Pages/Clothes/Details/Details';

const MainComponent = () => {
    return (
      <> 
      <Header></Header> 
      <Routes> 
        <Route path="/" element={<TShart />} />
        <Route path="/tshart" element={<TShart />} />
        <Route path='/storeProduct' element={<StoreProduct/>}/>
        <Route path='/dress' element={<Dresses/>} />
        <Route path='Category' element={<Categories/>}></Route>
      <Route path='/details' element={<Details/>}></Route> 
      </Routes>  
      <FooterComponent></FooterComponent>
      </>
    );
}

export default MainComponent;
  {/* <Row>
      <Col xs={4} style={{backgroundColor:"red"}}> 
      <FooterComponent></FooterComponent>
      </Col>
      <Col><TShart></TShart></Col>
    </Row> */}