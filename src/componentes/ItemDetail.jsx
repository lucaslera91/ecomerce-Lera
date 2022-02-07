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
                    
                    
                    <div className='col-10 d-flex flex-column justify-content-center align-items-center bg-light shadow rounded-xl' style={{borderRadius: '2rem'}}>
                        <div>
                            <img style={{height: '375px', objectFit: 'contain'}} className='img-fluid' src={bigImg} alt="" />
                        </div>
                        <div style={{height: '100px'}}className='py-4'>
                            <p className='text-secondary'><small>{item.descripcion}</small></p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center my-3' style={{maxWidth: "80px", maxHeight: "80px"}}>
                        <img className='img-fluid border border border-secondary rounded m-2' onMouseEnter={()=>{setImg(item.picture)}} style={{ maxSize: '30px' }} src={item.picture} alt="" />
                        <img className='img-fluid border border border-secondary rounded m-2' onMouseEnter={()=>{setImg(item.picture1)}} style={{ maxSize: '30px' }} src={item.picture1} alt="" />
                        <img className='img-fluid border border border-secondary rounded m-2' onMouseEnter={()=>{setImg(item.picture2)}} style={{ maxSize: '30px' }} src={item.picture2} alt="" />
                        <img className='img-fluid border border border-secondary rounded m-2' onMouseEnter={()=>{setImg(item.picture3)}} style={{ maxSize: '30px' }} src={item.picture3} alt="" />
                    </div>

                    <div className='col-12 col-sm-4 d-flex justify-content-center align-items-center flex-column py-2'>
                        <div>
                            <h3>{item.title}</h3>
                        </div>
                        <div>
                            
                            <div >
                                <h3 className="font-weight-bold">$ {formatNumber(item.price)}</h3>
                            </div>
                        </div>
                        <div className='w-100 d-flex justify-content-center flex-column my-3'>
                            <h3>Stock: {item.stock}</h3>
                            <ItemCount text={text} stock={item.stock} start={1} item={item}></ItemCount>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
