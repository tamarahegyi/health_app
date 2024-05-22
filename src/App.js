import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Nav_Bar/navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {

  return (
    <div className="App">

        <BrowserRouter>
          <Navbar/>
              <Routes>
              </Routes>
            
        </BrowserRouter>
    </div>
  );
}

export default App;
