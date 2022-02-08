import React, {useEffect, useState} from 'react'
import ItemCount from './ItemCount'
import {formatNumber} from '../helper'

export default function ItemDetail({ item, text }) {
    const [bigImg, setImg] = useState('')
    
    useEffect(() => {
        setImg(item.picture)
      }, [item])

    return (
        <div className='w-100  d-flex justify-content-center text-dark' >
            <div className='container-fluid border-dark rounded w-100 h-100vh'>
                <div className='col-12 d-flex flex-column align-items-center' style={{ minHeight: '90vh' }}>
                    
                        <div className='fs-2 text fw-normal'>
                            <p>{item.title}</p>
                        </div>
                    
                    <div className='col-10 d-flex flex-column justify-content-center align-items-center bg-light shadow rounded-xl' style={{borderRadius: '1rem', overflow:'hidden'}}>
                        <div>
                            <img style={{maxHeight: '370px', objectFit: 'contain'}} className='img-fluid' src={bigImg} alt="" />
                        </div>
                        
                    </div>

                    <div className='d-flex justify-content-center my-3' style={{maxWidth: "80px", maxHeight: "80px"}}>
                        <img className='img-fluid border border border-muted shadow rounded m-2' onMouseEnter={()=>{setImg(item.picture)}} style={{ maxSize: '30px' }} src={item.picture} alt="" />
                        <img className='img-fluid border border border-muted shadow rounded m-2' onMouseEnter={()=>{setImg(item.picture1)}} style={{ maxSize: '30px' }} src={item.picture1} alt="" />
                        <img className='img-fluid border border border-muted shadow rounded m-2' onMouseEnter={()=>{setImg(item.picture2)}} style={{ maxSize: '30px' }} src={item.picture2} alt="" />
                        <img className='img-fluid border border border-muted shadow rounded m-2' onMouseEnter={()=>{setImg(item.picture3)}} style={{ maxSize: '30px' }} src={item.picture3} alt="" />
                    </div>

                    <div className='col-12 col-sm-8 d-flex justify-content-center align-items-center flex-column py-2'>
                        <div className='py-1'>
                            <p className='text-secondary text-justify'><small className='text-justify'>{item.descripcion}</small></p>
                        </div>
                        <div>
                            <div >
                                <p className="fs-5 text fw-light">Precio: $ {formatNumber(item.price)}</p>
                            </div>
                        </div>
                        <div className='col-10 col-sm-6 d-flex justify-content-center flex-column fw-light my-2'>
                            <p>Stock: {item.stock}</p>
                            <ItemCount text={text} stock={item.stock} start={1} item={item}></ItemCount>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
