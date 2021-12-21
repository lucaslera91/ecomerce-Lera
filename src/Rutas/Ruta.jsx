import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../views/Cart'
import Detail from '../views/Detail'
import Error from '../views/Error'
import Home from '../views/Home'
import Category from '../views/Category'
import InputTest from '../views/InputTest'
import CartProvider from '../context/CartProvider'
export default function Ruta() {
    return (
        <div>
            <BrowserRouter>
                <CartProvider>
                    <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/cart' element={<Cart/>}/>
                            <Route path='/detail/:idElement' element={<Detail/>}/>
                            <Route path='/category/:idCategory' element={<Category/>}/>
                            <Route path='/input' element={<InputTest/>}/>
                            <Route path='*' element={<Error/>}/>
                        </Routes>
                    </CartProvider>
            </BrowserRouter>
        </div>
    )
}
