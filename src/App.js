import React from 'react';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from './Home'
import About from './About' 
import Contact from './Contact'
import Example from './Example';
import Header from './ComComponent/Header'
import BtnLeft from './ComComponent/BtnLeft';
import BtnRight from './ComComponent/BtnRight';
import BtnMid from './ComComponent/BtnMid';
import BtnGroup from './ComComponent/BtnGroup';
import ClassMenu from './Components/ClassComponents/ClassMenu';
import ClassIntro from './Components/ClassComponents/ClassIntro';
import JsxComponent from './Components/ClassComponents/JsxComponent';
import PropsInClass from './Components/ClassComponents/PropsInClass';
import StateInClassCompo from './Components/ClassComponents/StateInClass';
import FunctionalCompoMenu from './Components/FunctionalComponent/FunctionalCompoMenu'
import FetchApi from './Components/FunctionalComponent/FetchApi';

const app = createBrowserRouter([
  {
    path:"/",
    element: <Header/>,
    children: [
      {
        path:"/home",
        element:<><Home/></>,
      },
      {
        path:"/about",
        element:<><About/></>,
        children:[
          {
            path:"/about/btngroup",
            element:<BtnGroup/>,  
          },
          {
            path:"/about/btnleft",
            element:<BtnLeft/>,
          },
          {
            path:"/about/btnmid",
            element:<BtnMid/>,
          },
          {
            path:"/about/btnright",
            element:<BtnRight/>,
            children:[
              {
                path:"/about/btnright/btnleft",
                element:<BtnLeft/>,
              },
              {
                path:"/about/btnright/btnmid",
                element:<BtnMid/>,
              },
              {
                path:"/about/btnright/btnright",
                element:<BtnRight/>,
              },
            ]
          },
        ]
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/example",
        element:<Example/>,
        children:[
          {
            path:"classcomponent",
            element:<ClassMenu/>,
            children:[
              {
                path:"classintro",
                element:<ClassIntro/>
              },
              {
                path:"jsxcompo",
                element:<JsxComponent/>
              },
              {
                path:"propsinclass",
                element:<PropsInClass/>
              },
              {
                path:"stateinclass",
                element:<StateInClassCompo/>
              },
            ]
          },
          {
            path:"functionalcomponent",
            element:<FunctionalCompoMenu/>,
            children:[
              {
                path:"fetchapi",
                element:<FetchApi/>,
              },
            ]
          },
        ]
      }
    ]
  },
 
]);
export default app;

