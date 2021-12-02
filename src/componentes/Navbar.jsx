import LiMenuTag from "./LiMenuTag"
import CartWidget from "./CartWidget";
const NavBar = () => {

    return (<nav id="navBar" className="navbar navbar-dark navbar-1 bg-dark d-flex overflow-hidden">
        
            <div className="col-sm-10 px-3 d-flex justify-content-start"><a className="navbar-brand" href="#">CompuShop</a></div>

            <div className="col-sm-1 p-1"><CartWidget className="" color="light" /></div>

            <div className="col-sm-1 ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent15"
                    aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

        <div className="collapse navbar-collapse " id="navbarSupportedContent15" >

            <ul className="navbar-nav">
                <LiMenuTag referencia="#" tituloDeMenu="Home" active="active"></LiMenuTag>
                <LiMenuTag referencia="#" tituloDeMenu="Products"></LiMenuTag>
                <LiMenuTag referencia="#" tituloDeMenu="Contact Us"></LiMenuTag>
            </ul>

        </div>







    </nav>

    );
}

export default NavBar
// <div className="d-flex flex-row">
