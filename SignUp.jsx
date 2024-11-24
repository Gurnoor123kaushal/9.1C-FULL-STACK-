import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import './App.css';
import './SignUp.css';
import { auth, createUserDocFromAuth } from './utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [formFields, setFormFields] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = formFields;
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // Handle Form Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await createUserDocFromAuth({ ...user, displayName });

      // Redirect to Login or Home Page After Successful Signup
      navigate('/');
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-header">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <Input
            name="displayName"
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
            value={displayName}
          />
          <br />

          <Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={email}
          />
          <br />

          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
          />
          <br />

          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={confirmPassword}
          />
          <br />

          <Button type="submit">Sign Up</Button>
        </form>
        <p className="signin-link">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
