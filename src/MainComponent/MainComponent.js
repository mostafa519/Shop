
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import TShart from '../Pages/Clothes/T_Sharts/Tshart';
import Header from '../Components/Header/Header';
import FooterComponent from '../Components/Footer/Footer';
import StoreProduct from '../Pages/StoresProduct/StoreProduct';
import Categories from '../Pages/Clothes/Categories/Categories';
import Details from '../Pages/Clothes/Details/Details';
import HomePage from '../Pages/Home/HomePage'; 
import { useSelector } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Constants/Firebase/Firebase';
import Register from '../Components/Registeration/Register';
import LogIn from '../Components/Login/LogIn';
import NotFound from '../Pages/NotFound/NotFound';
import AboutUS from '../Pages/aboutUs/aboutUs';
import Brand from '../Pages/Brand/Brand';

const MainComponent = () => {
  const [ttShart, setTshart] = useState([]);
  const [brand, setBrand] = useState([]);
  const [Children, setChildren] = useState([]);
  const [Dresses, setDresses] = useState([]);
  const privateRoute =useSelector((state)=>state.Route);
  const MyProductsp = useSelector((state) => state.Products)
  function getData() {
    const resultsCollection = collection(db, "T-sharts");
    getDocs(resultsCollection).then(res => {
      const result = res.docs.map(doc => ({
        data: doc.data(),
        id: doc.id
      }))
      setTshart(result);

    }).catch(err => { console.log(err); });
    const resultsCollection3 = collection(db, "Children");
    getDocs(resultsCollection3).then(res => {
      const result = res.docs.map(doc => ({
        data: doc.data(),
        id: doc.id
      }))
      setChildren(result);

    }).catch(err => { console.log(err); });
    const resultsCollection2 = collection(db, "Dresses");
    getDocs(resultsCollection2).then(res => {
      const result = res.docs.map(doc => ({
        data: doc.data(),
        id: doc.id
      }))
      setDresses(result);

    }).catch(err => { console.log(err); });
    const resultsCollection4 = collection(db, "Brands");
    getDocs(resultsCollection4).then(res => {
      const result = res.docs.map(doc => ({
        data: doc.data(),
        id: doc.id
      }))
      setBrand(result);

    }).catch(err => { console.log(err); });
  }

  useEffect(() => {
    getData();

  }, []);

  return (
    <>
     
      {privateRoute ?(
        <>
         <Header></Header>
         <Routes>
         <Route path="/home" element={<HomePage brand={brand} tShart={ttShart} MyProducts={MyProductsp} Dresses={Dresses} Children={Children} />} />
         <Route path="/tshart" element={<TShart tShart={ttShart} MyProducts={MyProductsp} FieldName={"T-Shart"} />} />
         <Route path="/dress" element={<TShart tShart={Dresses} MyProducts={MyProductsp} FieldName={"Dresses"} />} />
         <Route path="/Children" element={<TShart tShart={Children} MyProducts={MyProductsp} FieldName={"Children"} />} />
         <Route path='/storeProduct' element={<StoreProduct />} />
         <Route path='/Category' element={<Categories brand={brand} tShart={ttShart} MyProducts={MyProductsp} Dresses={Dresses} Children={Children} />}></Route>
         <Route path='/brand' element={<Brand brand={brand} />}></Route>
         <Route path='/Register' element={<Register />}></Route>
         <Route path='/Login' element={<LogIn />}></Route>
         <Route path='/AboutUS' element={< AboutUS/>}></Route>
         <Route path='*' element={<NotFound />}></Route>
         <Route path='/details' element={<Details />}></Route>
       </Routes>
       <FooterComponent></FooterComponent>
       </>
      ) : (
        <Routes>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/' element={<LogIn />}></Route> 
        <Route path='*' element={<NotFound />}></Route> 
      </Routes>
      )}
     
    
    </>
  );
}

export default MainComponent; 