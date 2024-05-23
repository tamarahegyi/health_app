import React, {Component} from "react";

export default function Login(){
    return(
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

        <a className="health-blog" href="#"> Health Blog <span></span>
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

                            <div className="btn-group">
                                <button class="login" type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button>
                                <button class="reset" type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
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
    )
}