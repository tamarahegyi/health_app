import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../ProfileCard/ProfileCard.css';

const ProfileForm = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isOpen, setIsOpen]= useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("users")) || {};
    const loggedInUser = localStorage.getItem("signUp");
    if (loggedInUser && localUsers[loggedInUser]) {
      setUserName(localUsers[loggedInUser].name);
      setUserPhone(localUsers[loggedInUser].phone);
      setUserEmail(localUsers[loggedInUser].email);
      setLoggedInUser(loggedInUser);
    }
  }, []);

  const editDetails = () => {
    if (validateInputs()) {
      const users = JSON.parse(localStorage.getItem('users')) || {};
      users[loggedInUser] = { name: userName, email: userEmail, phone: userPhone };
      localStorage.setItem('users', JSON.stringify(users));
      console.log('User details updated:', users[loggedInUser]);
      navigate("/success"); // Navigate to the success page
    }
  };

    const validateInputs = () => {
    const name = userName;
    const email = userEmail;
    const phone = userPhone;
    const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !phone.match(phonePattern) || !email.match(emailPattern)) {
      alert("Please enter valid details. Phone: 123-456-7890, Email: example@example.com");
      return false;
    }
    return true;
  };

  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };

  const toggleDowpdown =()=>{
    setIsOpen(!isOpen);
  }

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
              <div className="dropdown"><button onClick={toggleDowpdown} className="signup" id="dropbtn">Your Profile</button></div>
              {isOpen && (
              <div className="dropdown-content">
                <a href="./ProfileCard">Your Profile</a>
                <a href="./ReportLayout">Your Reports</a>
              </div>
              )}
            </nav>
          </section>
        </nav>
      </div>

      <div className="profile-container">
        <div className="profile-field">
          <label htmlFor="name" className="name-tag">Name</label>
        </div>
        <input
          id="name"
          type="text"
          className="name-input"
          value={userName}
          placeholder={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <div className="profile-field">
          <label htmlFor="number" className="number-tag">Phone number</label>
        </div>
        <input
          id="number"
          type="tel"
          className="number-input"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          title="Enter 10 numbers between 0-9. 123-456-7890"
          value={userPhone}
          placeholder={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
        />
        <br />
        <div className="profile-field">
          <label htmlFor="email" className="email-tag">Email</label>
        </div>
        <input
          id="email"
          type="email"
          className="email-input"
          value={userEmail}
          placeholder={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <br />
        <button type="button" onClick={editDetails} className="edit-button">Edit your details</button>
      </div>
    </>
  );
};

export default ProfileForm;