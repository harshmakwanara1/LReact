
import './App.css';
// import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
    createBrowserRouter,
    BrowserRouter,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";
import Home from './Home'
import About from './About' 
import Contact from './Contact'
import Example from './Example';
import Header from './ComComponent/Header'
import BtnLeft from './ComComponent/BtnLeft';
import BtnRight from './ComComponent/BtnRight';
import BtnMid from './ComComponent/BtnMid';
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>} >
        <Route path='/Home' element={<Home/>} />
        <Route path='/About' element={<About/>} >
          <Route path='/About/BtnLeft' element={<BtnLeft/>}/>
          <Route path='/About/BtnMid' element={<BtnMid/>}/>
          <Route path='/About/BtnRight' element={<BtnRight/>}>
            <Route path='/About/BtnRight/BtnLeft' element={<BtnLeft/>}/>
            <Route path='/About/BtnRight/BtnMid' element={<BtnMid/>}/>
            <Route path='/About/BtnRight/BtnRight' element={<BtnRight/>}/>
          </Route>  
        </Route>  
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Example' element={<Example/>} />
      </Route>  
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

