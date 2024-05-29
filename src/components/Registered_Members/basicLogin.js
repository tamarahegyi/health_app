import React, { useEffect, useRef, useState } from "react";

const newMemberLogin =()=>{

return(<>
  <div>
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

          <a href="/Login">
          <button className="login" id="button"type="button"> Log in</button></a>
          <a href="/SignUp">
          <button className="signup"type="button" id="button"> Sign up</button></a>
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
                                <input required type="email" name="email" id="input" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label required className="password" id="input" for="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    aria-describedby="helpId" />
                            </div>

                            <div>
                               <a href="/SignUp"> <button className="log-in" type="submit" id="button">Login</button></a>
                                <button className="reset" type="reset" id="button">Reset</button>
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
  </div></>)
}
export default newMemberLogin;
