import React, { useState, useEffect } from 'react';
import './Success.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck  } from '@fortawesome/free-solid-svg-icons';


const SuccessPage = () => {

    const[userName, setUserName]= useState("")

    useEffect(() => {
        const localUsers = JSON.parse(localStorage.getItem("users")) || {};
        const loggedInUser = localStorage.getItem("signUp");
        if (loggedInUser && localUsers[loggedInUser]) {
          setUserName(localUsers[loggedInUser].name);
        }
      }, []);

      const logout =()=>{
        localStorage.removeItem('sinUp');
        window.location.reload();
      }

  return (<>

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
              <a href="./ProfileCard"><button className="signup" type="button">Your Profile</button></a>
            </nav>
          </section>
        </nav>
      </div>

    <div className="success-container">
    <h2 className='name1'>Dear <span>{userName}</span></h2>
      <h2>Successfully Updated Details</h2>
      <p>Your details have been successfully updated!</p>
      <FontAwesomeIcon icon={faCircleCheck} className='icon' />
    </div>
    </>
  );
};

export default SuccessPage;