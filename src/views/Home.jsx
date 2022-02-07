import React from 'react';
import ItemListContainer from '../componentes/ItemListContainer';
import Inicio from './Inicio';

export default function Home() {

    return (
        <div>
            <Inicio></Inicio>
            <ItemListContainer text={'dark'} greeting={`Productos`}>
            </ItemListContainer>
        </div>
    )
}
