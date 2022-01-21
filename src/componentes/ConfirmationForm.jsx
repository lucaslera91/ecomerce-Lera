import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Resume from './Resume'
import { CartConsumer } from '../context/CartProvider'
import { ListConsumer } from '../context/ListProvider'
import {checkIfEmpty} from '../helper'
import Swal from 'sweetalert2'


function ConfirmationForm() {
    const {cart, setCart, total} = CartConsumer();
    const {addItem, purchaseId, setPurchaseId} = ListConsumer();
    const [orderResponse, setOrderResponse] = useState('')
    const [form, setForm] = useState({
        buyer:{ 
             name: '',
             phone: '',
             email: '' },
         items: cart,
         date: Date().toString(),
         total: total
    })
    
    async function submitHandle(){
        console.log(form)
        //validate form
        if (checkIfEmpty(form)){
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Please fill all the fields',
            })
        }else{
            addItem(form)

            Swal.fire({
                icon: 'success',
                title: 'Your purchase was succesfull',
                showConfirmButton: false,
                timer: 1500
            })
            setForm({...form, buyer: {...form.buyer,  name: '', phone: '', email: '' } } )
            setCart([])
        }
    }

    function handleForm(e){
        const {name, value} = e.target
        setForm({...form, buyer: {...form.buyer, [name]: value} } )
        console.log(form)
    }

    function handlePostOrder(){
        setOrderResponse('Purchase order: ' + purchaseId)
    }

    function postSubmit(){
        setPurchaseId("")
    }

    useEffect(() => {
        handlePostOrder()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [purchaseId])

        return (
            <div className='d-flex flex-column align-items-center'>
                <div className='d-flex justify-content-center p-0 w-100'>
                    <div className='row p-0 m-0 w-100 justify-content-center'>
                        <div className=' col-sm-5 col-11 text-dark d-flex flex-column p-0'>
                            <form className='d-flex flex-column'>
                                <input onChange={(e) => handleForm(e) } value={form.buyer.name} className='my-2 py-1 rounded' name='name' type="text" placeholder='Name' />
                                <input onChange={(e) => handleForm(e) } value={form.buyer.phone} className='my-2 py-1 rounded' name='phone' type="text" placeholder='Phone'/>
                                <input onChange={(e) => handleForm(e) } value={form.buyer.email} className='my-2 py-1 rounded'  name='email' type="text" placeholder='E-mail'/> 
                            </form>
                        </div>
                        <div className='col-sm-5 col-11 text-dark d-flex align-items-center justify-content-center'>
                            <Resume items={cart}></Resume>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column align-items-center w-100'>
                    <button className='bg-light col-6 col-sm-3 border border-primary rounded text-primary m-2' onClick={submitHandle}>Confirm Purchase</button>
                    <Link className='col-6 col-sm-3 ' to="/"><button onClick={postSubmit} className='w-100 bg-light border border-primary rounded text-primary'>Home</button></Link>
                </div>

                   
                <h3 className='text-dark'>{orderResponse}</h3>
            </div>
        )
}


export default ConfirmationForm
