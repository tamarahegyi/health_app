import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Nav_Bar/navbar';
import Login from './components/Log_in/Login';
import SignUp from './components/Sign_up/SignUp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faTint } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (<>
        <BrowserRouter>
          <FontAwesomeIcon/>
          <faBook/>
          <faTint/>
          <faHome/>
          <faSearch/>
          <faUser/>
          <Routes>
          <Route path="/NavBar" element={<Navbar />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element ={<SignUp/>}/>
          </Routes>  
        </BrowserRouter>
        </>
  )
}

export default App;
