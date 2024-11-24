// src/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: Add your own styles

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our App</h1>
      <p>Deakin-app solution for all your needs.</p>
      <div className="button-container">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/Signup" className="btn">Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;
