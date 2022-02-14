import React, {useEffect, useState} from 'react'
import ItemCount from '../ItemCount'
import {formatNumber} from '../../helper'
import './itemDetailStyle.css'

export default function ItemDetail({ item, text }) {

    const [bigImg, setImg] = useState('')
    
    useEffect(() => {
        setImg(item.picture)
      }, [item])

    return (
        <div className='text-dark my-2' >
            <div className='container-fluid border-dark rounded w-100 h-100vh'>
                <div
                    className='col-12'>
                        <div className='fs-2 text fw-normal'>
                            <p>{item.title}</p>
                        </div>
                    <div 
                        className='col-10 bg-light shadow rounded-xl'>
                        <div>
                            <img className='img-fluid p-2' src={bigImg} alt="" />
                        </div>
                    </div>

                    <div className='my-3'>
                        <img 
                            className='img-fluid border border border-muted shadow rounded m-2' 
                            onMouseEnter={()=>{setImg(item.picture)}} 
                            src={item.picture} 
                            alt="" />
                        <img 
                            className='img-fluid border border border-muted shadow rounded m-2' 
                            onMouseEnter={()=>{setImg(item.picture1)}} 
                            src={item.picture1} 
                            alt="" />
                        <img 
                            className='img-fluid border border border-muted shadow rounded m-2' 
                            onMouseEnter={()=>{setImg(item.picture2)}} 
                            src={item.picture2} 
                            alt="" />
                        <img 
                            className='img-fluid border border border-muted shadow rounded m-2' 
                            onMouseEnter={()=>{setImg(item.picture3)}} 
                            src={item.picture3} 
                            alt="" />
                    </div>

                    <div className='col-12 col-sm-8 py-2'>
                        <div className='py-1'>
                            <p className='text-secondary text-justify'>
                                <small className='text-justify'>
                                    {item.descripcion}
                                </small>
                            </p>
                        </div>
                        <div>
                            <div>
                                <p className="fs-5 text fw-light">
                                    Precio: $ {formatNumber(item.price)}
                                </p>
                            </div>
                        </div>
                        <div className='col-10 col-sm-6 fw-light my-2'>
                            <p>Stock: {item.stock}</p>
                            <ItemCount text={text} stock={item.stock} start={1} item={item}></ItemCount>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
