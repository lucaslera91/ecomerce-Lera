import React, {useEffect, useState} from 'react'
import {validationIncludes} from '../helper'
export default function InputTest() {
let answer = ''

const [inputPractice, setInputPractice] = useState({
    nombre: ''
})
const {nombre} = inputPractice

function handleEvent(e){
    console.log(e)
    const {name, key} = e

     const aux = validationIncludes(key, ['a', 'e', 'i', 'o', 'u'])
    if(!aux){
        answer = nombre+key
        setInputPractice({nombre: answer})
    }
}
    return (
        <div className='d-flex justify-content-center flex-column align-items-center'>
            <h1 className='text-light'>This is input!!</h1>
            <input className='w-25' name='nombre' value={nombre} onKeyUp={(e) => handleEvent(e)} type="text" placeholder='Testing no Volcals' />
            <div className='text-light d-flex align-item-center' style={{ minHeight: '100vh' }}>Value in input! no Vauels allowed - {nombre}</div>
        </div>
    )
}
