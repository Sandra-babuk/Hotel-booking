import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import BestHotel from '../components/BestHotel'
import Services from '../components/Services'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="home-container">
        <Destination/>
        <BestHotel/>
        <Services/>
        <Newsletter/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
