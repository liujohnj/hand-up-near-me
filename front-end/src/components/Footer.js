import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style = {{
            backgroundColor: 'lightgray',
            marginTop: '20px',
            textAlign: 'center',
            marginBottom: '0px',
            paddingTop: '10px',
            paddingBottom: '10px'
        }}>
            <p style = {{marginBottom:'0px'}}>Hand Up Near Me: 2021</p>

            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/dashboard">Provider Login</Link>
            </div>


        </div>
    );
}

export default Footer;