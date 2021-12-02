import React from 'react'

function Item({item}) {

    return (
        <div className="container-fluid w-25 border border-1">
            <div>
                {item.picture}
            </div>
            <div>
                {item.descripcion}
            </div>
            <div>
                {item.price}
            </div>
            <div>
                {item.title}
            </div>
        </div>
    )
}
export default Item
