import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Service from './Components/Service'
import Info from './Components/Info'
import Review from './Components/Review'
import Footer from './Components/Footer'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Hero/>
    <Service/>
    <Info/>
    <Review/>
    <Footer/>
  </StrictMode>,
)
