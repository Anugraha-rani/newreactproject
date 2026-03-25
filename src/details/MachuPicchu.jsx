import React from 'react'


function MachuPicchu() {
  return (
    <div>
                <h1 className='text-center mt-5' style={{color:"#006994"}}>Machu Picchu</h1>
                
          
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
        
                <div className="carousel-item active px-5">
                 <img style={{height:"400px"}} src="https://www.boletomachupicchu.com/gutblt/wp-content/uploads/2024/06/foto-clasica-machu-picchu-terraza-superior-full.jpg"  className="d-block w-100" alt="slide2" />
                </div>
        
                <div className="carousel-item">
                  <img style={{height:"400px"}} src="https://i.natgeofe.com/n/819ea774-aa80-435e-af5a-ae56efee7ce3/92491.jpg"  className="d-block w-100" alt="slide2" />
                </div>
                <div className="carousel-item">
                  <img style={{height:"400px"}} src="https://www.goodfreephotos.com/albums/peru/machu-picchu/stone-buildings-and-temples-in-machu-pacchu-peru.jpg"  className="d-block w-100" alt="slide3" />
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
        
            
            <div style={{backgroundImage:"url(https://www.lorenzoexpeditions.com/wp-content/uploads/2023/09/Machu-Picchu-Cusco-1024x576.jpg)",backgroundRepeat:"no-repeat", backgroundSize:"cover",padding:"50px 50px"}}>
          <p className='mt-5 fw-bold ' style={{color:"black"}}>Machu Picchu is one of the most iconic and mysterious ancient sites in the world, located high in the Andes Mountains of Peru. Built in the 15th century by the Inca civilization during the reign of Emperor Pachacuti, it is often referred to as the “Lost City of the Incas.” Machu Picchu sits at an altitude of about 2,430 meters (7,970 feet), surrounded by lush green peaks and the winding Urubamba River below. Its dramatic mountain setting, often covered in mist, gives it a magical and almost unreal appearance. The site is a masterpiece of engineering and architecture. It is made up of over 150 stone structures, including temples, terraces, plazas, and residential areas. The Incas used a technique called ashlar masonry, where stones are cut so precisely that they fit together without mortar. This construction has allowed Machu Picchu to withstand earthquakes for centuries.

</p>
        <p className='fw-bold text-center mt-4' style={{color:"black"}}><b>Location:Peru</b></p>
        <p className='fw-bold text-center mt-4' style={{color:"black"}}><b >Best Time to Visit : May to September</b></p>
        <p className='fw-bold text-center mt-4' style={{color:"black"}}><b>Duration : 6 Days 5 Nights</b></p>
        <p className='fw-bold text-center mt-4' style={{color:"black"}}><b>Amount:100000/head</b></p>
        
        </div>
        </div>
        
            </div>
  )
}

export default MachuPicchu