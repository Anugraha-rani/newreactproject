import React from 'react'
import sea from '../assets/sea.jpg'
import { IoIosSend } from "react-icons/io";
import { MdTravelExplore } from "react-icons/md";
 import { FaInstagramSquare } from "react-icons/fa";
 import { FaFacebook } from "react-icons/fa";
 import { FaTwitter } from "react-icons/fa";
 import { FaYoutube } from "react-icons/fa";

function Footer() {
  function sendMessage(){
    alert("Thankyou for choosing us!!! Our executive will contact you immediately.")
  }
  return (
    <div style={{backgroundImage:`url(${sea})`,height: "600px",backgroundSize:"cover",backgroundPosition:"center",marginTop:"70px",paddingTop: "100px",bottom:"0px",}}>
     <div className='d-md-flex justify-content-center ' style={{gap:"30px"}}>
      <div>
    <p className='text-light fw-bold text-center' >KEEP IN TOUCH</p>
    
    <p className='text-light fw-bold text-center fs-2' >Travel With Us</p>
    </div>
    <div className='d-flex gap-3'>
    <input type="text" placeholder='Enter your email' className='form-control h-50' />
    
    <button className='btn d-flex align-items-center gap-2 h-50 text-light ' style={{background:"linear-gradient(to right ,#3ac5fc , #0882b3)"}} onClick={sendMessage}>Send <IoIosSend /></button>
    </div>
    </div>
    <div className='bg-light m-5' style={{borderRadius:"10px"}} >
    <div className='px-5  py-5'>
       <div className='d-md-flex justify-content-evenly w-250'>
            <div className='w-50'>
              <p style={{color:"#0882b3"}} className='fw-bold'> <MdTravelExplore className="fs-3"/>  TRAVEL</p>
              <p style={{color:"#0882b3"}}>We create unforgettable travel experiences tailored to your dreams, making every journey smooth, safe, and memorable.</p>
              
             <FaInstagramSquare className='fs-5' style={{color:"#0882b3"}}/><FaFacebook  className='fs-5 ms-3' style={{color:"#0882b3"}}/><FaTwitter  className='fs-5 ms-3' style={{color:"#0882b3"}}/><FaYoutube  className='fs-5 ms-3' style={{color:"#0882b3"}}/>
            </div>
            <div className='w-25'>
              <p style={{color:"#0882b3"}} className='fw-bold'>OUR AGENCY</p>
              <a className='links' href="">Services</a>
              <a className='links' href="">Insurance</a>
              <a className='links' href="">Agency</a>
              <a className='links' href="">Tourism</a>
              <a className='links' href="">Payment</a>
            </div>
            <div className='w-25'>
              <p style={{color:"#0882b3"}} className='fw-bold'>PARTNERS</p>
              <a className='links' href="">Booking</a>
              <a className='links' href="">RentalCar</a>
              <a className='links' href="">HostelWorld</a>
              <a className='links' href="">Trivago</a>
              <a className='links' href="">TripAdvisor</a>
            </div>
            <div className='w-25'>
              <p style={{color:"#0882b3"}} className='fw-bold'>LAST MINUTE</p>
              <a className='links' href="">London</a>
              <a className='links' href="">California</a>
              <a className='links' href="">Indonesia</a>
              <a className='links' href="">Europe</a>
              <a className='links' href="">Oceania</a>
            </div>

       </div>

    </div>
    </div>
    </div>
   
   
  )
}

export default Footer