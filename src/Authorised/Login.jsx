import React from 'react';
import '../Assets/login.css'; // Create a CSS file for styling

function Login() {
  return (
    <div className="login-container">
      <h2>Welcome Back!</h2>
      <p>Login with your e-mail</p>
      
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" name="email" placeholder="E-mail" />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" name="password" placeholder="Password" />
        </div>
        
        <div className="form-group">
          <input type="checkbox" id="remember-me" name="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        
        <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
