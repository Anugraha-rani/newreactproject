import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '../api'
import { useState } from 'react'
import { useEffect } from 'react'


function LoginPage() {
    const location = useLocation()
    const navigate=useNavigate()
    const [userBookings, setUserBookings] = useState([])
    const user= location.state
    const mail= user.email
    console.log(mail)
   useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await api.get("/allBookings");

       
        const filtered = response.data.filter(
          (item) => item.email === mail
        );

        setUserBookings(filtered);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBookings();
  }, [mail]);
const logoutClick=()=>{
  alert("You have successfully logged out")
  navigate("/")
}

    
  return (
    <div style={{height:"100vh"}}>
    <div className='d-flex justify-content-between p-5'>
       <h2 className='text-center ' style={{color:"#067594"}}>Welcome <span className='ms-3'>{user.name}</span> </h2> 
       <button className='btn ' onClick={logoutClick} style={{backgroundColor:"#067594",color:"white"}}>Logout</button>
       </div>
       <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
      {userBookings.length>0 ?(
        userBookings.map((item,index)=>(
          <div key={index} >
            <div className='d-flex align-items-center justify-content-center flex-column shadow-xl text-light px-5 py-2' style={{backgroundColor:"#067594"}}>
   <p >Place :{item.place}</p>
   
   <p>Date of trip :{item.date}</p>
   <p>Number of travelers :{item.travelers}</p>
   <p>Total Amount : {item.totalAmount}</p>
   <p>Method of payment: {item.paymentMethod}</p>
   </div>
          </div>
        ))
      ):(
        <p>No bookings found</p>
      )}
    </div>
   </div>
  )
}

export default LoginPage