import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../views/Cart'
import Detail from '../views/Detail'
import Error from '../views/Error'
import Home from '../views/Home'
import Category from '../views/Category'
import CartProvider from '../context/CartProvider'
import ListProvider from '../context/ListProvider'
import CheckOut from '../views/CheckOut'
import FooterDisplay from '../views/FooterDisplay'
import Layout from '../rutas/Layout'

export default function Ruta() {
    return (
        <div>
            <BrowserRouter>
                <CartProvider>
                    <ListProvider>
                        <Routes>
                            <Route path="/" element={<Layout/>}>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/cart' element={<Cart/>}/>
                            <Route path='/checkout' element={<CheckOut/>}/>
                            <Route path='/detail/:idElement' element={<Detail/>}/>
                            <Route path='/category/:idCategory' element={<Category/>}/>
                            </Route>
                            <Route path='*' element={<Error/>}/>
                        </Routes>
                        <FooterDisplay/>
                    </ListProvider>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}
