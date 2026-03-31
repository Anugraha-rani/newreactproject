import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import DiscoverTrip from './pages/DiscoverTrip'
import BookNow from './pages/BookNow'
import Search from './Search'
import Kashmir from './details/Kashmir'
import Kathmandu from './details/Kathmandu'
import BoraBora from './details/BoraBora'
import MachuPicchu from './details/MachuPicchu'
import Guana from './details/Guana'
import Cinque from './details/Cinque'
import BookNow1 from './pages/BookNow1'
import Destinations from './pages/Destinations'
import Services from './pages/Services'
import Reviews from './pages/Reviews'






function App() {
  

  return (
    <>
      <Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
<Route path='login' element={<LoginPage/>}/>
<Route path='discover' element={<DiscoverTrip/>}/>
<Route path='book' element={<BookNow/>}/>
<Route path='search' element={<Search/>}/>
<Route path='kashmir' element={<Kashmir/>}/>
<Route path='kathmandu' element={<Kathmandu/>}/>
<Route path='bora' element={<BoraBora/>}/>
<Route path='machu' element={<MachuPicchu/>}/>
<Route path='guana' element={<Guana/>}/>
<Route path='cinque' element={<Cinque/>}/>
<Route path='book1' element={<BookNow1/>}/>
<Route path='destinations' element={<Destinations/>}/>
<Route path='services' element={<Services/>}/>
<Route path='reviews' element={<Reviews/>}/>


</Routes>
      <Footer/>
    </>
  )
}

export default App
