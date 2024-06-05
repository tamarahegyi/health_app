import React, {Component} from "react";

const navbar =()=>{
  
  return(<>
    <nav className="Nav">
    <div>
    <section className="section">
      <nav className="navbar">
          <a className="logo"> HealthGuard <span></span>
          <i className="fa fa-tint" aria-hidden="true"></i></a>

          <a className="home" href="./navbar"> Home <span></span>
          <i class="fa fa-home" aria-hidden="true"></i></a>

        <a className="appointments" href="/basicLogin"> Appointments <span></span>
        <i class="fa fa-search" aria-hidden="true"></i></a>

        <a className="health-blog"href="/basicLogin"> Health Blog <span></span>
        <i class="fa fa-users" aria-hidden="true"></i></a>

        <a className="reviews" href="../Review_Page/ReviewPage.html"> Reviews <span></span>
        <i class="fa fa-book" aria-hidden="true"></i></a>
        <a href="/basicLogin">
        <button  className="login" type="button"> Log in</button></a>
        <a href="/SignUp">
        <button className="signup"type="button"> Sign up</button></a>
      </nav>
    </section>
  </div>
  </nav>
  </>
)
}
export default navbar;