import React from 'react'
import ButtonCounter from './ButtonCounter';

function ItemCount({stock, start, text, item}) {

    return (
        <div className="container-fluid  w-100 padding py-1 px-0" >
            <ButtonCounter stock={stock} start={start} text={text} item={item}></ButtonCounter>
        </div>
    )
}


export default ItemCount;
