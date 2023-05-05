import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignupScreen.css';

function SignupScreen() {
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
    <div className="signup-screen">
      <div className="signup-left">
        <h1 className="signup-logo">Bookr</h1>
        <h1 className="signup-welcome-text">Create Your</h1>
        <h1 className="signup-welcome-text">Account.</h1>
      </div>
      <div className="signup-right">
        <div className="signup-right-content">
          <h2 className="signup-right-header">Signup</h2>
          <h3 className="signup-right-subheader">Welcome, please create new login below.</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            <input type="password" placeholder="Confirm Password" value={password} onChange={handlePasswordChange} />
            <button className="signup-button" type="submit">Create account</button>
          </form>
          <p className="signup-right-footer">Already a user? <span className="login-link">Login</span>.</p>
        </div>
      </div>
    </div>
  );

}

export default SignupScreen;
