import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { Link } from 'react-router-dom';
import './App.css';
import './Login.css';
import { signInWithGooglePopup, createUserDocFromAuth, signinAuthUserWithEmailAndPassword } from'./utils/firebase';

const Login = () => {
  const [contact, setContact] = useState({
    email: '',
    password: '',
  });

  const { email, password } = contact;

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocFromAuth(user);
    } catch (error) {
      console.error('Error during Google sign-in:', error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signinAuthUserWithEmailAndPassword(email, password);
      console.log(response);
    } catch (error) {
      console.log("Error in login:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-header">Welcome Back</h2>
        <p className="login-description">Please sign in to continue</p>
        
        <Input
          name="email"
          type="text"
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

        <Button onClick={handleSubmit}>
          Sign In
        </Button>
        <br />

        <Button onClick={logGoogleUser}>
          Log in with Google
        </Button>
        <br />

        <Link to='/signup'>Sign up instead</Link>
      </div>
    </div>
  );
};

export default Login;
