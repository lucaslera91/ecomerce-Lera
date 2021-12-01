import React from 'react'
import PropTypes from 'prop-types'
import react,{ useState } from "react";
import ButtonCounter from './ButtonCounter';


function ItemCount({stock, start}) {
    
    
    return (
        <div className="container-fluid border border-1 w-25 padding py-1" >
            <h4>Stock: {stock}</h4>
                <ButtonCounter stock={stock} start={start}></ButtonCounter>
            <div>
                <button className="bg-light w-100 border border-primary rounded text-primary">Add to Cart</button>
            </div>
        </div>
    )
}

ItemCount.propTypes = {

}

export default ItemCount;
// <div className="container-fluid d-flex bg-danger flex-column">
