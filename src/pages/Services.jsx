import React from 'react'
import { LiaHotelSolid } from "react-icons/lia";
import { FaUtensils } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaHiking } from "react-icons/fa";

function Services() {
  return (
    <>
      <h2 className='mt-5 px-5 fw-bold' style={{color:"#006994"}}>Services</h2>

      <div className='d-md-flex ' style={{padding:"0px 70px" }}>
        <div className='mt-5 service '>
       <div className='text-center'>
     <LiaHotelSolid className='fs-1' style={{color:"#006994"}}/>
     </div>
     <h3 className='text-center mt-3' style={{color:"#006994"}}>Affordable Hotels</h3>
     <p className='text-start'>We provide comfortable stays, premium amenities, and exceptional hospitality to make your journey truly relaxing.</p>
     </div>
      
       <div className='mt-5 service' style={{marginLeft:"70px"}}>
       <div className='text-center'>
     <FaUtensils  className='fs-1' style={{color:"#006994"}}/>
     </div>
     <h3 className='text-center mt-3' style={{color:"#006994"}}>Food And Drinks</h3>
     <p className='text-start'>Enjoy delicious local and international cuisine throughout your journey.From booking to return, we take care of everything.</p>
       </div>
       <div className='mt-5 service' style={{marginLeft:"70px"}}>
       <div className='text-center'>
     <FaBullhorn  className='fs-1' style={{color:"#006994"}}/>
     </div>
     <h3 className='text-center mt-3' style={{color:"#006994"}}>Safty Guide</h3>
     <p className='text-start'>We prioritize your safety with trusted guides, secure travel arrangements, and 24/7 support throughout your journey.</p>
       </div>
       </div>
       <div className='d-md-flex mt-2' style={{padding:"0px 70px"}}>
       <div className='mt-5 service'>
       <div className='text-center'>
     <FaGlobeAsia   className='fs-1' style={{color:"#006994"}}/>
     </div>
     <h3 className='text-center mt-3' style={{color:"#006994"}}>Around The World</h3>
     <p className='text-start'>We provide seamless travel services to destinations ,from local getaways to international adventures.</p>
       </div>
       <div className='mt-5 service' style={{marginLeft:"70px"}}>
       <div className='text-center'>
     <FaPlane    className='fs-1' style={{color:"#006994"}}/>
     </div>
     <h3 className='text-center mt-3' style={{color:"#006994"}}>Fastest Travel</h3>
     <p className='text-start'>We provide complete travel services for a smooth and memorable journey.Making your travel dreams easy, comfortable, and unforgettable.</p>
       </div>
       <div className='mt-5 service' style={{marginLeft:"70px"}}>
       <div className='text-center'>
     <FaHiking    className='fs-1' style={{color:"#006994"}}/>
     </div>
     <h3 className='text-center mt-3' style={{color:"#006994"}}>Adventures</h3>
     <p className='text-start'>Explore breathtaking trails with our guided hiking adventures, designed for all skill levels and nature lovers.</p>
       </div>
       </div>
       
    
    </>
  )
}

export default Services