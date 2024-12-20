import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Filter from '../pages/Filter'
import { allHotels } from '../data'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import {  BsGrid3X2Gap } from 'react-icons/bs'
import Footer from '../components/Footer'
import '../pages/allhotel.css'
import Hotel from '../components/Hotel'


const AllHotels = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Filter/>
      <div className="allhotels-items">
        <h2 className="allhotels-heading">{allHotels.length}Hotel Found</h2>
        <div className="allhotels-icons">
          <HiOutlineSquares2X2/>
          <BsGrid3X2Gap/>
        </div>
      </div>
      <Hotel hotels={allHotels}/>
      <Footer/>
     </div>
  )
}

export default AllHotels
