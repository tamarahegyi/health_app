import React, { useState } from 'react';
import './FindDoctorSearchIC.css';
import { useNavigate, Navigate } from 'react-router-dom';


const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
]

const FindDoctorSearchIC = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(initSpeciality);
    const navigate = useNavigate();
    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/instant-consultation?speciality=${speciality}`);
        window.location.reload();
    }
    return (
        <div className='page'>
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
        <div className='finddoctor'>
            <center>
                <h1>Find a doctor and Consult instantly</h1>
                <div>               <i style={{color:'rgba(7, 110, 116, 1)',fontSize:'20rem'}} className="fa fa-user-md"></i>
            </div>                <div className="home-search-container"  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div className="doctor-search-box">
                    {/* <p>Perform a search to see the results.</p> */}

                        <input type="text" className="search-doctor-input-box" placeholder="Search doctors, clinics, hospitals, etc." onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)} value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)}></input>
                        
                        <div className="findiconimg"></div>
                    
                        <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                            {
                                specialities.map(speciality => <div className="search-doctor-result-item" key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>
                                    <span><img src={process.env.PUBLIC_URL + '/images/search.svg'} alt="" style={{height:"10px", width:"10px"}} width="12" /></span>
                                    <span>{speciality}</span>
                                    <span>SPECIALITY</span>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </center>
        </div>
        </div>
    )
}

export default FindDoctorSearchIC