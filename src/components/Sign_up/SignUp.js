import React, {Component} from "react";

export default function SignUp(){
    return (<>
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
        <div class="container">
        <div class="signup-grid">
            <div class="signup-text">
                <h1>Sign Up</h1>

            </div>
            <div class="signup-text1">
                Already a member? <a href="/Login" > Login</a>
            </div>
            <div class="signup-form">
                <form>

                    <div class="form-group">
                        <label class="fullname" for="name">Name</label>
                        <input type="text" name="name" id="name" required class="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                    </div>
                    <div class="form-group">
                        <label class="phone-number" for="phone">Phone</label>
                        <input type="tel" name="phone" id="phone" required class="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                    </div>
                    <div class="form-group">
                        <label class="email-address" for="email">Email</label>
                        <input type="email" name="email" id="email" required class="form-control" placeholder="Enter your email" aria-describedby="helpId" />

                    </div>
                    <div class="form-group">
                        <label class="password1" for="password">Password</label>
                        <input name="password" id="password" required class="form-control" placeholder="Enter your password" aria-describedby="helpId" />


                    </div>
                    <div class="btn-group">
                        <button class="submit" type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                        <button class="reset" type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
    )
}