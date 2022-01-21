import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Resume from './Resume'
import { CartConsumer } from '../context/CartProvider'
import { ListConsumer } from '../context/ListProvider'
import {checkIfEmpty} from '../helper'
//import { stringify } from '@firebase/util'
import Swal from 'sweetalert2'


function ConfirmationForm() {
    const {cart, setCart, total} = CartConsumer();
    const {addItem, purchaseId, setPurchaseId} = ListConsumer();
    const [backHome, setBackHome] = useState([])
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
        //startButton()
        
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
                    <button className='bg-light w-25 border border-primary rounded text-primary m-2' onClick={submitHandle}>Confirm Purchase</button>
                    <Link className='w-100' to="/"><button onClick={postSubmit} className='w-25 bg-light border border-primary rounded text-primary m-2'>Home</button></Link>
                </div>

                   
                <h3 className='text-dark'>{orderResponse}</h3>
            </div>
        )
}

//<form >
//<input  onChange={(e) => setForm({...form, buyer: e.target.value})} className='form-control my-1' type="text" value={form.buyer.} name='nombre' placeholder='Nombre del Evento' />
//<input  onChange={(e) => setForm({...form, descripcion: e.target.value})} className='form-control my-1' type="text" value={form.descripcion} name='descripcion' size="100" placeholder='Descripcion' />
//<input  onChange={(e) => setForm({...form, ubicacion: e.target.value})} className='form-control my-1' type="text" value={form.ubicacion} name='ubicacion' size="50" placeholder='Ubicacion' />
//<input  onChange={(e) => setForm({...form, fecha: e.target.value})} className='form-control my-1' type="date" value={form.fecha} name='fecha' placeholder='Fecha'  />
//</form>
//
// {backHome}

export default ConfirmationForm
