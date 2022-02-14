import React, {useEffect} from 'react'
import ConfirmationForm from '../componentes/ConfirmationForm'

function CheckOut() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div style={{minHeight: '100vh'}}>
            <div style={{height: '10vh'}}></div>
            <ConfirmationForm ></ConfirmationForm>
        </div>
    )
}

export default CheckOut
