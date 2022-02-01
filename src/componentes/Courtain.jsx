import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import styled, {keyframes} from 'styled-components'
import {bounce} from 'react-animations'
import Home from '../views/Home'
function Courtain() {
  const url ='https://i.pinimg.com/originals/d6/9a/12/d69a123da2e4f4d741e3b22e9d1c2a3d.jpg'
  //<div className="col-sm-1 p-1"><NavLink  className={({ isActive }) => (isActive ? active : inactive)} to='/cart'><CartWidget className="text-decoration-none" color="light" />{cart.length}</NavLink></div>
  const Bounce = styled.div`animation: 3s ${keyframes`${bounce}`}`
  
  const [classAux, setClassAux] = useState(<div className='d-flex flex-column aling items center' >
                                            <NavLink to={'/'} className='text-decoration-none text-dark w-100' style={{backgroundImage: `url(${url})`,height: '200vh',position: 'absolute', opacity: 0.94, zIndex:3}}>
                                                    <Bounce className='d-flex justify-content-center w-100' style={{position: 'absolute', top: '20%'}}><h1 >Bienvenido a la mejor tienda de computadoras</h1></Bounce>
                                            </NavLink>  
                                            </div>)
setTimeout(() => {
  setClassAux(<></>)
}, 2000)

  return (
    classAux
    );
}

export default Courtain;
