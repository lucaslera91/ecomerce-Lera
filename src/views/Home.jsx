import React from 'react';
import ItemListContainer from '../componentes/ItemListContainer';


export default function Home() {

    return (
        <div>
            <div style={{height: '8vh'}}></div>
            <ItemListContainer text={'dark'} greeting={`Productos`}>
            </ItemListContainer>
        </div>
    )
}
