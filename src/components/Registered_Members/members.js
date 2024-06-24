import React, { useEffect, useState } from "react";
import FindDoctorSearchIC from "../InstantConsultationBooking/FindDoctorSearchIC/FindDoctorSearchIC";
import './members.css';


const Members = () => {
  const [userName, setUserName] = useState("");
  const [isOpen, setIsOpen]= useState(false);

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("users")) || {};
    const loggedInUser = localStorage.getItem("signUp");
    if (loggedInUser && localUsers[loggedInUser]) {
      setUserName(localUsers[loggedInUser].name);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };
  const toggleDowpdown =()=>{
    setIsOpen(!isOpen);
  }

  {/* This is a function for the future to be able to delete the current user's account 
    const deleteAccount = () => {
    const loggedInUser = localStorage.getItem("signUp");
    if (loggedInUser) {
      const localUsers = JSON.parse(localStorage.getItem("users")) || {};
      delete localUsers[loggedInUser]; 
      localStorage.removeItem("signUp");
      // Delete the current user's data
      localStorage.setItem("users", JSON.stringify(localUsers)); // Update localStorage
    }
    window.location.reload(); // Reload the page
  };*/}

  return (
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
            <div className="dropdown"><button onClick={toggleDowpdown} className="signup" id="dropbtn">Your Profile</button></div>
              {isOpen && (
              <div className="dropdown-content">
                <a href="./ProfileCard">Your Profile</a>
                <a href="./ReportLayout">Your Reports</a>
              </div>
              )}
          </nav>
        </section>

        <section className="hero-section">
          <div data-aos="fade-up" className="flex-hero">
            <h2 className="welcome"></h2>
            {userName && <h2 className="name">Welcome to HealthGuard</h2>}
            <h3 className="name"> {userName}</h3>
            <h1 className="text-gradient">
              Your Health<br />
              <span className="text-gradient">Our Mission</span>
            </h1>
            <h4>“Primum non nocere” <br />“First do no harm”</h4>
            <a href="/FindDoctorSearchIC">
              <button className="startbutton" type="button">Book an appointment</button>
            </a>
          </div>
        </section>
    
      </nav>
    </div>
  );
};

export default Members;
