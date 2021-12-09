import React from 'react'
import react, { useState } from "react";


function ButtonCounter({start, stock, text}) {
    const [contador, setContador] = useState(start);

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
    const classAux = `bg-transparent text-${text} border-0 w-100`
    //alert(classAux)
    //console.log(text)
    return (
        <div className="container-fluid d-flex justify-content-between w-100">
            <button className={classAux} onClick={onAdd}><i className="fas fa-plus"></i></button>
            <h3>{contador}</h3>
            <button className={classAux} onClick={less}><i className="fas fa-minus"></i></button>
        </div>);
      
}
export default ButtonCounter;
