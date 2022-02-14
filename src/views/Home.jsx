import React, {useEffect} from 'react';
import Courtain from '../componentes/courtain/Courtain';
import ItemListContainer from '../componentes/ItemListContainer';


export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <div style={{height: '8vh'}}></div>
            <ItemListContainer text={'dark'} greeting={`Productos`}>
            </ItemListContainer>
        </div>
    )
}
