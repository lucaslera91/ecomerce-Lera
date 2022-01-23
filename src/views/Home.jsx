import React from 'react';
import ItemListContainer from '../componentes/ItemListContainer';

export default function Home() {

    return (
        <div>
            <ItemListContainer text={'dark'} greeting={`Welcome to the best computer shop!`}>
            </ItemListContainer>
        </div>
    )
}
