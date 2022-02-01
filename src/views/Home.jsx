import React from 'react';
import ItemListContainer from '../componentes/ItemListContainer';

export default function Home() {

    return (
        <div>
            <ItemListContainer text={'dark'} greeting={`Productos`}>
            </ItemListContainer>
        </div>
    )
}
