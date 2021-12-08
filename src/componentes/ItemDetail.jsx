import React from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({item}) {
    console.log(item)
    return (
        <div className='w-100 d-flex justify-content-center'>
        <div className='container-fluid border border-secondary rounded w-100 m-2 h-100vh'>
            <div className='row'>
                <div className='col-2'>small images
                    <img className='img-fluid img-thumbnail rounded' style={{maxSize:'30px'}} src={item.picture} alt="" />
                    <img className='img-fluid img-thumbnail rounded' style={{maxSize:'30px'}} src={item.picture} alt="" />
                    <img className='img-fluid img-thumbnail rounded' style={{maxSize:'30px'}} src={item.picture} alt="" />
                    <img className='img-fluid img-thumbnail rounded' style={{maxSize:'30px'}} src={item.picture} alt="" />
                    <img className='img-fluid img-thumbnail rounded' style={{maxSize:'30px'}} src={item.picture} alt="" />
                </div>
                <div className='col-4 d-flex justify-content-center align-items-center'><img className='img-fluid img-thumbnail rounded' src={item.picture} alt="" /></div>
                <div className='col-4 d-flex justify-content-center align-items-center flex-column'>
                    <div className='text-secondary py-3'>
                    {item.descripcion}
                    </div>
                    <div >
                    <h3 className="font-weight-bold">${item.price}</h3>
                    </div>
                </div>
                <div className='col-2 d-flex justify-content-center flex-column'>
                    <h3>Stock: {item.stock}</h3>
                    <ItemCount stock={item.stock} start={1}></ItemCount>
                </div>
            </div>
        </div>
    </div>
    )
}
