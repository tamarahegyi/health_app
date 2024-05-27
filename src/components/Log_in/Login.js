import React, { useState, useEffect, Component} from 'react';
//Apply css according to your design theme or css that has been given to you in week 2 lab 2
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Log_in = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/")
    }
  }, []);
  const login = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // name: name,
        email:email,
        password: password,
      }),
    });
    const json = await res.json();
    if (json.authtoken) {
      sessionStorage.setItem('auth-token', json.authtoken);
  
      sessionStorage.setItem('email', email);
      navigate('/');
      window.location.reload()
    } else {
      if (json.errors) {
        for (const error of json.errors) {
          alert(error.msg);
        }
      } else {
        alert(json.error);
      }
    }
  }
  return( <>
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
                                    <input type="email" name="email" id="email" class="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                                </div>
                                <div className="form-group">
                                    <label class="password" for="password">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        aria-describedby="helpId" />
                                </div>
    
                                <div>
                                    <button className="log-in" type="submit">Login</button>
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
        </nav>
        </>
    )
}

export default Log_in;