// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';  // Import Home component
import Login from './Login';
import SignUp from './SignUp';
import './App.css';

const App = () => {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />  {/* Add Home route */}
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
        </Routes>
      </div>
  );
};

export default App;
