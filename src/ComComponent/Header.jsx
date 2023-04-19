
import React, { useState } from 'react';
import{ Link, Outlet } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse,
  } from 'mdb-react-ui-kit';
  
  export default function Contact() {
    const [showBasic, setShowBasic] = useState(false);
  
    return (
      <>
      <MDBNavbar expand='lg' light bgColor='light'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>
    
            <MDBNavbarToggler
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowBasic(!showBasic)}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
    
            <MDBCollapse navbar show={showBasic}>
              <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page'>
                    <Link to={'/home'}>Home</Link> 
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink>
                    <Link to={'/About'}>About</Link> 
                    </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink>
                    <Link to={'/Contact'}>Contact</Link>  
                    </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink>
                    <Link to={'/Example'}>Example</Link>  
                    </MDBNavbarLink>
                </MDBNavbarItem>
    
              
              </MDBNavbarNav>
    
              <form className='d-flex input-group w-auto'>
                <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                <MDBBtn color='primary'>Search</MDBBtn>
              </form>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        <Outlet></Outlet>
      </>
      
    );
  }
  