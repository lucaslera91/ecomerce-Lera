import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Resume from './Resume'
import { CartConsumer } from '../context/CartProvider'
import { ListConsumer } from '../context/ListProvider'
import {checkIfEmpty} from '../helper'
//import { stringify } from '@firebase/util'
import Swal from 'sweetalert2'
import { PureComponent } from 'react/cjs/react.production.min'

function ConfirmationForm() {
    const {cart, setCart} = CartConsumer();
    const {addItem, purchaseId, setPurchaseId} = ListConsumer();
    const [orderResponse, setOrderResponse] = useState('')
    const [form, setForm] = useState({
        buyer:{ 
             name: '',
             phone: '',
             email: '' },
         items: [{
                 id: '',
                 title: '',
                 price: 0 }],
         date: Date().toString(),
         total: 0
    })
    async function submitHandle(){
        //validate form
        if (checkIfEmpty(form)){
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Please fill all the fields',
                //footer: '<a href="">Why do I have this issue?</a>'
              })
        }else{
            let aux = 0
            const auxArray = []
            cart.map(element => {
                //auxArray = [...auxArray, {id: element.id, title: element.title, price: element.price}]
                aux += element.cuantity * element.price
                auxArray.push({id: element.id, title: element.title, price: element.price})
            });

            //setForm({...form, items: [...form.items, auxArray ] } )
            console.log(auxArray)
            setTimeout(() => {
                setForm({...form, 
                    items: auxArray,
                    date: Date().toString(),
                    total: aux})
            }, 1);
            await addItem(form)
            if(purchaseId != ''){
                Swal.fire({
                    //position: 'top-end',
                    icon: 'success',
                    title: 'Your purchase was succesfull',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            
              //setCart([])
              //window.location.assign(`/checkout/${purchaseId}`)
        }
    }

    function handleForm(e){
        const {name, value} = e.target
        setForm({...form, buyer: {...form.buyer, [name]: value} } )
        //console.log(form)
    }

    useEffect(() => {
        console.log(form)
        console.log(purchaseId)
        setOrderResponse('Purchase order: ' + purchaseId)
    }, [form, purchaseId])
        //const data = {buyer:{ 
        //     name: 'Pedro2',
        //     phone: '23413215',
        //     email: 'juan@topo.com' },
        // items: [{
        //         id: 'aaa',
        //         title: 'HP',
        //         price: 31234 }],
        // date: Date().toString(),
        // total: 13251}
    
        return (
            <div>
                <div className='d-flex justify-content-center p-0 w-100'>
                    <div className='row p-0 m-0 w-100 justify-content-center'>
                        <div className=' col-sm-5 col-11 text-light d-flex flex-column p-0'>
                            <input onBlur={(e) => handleForm(e) } className='my-2 py-1 rounded' name='name' type="text" placeholder='Name' />
                            <input onBlur={(e) => handleForm(e) } className='my-2 py-1 rounded' name='phone' type="text" placeholder='Phone'/>
                            <input onBlur={(e) => handleForm(e) } className='my-2 py-1 rounded' name='email' type="text" placeholder='E-mail'/> 
                        </div>
                        <div className='col-sm-5 col-11 text-light d-flex align-items-center justify-content-center'>
                            <Resume items={cart}></Resume>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='bg-light w-50 border border-primary rounded text-primary m-2' onClick={submitHandle}>Confirm Purchase</button>
                    <Link to='/cart'><button className='bg-light w-50 border border-primary rounded text-primary m-2'>Back to cart</button></Link>
                </div>
                <h3 className='text-light'>{orderResponse}</h3>
            </div>
        )
}

export default ConfirmationForm
