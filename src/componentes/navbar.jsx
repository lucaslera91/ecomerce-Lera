import LiMenuTag from "./LiMenuTag"

const NavBar = () => {
    
    return (<nav className="navbar navbar-dark navbar-1 bg-dark">
                <a className="navbar-brand" href="#">CompuShop</a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent15"
                    aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent15">
                    <ul className="navbar-nav mr-auto">
                        <LiMenuTag referencia="#" tituloDeMenu="Home" active="active"></LiMenuTag>
                        <LiMenuTag referencia="#" tituloDeMenu="Products"></LiMenuTag>
                        <LiMenuTag referencia="#" tituloDeMenu="Contact Us"></LiMenuTag>
                    </ul>

                </div>
            </nav>
    );
}

export default NavBar
