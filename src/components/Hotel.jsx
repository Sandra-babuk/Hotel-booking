import React from 'react';
import '../components/hotel.css';
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Hotel = ({ hotels, heading }) => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/myhotels/${id}`);
  };

  return (
    <div className='hotels-container container'>
      <h1 className="hotels-header">{heading}</h1>
      <div className="hotels row">
        {hotels.map((hotel) => (
          <div key={hotel.id} className='hotel-item col-12 col-sm-6 col-md-4 mb-4'>
            <img
              onClick={() => handleViewDetails(hotel.id)}
              src={hotel.image}
              alt=""
              className='hotel-image img-fluid'
            />
            <div className="hotel-content p-3">
              <span className='hotel-location d-flex align-items-center'>
                <CiLocationOn className='icon me-2' />{hotel.location}
              </span>
              <span
                className='hotel-name d-block my-2'
                onClick={() => handleViewDetails(hotel.id)}
              >
                {hotel.name}
              </span>
              <div className="hotel-rate d-flex align-items-center justify-content-between my-2">
                <button className="btn btn-outline-primary">{hotel.rate}</button>
                <span>{hotel.review}</span>
              </div>
              <span className="hotel-price d-block">
                <span>From:</span> ${hotel.price} <span>/night</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
