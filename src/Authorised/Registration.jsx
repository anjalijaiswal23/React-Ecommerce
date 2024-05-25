import React from 'react';
import '../Assets/registration.css'; // Create a CSS file for styling

function Registration() {
  return (
    <div className="registration-container">
      <h2>Welcome!</h2>
      <p>Register with your e-mail</p>
      
      <form className="registration-form">
        <div className="form-group">
          <label htmlFor="username">USERNAME</label>
          <input type="text" id="username" name="username" placeholder="Username" />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" name="email" placeholder="E-mail" />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" name="password" placeholder="Password" />
        </div>
        
        <div className="form-group">
          <label htmlFor="repeat-password">REPEAT PASSWORD</label>
          <input type="password" id="repeat-password" name="repeat-password" placeholder="Repeat Password" />
        </div>
        
        <div className="form-group">
          <input type="checkbox" id="newsletters" name="newsletters" />
          <label htmlFor="newsletters">
            Awwwards may keep me informed with personalized emails about products and services. See our Privacy Policy for more details.
          </label>
        </div>
        
        <div className="form-group">
          <input type="checkbox" id="contact-me" name="contact-me" />
          <label htmlFor="contact-me">Please contact me via e-mail</label>
        </div>
        
        <div className="form-group">
          <input type="checkbox" id="terms" name="terms" required />
          <label htmlFor="terms">I have read and accept the Terms and Conditions</label>
        </div>
        
        <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default Registration;
