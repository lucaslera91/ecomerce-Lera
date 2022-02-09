import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Resume from './Resume'
import { CartConsumer } from '../context/CartProvider'
import { ListConsumer } from '../context/ListProvider'
import {phonenumber, validateEmail} from '../helper'
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
    const [formInput] = useState({
     
        nameError: 'Nombre no puede estar vacio',
        phoneError: 'Colocar numero correcto',
        emailError: 'Colocar correo valido'
    })

    async function submitHandle(event){
        event.preventDefault()
     
        console.log(form)
        
        if (form.buyer.name < 1 || form.buyer.phone.length < 10 || !validateEmail(form.buyer.email)){
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Por favor revisar datos',
            })
           
        }else{
            await addItem(form)

            Swal.fire({
                icon: 'success',
                title: 'Se simulo la compra exitosamente!',
                showConfirmButton: false,
                timer: 1500
            })
            setForm({...form, buyer: {...form.buyer,  name: '', phone: '', email: '' } } )
            setCart([])
        }  
           
    }
// Example starter JavaScript for disabling form submissions if there are invalid fields
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
  
    // Loop over them and prevent submission
   
    function handleForm(e){

        const {name, value} = e.target
        //alert(name)
        if(name === 'phone'){
           
           if (phonenumber(value)){
            setForm({...form, buyer: {...form.buyer, [name]: value} } )
            console.log(form)
           }
        }else{
            setForm({...form, buyer: {...form.buyer, [name]: value} } )

        }
        
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
                <div className='w-100'>
                    <div className='row p-0 m-0 w-100 justify-content-center'>
                        <div className=' col-sm-5 col-11 text-dark d-flex flex-column p-0'>
                            <form className="d-flex flex-column">
                                    <input
                                        onChange={(e) => handleForm(e) }
                                        value={form.buyer.name} 
                                        className='my-2 py-1 rounded' 
                                        name='name' type="text" 
                                        placeholder='Name' />
                                        {!form.buyer.name ? (
                                        <div className='text-danger'><i class="far fa-times-circle"></i>{formInput.nameError}</div>)
                                    : (<div className='text-success'><i class="fas fa-check"></i> Campo correcto</div>)}
                                    <input
                                        onChange={(e) => handleForm(e) }
                                        value={form.buyer.phone}
                                        className='my-2 py-1 rounded'
                                        name='phone' type="text"
                                        placeholder='Phone'/>
                                        {form.buyer.phone.length < 10 ? (
                                        <div className='text-danger'><i class="far fa-times-circle"></i>{formInput.phoneError}</div>)
                                    : (<div className='text-success'><i class="fas fa-check"></i> Campo correcto</div>)}


                                    <input
                                        onChange={(e) => handleForm(e) }
                                        value={form.buyer.email}
                                        className='my-2 py-1 rounded'
                                        name='email' type="email"
                                        placeholder='E-mail'/> 
                                        {!validateEmail(form.buyer.email) ? (
                                            <div className='text-danger'><i class="far fa-times-circle"></i>{formInput.emailError}</div>)
                                        : (<div className='text-success'><i class="fas fa-check"></i> Campo correcto</div>)}

                            </form>

                            <div className='col-sm-12 text-dark d-flex my-3 align-items-center justify-content-center'>
                                <Resume items={cart}></Resume>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column align-items-center my-1 w-100'>
                        <button className='bg-light col-6 col-sm-3 border border-primary rounded text-primary m-2' onClick={(e) => submitHandle(e)}>Confirm Purchase</button>
                        <Link className='col-6 col-sm-3 ' to="/"><button onClick={postSubmit} className='w-100 bg-light border border-primary rounded text-primary'>Home</button></Link>
                    </div>
                    <h3 className='py-3 text-dark'>{orderResponse}</h3>
                </div>
                </div>)

}



            export default ConfirmationForm
