import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Nav_Bar/navbar';
import Login from './components/Log_in/Login';
import SignUp from './components/Sign_up/SignUp';
import Members from './components/Registered_Members/members';
import BasicLogin from './components/Registered_Members/basicLogin';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (<>
        <BrowserRouter>
          <FontAwesomeIcon/>
          <Routes>
          <Route path="/NavBar" element={<Navbar />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element ={<SignUp/>}/>
          <Route path="/members" element={<Members/>}/>
          <Route path="/basicLogin" element={<BasicLogin/>}/>
          </Routes>  
        </BrowserRouter>
        </>
  )
}

export default App;
