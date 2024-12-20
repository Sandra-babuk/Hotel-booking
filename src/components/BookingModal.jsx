import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import DateComponent from '../components/Date';
import './bookin.css';

const BookingModal = ({ show, handleClose, hotel }) => {
  const [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [bookingDetails, setBookingDetails] = useState({
    checkInDate: null,
    checkOutDate: null,
    guests: {
      adult: 1,
      children: 0,
      room: 1
    }
  });
  const [alertModalShow, setAlertModalShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value
    });
  };

  const handleDateChange = (date, type) => {
    setBookingDetails({
      ...bookingDetails,
      [type]: date
    });
    console.log(`Updated ${type}:`, date);
  };

  const handleGuestChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({
      ...bookingDetails,
      guests: {
        ...bookingDetails.guests,
        [name]: parseInt(value, 10)
      }
    });
  };

  const validateUserDetails = () => {
    const { name, phone, email } = userDetails;
    console.log('Validating User Details:', name, phone, email);
    return name && phone && email;
  };

  const handleSaveUserDetails = (e) => {
    e.preventDefault();
    if (validateUserDetails()) {
      setStep(2);
    } else {
      showAlertModal('Please fill all user details before proceeding');
    }
  };

  const validateBookingDetails = () => {
    const { checkInDate, checkOutDate, guests } = bookingDetails;
    console.log('Validating Booking Details:', checkInDate, checkOutDate, guests);
    return checkInDate && checkOutDate && guests.room;
  };

  const handleBookNow = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (validateBookingDetails()) {
      console.log({ userDetails, bookingDetails });
const message = `Dear ${userDetails.name}, thank you for choosing us for your stay. We are delighted to confirm your reservation from ${bookingDetails.checkInDate.toLocaleDateString()} to ${bookingDetails.checkOutDate.toLocaleDateString()}. We are excited to provide you with a memorable experience filled with comfort and exceptional service. See you soon! Warm regards.`;

      showAlertModal(message);

      handleClose();

      setStep(1);
      setUserDetails({
        name: '',
        phone: '',
        email: ''
      });
      setBookingDetails({
        checkInDate: null,
        checkOutDate: null,
        guests: {
          adult: 1,
          children: 0,
          room: 1
        }
      });
    } else {
      showAlertModal('Please fill all booking details before booking');
    }
  };

  const handleAlertModalClose = () => setAlertModalShow(false);
  const showAlertModal = (message) => {
    setAlertMessage(message);
    setAlertModalShow(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Book Your Stay</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {step === 1 ? (
            <Form onSubmit={handleSaveUserDetails}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={userDetails.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="custom-input"
                />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="custom-input"
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="custom-input"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="custom-button">
                Save
              </Button>
            </Form>
          ) : (
            <Form onSubmit={handleBookNow}>
              <Form.Group controlId="formDates">
                <Form.Label>Check-In / Check-Out Dates</Form.Label>
                <DateComponent
                  startDate={bookingDetails.checkInDate}
                  endDate={bookingDetails.checkOutDate}
                  onChange={handleDateChange}
                  className="custom-input"
                />
              </Form.Group>

              <Form.Group controlId="formGuests">
                <Form.Label>Guests</Form.Label>
                <Form.Control
                  as="select"
                  name="adult"
                  value={bookingDetails.guests.adult}
                  onChange={handleGuestChange}
                  className="custom-input"
                >
                  {[...Array(10).keys()].map(i => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} Adult(s)
                    </option>
                  ))}
                </Form.Control>
                <Form.Control
                  as="select"
                  name="children"
                  value={bookingDetails.guests.children}
                  onChange={handleGuestChange}
                  className="custom-input"
                >
                  {[...Array(10).keys()].map(i => (
                    <option key={i} value={i}>
                      {i} Children
                    </option>
                  ))}
                </Form.Control>
                <Form.Control
                  as="select"
                  name="room"
                  value={bookingDetails.guests.room}
                  onChange={handleGuestChange}
                  className="custom-input"
                >
                  {[...Array(10).keys()].map(i => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} Room(s)
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit" className="custom-button">
                Book Now
              </Button>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="custom-button">
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {alertModalShow && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <h2 style={{ margin: 0, marginBottom: '10px', fontSize: '1.5em' }}>Booking Confirmed!</h2>
            <p style={{ margin: 0, marginBottom: '20px', fontSize: '1em' }}>{alertMessage}</p>
            <Button 
              style={{
                padding: '10px 20px',
                border: 'none',
                backgroundColor: '#007bff',
                color: '#fff',
                borderRadius: '5px',
                cursor: 'pointer'
              }} 
              onClick={handleAlertModalClose}>
                Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;
