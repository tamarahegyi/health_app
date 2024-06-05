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
      onSubmit({ name, phoneNumber,date });
      setName('');
      setPhoneNumber('');
      setDate('')
      setTime('');

      if(time < "06:00" || time > "20:00"){}
    };
  
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
