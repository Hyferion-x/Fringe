import React from 'react';
import './events.css';
import heroBg from './resources/hero-bg.jpg';
import event1 from './resources/event1.jpg';
import event2 from './resources/event2.jpg';
import event3 from './resources/event3.jpg';
import event4 from './resources/event4.jpg';
import event5 from './resources/event5.jpg';
import event6 from './resources/event6.jpg';
import newsletterImage from './resources/Newsletter image.png';

const events = [
  { id: 1, image: event1, day: '14', month: 'APR', title: 'Wonder Girls 2010 Wonder Girls World Tour San Francisco', description: "We'll get you directly seated and inside for you to enjoy the show." },
  { id: 2, image: event2, day: '20', month: 'AUG', title: 'JYJ 2011 JYJ Worldwide Concert Barcelona', description: "Directly seated and inside for you to enjoy the show." },
  { id: 3, image: event3, day: '18', month: 'SEP', title: '2011 Super Junior SM Town Live 10 World Tour New York City', description: "Directly seated and inside for you to enjoy the show." },
  { id: 4, image: event4, day: '14', month: 'APR', title: 'Wonder Girls 2010 Wonder Girls World Tour San Francisco', description: "We'll get you directly seated and inside for you to enjoy the show." },
  { id: 5, image: event5, day: '20', month: 'AUG', title: 'JYJ 2011 JYJ Worldwide Concert Barcelona', description: "Directly seated and inside for you to enjoy the show." },
  { id: 6, image: event6, day: '18', month: 'SEP', title: '2011 Super Junior SM Town Live 10 World Tour New York City', description: "Directly seated and inside for you to enjoy the show." },
];

const Events = () => {
  return (
    <div className="events-root">
      {/* Hero Section */}
      <section className="events-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="events-hero-overlay"></div>
        <header className="events-navbar">
          <div className="events-navbar-left">
            <span className="events-logo">ADELAIDE FRINGE</span>
            <span className="events-date">21 FEB - 23 MAR</span>
          </div>
          <div className="events-navbar-right">
            <a href="/">Home</a>
            <a href="#shop">Shop</a>
            <a href="/events">Events</a>
            <a href="#ticket">Ticket</a>
            <a href="#contact">Contact</a>
            <a className="events-nav-btn" href="/login">Login</a>
          </div>
        </header>
        <div className="events-hero-content">
          <h1>Discover a world of exciting events—find your next adventure!</h1>
        </div>
      </section>
      <div className="events-search-bar-wrapper">
        <div className="events-search-bar">
          <div className="events-search-field">
            <label>Search Event</label>
            <div className="events-search-value">Thick n' Thin</div>
          </div>
          <div className="events-search-field">
            <label>Place</label>
            <div className="events-search-value">Adelaide Oval</div>
          </div>
          <div className="events-search-field events-search-field-date">
            <label>Date</label>
            <div className="events-search-value events-search-date-value">
              Any date
              <span className="dropdown-icon">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M6 8L10 12L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <main className="events-main">
        {/* Sidebar Filters */}
        <aside className="events-filters">
          <h2>Filters</h2>
          <div className="filter-group">
            <h3>Price</h3>
            <label><input type="checkbox" /> Free</label>
            <label><input type="checkbox" /> Paid</label>
          </div>
          <div className="filter-group">
            <h3>Date</h3>
            <label><input type="checkbox" /> Today</label>
            <label><input type="checkbox" /> Tomorrow</label>
            <label><input type="checkbox" /> This Week</label>
            <label><input type="checkbox" /> This Weekend</label>
            <label><input type="checkbox" /> Pick a Date</label>
            <span className="filter-more">More</span>
          </div>
          <div className="filter-group">
            <h3>Category</h3>
            <label><input type="checkbox" /> Adventure Travel</label>
            <label><input type="checkbox" /> Art Exhibitions</label>
            <label><input type="checkbox" /> Auctions & Fundraisers</label>
            <label><input type="checkbox" /> Beer Festivals</label>
            <label><input type="checkbox" /> Benefit Concerts</label>
            <span className="filter-more">More</span>
          </div>
          <div className="filter-group">
            <h3>Format</h3>
            <label><input type="checkbox" /> Community Engagement</label>
            <label><input type="checkbox" /> Concerts & Performances</label>
            <label><input type="checkbox" /> Conferences</label>
            <label><input type="checkbox" /> Experiential Events</label>
            <label><input type="checkbox" /> Festivals & Fairs</label>
            <span className="filter-more">More</span>
          </div>
        </aside>

        {/* Events Grid and Sort */}
        <section className="events-content">
          <div className="events-sort-row">
            <span>Sort by:</span>
            <select className="events-sort-select">
              <option>Relevance</option>
              <option>Date</option>
              <option>Price</option>
            </select>
          </div>
          <div className="events-grid-2col">
            {events.map((event) => (
              <div key={event.id} className="event-card-2col">
                <div className="event-image-2col">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="event-info-2col">
                  <div className="event-date-2col">
                    <span className="month">{event.month}</span>
                    <span className="day">{event.day}</span>
                  </div>
                  <div className="event-details-2col">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="events-load-more">Load More</button>
        </section>
      </main>

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

export default Events;
