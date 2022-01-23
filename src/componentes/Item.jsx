import React from 'react'
import ItemCount from './ItemCount'
import { Link} from "react-router-dom";



function Item({item, text}) {
   
    return (
        <div className='col-4 m-2 text-dark' style={{minWidth: '300px', maxWidth: "400px"}}>
            <div className="container-fluid w-100 border-bottom border-dark p-1 bg-transparent">
            <div className='w-100 py-1'>
                <h3 className='d-flex justify-content-center align-items-center text-dark' style={{height: 60}}>{item.title}</h3>
            </div>
            <div className='w-100 py-1'>
                <img className="img-fluid img-thumbnail rounded border border-dark" style={{height: 200}} src={item.picture} alt=''/>
            </div>
            <div>
                <Link to={`/detail/${item.id}`}>
                <button className="bg-light w-75 border border-dark my-1 rounded text-dark" >Ver mas detalles!</button>
                </Link>
            </div>
            <div>
                <ItemCount text={text} stock={item.stock} start={1} item={item}></ItemCount>
            </div>
            <div className='text-dark'>
               Stock: {item.stock}
            </div>
        </div>
        </div>
        
    )
}
export default Item
