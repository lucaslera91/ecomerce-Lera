import CartWidget from "./CartWidget";
import {NavLink, Link} from "react-router-dom";
import { CartConsumer } from '../context/CartProvider'


const NavBar = () => {

    const {cart} = CartConsumer();

    const active =   "d-flex justify-content-start col-8  text-decoration-none px-2 text-decoration-none text-light"
    const inactive = "d-flex justify-content-start col-8  text-decoration-none px-2 text-decoration-none text-secondary"

    return (
                <nav id="navBar" className="navbar navbar-dark navbar-1 bg-dark d-flex overflow-hidden">
                
                <div className="col-sm-10 px-3 d-flex align-items-center justify-content-start">
                    <div className="col-sm-9 px-3 d-flex align-items-center justify-content-start">
                        <NavLink className={({ isActive }) => (isActive ? active : inactive)} to='/'>
                            <h3>CompuShop</h3>
                        </NavLink>
                    
                    </div>

                    <Link className='text-decoration-none col-4 col-sm-2' style={{borderRadius: '2rem'}} to="/cart">
                        <div className='bg-light mx-auto border border-primary rounded-xl text-primary p-0' style={{ borderRadius: '2rem'}}>Go to cart!</div>
                    </Link>
                    <div className="col-sm-1 p-1">
                        <NavLink  className={({ isActive }) => (isActive ? active : inactive)} to='/cart'>
                            <CartWidget className="text-decoration-none" color="light" /> {cart.length}
                        </NavLink>
                    </div>
                </div>
                 
                
                <div className="col-sm-1 ">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent15"
                        aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                
                <div className="collapse navbar-collapse " id="navbarSupportedContent15" >
                
                <ul className="nav navbar-nav">
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? active : inactive)} to="/category/laptop">Laptop</NavLink>
                    </li>
                    <li>                        
                        <NavLink className={({ isActive }) => (isActive ? active : inactive)} to="/category/desktop">Desktop</NavLink>
                    </li>
                </ul>
                </div>
                </nav>
    );
}

export default NavBar
