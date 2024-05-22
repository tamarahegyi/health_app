import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./LandingPage.css";


const Landing_Page = () => {
    return (
      <div className="LandingPage">
        <BrowserRouter>
          <Navbar/>
             <Routes>
            </Routes>
        </BrowserRouter>

        <body class="landing-page">
    <section class="hero-section">
        <div>
          <div data-aos="fade-up" class="flex-hero">
            <img class="cross" src="C:\Users\hegyi\Desktop\Responsive Webdesing\IBM training\Capstone project\logo2.png" aria-hidden="true"/>
              <h1 class="text-gradient">
                Your Health<br/>
                  Our Mission
              </h1>
              <h4 class="motto">
                “Primum non nocere”<br></br>
                “First do no harm”
              </h4>
              <div class="startbutton">
              <a href="C:\Users\hegyi\Desktop\Responsive Webdesing\IBM training\Capstone project\Project code\grihf-frontend_capstone_starter_code\Nav_Bar\NavBar.html">
                <button class="button"type="button"> Get Started</button>
              </a>
              </div>    
          </div>
        </div>
      </section>
    </body>
    </div>
    );
  }
  export default Landing_Page;
