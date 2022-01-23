
function Carusell({items}) {
    const url = 'https://media.istockphoto.com/vectors/blue-sky-and-clouds-seamless-vector-background-vector-id1163292935?k=20&m=1163292935&s=612x612&w=0&h=UkJc7uklb677HRh_Mn-5mrFM1cy4u8xJUxiYl4540eQ='
if(items.length < 1){
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
}else{
 
    return(
        <div className="border-3 border border-dark rounded m-3 p-3" style={{backgroundImage: `url(${url})`}}>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" style={{objectFit: 'contain', overflow:'hidden',height: '250px'}} src={items[0].picture} alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" style={{ objectFit: 'contain', overflow:'hidden', height: '250px'}} src={items[5].picture} alt="Second slide"/>
              </div>
              <div className="carousel-item" >
                <img className="d-block w-100" style={{objectFit: 'contain', overflow:'hidden',height: '250px'}} src={items[7].picture} alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control-prev text-decoration-none" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <i className="fas fa-angle-double-left fa-3x text-dark"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next text-decoration-none" href="#carouselExampleIndicators" role="button" data-slide="next">
            <i className="fas fa-angle-double-right fa-3x text-dark"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        )
}
}

export default Carusell;
