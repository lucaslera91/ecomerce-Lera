import React, {useEffect} from 'react';
import ItemListContainer from '../componentes/ItemListContainer';


export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <div style={{height: '10vh'}}></div>
            <ItemListContainer text={'dark'} greeting={`Productos`}>
            </ItemListContainer>
        </div>
    )
}
