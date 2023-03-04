import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/';
import About from './components/about';
import Project from './components/projects'

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/index" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Project/>} />
      </Routes>
      </Router>

     
    </div>
  
  );
}

export default App;
