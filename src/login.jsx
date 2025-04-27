import React, { useState } from 'react';
import './login.css';
import { FaFacebookF, FaGoogle, FaUserShield } from 'react-icons/fa';
import posterImg from './resources/adelaide-fringe-poster.jpg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="login-page-root">
      {/* Admin Icon Button */}
      <button
        className="admin-fab"
        title="Admin Panel"
        onClick={() => navigate('/admin')}
        aria-label="Go to admin panel"
      >
        <FaUserShield size={28} />
      </button>
      {/* Hero Section with Navbar */}
      <div className="login-hero-section">
        <div className="login-navbar">
          <div className="login-navbar-left">
            <span className="login-logo">ADELAIDE FRINGE</span>
            <span className="login-date">21 FEB - 23 MAR</span>
          </div>
          <div className="login-navbar-right">
            <a href="/">Home</a>
            <a href="#shop">Shop</a>
            <a href="#events">Events</a>
            <a href="#ticket">Ticket</a>
            <a href="#contact">Contact</a>
            <button className="login-nav-btn">Login</button>
          </div>
        </div>
        <div className="login-hero-text">
          <h2>Sign in to access your member discounts, exclusive giveaways and so much more..!</h2>
        </div>
      </div>

      {/* Login Card */}
      <div className="login-card-wrapper">
        <div className="login-card">
          {/* Left: Form */}
          <div className="login-card-left">
            <div className="content">
              <div className="login-header-group">
                <h2>Sign in</h2>
                <p className="login-subtext">Please login to continue to your account.</p>
              </div>
              <form className="login-form">
                <div className="login-input-group">
                  <input
                    id="login-email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    placeholder=""
                  />
                  <span className={`login-float-label${emailFocused || email ? ' active' : ''}`}>Email</span>
                </div>
                <div className="login-input-group">
                  <div className="login-password-group">
                    <input
                      id="login-password"
                      type="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      onFocus={() => setPasswordFocused(true)}
                      onBlur={() => setPasswordFocused(false)}
                      placeholder=""
                    />
                    {/* Eye icon can be added here if needed */}
                  </div>
                  <span className={`login-float-label${passwordFocused || password ? ' active' : ''}`}>Password</span>
                </div>
                <div className="login-options-row">
                  <label className="login-keep-logged">
                    <input type="checkbox" /> Keep me logged in
                  </label>
                  <a href="#" className="login-forgot">Forgot Password?</a>
                </div>
                <button type="submit" className="login-signin-btn">Sign in</button>
                <div className="login-divider"><span>or</span></div>
                <button type="button" className="login-google-btn"><span className="login-btn-icon"><i className="fab fa-google"></i></span> Sign in with Google</button>
                <button type="button" className="login-facebook-btn"><span className="login-btn-icon"><i className="fab fa-facebook-f"></i></span> Sign in with Facebook</button>
                <div className="login-create-account">Need an account? <a href="/signup">Create one</a></div>
              </form>
            </div>
          </div>
          {/* Right: Poster */}
          <div className="login-card-right">
            <img src={posterImg} alt="Adelaide Fringe Poster" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-acknowledgement">
            <p>
              Adelaide Fringe recognises Kaurna Miyurna Yarta (Adelaide Plains people's Land) and all First Nations people and their ancestral lands and waterways on which Fringe lives, operates and learns. The lands were never ceded and remain as important to the living Kaurna people today. We pay respect to the Kaurna people and their Elders past and present.
            </p>
            <div className="footer-social">
              <button type="button" className="footer-social-btn" aria-label="Facebook"><i className="fab fa-facebook-f"></i></button>
              <button type="button" className="footer-social-btn" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></button>
              <button type="button" className="footer-social-btn" aria-label="YouTube"><i className="fab fa-youtube"></i></button>
              <button type="button" className="footer-social-btn" aria-label="Instagram"><i className="fab fa-instagram"></i></button>
            </div>
          </div>
          <div className="footer-section">
            <h3>Plan Events</h3>
            <ul>
              <li><a href="#create">Create and Sign In</a></li>
              <li><a href="#buy">Buy Tickets</a></li>
              <li><a href="#online">Online RSVP</a></li>
              <li><a href="#online">Online Events</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Eventick</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#how">How it Works</a></li>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#terms">Terms</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Stay In The Loop</h3>
            <p>Join our mailing list to stay in the loop with our newest for Event and concert</p>
            <form className="footer-newsletter">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe Now</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
