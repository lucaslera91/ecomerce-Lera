import React from 'react'
import PropTypes from 'prop-types'
import react,{ useState } from "react";
import ButtonCounter from './ButtonCounter';


function ItemCount({stock, start}) {
    
    
    return (
        <div className="container-fluid  w-100 padding py-1 px-0" >
            <ButtonCounter stock={stock} start={start}></ButtonCounter>
            <div>
                <button className="bg-light w-100 border border-primary rounded text-primary p-0">Add to Cart</button>
            </div>
        </div>
    )
}

ItemCount.propTypes = {

}

export default ItemCount;
// <div className="container-fluid d-flex bg-danger flex-column">
