import React, { Component } from 'react';
import "./NavBar.css";

export default class navbar extends Component {
  render() {
    return (
      <div>
        <div>
            <section class="section">
                <nav class="navbar">
                    <a class="logo" href="../Landing_Page/LandingPage.html"> HealthGuard</a>

                    <a class="home" className="active" href="../Landing_Page/LandingPage.html"> Home 
                    <i class="fa fa-fw fa-home" className="home-image"></i></a>

                    <a class="appointments" className="active" href="../Search-Page/SearchPage.html"> Appointments
                    <i class="fa fa-fw fa-search" className="search-image"></i></a>

                    <a class="health-blog" className="active" href="#"> Health Blog
                    <i class="fa fa-fw fa-users" className="users-image"></i></a>

                    <a class="reviews" className="active" href="../Review_Page/ReviewPage.html"> Reviews
                    <i class="fa fa-fw fa-book" className="book-image"></i></a>

                    <a href="../Log_in/Login_page.html">
                    <button class="btn1" className="login" type="button"> Log in</button></a>

                    <a href="../Sign_Up/SignUp.html">
                    <button class="btn2" className="signup"type="button"> Sign up</button></a>
                </nav>
            </section>
        </div>
        <section class="hero-section">
            <div>
                <div data-aos="fade-up" class="flex-hero">
                    <h1 class="text-gradient">
                    Your Health<br/>
                    <span class="text-gradient">
                    Our Mission
                    </span>
                    </h1>
                </div>
                <h4>
                “Primum non nocere” <br></br>“First do no harm”
                </h4>
            </div>
        </section>
    </div>
    )
  }
}
