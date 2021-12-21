import Item from "../componentes/Item"

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


