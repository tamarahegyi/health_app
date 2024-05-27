import React from "react";
import { useEffect } from "react";
import Sign_Up from "../Sign_up/SignUp";

const logout=()=>{
    localStorage.removeItem("signUp")
    window.location.reload()
}
const deleteAccount=()=>{
    localStorage.clear("signUp")
    window.location.reload()
}

export default function Members(){
    return(
    <nav className="Nav">
    <div>
    <section className="section">
      <nav className="navbar">
          <a className="logo"> HealthGuard <span></span>
          <i className="fa fa-tint" aria-hidden="true"></i></a>

          <a className="home" href="./navbar"> Home <span></span>
          <i class="fa fa-home" aria-hidden="true"></i></a>

        <a className="appointments" href="../Search-Page/SearchPage.html"> Appointments <span></span>
        <i class="fa fa-search" aria-hidden="true"></i></a>

        <a className="health-blog"href="#"> Health Blog <span></span>
        <i class="fa fa-users" aria-hidden="true"></i></a>

        <a className="reviews" href="../Review_Page/ReviewPage.html"> Reviews <span></span>
        <i class="fa fa-book" aria-hidden="true"></i></a>

        <a href="/Login">
        <button class="btn1" className="login" type="button" onClick={logout}> Log out</button></a>
        
        <button className="logout" type="button" onClick={deleteAccount}> Delete Account</button>
      </nav>
    </section>
  </div>

  <section class="hero-section">
    <div>
      <div data-aos="fade-up" class="flex-hero">
          <h1 class="text-gradient">
            Your Health<br></br>
            <span class="text-gradient">
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
    </nav>)
}