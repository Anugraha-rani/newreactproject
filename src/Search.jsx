import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import countries from './places/countries.json'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'



function Search() {
    const location = useLocation()
    const [result , setResult] = useState(null);
    const country = location.state?.title
    // console.log(country)
    useEffect(() => {
    if (country) {
      const found = countries.find((c) => c.name.toLowerCase() === country.toLowerCase());
      setResult(found);
    }
  }, [country]); 

  // console.log(result);

    


  return (
    <>
    { result ?(

    <div style={{color:"rgb(47,106,127", }}>
    <h2 className='mt-5 text-center fw-bold'>{result.name}</h2>
    <div className='d-flex justify-content-between px-5 page'>
    <img src={result.image1} alt={result.name} width="300" />
    <img src={result.image2} alt={result.name} width="300" />
    <img src={result.image3} alt={result.name} width="300" />
    </div>
    <p className='mt-5 text-center fw-bold fs-4'>{result.description}</p>
    <p className='text-center'><b>Capital: </b> {result.capital}</p>
    <p className='text-center'><b>Currency: </b> {result.currency}</p>
    <p className='text-center'><b>Best Time: </b> {result.bestTimeToVisit}</p>
    <p className='text-center'><b>Average Cost: </b> {result.averageCost}/head ({result.days})</p>

    <h4 className='text-center mt-5'>Top Attractions</h4>
    <ul className='text-center list-unstyled'>
      {result.topAttractions.map((place, index) => (
        <li key={index}>{place}</li>
      ))}
    </ul>
    <div className='text-center mt-5'>
    <Link to='/book1' state={{result:result}}  className='booklink px-3 py-3'>Book Now</Link>
    </div>
  </div>
) : (
 
  <p className='text-center mt-5'>Currently, we do not offer travel packages to this destination. Please explore our other exciting travel options.</p>
 
)

    }
    </>
  )
}

export default Search