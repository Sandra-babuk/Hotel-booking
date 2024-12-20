import React from 'react'
import { CiLocationOn } from "react-icons/ci";

const Location = () => {
  return (
    <div className='location'>
        <div className="location-container">
            <div>
                <CiLocationOn className='location-icon'/>
            </div>
            <div className="location-content">
                <label>Location</label>
                <input placeholder='Where are you going?' />
            </div>
        </div>
    </div>
  )
}

export default Location
