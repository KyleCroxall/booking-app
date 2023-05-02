import React, { useState } from 'react';
import '../styles/LoginScreen.css';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle login logic
  };

  return (
    <div className="login-screen">
      <div className="left">
        <h1 className="logo">Bookr</h1>
        <h1 className="welcome-text">Welcome</h1>
        <h1 className="welcome-text">Back.</h1>
      </div>
      <div className="right">
        <div className="right-content">
          <h2 className="right-header">Login</h2>
          <h3 className="right-subheader">Welcome, please sign in to your account.</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            <button className="login-button" type="submit">Login</button>
          </form>
          <p className="right-footer">New User? <span className="signup-link">Signup</span>.</p>
        </div>
      </div>
    </div>
  );

}

export default LoginScreen;
