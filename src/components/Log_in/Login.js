import React, {Component, useRef, useEffect, useState} from "react";
import { Link, Navigate } from 'react-router-dom';
import Members from "../Registered_Members/members";

const Log_in=()=>{
  const email=useRef()
  const password=useRef()
  const[showHome,setShowHome]= useState(false)
  const[show,setShow]= useState(false)
  const localEmail=localStorage.getItem("email")
  const localPassword=localStorage.getItem("password")

  useEffect(()=>{
    if(localEmail){
      setShowHome(true)
    }
    if(localPassword){
      setShow(true)
    }
  })

  const handleLogin=()=>{
    if(email.current.value==localEmail&&password.current.value==localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload();
    }
    else
        alert("It seems like you are not a member yet? Please sign up")
    }

return(
<div> {showHome?<Members/>:
<nav className="Nav">
    <div>
    <section className="section">
      <nav className="navbar">
          <a className="logo"> HealthGuard <span></span>
          <i className="fa fa-tint" aria-hidden="true"></i></a>

          <a className="home" href="./navbar"> Home <span></span>
          <i className="fa fa-home" aria-hidden="true"></i></a>

        <a className="appointments" href="../Search-Page/SearchPage.html"> Appointments <span></span>
        <i className="fa fa-search" aria-hidden="true"></i></a>

        <a className="health-blog"href="#"> Health Blog <span></span>
        <i className="fa fa-users" aria-hidden="true"></i></a>

        <a className="reviews" href="../Review_Page/ReviewPage.html"> Reviews <span></span>
        <i className="fa fa-book" aria-hidden="true"></i></a>

          <a href="/">
          <button className="login" type="button"> Log in</button></a>
          <a href="/SignUp">
          <button className="signup"type="button"> Sign up</button></a>
      </nav>
    </section>
  </div>
    <div className="container">
                <div className="login-grid">
                    <div className="login-text">
                        <h2>Login</h2>
                    </div>
                    <div className="login-text">
                        Are you a new member? <span><a href="/SignUp" > Sign Up Here</a></span>
                    </div>
                    <br></br>
                    <div className="login-form">

                        <form>
                            <div className="form-group">
                                <label className="email" for="email">Email</label>
                                <input required ref={email} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label required ref={password}className="password" for="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    aria-describedby="helpId" />
                            </div>

                            <div>
                                <button className="log-in" type="submit"onClick={handleLogin}>Login</button>
                                <button className="reset" type="reset">Reset</button>
                            </div>
                            <br />
                            <div className="login-text">
                                Forgot Password?
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </nav>}
  </div>
  );
    }

    export default Log_in;