import React from 'react'
import PropTypes from 'prop-types'
import react,{ useState } from "react";
import ButtonCounter from './ButtonCounter';
import BtnAddToCart from './BtnAddToCart';
//import {stockCount} from '../componentes/ButtonCounter'

function ItemCount({stock, start, text, item}) {

    return (
        <div className="container-fluid  w-100 padding py-1 px-0" >
            <ButtonCounter stock={stock} start={start} text={text} item={item}></ButtonCounter>
        </div>
    )
}

ItemCount.propTypes = {

}

export default ItemCount;
