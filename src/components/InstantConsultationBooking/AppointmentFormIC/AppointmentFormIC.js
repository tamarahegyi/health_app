import React, { useState } from 'react';
import './AppointmentFormIC.css';

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const[date, setDate]= useState('');
    const[time, setTime]= useState('');
    

    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber,date, time });
      setName('');
      setPhoneNumber('');
      setDate('')
      setTime('');

      if(time < "06:00" || time > "20:00"){}
    };

    // At the moment this code doesn't seem to set the date to a min of today's date
    document.addEventListener('DOMContentLoaded', (event) => {
      const dateInput = document.getElementById('dateInput');
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const day = String(today.getDate()).padStart(2, '0');
      
      const todayString = `${year}-${month}-${day}`;
      
      dateInput.setAttribute('min', todayString);
    })

    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            className='booking-input'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            className='booking-input'
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          </div>
          <div className="form-group">
          <label htmlFor="date">Date of the appointment</label>
          <input
            className='booking-input'
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            
          />
          </div>
          <div className="form-group">
          <label htmlFor="time">Book time Slot</label>
          <h5>Kindly note we are open from 6am until 8pm.</h5>
          <input
            className='booking-input'
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            min="06:00"
            max="20:00"
            required
          />
        </div>
        <button className="submit" type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentFormIC
