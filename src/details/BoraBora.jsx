import React from 'react'


function BoraBora() {
  return (
    <>
        <div>
                    <h1 className='text-center mt-5' style={{color:"#006994"}}>Bora Bora</h1>
                    
              
                <div id="carouselExample" className="carousel slide">
                  <div className="carousel-inner">
            
                    <div className="carousel-item active px-5">
                     <img style={{height:"400px"}} src="https://tse2.mm.bing.net/th/id/OIP.Yc0OkTBv9_ydTRvwdB7YMAHaDt?pid=Api&P=0&h=180"  className="d-block w-100" alt="slide2" />
                    </div>
            
                    <div className="carousel-item">
                      <img style={{height:"400px"}} src="https://static.vecteezy.com/system/resources/previews/013/082/349/non_2x/beautiful-forest-path-panorama-landscape-with-bright-sun-shining-through-trees-peaceful-view-of-the-green-spring-forest-fresh-foliage-woods-nature-with-beautiful-pathway-sun-rays-nature-freedom-photo.jpg"  className="d-block w-100" alt="slide2" />
                    </div>
                    <div className="carousel-item">
                      <img style={{height:"400px"}} src="http://1.bp.blogspot.com/-5pNBJAJAJD4/UW00w-jv8_I/AAAAAAAADP4/6zP_yP38iBw/s1600/PG_Bora_Bora_Motu.jpg"  className="d-block w-100" alt="slide2" />
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
            
                
                <div style={{backgroundImage:"url(https://thalasso.intercontinental.com/wp-content/uploads/2021/09/media.jpg)",backgroundRepeat:"no-repeat", backgroundSize:"cover",padding:"50px 50px"}}>
              <p className='mt-5 fw-bold ' style={{color:"white"}}>Bora Bora is one of the most breathtaking tropical destinations in the world, often called the “Pearl of the Pacific.” Located in French Polynesia, this small island lies about 230 km northwest of Tahiti and is surrounded by a stunning turquoise lagoon and a protective coral reef.Bora Bora is famous for its crystal-clear waters that shift in shades of blue and green, creating a surreal landscape. At the heart of the island rises Mount Otemanu, an extinct volcano that adds dramatic beauty to the island. White sandy beaches, lush tropical vegetation, and vibrant marine life make it a paradise for nature lovers.The island is actually part of a group of islands, including a main island and several smaller islets called “motus.” These motus are home to luxurious overwater bungalows that sit directly above the lagoon, offering direct access to the sea and breathtaking sunrise and sunset views.</p>
            <p className='fw-bold text-center mt-4' style={{color:"white"}}><b>Location:Newzealand</b></p>
            <p className='fw-bold text-center mt-4' style={{color:"white"}}><b >Best Time to Visit : May to October</b></p>
            <p className='fw-bold text-center mt-4' style={{color:"white"}}><b>Duration : 7 Days 6 Nights</b></p>
            <p className='fw-bold text-center mt-4' style={{color:"white"}}><b>Amount:200000/head</b></p>
            
            </div>
            </div>
            
                </div>
    </>
  )
}

export default BoraBora