import React from 'react'
import PropTypes from 'prop-types'
import react,{ useState } from "react";



function ItemCount({stock, start}) {
    
    const [contador, setContador] = useState(start);

    const onAdd = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }
    const less = () => {
        if(contador > start){
            setContador(contador - 1)
        }
    }
    return (
        <div className="container-fluid">
            <h4>Stock: {stock}</h4>
            <div className="container-fluid d-flex justify-content-between w-25">
                <button className="bg-light border-0" onClick={onAdd}><i className="fas fa-plus"></i></button>
                <h3>{contador}</h3>
                <button className="bg-light border-0" onClick={less}><i className="fas fa-minus"></i></button>
            </div>
            <div>
                <button className="bg-light w-25 border border-primary rounded text-primary">Add to Cart</button>
            </div>
        </div>
    )
}

ItemCount.propTypes = {

}

export default ItemCount;
// <div className="container-fluid d-flex bg-danger flex-column">
