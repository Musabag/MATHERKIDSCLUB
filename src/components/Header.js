import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="/assets/logo.png" alt="MatherKidsClub Logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/staff">Our Staff</Link></li>
                    <li><Link to="/activities">Activities</Link></li>
                    <li><Link to="/nutrition">Nutrition</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
