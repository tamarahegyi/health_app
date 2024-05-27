import React, {Component} from "react"
import {useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import { useState } from "react";
import { useRef, useEffect} from "react";
import Members from "../Registered_Members/members";

const Sign_Up = () => {
    const name=useRef()
    const phone=useRef()
    const email=useRef()
    const password=useRef()
    const localSignUp=localStorage.getItem("signUp");
    const[showHome, setShowHome]=useState(false)

    useEffect(()=>{
        if(localSignUp){
            setShowHome(true)
        }
    })
    const handleClick=()=>{
        if(name.current.value&&email.current.value&&password.current.value)
        {
            localStorage.setItem("name", name.current.value)
            localStorage.setItem("phone", phone.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("password", password.current.value)
            localStorage.setItem("signUp",email.current.value)
            alert("Account created successfully!")
            window.location.reload()
        }
    }

    return (
<div> {showHome?<Members/>:
    <div>
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
          <button class="btn1" className="login" type="button"> Log in</button></a>
          <a href="/SignUp">
          <button class="btn2" className="signup"type="button"> Sign up</button></a>
            </nav>
            </section>
        </div>
        </nav>
        <div className="container">
        <div className="signup-grid">
            <div className="signup-text">
                <h1>Sign Up</h1>

            </div>
            <div class="signup-text1">
                Already a member? <a href="/Login" > Login</a>
            </div>

            <div class="signup-form">
                <form>
                    <div class="form-group">
                        <label class="fullname" htmlFor="name">Name</label>
                        <input ref={name} type="text" id="name" required class="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                        
                    </div>
                    <div class="form-group">
                        <label class="phone-number" htmlFor="phone">Phone</label>
                        <input ref={phone} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="Enter 10 numbers between 0-9. 123-456-7890" id="phone" required class="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                        
                    </div>
                    <div class="form-group">
                        <label class="email-address" htmlFor="email">Email</label>
                        <input ref={email} type="email" name="email" id="email" required class="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                        
                    </div>
                    <div class="form-group">
                        <label class="password1" htmlFor="password">Password</label>
                        <input ref={password} type="password" name="password" id="password" required class="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                        
                    </div>
                    <div class="btn-group">
                        <button className="submit-signup" type="submit"onClick={handleClick} >Submit</button>
                        <button className="reset-signup" type="reset" >Reset</button>
                    </div>
                </form>
            </div>
            </div>
            </div>
    </div>}
</div>
)
}

export default Sign_Up;