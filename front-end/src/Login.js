import React from 'react';
import { Link } from 'react-router-dom';  //so that React handles routing in browser

const Login = () => {

    console.log(process.env);
    
    return (
        <div className="login">
           <h1>Login</h1>
           <br />
           <Link to="/editprofile/607786327c5e2f902d2d55f0">Helping Hands Clinic</Link>
           <br />
           <br />
           <Link to="/editprofile/607786327c5e2f902d2d55ef">North Central Florida Central Alliance for the Homeless and Hungry</Link>
           <br />
           <br />
           <Link to="/editprofile/607786327c5e2f902d2d55ee">Catholic Charities - Gainesville Regional Office</Link>
           <br />
        </div>
    );
}
 
export default Login;