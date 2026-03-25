import React from 'react'
import { FaUserCircle } from "react-icons/fa";

function Reviews() {
    const reviews = [
    { name: "John", text: "Our trip to Paris was absolutely unforgettable! The entire journey was perfectly organized, with comfortable accommodations and  transportation.", place: "Paris" },
    { name: "Sara", text: "Our trip to the Maldives was nothing short of a dream come true. From the moment we arrived, everything was perfectly organized and stress-free.", place: "Maldives" },
    { name: "Alex", text: "Our recent trip to Dubai was  unforgettable and exceeded all our expectations. From the moment we arrived, everything was  organized—from airport to hotel accommodations.", place: "Dubai" },
    { name: "Emma", text: "Our trip to Kashmir was truly unforgettable!The entire journey was well-organized, with comfortable accommodations, delicious food, and friendly guides who made sure we explored the best of the region.", place: "Kashmir" },
    { name: "David", text: "Our trip to Bali was nothing short of magical. From the moment we arrived, everything was perfectly organized—from airport transfers to hotel check-ins.", place: "Bali" },
    { name: "Lily", text: "An unforgettable journey through Switzerland! From the moment we arrived, everything was perfectly organized.", place: "Switzerland" }
  ];
  return (
    <>
    <h2 className='mt-5 px-5 fw-bold' style={{color:"#006994"}}>Reviews</h2>
    <div id="reviewCarousel" className="carousel slide mt-5" data-bs-ride="carousel">
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="container" >
            <div className="row">
              {reviews.slice(0, 3).map((review, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card p-3 shadow" style={{height:"300px"}}>
                    <div className='fs-1 text-center' style={{color:"#0882b3"}}>
                        <FaUserCircle />
                    </div>
                    <h5 style={{color:"#0882b3"}}>{review.name}</h5>
                    <p style={{color:"#0882b3"}}>{review.text}</p>
                    <small style={{color:"#0882b3"}}>{review.place}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="container">
            <div className="row">
              {reviews.slice(3, 6).map((review, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card p-3 shadow"  style={{height:"300px"}}>
                    <div className='fs-1 text-center' style={{color:"#0882b3"}}>
                        <FaUserCircle />
                    </div>
                    <h5 style={{color:"#0882b3"}}>{review.name}</h5>
                    <p style={{color:"#0882b3"}}>{review.text}</p>
                    <small style={{color:"#0882b3"}}>{review.place}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#reviewCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#reviewCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
    </>
  )
}

export default Reviews