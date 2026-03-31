import React from 'react'
import video from '../assets/homevideo.mp4'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Services from './Services'
import Reviews from './Reviews'
import Destinations from './Destinations'




function Home() {
  const [title, setTitle] = useState("");
  
const navigate= useNavigate()

const handleSearch = () => {
  
  navigate("/search" , {state:{title}})
};
  return (
    <section >
      <div className='home'>
      <div className='overlay'></div>
      <video  autoPlay loop muted src={video} type="homevideo/mp4" style={{width:"100%", height:"100%" , objectFit:"cover"}}></video>
      <div className='content'>
        <p className='fw-bold'>Escape. <span className='ms-2'>Explore. </span> <span className='ms-2'>Experience</span></p>
        <p className='fs-1 fw-bold'>Your perfect trip begins with us</p>
        <div className='searchinput  px-4 py-4 d-md-flex align-items-center justify-content-between'>
        
<input className='form-control'  type="text" placeholder="Search your destination" value={title} onChange={(e) => setTitle(e.target.value)}/>


<button className='btn button' onClick={handleSearch}>Search</button>

</div>

        <div className='mt-5'>
        <Link to="/discover" className='homelink fw-bold '>Discover Trip</Link>
        </div>
      </div>
      </div>
     <Destinations/>
     <Services/>
     <Reviews/>
    </section>
    
    
  )
}

export default Home