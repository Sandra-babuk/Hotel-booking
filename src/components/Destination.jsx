import React from 'react';
import { destinations } from '../data';
import '../components/destination.css';

const Destination = () => {
  return (
    <div className='destinations-container container'>
      <h1 style={{padding:'20px'}} className='destinations-header text-center mb-5 my-5'>Best Destinations</h1>
      <div className="row">
        {destinations.map((destination) => (
          <div key={destination.id} className='destinations-item col-12 col-sm-6 col-md-4 mb-4'>
            <img src={destination.image} alt="" className='destinations-img img-fluid' />
            <div className="destinations-title">
              <h1>{destination.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;
