import React from 'react';
import { IoCalendarOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateComponent = ({ startDate, endDate, onChange }) => {
  return (
    <div className='date'>
      <div className="check-in">
        <IoCalendarOutline className='date-icon' />
        <div className="date-content">
          <label>Check-In</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => onChange(date, 'checkInDate')}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText='Add date'
            dateFormat='dd/MM/yyyy'
            className='add-date'
          />
        </div>
      </div>
      <span>
        <BsArrowRight />
      </span>
      <div className="check-out">
        <IoCalendarOutline className='date-icon' />
        <div className="date-content">
          <label>Check-Out</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => onChange(date, 'checkOutDate')}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText='Add date'
            dateFormat='dd/MM/yyyy'
            className='add-date'
          />
        </div>
      </div>
    </div>
  );
};

export default DateComponent;
