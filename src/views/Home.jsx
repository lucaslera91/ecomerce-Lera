import React from 'react';
import ItemListContainer from '../componentes/ItemListContainer';
import NavBar from '../componentes/Navbar';
//import NavBar from '../src/componentes/Navbar';
//import ItemListContainer from './componentes/ItemListContainer';

export default function Home() {
    

    return (
        
        <div>
            <NavBar/>

            <ItemListContainer text={'dark'} greeting={`Welcome to the best computer shop!`}>
            
            </ItemListContainer>
        </div>
    )
}
