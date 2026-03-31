import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { Link } from 'react-router-dom'


function Destinations() {
  return (
    <div>
        <h2 className='mt-5 px-5 fw-bold' style={{color:"#006994"}}>Most Visited Destinations</h2>
             <div className='d-flex flex-wrap px-5 mt-5 justify-content-between'>
             <div className='card ' style={{ width: "400px" }}>
              
              <img  className="card-img-top image" style={{ height: "200px", objectFit: "cover" }} src="https://trexperienceperu.com/sites/default/files/2022-09/best-machu-picchu-pictures.jpg" alt="machu picchu" />
              <div className='card-body'>
              <h4 className='text-start card-title px-2 mt-2'>Machu Picchu</h4>
              <p className='text-start text-muted px-2 '><CiLocationOn /> Peru</p>
              <hr />
              <p className='card-text text-start px-2'  style={{ fontSize: "14px" }}>Perched high in the Andes Mountains of Peru, Machu Picchu is a breathtaking ancient  city known for its  architecture and panoramic views.</p>
              <div className='text-start mt-2 px-2'>
              <Link to="/machu" className='detail '>Details</Link>
              </div>
             </div>
             </div>
             <div className='card ' style={{ width: "400px" }}>
              
              <img  className="card-img-top image" style={{ height: "200px", objectFit: "cover" }} src="https://ibnbattutatravel.com/wp-content/uploads/listing-images/ibnbattuta-XIVQRiJ-GH3Ms-5wS.jpg" alt="guanojuato" />
              <div className='card-body'>
              <h4 className='text-start card-title px-2 mt-2'>Guanajuato</h4>
              <p className='text-start text-muted px-2 '><CiLocationOn /> Mexico</p>
              <hr />
              <p className='card-text text-start px-2'  style={{ fontSize: "14px" }}>Guanajuato is a colorful colonial city in central Mexico, famous for its narrow winding streets, underground tunnels, and vibrant cultural scene. </p>
              <div className='text-start mt-2 px-2'>
              <Link to="/guana" className='detail '>Details</Link>
              </div>
             </div>
             </div>
             <div className='card ' style={{ width: "400px" }}>
              
              <img  className="card-img-top image" style={{ height: "200px", objectFit: "cover" }} src="https://images2.alphacoders.com/103/103560.jpg" alt="bora bora" />
              <div className='card-body'>
              <h4 className='text-start card-title px-2 mt-2'>Bora Bora</h4>
              <p className='text-start text-muted px-2 '><CiLocationOn /> Newzealand</p>
              <hr />
              <p className='card-text text-start px-2'  style={{ fontSize: "14px" }}>A stunning island nation known for its dramatic landscapes, from snow-capped mountains to lush green valleys and crystal-clear lakes.</p>
              <div className='text-start mt-2 px-2'>
              <Link to="/bora" className='detail '>Details</Link>
              </div>
             </div>
             </div>
             <div className='card mt-4' style={{ width: "400px" }}>
              
              <img  className="card-img-top image" style={{ height: "200px", objectFit: "cover" }} src="https://wallpapercave.com/wp/wp3101656.jpg" alt="bora bora" />
              <div className='card-body'>
              <h4 className='text-start card-title px-2 mt-2'>Cinque Terre</h4>
              <p className='text-start text-muted px-2 '><CiLocationOn /> Italy</p>
              <hr />
              <p className='card-text text-start px-2'  style={{ fontSize: "14px" }}>Cinque Terre is a picturesque stretch of coastline in Italy made up of five colorful villages perched on rugged cliffs. </p>
              <div className='text-start mt-2 px-2'>
              <Link to="/cinque" className='detail '>Details</Link>
              </div>
             </div>
             </div>
             <div className='card mt-4' style={{ width: "400px" }}>
              
              <img  className="card-img-top image" style={{ height: "200px", objectFit: "cover" }} src="https://i0.wp.com/imfreee.com/wp-content/uploads/2019/07/Greenery-in-Sikali-Khokana.jpg?fit=1024%2C683&ssl=1&is-pending-load=1" alt="kathmandu" />
              <div className='card-body'>
              <h4 className='text-start card-title px-2 mt-2'>Kathmandu</h4>
              <p className='text-start text-muted px-2 '><CiLocationOn /> Nepal</p>
              <hr />
              <p className='card-text text-start px-2'  style={{ fontSize: "14px" }}>Kathmandu is the vibrant capital of Nepal, known for its rich cultural heritage, ancient temples, and breathtaking Himalayan backdrop. </p>
              <div className='text-start mt-2 px-2'>
              <Link to="/kathmandu" className='detail '>Details</Link>
              </div>
             </div>
             </div>
             <div className='card mt-4' style={{ width: "400px" }}>
              
              <img  className="card-img-top image" style={{ height: "200px", objectFit: "cover" }} src="https://media.cntravellerme.com/photos/64b66d325790a4529e4facce/16:9/w_2560%2Cc_limit/Dal%2520Lake_GettyImages-1323846766.jpg" alt="kashmir" />
              <div className='card-body'>
              <h4 className='text-start card-title px-2 mt-2'>Kashmir</h4>
              <p className='text-start text-muted px-2 '><CiLocationOn /> India</p>
              <hr />
              <p className='card-text text-start px-2'  style={{ fontSize: "14px" }}>Kashmir is a breathtaking region in northern India, famous for its snow-capped mountains, serene lakes, lush valleys, and picturesque landscapes. </p>
              <div className='text-start mt-2 px-2'>
              <Link to="/kashmir" className='detail '>Details</Link>
              </div>
             </div>
             </div>
             </div>
    </div>
  )
}

export default Destinations