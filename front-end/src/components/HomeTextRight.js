import React from 'react';
import { Link } from 'react-router-dom';

const HomeTextRight = () => {
    return (
        <div>
            <h2>Are you a provider?</h2>

            <p>The Internet is a big place, and that can make it difficult for people to find what they're looking for. If you are a provider of free or reduced-fee services, it can be difficult to be sure that those in your community who need help are able to find information about your services.</p>

            <p>Hand Up Near Me hopes to make it easier for your services to be found by those who need them. By creating an account, you'll be able to create a free profile page where you can enter what services you provide, where you are located, and how you can be contacted. From there, users can easily search for services, and visit your profile page to find more information about you.</p>

            <h4 style={{
                marginBottom:'10px'
            }}>Click below to create a free provider profile page.</h4>

            <div style={{
                textAlign:'center'
            }}>
                <Link to="/dashboard" style ={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                    padding: '5px',
                    marginTop:'10px'
                }}>Create a Provider Account</Link>
            </div>

            
            
           
        </div>
    );
}

export default HomeTextRight;
