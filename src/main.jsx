import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Service from './Components/Service'
import Info from './Components/Info'
import Review from './Components/Review'
import Footer from './Components/Footer'
import Services from './Pages/Services'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Service />
              <Info />
              <Review />
              <Footer />
            </>
          }
        />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
