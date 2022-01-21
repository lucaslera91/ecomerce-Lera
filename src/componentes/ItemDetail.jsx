import React, {useEffect, useState} from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({ item, text }) {
    const [bigImg, setImg] = useState('')
    
    useEffect(() => {
        setImg(item.picture)
      }, [item])

    return (
        <div className='w-100 d-flex justify-content-center text-dark' >
            <div className='container-fluid border-dark rounded w-100  h-100vh'>
                <div className='row border rounded ' style={{ minHeight: '90vh' }}>
                    <div className='col-2 '>
                        <img className='img-fluid border border-2 border-dark rounded my-2' onClick={()=>{setImg(item.picture)}} style={{ maxSize: '30px' }} src={item.picture} alt="" />
                        <img className='img-fluid border border-2 border-dark rounded my-2' onClick={()=>{setImg(item.picture1)}} style={{ maxSize: '30px' }} src={item.picture1} alt="" />
                        <img className='img-fluid border border-2 border-dark rounded my-2' onClick={()=>{setImg(item.picture2)}} style={{ maxSize: '30px' }} src={item.picture2} alt="" />
                        <img className='img-fluid border border-2 border-dark rounded my-2' onClick={()=>{setImg(item.picture3)}} style={{ maxSize: '30px' }} src={item.picture3} alt="" />
                    </div>
                    
                    <div className='col-7 d-flex flex-column justify-content-center align-items-center'>
                        <img className='img-fluid border border-1 rounded' src={bigImg} alt="" />
                        <div className='py-3'>
                            <h5>{item.descripcion}</h5>
                        </div>
                    </div>

                    <div className='col-3 d-flex justify-content-center align-items-center flex-column'>
                        <div>
                            <h3>{item.title}</h3>
                        </div>
                        <div>
                            
                            <div >
                                <h3 className="font-weight-bold">${item.price}</h3>
                            </div>
                        </div>
                        <div className='w-100 d-flex justify-content-center flex-column'>
                            <h3>Stock: {item.stock}</h3>
                            <ItemCount text={text} stock={item.stock} start={1} item={item}></ItemCount>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
