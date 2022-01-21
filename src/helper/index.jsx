import Item from "../componentes/Item"
import Swal from 'sweetalert2'
export function validationIncludes(value, validacion){
    //console.log(validacion)
   // console.log(value)
    return  validacion.some((vocales) => vocales.toLowerCase()=== value.toLowerCase())
}

export function validateObj(cart, item, parameter){
    //alert(item[parameter])
    //alert(cart[parameter])
    return cart.some((product) => product[parameter] === item[parameter])
}
export function checkIfEmpty(form){
    const {buyer: {name, phone, email}} = form

    if (name == '' || phone == '' || email == ''){
        return true
    } else{
        return false
    }
}



