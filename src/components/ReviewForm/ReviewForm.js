import React, { useState } from 'react';
import './ReviewForm.css';

const doctorsData = [
  { name: "Dr. Jiao Yang", ratings: "⭐⭐⭐⭐⭐", experience: 9, speciality: "Dentist" },
  { name: "Dr. Denis Raj", ratings: "⭐⭐⭐⭐", experience: 24, speciality: "Dentist" },
  { name: "Dr. Lyn Christie", ratings: "⭐⭐⭐", experience: 11, speciality: "Dentist" },
  { name: "Dr. Jessica White", ratings: "⭐⭐⭐⭐", experience: 18, speciality: "Dentist" },
  { name: "Dr. Patrick Wong", ratings: "⭐⭐⭐⭐⭐", experience: 11, speciality: "Bone" },
  { name: "Dr. Elizabeth Clark", ratings: "⭐⭐⭐⭐", experience: 11, speciality: "Gynecologist/Obstetrician" },
  { name: "Dr. Eugene J. Turner", ratings: "⭐⭐⭐⭐", experience: 40, speciality: "Gynecologist/Obstetrician" },
  { name: "Dr. Alan Dalkin", ratings: "⭐⭐⭐⭐", experience: 33, speciality: "Gynecologist/Obstetrician" },
  { name: "Dr. Richard Pearson", ratings: "⭐⭐⭐", experience: 40, speciality: "General Physician" },
  { name: "Dr. Mark D. Okusa", ratings: "⭐⭐⭐", experience: 3, speciality: "General Physician" },
  { name: "Dr. Sarah Johnson", ratings: "⭐⭐⭐⭐⭐", experience: 9, speciality: "Dentist" },
  { name: "Dr. David Anderson", ratings: "⭐⭐⭐⭐", experience: 24, speciality: "Dentist" },
  { name: "Dr. Kevin Miller", ratings: "⭐⭐⭐⭐⭐", experience: 11, speciality: "Dentist" },
  { name: "Dr. Stephny Grosh", ratings: "⭐⭐⭐⭐", experience: 18, speciality: "Dentist" },
  { name: "Dr. Robert Johnson", ratings: "⭐⭐⭐⭐", experience: 11, speciality: "Bone" },
  { name: "Dr. Emily Clark", ratings: "⭐⭐⭐⭐⭐", experience: 11, speciality: "Gynecologist/Obstetrician" },
  { name: "Dr. Samantha Turner", ratings: "⭐⭐⭐⭐", experience: 40, speciality: "Gynecologist/Obstetrician" },
  { name: "Dr. Rachel Parker", ratings: "⭐⭐⭐", experience: 33, speciality: "Gynecologist/Obstetrician" },
  { name: "Dr. Michael Smith", ratings: "⭐⭐⭐⭐⭐", experience: 40, speciality: "General Physician" },
  { name: "Dr. Laura Taylor", ratings: "⭐⭐⭐", experience: 3, speciality: "General Physician" }
];

const specialities = [
  'Dentist', 'Gynecologist/Obstetrician', 'General Physician', 'Bone'
];

const ReviewForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = doctorsData.filter(doctor =>
    doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };

  return (
    <div>
      <section className="section">
        <nav className="navbar">
          <a className="logo">HealthGuard <i className="fa fa-tint" aria-hidden="true"></i></a>
          <a className="home" href="./navbar">Home <i className="fa fa-home" aria-hidden="true"></i></a>
          <a className="appointments" href="/basicLogin">Appointments <i className="fa fa-search" aria-hidden="true"></i></a>
          <a className="health-blog" href="#">Health Blog <i className="fa fa-users" aria-hidden="true"></i></a>
          <a className="reviews" href="./ReviewForm">Reviews <i className="fa fa-book" aria-hidden="true"></i></a>
          <a href="./basicLogin"><button className="login" type="button" onClick={logout}>Log out</button></a>
          <button className="signup" type="button">Your Profile</button>
        </nav>
      </section>

      <div>
        <input
          className="doctor-search"
          list="specialities"
          placeholder="Search by speciality"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <datalist id="specialities">
          {specialities.map((speciality, index) => (
            <option key={index} value={speciality} />
          ))}
        </datalist>
      </div>

      <section className="review-table">
        <table>
          <thead>
            <tr className="table-header">
              <th>Doctor Name</th>
              <th>Doctor Speciality</th>
              <th>Doctor Rating</th>
              <th>Provide Feedback</th>
              <th>Review Given</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.map((doctor, index) => (
              <tr key={index}>
                <td className="table-data">{doctor.name}</td>
                <td className="table-data">{doctor.speciality}</td>
                <td className="table-data">{doctor.ratings}</td>
                <td><button className="table-data">Click to leave a review</button></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ReviewForm;



