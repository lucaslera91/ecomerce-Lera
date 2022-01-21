import React, { useState} from "react";
import { Link } from 'react-router-dom';
import { CartConsumer } from '../context/CartProvider'



function ButtonCounter({start, stock, item}) {
    const [contador, setContador] = useState(start);
    
    const [display, setDisplay] = useState(`visible`)
    const [resultado, setDisplayResultado] = useState(`d-none`)
    //const [compra, setCompra] = useState(0)
    const [addMore, setAddMore] = useState('d-none')

    const classAddMore = `${addMore} bg-light w-100 border border-primary rounded text-primary my-1`
    const classAux = `${display} container-fluid d-flex justify-content-between flex-column w-100 p-0 my-1`
    const classTextAux = `bg-transparent text-${'dark'} border-0 w-100`
    const resultadoClass = `${resultado} bg-primary text-dark rounded my-1`
    const {addCart} = CartConsumer();
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
    function handleAddMore(){
        setDisplay('visible')
         setDisplayResultado('d-none')
         setAddMore('d-none')
    }
    function handleAddToCart(item){
        console.log(item)
        console.log(contador)
         setDisplay('d-none')
         setDisplayResultado('visible')
         //setCompra(contador)
         addCart(item, contador)
         setAddMore('visible')
    }


   
    return (
        <div className='p-1' style={{minHeight: '110px'}}>
            <div  className={classAux}>
                <div className='d-flex w-100'>
                    <button className={classTextAux} onClick={onAdd}><i className="fas fa-plus"></i></button>
                    <h3 className='text-dark'>{contador}</h3>
                    <button className={classTextAux} onClick={less}><i className="fas fa-minus"></i></button>
                </div>
                <div className='w-100 '>
                    <button onClick={() => handleAddToCart(item)} className="bg-light w-100 border border-primary rounded text-primary p-0">Add to Cart</button>
                </div>
            </div>
            <div><button onClick={handleAddMore} className={classAddMore}>Add more to cart</button></div>
            <div className={resultadoClass}>Product added to cart!</div>
            <Link className='text-decoration-none w-100 ' to="/cart"><div className='bg-light w-auto border border-primary rounded text-primary p-0" '>Go to cart!</div></Link>
        </div>);
      
}
export default ButtonCounter;
