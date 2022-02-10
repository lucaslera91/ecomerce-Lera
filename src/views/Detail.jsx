import React from 'react'
import ItemDetailContainer from '../componentes/ItemDetailContainer'

export default function Detail() {
    return (
        <div>
            <div style={{height: '11vh'}}></div>
            <div className='d-flex position-relative top-75'>
                <ItemDetailContainer text={'dark'}></ItemDetailContainer>
            </div>
        </div>
    )
}
