import LiMenuTag from "./LiMenuTag"
import CartWidget from "./CartWidget";
import { Link, NavLink} from "react-router-dom";
const NavBar = () => {

    return (<nav id="navBar" className="navbar navbar-dark navbar-1 bg-dark d-flex overflow-hidden">
        
            <div className="col-sm-10 px-3 d-flex justify-content-start"><a className="navbar-brand" href="#">CompuShop</a></div>

            <div className="col-sm-1 p-1"><Link to='/cart'><CartWidget className="" color="light" /></Link></div>

            <div className="col-sm-1 ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent15"
                    aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

        <div className="collapse navbar-collapse " id="navbarSupportedContent15" >

            <ul className="navbar-nav">
                <Link to="/">
                    <LiMenuTag referencia="#" tituloDeMenu="Home" active="active"></LiMenuTag>
                </Link>

                <NavLink to="/products">
                    <LiMenuTag referencia="#" tituloDeMenu="Productos"></LiMenuTag>
                </NavLink>

                <NavLink to="/">
                    <LiMenuTag referencia="#" tituloDeMenu="Contact Us"></LiMenuTag>
                </NavLink>
            </ul>

        </div>







    </nav>

    );
}

export default NavBar
// <div className="d-flex flex-row">
