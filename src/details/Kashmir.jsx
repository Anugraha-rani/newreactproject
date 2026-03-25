import React from 'react'


function Kashmir() {
  return (
    <div>
        <h1 className='text-center mt-5' style={{color:"#006994"}}>Kashmir</h1>
        
  
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">

        <div className="carousel-item active px-5">
         <img style={{height:"400px"}} src="https://img.veenaworld.com/wp-content/uploads/2023/01/shutterstock_2044050407.jpg"  className="d-block w-100" alt="slide2" />
        </div>

        <div className="carousel-item">
          <img style={{height:"400px"}} src="https://images.squarespace-cdn.com/content/v1/61dbf74b4e8da975a808dcff/58e3d7a1-9607-45c9-9e48-5e200a5d401a/Blue-river-passes-through-green-pine-forest-and-snow-peaked-mountains-Sonamarg-Kashmir-India.jpg?format=1500w"  className="d-block w-100" alt="slide2" />
        </div>
        <div className="carousel-item">
          <img style={{height:"400px"}} src="https://blogs.revv.co.in/blogs/wp-content/uploads/2021/02/Srinagar.jpg"  className="d-block w-100" alt="slide2" />
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

    
    <div style={{backgroundImage:"url(https://kashmirobserver.net/wp-content/uploads/2024/01/Tangmarg-Snowfall-1024x681.jpg)",backgroundRepeat:"no-repeat", backgroundSize:"cover",padding:"50px 50px"}}>
  <p className='mt-5 fw-bold ' style={{color:"black"}}>Kashmir is famous for its snow-capped mountains, lush green valleys, sparkling rivers, and crystal-clear lakes. The region is part of the mighty Himalayas, which provides a dramatic backdrop throughout the year.

The capital city Srinagar is renowned for the picturesque Dal Lake, where traditional houseboats and colorful shikaras float peacefully.
Gulmarg is a popular destination for skiing and snow activities.
Pahalgam offers scenic meadows, pine forests, and serves as a base for trekking and pilgrimage routes.

Each season transforms Kashmir into a different paradise—spring blooms with tulips, summer offers cool retreats, autumn paints the valley in golden hues, and winter covers it in a magical blanket of snow.</p>
<p className='fw-bold text-center mt-4' style={{color:"black"}}><b>Location:India</b></p>
<p className='fw-bold text-center mt-4' style={{color:"black"}}><b >Best Time to Visit : March to October</b></p>
<p className='fw-bold text-center mt-4' style={{color:"black"}}><b>Duration : 6 Days 5 Nights</b></p>
<p className='fw-bold text-center mt-4' style={{color:"black"}}><b>Amount:50000/head</b></p>

</div>
</div>

    </div>
  )
}
export default Kashmir