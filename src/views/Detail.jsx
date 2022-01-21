import React from 'react'
import ItemDetailContainer from '../componentes/ItemDetailContainer'
import NavBar from '../componentes/Navbar'

export default function Detail() {
    return (
        <div>
           <NavBar/>
           <div className='d-flex position-relative top-75'>
           <ItemDetailContainer text={'dark'}></ItemDetailContainer>
           </div>
           
        </div>
    )
}
