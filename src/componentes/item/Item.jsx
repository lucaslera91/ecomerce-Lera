import { Link } from "react-router-dom";
import {formatNumber} from "../../helper"
import ButtonCounter from '../ButtonCounter';
import './itemStyle.css'

function Item({item}) {
   
    return (
        <div 
            className='col-4 m-4 text-dark'>
            <div className="container-fluid border-bottom border-muted p-2 bg-light shadow rounded-xl">
            <div className='w-100 py-1'>
                <p 
                    className='text-dark fs-2 text fw-light'>
                        {item.title}
                </p>
            </div>
            <div className='w-100 py-1'>
                <Link to={`/detail/${item.id}`}>
                    <img  
                        className="img-fluid img-thumbnail rounded-xl border border-muted" 
                        src={item.picture} 
                        alt=''/>
                </Link>
            </div>
            <div>
                <Link to={`/detail/${item.id}`}>
                <button 
                    className="bg-light border border-muted my-1 rounded-lg text-dark fw-light">
                        Ver mas detalles!
                </button>
                </Link>
            </div>
            <div className='text-dark fs-5 text fw-light'>
               Precio: $ {formatNumber(item.price)}
            </div>
            <div className='text-dark'>
                <ButtonCounter start={1} stock={item.stock} item={item}></ButtonCounter>
            </div>
        </div>
        </div>
        
    )
}
export default Item
