import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeTextTop = () => {
    return (
        <div>
            <h2>Are you looking for services?</h2>
            
            <p>If you are in need of free or reduced-fee services, it can be difficult to find providers in your area that meet your criteria.</p>

            <p>At Hand Up Near Me, our goal is to gather services in one convenient place so you can find them easily. You can search for providers by name, by category, or by distance.</p>

            <h4>Click below to begin your search for free.</h4>

            <div style={{
                textAlign:'center'
            }}>
                <Link to="/search" style ={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                    padding: '5px',
                    marginTop: '10px',
                }}>Search for Services Near You</Link>
            </div>


            
           
        </div>
    );
}

export default HomeTextTop;
