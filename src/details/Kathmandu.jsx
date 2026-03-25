import React from 'react'


function Kathmandu() {
  return (
    <div>
            <h1 className='text-center mt-5' style={{color:"#006994"}}>Kathmandu</h1>
            
      
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
    
            <div className="carousel-item active px-5">
             <img style={{height:"400px"}} src="https://ktmguide.com/wp-content/uploads/2020/08/bigstock-Kathmandu-nepal-Jan-363789031-scaled.jpg"  className="d-block w-100" alt="slide2" />
            </div>
    
            <div className="carousel-item">
              <img style={{height:"400px"}} src="https://2.bp.blogspot.com/-Csl_uVScqng/UM8LZ8_mXPI/AAAAAAAAAiY/pj0nElmLncs/s1600/nepal-8-of-9.jpg"  className="d-block w-100" alt="slide2" />
            </div>
            <div className="carousel-item">
              <img style={{height:"400px"}} src="https://www.dominicanabroad.com/wp-content/uploads/2019/10/Kathmandu-Places-to-Visit-5-1024x682.jpg"  className="d-block w-100" alt="slide3" />
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
    
        
        <div style={{backgroundImage:"url(https://www.visionsoftravel.org/wp-content/uploads/2020/10/Chandragiri-Hills-Kathmandu-Nepal-21-scaled.jpg)",backgroundRepeat:"no-repeat", backgroundSize:"cover",padding:"50px 50px"}}>
      <p className='mt-5 fw-bold ' style={{color:"white"}}>Kathmandu is the vibrant capital city of Nepal, nestled in a valley surrounded by the majestic Himalayas. It is a unique blend of ancient traditions, rich cultural heritage, and modern urban life, making it one of the most fascinating travel destinations in South Asia.

Kathmandu is known for its centuries-old temples, monasteries, and palaces that reflect deep spiritual roots in both Hinduism and Buddhism. The city's heart is Kathmandu Durbar Square, a historic complex filled with intricately carved wooden temples, courtyards, and royal palaces. Nearby, Swayambhunath, also known as the Monkey Temple, sits atop a hill offering panoramic views of the city along with a peaceful spiritual atmosphere. Another iconic site is Pashupatinath Temple, one of the holiest temples dedicated to Lord Shiva.</p>
    <p className='fw-bold text-center mt-4' style={{color:"white"}}><b>Location:Nepal</b></p>
    <p className='fw-bold text-center mt-4' style={{color:"white"}}><b >Best Time to Visit : March to October</b></p>
    <p className='fw-bold text-center mt-4' style={{color:"white"}}><b>Duration : 6 Days 5 Nights</b></p>
    <p className='fw-bold text-center mt-4' style={{color:"white"}}><b>Amount:50000/head</b></p>
    
    </div>
    </div>
    
        </div>
  )
}

export default Kathmandu