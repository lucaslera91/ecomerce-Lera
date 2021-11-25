


export default function navBar() {

    return (
        <nav className="navbar fixed-top navbar-dark bg-dark">
  
            <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <h5 className="text-white h4">Products</h5>
                        <span className="text-muted">Meet Us</span>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark d-flex f-direction-row" >
                    <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span id="hamburgerButton" className="navbar-toggler-icon"></span>
                    </button>
                </nav>
                
            </div>
        </nav>
    );
}



