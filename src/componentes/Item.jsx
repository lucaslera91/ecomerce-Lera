import React from 'react'
import ButtonCounter from './ButtonCounter'
import ItemCount from './ItemCount'
function Item({item}) {
    
    return (
        <div className="container-fluid w-25 border border-dark p-1">
            <div className='w-100 py-1'>
                <img className="img-fluid img-thumbnail rounded" style={{height: 200}} src={item.picture}/>
            </div>
            <div>
                <h5 className="text-secondary" style={{height: 50}}>{item.descripcion}</h5>
            </div>
            <div>
                <button className="bg-light w-100 border border-secondary my-1 rounded text-secondary">Ver mas detalles!</button>
            </div>
            <div>
                <ItemCount stock={item.stock} start={1}></ItemCount>
            </div>
            <div>
               Stock: {item.stock}
            </div>
        </div>
    )
}
export default Item
