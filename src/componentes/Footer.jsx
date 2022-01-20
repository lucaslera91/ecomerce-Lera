import React from 'react';

function Footer() {
  return (
      <div>
        <footer className="page-footer font-small cyan darken-3" >
          <div className="container" style={{height: '50px'}}>
            <div className="row" style={{height: '50px'}}>
              <div className="col-md-12">
                <div className="mb-5 flex-center ">
                  <a className="fb-ic text-light mx-2">
                    <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a className="tw-ic text-light px-2">
                    <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a className="gplus-ic text-light px-2">
                    <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a className="li-ic text-light px-2">
                    <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a className="ins-ic text-light px-2">
                    <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a className="pin-ic text-light px-2">
                    <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center p-3 text-light">© 2020 Copyright:
            MDBootstrap.com
          </div>
        </footer>
      </div>)
}

export default Footer;
