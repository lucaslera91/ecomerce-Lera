import React, { createContext, useContext, useState } from 'react'
import {validateObj} from '../helper'
const CartContext = createContext();
export const CartConsumer = () => useContext(CartContext);

function CartProvider({children}) {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState('')


    
    function removeElement(id){
        let newCart = cart.filter(element => element.id !== id)
        setCart(newCart)
    }

    function addElementsInCart(cart, item, q){
        const index = cart.findIndex((cart) => cart.id === item.id)
        const aux = cart[index].cuantity 
        if ((aux + q) <= item.stock){
            cart[index].cuantity = (aux + q)
            setCart([...cart])
        }else{
            alert(`Sorry we couldn't add ${q} more items, ${item.stock} Stock left and there is already ${aux} in cart!`)
        }
    }

    function addCart(item, q){
        if(validateObj(cart, item, 'id')) {
            addElementsInCart(cart, item, q)
        }else{
            item.cuantity = q
            setCart([...cart, item])
        }
        //alert(validateObj(cart, item, 'id'))
        //setCart([...cart, item])
    }
   

    return (
        <CartContext.Provider value={{cart, total, setCart, addCart, removeElement, setTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
