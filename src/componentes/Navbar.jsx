import LiMenuTag from "./LiMenuTag"
import CartWidget from "./CartWidget";
import { Link, NavLink} from "react-router-dom";
import { CartConsumer } from '../context/CartProvider'

const NavBar = () => {
    const {cart} = CartConsumer();

    return (<nav id="navBar" className="navbar navbar-dark navbar-1 bg-dark d-flex overflow-hidden">
        
            <div className="col-sm-10 px-3 d-flex justify-content-start"><Link className='text-decoration-none' to='/'><a className="navbar-brand">CompuShop</a></Link></div>

            <div className="col-sm-1 p-1"><Link className='d-flex text-decoration-none text-light' to='/cart'><CartWidget className="text-decoration-none" color="light" />{cart.length}</Link></div>

            <div className="col-sm-1 ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent15"
                    aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

        <div className="collapse navbar-collapse " id="navbarSupportedContent15" >

            <ul className="navbar-nav">
                <Link className='text-decoration-none'to="/category/laptop">
                    <LiMenuTag referencia="#" tituloDeMenu="Laptop" active="active"></LiMenuTag>
                </Link>

                <NavLink className='text-decoration-none' to="/category/desktop">
                    <LiMenuTag referencia="#" tituloDeMenu="Desktop"></LiMenuTag>
                </NavLink>
            </ul>

        </div>
    </nav>

    );
}

export default NavBar
