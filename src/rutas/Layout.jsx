import React from 'react';
import {Outlet} from 'react-router-dom'
import NavBar from '../componentes/Navbar';
import FooterDisplay from '../views/FooterDisplay'
import Inicio from '../views/Inicio';


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
