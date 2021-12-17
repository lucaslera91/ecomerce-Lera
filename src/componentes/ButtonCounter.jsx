import React from 'react'
import react, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import BtnAddToCart from './BtnAddToCart';


function ButtonCounter({start, stock, text}) {
    const [contador, setContador] = useState(start);
    const [display, setDisplay] = useState(`visible`)
    const [resultado, setDisplayResultado] = useState(`invisible`)
    const [compra, setCompra] = useState(0)
    const classAux = `${display} container-fluid d-flex justify-content-between w-auto flex-column`
    const classTextAux = `bg-transparent text-${text} border-0 w-100`
    const resultadoClass = `${resultado} bg-primary text-dark rounded`
    
    const onAdd = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const less = () => {
        if (contador > start) {
            setContador(contador - 1)
        }
    }
    function handleAddToCart(){
         setDisplay('invisible')
         setDisplayResultado('visible')
         setCompra(contador)
    }

   
    return (
        <div>
            <div  className={classAux}>
                <div className='d-flex'>
                <button className={classTextAux} onClick={onAdd}><i className="fas fa-plus"></i></button>
                    <h3>{contador}</h3>
                    <button className={classTextAux} onClick={less}><i className="fas fa-minus"></i></button>
                </div>
                <div>
                    <button onClick={handleAddToCart} className="bg-light w-100 border border-primary rounded text-primary p-0">Add to Cart</button>
                </div>
                </div>
                <div className={resultadoClass}>Product added to cart!</div>
                <Link className='text-decoration-none' to="/cart"><div className='m-2 bg-light w-auto border border-primary rounded text-primary p-0" '>Go to cart!</div></Link>
        </div>);
      
}
export default ButtonCounter;

//<BtnAddToCart onClick={()=>handleAddToCart()} data={contador}/>
//