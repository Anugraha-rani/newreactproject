import React from 'react'
import {Link} from 'react-router-dom'


function DiscoverTrip() {
  const packages = [
  {
    id: 1,
    name: "Paris",
    image:"https://a.cdn-hotels.com/gdcs/production120/d1387/9fbda0f4-926d-4d0e-8570-432c724fa40f.jpg",
    description: "Explore the city of lights.",
    price: "₹1,20,000",
    days:"6 Days 5 Nights"
  },
  {
    id: 2,
    name: "Maldives",
    image: "https://tr-images.condecdn.net/image/Mlya9oR3NM1/crop/2040/f/baros-maldives_aerial-view-july20-pr.jpg",
    description: "Relax on crystal clear beaches.",
    price: "₹95,000",
    days:"4 Days 3 Nights"
  },
  {
    id: 3,
    name: "Dubai",
    image: "https://3.bp.blogspot.com/-AxtuwcWBs94/UrlZnCHpRSI/AAAAAAAABI4/1hpMd-tQI4c/s1600/dubai+fountain.jpg",
    description: "Experience the future in the desert.",
    price: "₹50,000",
    days:"5 Days 4 Nights"
  },
  {
    id: 4,
    name: "Rome",
    image: "https://tse4.mm.bing.net/th/id/OIP.RTV0CtcAIbgvMKA3VMVh4wHaE8?pid=Api&P=0&h=180",
    description: "Walk through history, one step at a time.",
    price: "₹200,000",
    days:"7 Days 6 Nights"
  },
  {
    id: 5,
    name: "Bali",
    image: "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/olvu6sgb3dcdjwlcpts3.jpg",
    description: "Find your soul in paradise.",
    price: "₹60,000",
    days:"5 Days 4 Nights"
  },
  {
    id: 6,
    name: "London",
    image: "https://images.squarespace-cdn.com/content/v1/59485b756a4963a72a3763f1/1570751838198-WQAHIMBGOVQ4T3TKISID/visitlondon.com%252CAntoine%2BBuchet%2Bsmall.jpg?format=1000w",
    description: "Timeless charm meets modern life.",
    price: "₹110,000",
    days:"7 Days 6 Nights"
  },
  {
    id: 7,
    name: "Kerala",
    image: "https://wallpapercave.com/wp/wp2783293.jpg",
    description: "God's Own Country awaits you.",
    price: "₹35,000",
    days:"6 Days 5 Nights"
  },
  {
    id: 8,
    name: "Singapore",
    image: "https://tse4.mm.bing.net/th/id/OIP.Slcs2g2FxOp8xksapYtaSwHaE9?pid=Api&P=0&h=180",
    description: "A perfect blend of nature and innovation.",
    price: "₹70,000",
    days:"6 Days 5 Nights"
  },
  {
    id: 9,
    name: "Tokyo",
    image: "https://res.cloudinary.com/jnto/image/upload/w_1080,h_720,c_fill,f_auto,fl_lossy,q_60/v1/media/filer_public/ec/58/ec58fc14-b3cc-4a3f-9fc1-232fc8eb1d6f/asakusa__tokyo_skytreecrichie_chan_shutterstock_y5ttyy",
    description: "Tradition meets tomorrow.",
    price: "₹150,000",
    days:"5 Days 4 Nights"
  },
  {
    id: 10,
    name: "Goa",
    image: "https://voiceofadventure.com/wp-content/uploads/2022/06/60d0813807aff-Baga_Beach_In_Goa.jpg",
    description: "Sun, sand, and endless vibes.",
    price: "₹25,000",
    days:"4 Days 3 Nights"
  },
{
    id: 11,
    name: "Newyork City",
    image: "https://nycity.tours/wp-content/uploads/2021/04/statueofliberty-1024x768.jpg",
    description: "The city that never sleeps.",
    price: "₹230,000",
    days:"8 Days 7 Nights"
  },
{
    id: 12,
    name: "Kashmir",
    image: "http://magarticles.magzter.com/articles/5893/252129/5a1d0e6368408/Kashmir-Gulmarg-Jammu-Srinagar.jpg",
    description: "Paradise on Earth.",
    price: "₹55,000",
    days:"4 Days 5 Nights"
  },
{
    id: 13,
    name: "Switzerland",
    image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/11/29111159/lauterbrunnen.jpeg",
    description: "Heaven on Earth for nature lovers.",
    price: "₹300,000",
    days:"9 Days 8 Nights"
  },
 {
    id: 14,
    name: "Ooty",
    image: "http://upload.wikimedia.org/wikipedia/commons/c/c1/Botanical_Gardens_-_Ootacamund_(Ooty)_-_India_03.JPG",
    description: "Breathe in the misty magic.",
    price: "₹20,000",
    days:"4 Days 3 Nights"
  },
  {
    id: 15,
    name: "Srilanka",
    image: "https://www.voyageavecnous.fr/wp-content/uploads/2023/10/galle-sri-lanka.jpeg",
    description: "The Pearl of the Indian Ocean.",
    price: "₹60,000",
    days:"6 Days 5 Nights"
  }, 
{
    id: 16,
    name: "Munnar",
    image: "https://www.ekeralatourism.net/wp-content/uploads/2019/01/best-time-munnar.jpg",
    description: "Green hills, endless peace.",
    price: "₹20,000",
    days:"3 Days 2 Nights"
  }, 
{
    id: 17,
    name: "Lakshadweep",
    image: "https://www.zoopindia.com/blog/wp-content/uploads/2024/01/Lakshadweep.jpg",
    description: "Where the Ocean Whispers Peace.",
    price: "₹45,000",
    days:"5 Days 4 Nights"
  }, 
{
    id: 18,
    name: "Australia",
    image: "https://assets-news.housing.com/news/wp-content/uploads/2022/09/23094604/Places-to-visit-in-Australia.jpg",
    description: "Where Adventure Meets the Wild.",
    price: "₹350,000",
    days:"9 Days 8 Nights"
  },
{
    id: 19,
    name: "Thailand",
    image: "https://www.goatsontheroad.com/wp-content/uploads/2018/09/places-to-visit-in-thailand-1.jpg",
    description: "Where Smiles Meet Paradise.",
    price: "₹100,000",
    days:"6 Days 5 Nights"
  },
{
    id: 20,
    name: "South Africa",
    image: "https://cloudfront.safaribookings.com/blog/2022/01/07-the-top15-best-tourist-attractions-in-southafrica-BW-1600px.jpg",
    description: "Discover the Soul of South Africa.",
    price: "₹170,000",
    days:"7 Days 6 Nights"
  },
{
    id: 21,
    name: "Malaysia",
    image: "https://cdn.natuerlich.reisen/wp-content/uploads/2024/01/Malaysia-Tempel-scaled.jpg",
    description: "Experience Asia in One Destination.",
    price: "₹45,000",
    days:"5 Days 6 Nights"
  }


];
  return (
    <div>
      <div className="d-flex flex-wrap mt-5 px-5" style={{gap:"20px" }}>
      {packages.map((pkg) => (
        <div key={pkg.id} className="card" style={{color:"rgb(47,106,127)"}}>
          <img src={pkg.image} alt={pkg.name} />
          <h2 className='mt-3'>{pkg.name}</h2>
          <p>{pkg.description}</p>
          <div className='d-flex justify-content-between px-2'>
            <p>{pkg.days}</p>
          <p>{pkg.price} / head</p>
          </div>

          <Link to='/book' state={{ package: pkg }} className="book-btn booklink">
            Book Now
          </Link>
        </div>
      ))}
    </div>
    </div>
  )
}

export default DiscoverTrip
