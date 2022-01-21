
function Carusell({items}) {
    const url = 'https://media.istockphoto.com/vectors/blue-sky-and-clouds-seamless-vector-background-vector-id1163292935?k=20&m=1163292935&s=612x612&w=0&h=UkJc7uklb677HRh_Mn-5mrFM1cy4u8xJUxiYl4540eQ='
if(items.length < 1){
    return <h3>Loading...</h3>
}else{
 
    return(
        <div className="border-3 border border-dark rounded m-3 p-3" style={{backgroundImage: `url(${url})`}}>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
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
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
        
        )
}

    


  
}

export default Carusell;
//
//
//<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//                <ol className="carousel-indicators">
//                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//                </ol>
//                <div className="carousel-inner">
//                  <div className="carousel-item active">
//                    <img className="d-block w-100" style={{objectFit: 'contain', overflow:'hidden',height: '250px'}} src={items[0].picture} alt="First slide"/>
//                  </div>
//                  <div className="carousel-item">
//                    <img className="d-block w-100" style={{objectFit: 'contain', overflow:'hidden',height: '250px'}} src={items[1].picture} alt="Second slide"/>
//                  </div>
//                  <div className="carousel-item">
//                    <img className="d-block w-100" style={{objectFit: 'contain', overflow:'hidden',height: '250px'}} src={items[2].picture} alt="Third slide"/>
//                  </div>
//                </div>
//                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                  <span className="sr-only">Previous</span>
//                </a>
//                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//                   <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                   <span className="sr-only">Next</span>
//                </a>
//            </div>