import React, {useState} from 'react'
import { Link } from "react-router-dom";
import {formatNumber} from "../helper"
import ButtonCounter from './ButtonCounter';
import ItemListContainer from './ItemListContainer';

function Item({item, text}) {
   
    //var randomColor = Math.floor(Math.random()*16777215).toString(16);
    //const setBg = () => {
    //  const randomColor = Math.floor(Math.random()*16777215).toString(16);
    //  document.body.style.backgroundColor = "#" + randomColor;
    //  color.innerHTML = "#" + randomColor;
    //}
//

    return (
        <div className='col-4 m-4 text-dark' style={{minWidth: '300px', maxWidth: "400px"}}>
            <div className="container-fluid w-100 border-bottom  border-muted p-1 bg-light shadow rounded-xl" style={{borderRadius: '2rem'}}>
            <div className='w-100 py-1'>
                <p className='d-flex justify-content-center align-items-center text-dark fs-2 text fw-light' style={{height: 60}}>{item.title}</p>
            </div>
            <div className='w-100 py-1'>
                <Link to={`/detail/${item.id}`}>
                    <img  className="img-fluid img-thumbnail rounded border border-muted" style={{height:190}} src={item.picture} alt=''/>
                </Link>
            </div>
            <div>
                <Link to={`/detail/${item.id}`}>
                <button className="bg-light w-75 border border-muted my-1 rounded-lg text-dark fw-light" style={{borderRadius: '2rem'}} >Ver mas detalles!</button>
                </Link>
            </div>
            
            
            <div className='text-dark fs-5 text fw-light'>
               Precio: $ {formatNumber(item.price)}
            </div>
            <div className='text-dark'>
                <ButtonCounter start={1} stock={item.stock} item={item}></ButtonCounter>
            </div>
        </div>
        </div>
        
    )
}
export default Item
