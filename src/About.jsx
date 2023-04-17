import React, { useState } from 'react';
import BtnGroup from './ComComponent/BtnGroup'
import { Outlet } from 'react-router-dom';
  
  export default function About() {
    const [showBasic, setShowBasic] = useState(false);
  
    return (
      <>
        <h1>about page</h1>
        <BtnGroup/>
        <Outlet/>
      </>
      
    );
  }
  