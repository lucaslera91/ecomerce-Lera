import React from 'react';
import {Outlet} from 'react-router-dom'
import NavBar from '../componentes/navbar/Navbar';
import FooterDisplay from '../views/FooterDisplay'


function Layout() {
  return (
        <div>
            <NavBar/>
            <Outlet/>
            <FooterDisplay/>
        </div>
        );
}

export default Layout;
