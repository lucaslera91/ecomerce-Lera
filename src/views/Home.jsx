import React, {useEffect, useState} from 'react';
import ItemListContainer from '../componentes/ItemListContainer';
import NavBar from '../componentes/Navbar';
//import NavBar from '../src/componentes/Navbar';
//import ItemListContainer from './componentes/ItemListContainer';

export default function Home() {
    

    return (
        
        <div>
            <NavBar/>

            <ItemListContainer text={'dark'} greeting={`Elegi la computadora que mas necesites!`}>
            
            </ItemListContainer>
        </div>
    )
}
