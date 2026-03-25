import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import api from "../api";
import jsPDF from "jspdf";

function BookNow() {
  const location = useLocation()
  const [paymentMethod, setPaymentMethod] = useState("");
  const[totalAmount,setTotalAmount] = useState(null)
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    date:"",
    travelers:"",
    
  })
  const place = location.state?.package
  console.log(place)
  const handlePayment = (e) => {
  setPaymentMethod(e.target.value);
};

function buttonClick(){
  alert("Payment successfull")
}

console.log(paymentMethod)

async function handleBooking() {
  try {
    const bookingData = {
      ...formData,
      place: place.name,
      price: place.price,
      totalAmount,
      paymentMethod
    };

    const response = await api.post("/allBookings", bookingData);
    

    alert("Booking Confirmed");
    console.log(response.data);
  } catch (error) {
    console.error(error);
    alert("Booking Failed");
  }
}



const handleDownload = async () => {
  try {
    const response = await api.get("/allBookings");
    const data = response.data;
    const userBookings= data.find(item=>item.email==formData.email)
if(userBookings){
    const doc = new jsPDF();

    doc.setFontSize(14);
    doc.text("Booking Details", 20, 20);

    let y = 30;
doc.text(`Place: ${userBookings.place}`, 20, y); y += 10;
    doc.text(`Name: ${userBookings.name}`, 20, y); y += 10;
    doc.text(`Email: ${userBookings.email}`, 20, y); y += 10;
    doc.text(`Phone: ${userBookings.phone}`, 20, y); y += 10;
    
    doc.text(`Travelers: ${userBookings.travelers}`, 20, y); y += 10;
    doc.text(`Total: ₹${userBookings.totalAmount}`, 20, y); y +=10;
    doc.text(`Payment Method: ${userBookings.paymentMethod}`, 20, y); y += 10;

    doc.save("booking-details.pdf");
}else{
  alert("No bookings found for this person")
}

  } catch (err) {
    console.error(err);
  }


};
  
  return (
    <div style={{color:"#006994"}}>
      <h1 className='text-center mt-5'>Book Your Trip</h1>
      <div className='bookings mt-5 d-flex  justify-content-center py-5' 
       style={{
    backgroundImage: `url(${place.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "",
    position: "relative"
  }}>
  <div className=' px-5 py-5 mt-5 bg-light'>
          <h2 style={{color:"#006994"}}>{place.name}</h2>
           <input  type="text" placeholder='Enter your name' name='name' className='form-control mt-2' onChange={(e)=>setFormData({...formData, name:e.target.value})} />
           <input  type="email" placeholder='Enter your email' name='email' className='form-control mt-2' onChange={(e)=>setFormData({...formData, email:e.target.value})} />
<input type="phone" placeholder='Enter your phone number' name='phone' className='form-control mt-2' onChange={(e)=>setFormData({...formData, phone:e.target.value})} />
<label className='mt-3' htmlFor="">Select your travel date</label>
     <input type="date" placeholder='Enter your date' name='date' className='form-control mt-2' onChange={(e)=>setFormData({...formData, date:e.target.value})} />
     <input type="number" placeholder="Enter number of travellers"name="travelers" className="form-control mt-2" onChange={(e) => {
    const value = e.target.value;

    setFormData({ ...formData, travelers: value });

    if (value === "" || value <= 0) {
      setTotalAmount(null);
    } else {
      const cleanPrice = place.price.replace(/[₹,]/g, "");
      const total = Number(cleanPrice)* Number(value);
      setTotalAmount(total);
    }
  }}
/>
     
 {totalAmount &&
   <h4 className='mt-2'>Total Amount: {totalAmount} </h4>
 }
     <div className="card p-4 mt-3">
  <h4 style={{color:"#006994"}}>Select Payment Method</h4>

  <div className="form-check d-flex align-items-center ">
    <input type="radio" name="payment" value="Card" onChange={handlePayment}/>
    <label>Credit / Debit Card</label>
  </div>

  <div className="form-check d-flex align-items-center">
    <input type="radio" name="payment" value="UPI" onChange={handlePayment}/>
    <label>UPI</label>
  </div>

  <div className="form-check d-flex align-items-center">
    <input type="radio" name="payment" value="Netbanking" onChange={handlePayment}/>
    <label>Net Banking</label>
  </div>

  <div className="form-check d-flex align-items-center">
    <input type="radio" name="payment" value="COD" onChange={handlePayment}/>
    <label>Pay Later</label>
  </div>
</div>
{paymentMethod === "Card" && (
  <div>
    <input type="text" placeholder="Card Number" className="form-control my-2"/>
    <input type="text" placeholder="CVV" className="form-control my-2"/>
  </div>
)}

{paymentMethod === "UPI" && (
  <input type="text" placeholder="Enter UPI ID" className="form-control my-2"/>
)}
<div className='text-center mt-5 '>
  { paymentMethod=="Card"  &&(
<button className='btn button' onClick={buttonClick}>Pay Now</button>
)}
{ paymentMethod=="UPI"  &&(
<button onClick={buttonClick}>Pay Now</button>
)}
{ paymentMethod=="Netbanking"  &&(
<button onClick={buttonClick}>Pay Now</button>
)}
</div>
<div className='text-center mt-5'>
<button onClick={handleBooking} className='btn button'>Confirm Booking</button>
</div>
<div className='text-center mt-5'>
 
  <button onClick={handleDownload} className='btn button'>Download Booking Details</button>

</div>
         </div>
      </div>

    </div>
  )
}


export default BookNow