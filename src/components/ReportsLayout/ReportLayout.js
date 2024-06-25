import React, { useEffect, useState } from 'react';
import './ReportLayout.css';
import ReportDocument from '../Reports/ReportDocument.pdf'

const ReportLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem('users')) || {};
    const localAppointments = JSON.parse(localStorage.getItem('appointments')) || {};
    const loggedInUser = localStorage.getItem('signUp');

    if (loggedInUser && localUsers[loggedInUser]) {
      setIsLoggedIn(true);
      setUserInfo({
        doctorName: localAppointments[loggedInUser]?.doctorName,
        doctorSpeciality: localUsers[loggedInUser]?.doctorSpeciality
      });
      setAppointments(localAppointments[loggedInUser] || []);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('signUp');
    window.location.reload();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <nav className="Nav">
          <section className="section">
            <nav className="navbar">
              <a className="logo">HealthGuard <i className="fa fa-tint" aria-hidden="true"></i></a>
              <a className="home" href="./members">Home <i className="fa fa-home" aria-hidden="true"></i></a>
              <a className="appointments" href="/FindDoctorSearchIC">Appointments <i className="fa fa-search" aria-hidden="true"></i></a>
              <a className="health-blog" href="#">Health Blog <i className="fa fa-users" aria-hidden="true"></i></a>
              <a className="reviews" href="/ReviewForm">Reviews <i className="fa fa-book" aria-hidden="true"></i></a>
              <a href="./basicLogin"><button className="login" type="button" onClick={logout}>Log out</button></a>
              <div className="dropdown">
                <button onClick={toggleDropdown} className="signup" id="dropbtn">Your Profile</button>
                {isOpen && (
                  <div className="dropdown-content">
                    <a href="./ProfileCard">Your Profile</a>
                    <a href="/ReportLayout">Your Reports</a>
                  </div>
                )}
              </div>
            </nav>
          </section>
        </nav>
      </div>

      <div>
        {children}
        <div className="report-table">
          <section className='report-section'>
            <p className='report-tag'>Reports</p>
            <table className='booking-table'>
              <thead className='table-head'>
                <tr>
                  <th>Doctor Name</th>
                  <th>Doctor Speciality</th>
                  <th>View Report</th>
                  <th>Download Report</th>
                </tr>
              </thead>
              <tbody>
                {appointments.length > 0 ? (
                  appointments.map((appointment, index) => (
                    <tr key={index}>
                      <td>{appointment.doctorName}</td>
                      <td>{appointment.doctorSpeciality}</td>
                      <td>
                        <a href={ReportDocument} target="_blank" rel="noopener noreferrer">
                         <button className='view-report'>  View report</button>
                        </a>
                      </td>
                      <td>
                        <a href={ReportDocument} download target="_blank" rel="noopener noreferrer">
                          <button className='download-report'>Download Report</button>
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td></td>
                    <td></td>
                    <td className='noreports'>You have no recent reports</td>
                    <td>You have no recent reports</td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </>
  );
};

export default ReportLayout;
