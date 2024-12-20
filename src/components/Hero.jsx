import React from 'react'
import '../components/hero.css'
import Location from '../components/Location'
import Date from '../components/Date'
import Guest from '../components/Guest'
import { Link } from 'react-router-dom'



const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-container">
            <h1>Start Your Journey With Us</h1>
            <p>Find what makes you happy anytime,anywhere</p>
            <div className="hero-search-container">
                <div className="hero-search">
                    <div className="hero-wrapper">
                        <Location/>
                        <Date/>
                        <Guest/>
                        <Link to='/hotels'>
                        <div className="search-button">
                            <button>Search</button>
                        </div>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Hero
