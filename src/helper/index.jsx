import Swal from 'sweetalert2'


export function validationIncludes(value, validacion){
    return  validacion.some((vocales) => vocales.toLowerCase()=== value.toLowerCase())
}

export function validateObj(cart, item, parameter){
    return cart.some((product) => product[parameter] === item[parameter])
}
export function checkIfEmpty(form){
    const {buyer: {name, phone, email}} = form

    if (name === '' || phone === '' || email === ''){
        return false
    } else{
        return true
    }
}
export function formatNumber(number){

    return new Intl.NumberFormat( "Es-ES" ).format(number)
}

export function validateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    //return ('form control is-valid')
    return true
  }
 
    return false
}


export function phonenumber(number)
{
    if (isNaN(number)){
        return false
    } else{
        return true
    }
   
}





