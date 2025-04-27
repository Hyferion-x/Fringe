import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landing.css';

// Import images
import heroBg from './resources/hero-bg.jpg';
import event1 from './resources/event1.jpg';
import event2 from './resources/event2.jpg';
import event3 from './resources/event3.jpg';
import event4 from './resources/event4.jpg';
import event5 from './resources/event5.jpg';
import event6 from './resources/event6.jpg';
import newsletterImage from './resources/Newsletter image.png';

const events = [
  {
    id: 1,
    image: event1,
    day: '14',
    month: 'APR',
    title: 'Wonder Girls 2010 Wonder Girls World Tour San Francisco',
    description: "We'll get you directly seated and inside for you to enjoy the show."
  },
  {
    id: 2,
    image: event2,
    day: '20',
    month: 'AUG',
    title: 'JYJ 2011 JYJ Worldwide Concert Barcelona',
    description: "Directly seated and inside for you to enjoy the show."
  },
  {
    id: 3,
    image: event3,
    day: '18',
    month: 'SEP',
    title: '2011 Super Junior SM Town Live 10 World Tour New York City',
    description: "Directly seated and inside for you to enjoy the show."
  },
  {
    id: 4,
    image: event4,
    day: '14',
    month: 'APR',
    title: 'Wonder Girls 2010 Wonder Girls World Tour San Francisco',
    description: "We'll get you directly seated and inside for you to enjoy the show."
  },
  {
    id: 5,
    image: event5,
    day: '20',
    month: 'AUG',
    title: 'JYJ 2011 JYJ Worldwide Concert Barcelona',
    description: "Directly seated and inside for you to enjoy the show."
  },
  {
    id: 6,
    image: event6,
    day: '18',
    month: 'SEP',
    title: '2011 Super Junior SM Town Live 10 World Tour New York City',
    description: "Directly seated and inside for you to enjoy the show."
  }
];

const Landing = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="overlay"></div>
        {/* Navigation */}
        <nav className="navbar">
          <div className="nav-logo">
            <h1>ADELAIDE FRINGE</h1>
            <span className="date">21 FEB - 23 MAR</span>
          </div>
          <div className="nav-links">
            <a href="#shop">Shop</a>
            <a href="/events">Events</a>
            <a href="#ticket">Ticket</a>
            <a href="#contact">Contact</a>
            <button className="login-btn" onClick={handleLoginClick}>Login</button>
          </div>
        </nav>
        {/* Hero Content */}
        <div className="hero-content">
          <h1>
            FINAL WEEKEND for 2025<br />Adelaide fringe is here..!!
          </h1>
          <p>Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording.</p>
          <div className="hero-buttons">
            <button className="get-ticket-btn" onClick={() => alert('Get Ticket Clicked!')}>Get Ticket</button>
            <button className="learn-more-btn" onClick={() => alert('Learn More Clicked!')}>Learn More</button>
          </div>
        </div>
        {/* Search Box */}
        <div className="search-box">
          <div className="search-group">
            <div className="search-item">
              <label>Search Event</label>
              <input type="text" placeholder="Thick n' Thin" />
            </div>
            <div className="search-item">
              <label>Place</label>
              <input type="text" placeholder="Adelaide Oval" />
            </div>
            <div className="search-item">
              <label>Time</label>
              <div className="time-input">
                <input type="text" placeholder="Any date" />
                <span className="dropdown-icon">▼</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="events-section">
        <div className="section-header">
          <h2>Upcoming Events</h2>
          <div className="filters">
            <div className="filter-item">
              <select>
                <option>Weekdays</option>
              </select>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="filter-item">
              <select>
                <option>Event Type</option>
              </select>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="filter-item">
              <select>
                <option>Any Category</option>
              </select>
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
        
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-content">
                <div className="event-date">
                  <span className="day">{event.day}</span>
                  <span className="month">{event.month}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="load-more">Load More</button>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-card">
          <div className="newsletter-image">
            <img src={newsletterImage} alt="Newsletter" />
          </div>
          <div className="newsletter-content">
            <h2>BE THE FIRST TO KNOW ABOUT THE GIVEAWAYS, DISCOUNTS AND MANY MORE..!!</h2>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button>SIGN UP</button>
            </div>
            <p>By signing up to Fringe eNews, you're also agreeing to our T&Cs.</p>
          </div>
        </div>
      </section>

      {/* Trending Events Section */}
      <section className="events-section trending">
        <div className="section-header">
          <h2>Trending Events</h2>
          <div className="filters">
            <div className="filter-item">
              <select>
                <option>Weekdays</option>
              </select>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="filter-item">
              <select>
                <option>Event Type</option>
              </select>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="filter-item">
              <select>
                <option>Any Category</option>
              </select>
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
        
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-content">
                <div className="event-date">
                  <span className="day">{event.day}</span>
                  <span className="month">{event.month}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="load-more">Load More</button>
      </section>

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

export default Landing; 