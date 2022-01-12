import React from 'react'
import ConfirmationForm from '../componentes/ConfirmationForm'
import NavBar from '../componentes/Navbar'

function CheckOut() {
    return (
        <div style={{minHeight: '100vh'}}>
            <NavBar></NavBar>
            <ConfirmationForm ></ConfirmationForm>
        </div>
    )
}

export default CheckOut
