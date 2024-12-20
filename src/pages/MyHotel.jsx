import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { allHotels, facilities, rooms } from '../data';
import Navbar from '../components/Navbar';
import { FaLocationDot } from 'react-icons/fa6';
import { GiDoubleStreetLights } from 'react-icons/gi';
import { MdPool } from 'react-icons/md';
import { FaCity } from 'react-icons/fa';
import { TbParkingCircle } from 'react-icons/tb';
import BookingModal from '../components/BookingModal';
import '../pages/myhotel.css';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

const MyHotel = () => {
  const { id } = useParams();
  const hotel = allHotels.find((hotel) => hotel.id === parseInt(id));
  const [modalShow, setModalShow] = useState(false);
  const [bookingModalShow, setBookingModalShow] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleClose = () => setModalShow(false);
  const handleBookingModalClose = () => setBookingModalShow(false);
  const handleShow = (index) => {
    setSelectedImageIndex(index);
    setModalShow(true);
  };

  const handleBookingModalShow = () => setBookingModalShow(true);

  return (
    <div>
      <Navbar />
      <div className="hotel-container">
        <div className="hotel-wrapper">
          <h1 className="hotel-title">{hotel.title}</h1>
          <div className="hotel-location">
            <FaLocationDot />
            <span>{hotel.location}</span>
          </div>
          <span className="hotel-distance">Excellent location - 500m from center</span>
          <span className="hotel-price">Enjoy a comfortable stay starting at ${hotel.price} per night</span>
          <div className="hotel-images">
            {rooms.map((room, i) => (
              <div key={i} className='hotel-images-wrapper'>
                <img src={room.image} alt="" className='hotel-img' onClick={() => handleShow(i)} />
              </div>
            ))}
          </div>
          <div className="hotel-details">
            <div className="hotel-details-text">
              <h1 className="hotel-title">About this hotel</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem accusamus optio, alias, officiis sed excepturi non sequi consectetur fuga sit harum perspiciatis nulla error dicta in. Nihil, magnam voluptate!
                At tempora expedita ut impedit eligendi numquam aut architecto veniam magni ea, quod aspernatur quae dolorem necessitatibus vero natus optio voluptatibus. Veniam, quis aliquid? Facilis, quia! Inventore praesentium architecto excepturi!
                Repellat sed asperiores eius aut saepe perferendis minus qui quas voluptatum unde sit dolorem magni id enim, facilis a ipsam rerum! Quidem, dignissimos. Fugit quo qui, veniam at impedit quibusdam?
              </p>
              <div className="hotel-facilities">
                <h1 className="hotel-facilities-title">Hotel Facilities</h1>
                <div className="facilities">
                  {facilities.map((facilitie) => (
                    <div key={facilitie.id} className='facilitie'>
                      <span>{facilitie.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hotel-highlights">
              <h1>Hotel Highlights</h1>
              <h4>Perfect for a night stay!</h4>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum quibusdam necessitatibus soluta iste fuga tenetur!</span>
              <h4>Breakfast Info</h4>
              <span>Fresh, Protein-packed, Savory, Gourmet</span>
              <h4>Rooms With</h4>
              <ul>
                <li>
                  <GiDoubleStreetLights /> Quiet street view
                </li>
                <li>
                  <MdPool /> Pool with a view
                </li>
                <li>
                  <FaCity /> City view
                </li>
                <li>
                  <TbParkingCircle /> Free parking
                </li>
              </ul>
              <button onClick={handleBookingModalShow}>Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <BookingModal show={bookingModalShow} handleClose={handleBookingModalClose} />
      <Modal show={modalShow} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Carousel activeIndex={selectedImageIndex} onSelect={(index) => setSelectedImageIndex(index)}>
            {rooms.map((room, i) => (
              <Carousel.Item key={i}>
                <img src={room.image} alt={`Room ${i}`} className='carousel-img' />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MyHotel;
