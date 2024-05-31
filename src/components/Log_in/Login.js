import React, { useEffect, useRef, useState } from "react";
import Members from "../Registered_Members/members";

const Log_in = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const localEmail = localStorage.getItem("email");
    const localPassword = localStorage.getItem("password");
    const localSignUp = localStorage.getItem("signUp");

    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail && localPassword) {
      setShow(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const localEmail = localStorage.getItem("email");
    const localPassword = localStorage.getItem("password");

    if (emailRef.current.value === localEmail && passwordRef.current.value === localPassword) {
      localStorage.setItem("signUp", emailRef.current.value);
      window.location.reload();
    } else {
      alert("Please use valid credentials!");
    }
  };

  return (
    <div>
      {showHome ? (
        <Members />
      ) : (
        <nav className="Nav">
          <div>
            <section className="section">
              <nav className="navbar">
                <a className="logo">
                  HealthGuard <i className="fa fa-tint" aria-hidden="true"></i>
                </a>
                <a className="home" href="./navbar">
                  Home <i className="fa fa-home" aria-hidden="true"></i>
                </a>
                <a className="appointments" href="../Search-Page/SearchPage.html">
                  Appointments <i className="fa fa-search" aria-hidden="true"></i>
                </a>
                <a className="health-blog" href="#">
                  Health Blog <i className="fa fa-users" aria-hidden="true"></i>
                </a>
                <a className="reviews" href="../Review_Page/ReviewPage.html">
                  Reviews <i className="fa fa-book" aria-hidden="true"></i>
                </a>
                <a href="/members">
                <button className="login" type="button" onClick={handleLogin}>
                  Log in
                </button></a>
                <a href="/SignUp">
                  <button className="signup" type="button">
                    Sign up
                  </button>
                </a>
              </nav>
            </section>
          </div>
          <div className="container">
            <div className="login-grid">
              <div className="login-text">
                <h2>Login</h2>
              </div>
              <div className="login-text">
                Are you a new member? <a href="/SignUp">Sign Up Here</a>
              </div>
              <br />
              <div className="login-form">
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label className="email" htmlFor="email">
                      Email
                    </label>
                    <input
                      required
                      ref={emailRef}
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter your email"
                      aria-describedby="helpId"
                    />
                  </div>
                  <div className="form-group">
                    <label className="password" htmlFor="password">
                      Password
                    </label>
                    <input
                      required
                      ref={passwordRef}
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter your password"
                      aria-describedby="helpId"
                    />
                  </div>
                  <div>
                    <button className="log-in" type="submit">
                      Login
                    </button>
                    <button className="reset" type="reset">
                      Reset
                    </button>
                  </div>
                  <br />
                  <div className="login-text">Forgot Password?</div>
                </form>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Log_in;