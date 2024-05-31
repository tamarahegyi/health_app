import React from "react";
import { useNavigate, useRef } from "react-router-dom";
import FindDoctorSearchIC from "../InstantConsultationBooking/FindDoctorSearchIC/FindDoctorSearchIC";
import './/members.css'

const members = ()=>{
  const localUsers = JSON.parse(localStorage.getItem("users")) || {};

  const logout=()=>{
    localStorage.removeItem("signUp")
    window.location.reload()
}
const deleteAccount=()=>{
  localStorage.clear("signUp")
  window.location.reload()
}

  
    return(<>
<div>
    <nav className="Nav">
    <div>
    <section className="section">
      <nav className="navbar">
          <a className="logo"> HealthGuard <span></span>
          <i className="fa fa-tint" aria-hidden="true"></i></a>

          <a className="home" href="./members"> Home <span></span>
          <i className="fa fa-home" aria-hidden="true"></i></a>
        <a className="appointments" href="/FindDoctorSearchIC"> Appointments <span></span>
        <i className="fa fa-search" aria-hidden="true"></i></a>

        <a className="health-blog"href="#"> Health Blog <span></span>
        <i className="fa fa-users" aria-hidden="true"></i></a>

        <a className="reviews" href="../Review_Page/ReviewPage.html"> Reviews <span></span>
        <i className="fa fa-book" aria-hidden="true"></i></a>

        <a href="/navbar">
        <button className="login" type="button" id="logout" onClick={logout} > Log out</button></a>
        <a href="/SignUp">
        <button className="signup" type="button" onClick={deleteAccount}> Your Profile</button></a>
      </nav>
    </section>
  </div>

  <section className="hero-section">
    <div>
      <div data-aos="fade-up" className="flex-hero">
        <h2>Wellcome to HealthGuard {localStorage.getItem("name")}</h2>
          <h1 className="text-gradient">
            Your Health<br></br>
            <span className="text-gradient">
              Our Mission
            </span>
          </h1>
          <h4>
            “Primum non nocere” <br></br>“First do no harm”</h4>
        </div>
        <a href="/Appointments"><button className ="startbutton" type="button"> Book an appointment
        </button>
        </a>
    </div>
    </section>
    </nav>
</div>
    </>);
}

export default members;