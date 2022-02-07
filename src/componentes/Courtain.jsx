import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import styled, {keyframes} from 'styled-components'
import {bounce} from 'react-animations'
import Home from '../views/Home'
function Courtain() {
  const url = 'https://cdn.filtergrade.com/wp-content/uploads/2020/04/09133122/tarn-nguyen-XlEafYGDvV0-unsplash-scaled.jpg'
  //const url = 'https://thumbs.dreamstime.com/b/collage-laptop-phone-tablet-computer-collage-laptop-phone-tablet-computer-white-background-vector-illustration-100581531.jpg'
  //const url ='https://i.pinimg.com/originals/d6/9a/12/d69a123da2e4f4d741e3b22e9d1c2a3d.jpg'
  //<div className="col-sm-1 p-1"><NavLink  className={({ isActive }) => (isActive ? active : inactive)} to='/cart'><CartWidget className="text-decoration-none" color="light" />{cart.length}</NavLink></div>
  //const Bounce = styled.div`animation: 3s ${keyframes`${bounce}`}`
  
  const [classAux, setClassAux] = useState(<div className='d-flex flex-column aling items center' >
                                              
                                            </div>)
setTimeout(() => {
  setClassAux(<></>)
}, 2000)

  return (
    classAux
    );
}

export default Courtain;
