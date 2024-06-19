import React, { useEffect, useState } from 'react';
import './Notification.css';

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('signUp');
    const localUsers = JSON.parse(localStorage.getItem('users')) || {};
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || {};

    if (loggedInUser && localUsers[loggedInUser]) {
      setIsLoggedIn(true);
      setUsername(localUsers[loggedInUser].name);

      if (storedAppointments[loggedInUser]) {
        setAppointments(storedAppointments[loggedInUser]);
      }
    }
  }, []);

  const handleAppointmentCancel = (appointmentId) => {
    const loggedInUser = localStorage.getItem("signUp");
    if (loggedInUser) {
      let localAppointments = JSON.parse(localStorage.getItem("appointments")) || {};
      localAppointments[loggedInUser] = localAppointments[loggedInUser].filter(appointment => appointment.id !== appointmentId);

      localStorage.setItem("appointments", JSON.stringify(localAppointments));
      setAppointments(localAppointments[loggedInUser]);
    }
  };

  return (
    <div>
      {children}
      {isLoggedIn && appointments.length > 0 && (
        <div className='appointments-container'>
          {appointments.map((appointment) => (
            <div key={appointment.id} className="appointment-card">
              <div className="appointment-card__content">
                <h3 className="appointment-card__title">Appointment Details</h3>
                <p className="appointment-card__message"><strong>Doctor:</strong> {appointment.doctorName}</p>
                <p className="appointment-card__message"><strong>Speciality:</strong> {appointment.doctorSpeciality}</p>
                <p className="appointment-card__message"><strong>Name:</strong> {appointment.name}</p>
                <p className="appointment-card__message"><strong>Role:</strong> {appointment.role}</p>
                <p className="appointment-card__message"><strong>Phone Number:</strong> {appointment.phoneNumber}</p>
                <p className="appointment-card__message"><strong>Date:</strong> {appointment.date}</p>
                <p className="appointment-card__message"><strong>Time:</strong> {appointment.time}</p>
                <button className="cancel-button" onClick={() => handleAppointmentCancel(appointment.id)}>Cancel Appointment</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notification;
