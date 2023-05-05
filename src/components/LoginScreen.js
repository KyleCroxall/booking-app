import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginScreen.css';

function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // TODO: handle login logic
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle login logic
    props.onPageChange('home'); // navigate to home screen
  };

  return (
    <div className="login-screen">
      <div className="login-left">
        <h1 className="login-logo">Bookr</h1>
        <h1 className="login-welcome-text">Welcome</h1>
        <h1 className="login-welcome-text">Back.</h1>
      </div>
      <div className="login-right">
        <div className="login-right-content">
          <h2 className="login-right-header">Login</h2>
          <h3 className="login-right-subheader">Welcome, please sign in to your account.</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            <button className="login-button" type="submit">Login</button>
          </form>
          <p className="login-right-footer">New User? <span className="login-signup-link">Signup</span>.</p>

        </div>
      </div>
    </div>
  );

}

export default LoginScreen;
