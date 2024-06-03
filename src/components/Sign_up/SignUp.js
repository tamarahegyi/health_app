import React, { useRef, useState, useEffect } from "react";
import Members from "../Registered_Members/members";
import './/SignUp.css'

const Sign_Up = () => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);

  const localSignUp = localStorage.getItem("signUp");
  const localUsers = JSON.parse(localStorage.getItem("users")) || {};

  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localUsers[emailRef.current?.value]) {
      setShow(true);
    }
  }, [localSignUp, localUsers]);

  const handleClick = () => {
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (name && email && password) {
      const newUser = { name, phone, email, password };
      localUsers[email] = newUser;
      localStorage.setItem("users", JSON.stringify(localUsers));
      localStorage.setItem("signUp", email);
      alert("Account created successfully!");
      window.location.reload();
    }
  };

  const handleLogin = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const user = localUsers[email];

    if (user && user.password === password) {
      localStorage.setItem("signUp", email);
      window.location.href="/members";
    } else {
      alert("It seems like you are not a member yet? Please sign up");
    }
  };

  return (
    <div>
      {showHome ? (
        <Members />
      ) : show ? (
        <div>
          <nav className="Nav">
            <div>
              <section className="section">
                <nav className="navbar">
                  <a className="logo">
                    HealthGuard <span></span>
                    <i className="fa fa-tint" aria-hidden="true"></i>
                  </a>

                  <a className="home" href="./navbar">
                    Home <span></span>
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </a>

                  <a className="appointments" href="/basicLogin">
                    Appointments <span></span>
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </a>

                  <a className="health-blog" href="#">
                    Health Blog <span></span>
                    <i className="fa fa-users" aria-hidden="true"></i>
                  </a>

                  <a className="reviews" href="../Review_Page/ReviewPage.html">
                    Reviews <span></span>
                    <i className="fa fa-book" aria-hidden="true"></i>
                  </a>

                  <a href="/basicLogin">
                    <button className="btn1" type="button">
                      Log in
                    </button>
                  </a>
                  <a href="/SignUp">
                    <button className="btn2" type="button">
                      Sign up
                    </button>
                  </a>
                </nav>
              </section>
            </div>
          </nav>
          <div className="container">
            <div className="signup-grid">
              <div className="signup-text">
                <h1>Sign Up</h1>
              </div>
              <div className="signup-text1">
                Already a member? <a href="/Login"> Login</a>
              </div>

              <div className="signup-form">
                <form>
                  <div className="form-group">
                    <label className="fullname" htmlFor="name">
                      Name
                    </label>
                    <input
                      ref={nameRef}
                      type="text"
                      id="name"
                      required
                      className="form-control"
                      placeholder="Enter your name"
                      aria-describedby="helpId"
                    />
                  </div>
                  <div className="form-group">
                    <label className="phone-number" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      ref={phoneRef}
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      title="Enter 10 numbers between 0-9. 123-456-7890"
                      id="phone"
                      required
                      className="form-control"
                      placeholder="Enter your phone number"
                      aria-describedby="helpId"
                    />
                  </div>
                  <div className="form-group">
                    <label className="email-address" htmlFor="email">
                      Email
                    </label>
                    <input
                      ref={emailRef}
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="form-control"
                      placeholder="Enter your email"
                      aria-describedby="helpId"
                    />
                  </div>
                  <div className="form-group">
                    <label className="password1" htmlFor="password">
                      Password
                    </label>
                    <input
                      ref={passwordRef}
                      type="password"
                      name="password"
                      id="password"
                      required
                      className="form-control"
                      placeholder="Enter your password"
                      aria-describedby="helpId"
                    />
                  </div>
                  <div className="btn-group">
                    <a href="/members"><button className="submit-signup" type="button" onClick={handleLogin}>
                      Submit
                    </button></a>
                    <button className="reset-signup" type="reset">
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <nav className="Nav">
            <div>
              <section className="section">
                <nav className="navbar">
                  <a className="logo">
                    HealthGuard <span></span>
                    <i className="fa fa-tint" aria-hidden="true"></i>
                  </a>

                  <a className="home" href="./navbar">
                    Home <span></span>
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </a>

                  <a className="appointments" href="/basicLogin">
                    Appointments <span></span>
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </a>

                  <a className="health-blog" href="#">
                    Health Blog <span></span>
                    <i className="fa fa-users" aria-hidden="true"></i>
                  </a>

                  <a className="reviews" href="../Review_Page/ReviewPage.html">
                    Reviews <span></span>
                    <i className="fa fa-book" aria-hidden="true"></i>
                  </a>

                  <a href="/basicLogin">
                    <button className="btn1 login" type="button">
                      Log in
                    </button>
                  </a>
                  <a href="/SignUp">
                    <button className="btn2 signup" type="button">
                      Sign up
                    </button>
                  </a>
                </nav>
              </section>
            </div>
          </nav>
          <div className="container">
            <div className="signup-grid">
              <div className="signup-text">
                <h1>Sign Up</h1>
              </div>
              <div className="signup-text1">
                Already a member? <a href="/Login"> Login</a>
              </div>

              <div className="signup-form">
                <form>
                  <div className="form-group">
                    <label className="fullname" htmlFor="name">
                      Name
                    </label>
                    <input
                      ref={nameRef}
                      type="text"
                      id="name"
                      required
                      className="form-control"
                      placeholder="Enter your name"
                      aria-describedby="helpId"
                    />
                  </div>
                  <div className="form-group">
                    <label className="phone-number" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      ref={phoneRef}
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      title="Enter 10 numbers between 0-9. 123-456-7890"
                      id="phone"
                      required
                      className="form-control"
                      placeholder="Enter your phone number"
                      aria-describedby="helpId"
                    />
                  </div>
                  <div className="form-group">
                    <label className="email-address" htmlFor="email">
                      Email
                    </label>
                    <input
                      ref={emailRef}
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="form-control"
                      placeholder="Enter your email"
                      aria-describedby="helpId"
                    />
                  </div>
                  <div className="form-group">
                    <label className="password1" htmlFor="password">
                      Password
                    </label>
                    <input
                      ref={passwordRef}
                      type="password"
                      name="password"
                      id="password"
                      required
                      className="form-control"
                      placeholder="Enter your password"
                      aria-describedby="helpId"
                    />
                  </div>
                  <div className="btn-group">
                    <button className="submit-signup" type="button" onClick={handleClick}>
                      Submit
                    </button>
                    <button className="reset-signup" type="reset">
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sign_Up;
