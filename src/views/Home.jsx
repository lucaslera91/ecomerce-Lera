import { disableNetwork } from 'firebase/firestore';
import React from 'react';
import ItemListContainer from '../componentes/ItemListContainer';
import Inicio from './Inicio';

export default function Home() {

    return (
        <div>
            <Inicio></Inicio>
            <div style={{height: '8vh'}}></div>
            <ItemListContainer text={'dark'} greeting={`Productos`}>
            </ItemListContainer>
        </div>
    )
}
