export function validationIncludes(value, validacion){
    return  validacion.some((vocales) => vocales.toLowerCase()=== value.toLowerCase())
}

export function validateObj(cart, item, parameter){
    return cart.some((product) => product[parameter] === item[parameter])
}
export function checkIfEmpty(form){
    const {buyer: {name, phone, email}} = form

    if (name === '' || phone === '' || email === ''){
        return true
    } else{
        return false
    }
}
export function formatNumber(number){

    return new Intl.NumberFormat( "Es-ES" ).format(number)
}



