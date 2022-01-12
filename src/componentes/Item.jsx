import React, {useEffect, useState} from 'react'
import ButtonCounter from './ButtonCounter'
import ItemCount from './ItemCount'
import { Link, NavLink} from "react-router-dom";
import BtnAddToCart from './BtnAddToCart';



function Item({item, fn, text}) {
   

    return (
        <div className='col-4 m-2 text-dark' style={{width: 200}}>
            <div className="container-fluid w-100 border border-dark p-1 rounded" style={{backgroundColor: '#DCD8D8'}}>
            <div className='w-100 py-1'>
                <h3 className='d-flex justify-content-center align-items-center' style={{height: 60}}>{item.title}</h3>
            </div>
            <div className='w-100 py-1'>
                <img className="img-fluid img-thumbnail rounded border border-secondary" style={{height: 200}} src={item.picture}/>
            </div>
            <div>
                <Link to={`/detail/${item.id}`}>
                <button className="bg-light w-100 border border-secondary my-1 rounded text-secondary" >Ver mas detalles!</button>
                </Link>
            </div>
            <div>
                <ItemCount text={text} stock={item.stock} start={1} item={item}></ItemCount>
            </div>
            <div>
               Stock: {item.stock}
            </div>
        </div>
        </div>
        
    )
}
export default Item
