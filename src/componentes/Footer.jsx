import React from 'react';

function Footer() {
  return (
      <div className='py-5'>
        <footer className="page-footer font-small cyan darken-3" >
          <div className="container" style={{height: '50px'}}>
            <div className="row" style={{height: '50px'}}>
              <div className="col-md-12">
                <div className="mb-5 flex-center ">
                  <a href="https://github.com/lucaslera91" className="fb-ic text-dark mx-2">
                  <i class="fa-brands fa-github"></i>
                  </a>
                  
                  <a href="www.linkedin.com/in/lucas-lera-lls5" className="li-ic text-dark px-2">
                    <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto col-10 footer-copyright text-center p-2 text-dark">© 2020 Copyright:
            Simulacion de Pagina 
            MDBootstrap.com
          </div>
        </footer>
      </div>)
}

export default Footer;
