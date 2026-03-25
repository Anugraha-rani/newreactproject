import React from 'react'

function Guana() {
  return (
    <div>
                <h1 className='text-center mt-5' style={{color:"#006994"}}>Guanojuato</h1>
                
          
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
        
                <div className="carousel-item active px-5">
                  <img style={{height:"500px"}} src="https://travelmexicosolo.com/wp-content/uploads/2020/08/PlacesToSeeInGuanajuato-27.jpg"  className="d-block w-100" alt="slide2" />
                </div>
        
                <div className="carousel-item">
                  <img style={{height:"500px"}} src="https://lp-cms-production.imgix.net/2019-06/4cdf5d5af87fbf30b0c7a25d8fdf4c42-universidad-de-guanajuato.jpg?fit=crop&ar=1:1&w=1200&auto=format&q=75"  className="d-block w-100" alt="slide2" />
                </div>
                <div className="carousel-item">
                  <img style={{height:"500px"}} src="https://www.visit-mexico.mx/wp-content/uploads/2020/12/Guanajuato-Guanajuato-Cover-01.jpg"  className="d-block w-100" alt="slide3" />
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
        
            
            <div style={{backgroundImage:"url(https://www.goatsontheroad.com/wp-content/uploads/2015/02/places-to-visit-in-guanajuato.jpg)",backgroundRepeat:"no-repeat", backgroundSize:"cover",padding:"50px 50px"}}>
          <p className='mt-5 fw-bold ' style={{color:"white"}}>Guanajuato is a vibrant and historic city located in central Mexico, renowned for its colorful architecture, rich colonial heritage, and lively cultural scene. Nestled in a narrow valley surrounded by mountains, the city offers a unique blend of history, art, and tradition.Guanajuato is built in a mountainous region, which gives it a distinctive layout of winding streets, tunnels, and alleys. Many of its roads run underground—former riverbeds converted into tunnels—making navigation both fascinating and unusual.Founded in the 16th century, Guanajuato became one of the world’s leading silver mining centers during Spanish colonial rule. The wealth generated from mines like the famous La Valenciana Mine helped shape the city’s grand architecture.</p>
        <p className='fw-bold text-center mt-4' style={{color:"white"}}><b>Location:Mexico</b></p>
        <p className='fw-bold text-center mt-4' style={{color:"white"}}><b >Best Time to Visit : March to October</b></p>
        <p className='fw-bold text-center mt-4' style={{color:"white"}}><b>Duration : 6 Days 5 Nights</b></p>
        <p className='fw-bold text-center mt-4' style={{color:"white"}}><b>Amount:150000/head</b></p>
        
        </div>
        </div>
        
            </div>
  )
}

export default Guana