import React from 'react'

function Cinque() {
  return (
    <div>
                <h1 className='text-center mt-5' style={{color:"#006994"}}>Cinque Terre</h1>
                
          
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
        
                <div className="carousel-item active px-5">
                  <img style={{height:"500px"}} src="https://www.ourescapeclause.com/wp-content/uploads/2019/05/CinqueTerre-93.jpg"  className="d-block w-100" alt="slide2" />
                </div>
        
                <div className="carousel-item">
                  <img style={{height:"500px"}} src="https://www.roadaffair.com/wp-content/uploads/2017/12/cinque-terre-italy-shutterstock_156908369.jpg"  className="d-block w-100" alt="slide2" />
                </div>
                <div className="carousel-item">
                  <img style={{height:"500px"}} src="https://www.italia.it/content/dam/tdh/en/interests/liguria/porto-venere-e-le-cinque-terre/media/20210311125638-shutterstock-1437367463.jpg"  className="d-block w-100" alt="slide3" />
                </div>
        
                
        
              </div>
        
              {/* Controls */}
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
        
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
            <div style={{padding:"0px 100px",marginTop:"50px"}}>
        
            
            <div style={{backgroundImage:"url(https://www.kevmrc.com/wp-content/uploads/2016/12/manarola-cinque-terre-italy-15.jpg)",backgroundRepeat:"no-repeat", backgroundSize:"cover",padding:"50px 50px"}}>
          <p className='mt-5 fw-bold ' style={{color:"white"}}> Cinque Terre is a breathtaking stretch of rugged coastline along the Italian Riviera, renowned for its five colorful fishing villages—Monterosso al Mare, Vernazza, Corniglia, Manarola, and Riomaggiore—perched dramatically on steep cliffs overlooking the shimmering Ligurian Sea. This UNESCO World Heritage Site is celebrated for its pastel-hued houses, narrow winding streets, and terraced vineyards that cascade down the hillsides, reflecting centuries of harmonious coexistence between humans and nature. The region offers stunning panoramic views, crystal-clear waters, and scenic hiking trails like the famous Sentiero Azzurro, which connects the villages and provides unforgettable vistas at every turn. Visitors are drawn not only by its natural beauty but also by its rich cultural charm, where traditional Italian life thrives through local cuisine, fresh seafood, and regional specialties such as pesto and Ligurian wines.</p>
        <p className='fw-bold text-center mt-4' style={{color:"white"}}><b>Location:Italy</b></p>
        <p className='fw-bold text-center mt-4' style={{color:"white"}}><b >Best Time to Visit : March to October</b></p>
        <p className='fw-bold text-center mt-4' style={{color:"white"}}><b>Duration : 6 Days 5 Nights</b></p>
        <p className='fw-bold text-center mt-4' style={{color:"white"}}><b>Amount:150000/head</b></p>
        
        </div>
        </div>
        
            </div>
  )
}

export default Cinque