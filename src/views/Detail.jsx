import React, {useEffect} from 'react'
import ItemDetailContainer from '../componentes/ItemDetailContainer'

export default function Detail() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <div style={{height: '8vh'}}></div>
            <div className='d-flex position-relative top-75'>
                <ItemDetailContainer text={'dark'}></ItemDetailContainer>
            </div>
        </div>
    )
}
