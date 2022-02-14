import CartWidget from "../CartWidget";
import {NavLink} from "react-router-dom";
import { CartConsumer } from '../../context/CartProvider'
import './navbar.css'

const NavBar = () => {
    
    const {cart} = CartConsumer();
    const active = "text px-2 text-decoration-none text-light d-flex align-items-center"
    const inactive = "text px-2 text-decoration-none text-secondary d-flex"

    return (
            <nav id="navBar"
                 className="navbar navbar-dark navbar-1 bg-dark">
                <div className="col-10 px-3">
                    <div className="col-4">
                        <NavLink 
                            className={({ isActive }) => (isActive ? active : inactive)} 
                            to='/'>
                                <h3>CompuShop</h3>
                        </NavLink>
                    </div>
                    
                    
                    <NavLink 
                        className={({ isActive }) => (isActive ? active : inactive)} 
                        to='/cart'>
                            <div>
                                <CartWidget 
                                    className="text-decoration-none d-flex"
                                    color={({ isActive }) => (isActive ? active : inactive)} /> 
                            </div>
                            <div>
                                {cart.length}
                            </div>
                    </NavLink>
                </div>
                 
                <div className="col-sm-1 ">
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent15"
                        aria-controls="navbarSupportedContent15"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                
                <div className="collapse navbar-collapse " id="navbarSupportedContent15" >
                
                <ul className="nav navbar-nav">
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? active : inactive)}
                            to="/contactanos">
                                Contactanos
                        </NavLink>
                    </li>
                    <li>                        
                        <NavLink
                            className={({ isActive }) => (isActive ? active : inactive)} 
                            style={{height: '24px'}}
                            to="/proposito">
                                Cual es el proposito
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar
