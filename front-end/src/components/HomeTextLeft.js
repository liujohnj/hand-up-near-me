import React from 'react';
import { Link } from 'react-router-dom';

const HomeTextLeft = () => {
    return (
        <div>
            <h2>Are you looking for services?</h2>
            
            <p>If you are in need of free or reduced-fee services, it can be difficult to find providers in your area that meet your criteria.</p>

            <p>At Hand Up Near Me, our goal is to gather services in one convenient place so you can find them easily. You can search for providers by name, by category, or by distance.</p>

            <h4>Click below to begin your search for free.</h4>

            <Link to="/search" style ={{
                color: "white",
                backgroundColor: '#f1356d',
                borderRadius: '8px',
                padding: '5px'
            }}>Search for Services Near You</Link>
           
        </div>
    );
}

export default HomeTextLeft;
