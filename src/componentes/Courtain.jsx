import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, {keyframes} from 'styled-components'
import {bounce} from 'react-animations'
function Courtain() {
  const url ='https://i.pinimg.com/originals/d6/9a/12/d69a123da2e4f4d741e3b22e9d1c2a3d.jpg'
  //<div className="col-sm-1 p-1"><NavLink  className={({ isActive }) => (isActive ? active : inactive)} to='/cart'><CartWidget className="text-decoration-none" color="light" />{cart.length}</NavLink></div>
  const Bounce = styled.div`animation: 4s ${keyframes`${bounce}`}`

  return (
    <NavLink to={'/computers'} className='text-decoration-none text-dark d-flex justify-content-center align-items-center' 
        style={{backgroundImage: `url(${url})`, minHeight: '100vh'}}>
            <Bounce><h1>Bienvenido a la mejor tienda de computadoras</h1></Bounce>
        
    </NavLink>);
}

export default Courtain;
