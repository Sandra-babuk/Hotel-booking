import React from 'react'
import Hotel from '../components/Hotel'
import { hotels } from '../data'

const BestHotel = () => {
  return (
    <div>
          <Hotel hotels={hotels} heading="Best Hotels"/>

    </div>
  )
}

export default BestHotel
