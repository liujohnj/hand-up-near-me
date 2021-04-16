import React from 'react';
import { Link } from 'react-router-dom';  //so that React handles routing in browser
import { useState, useEffect } from 'react';



const Login = () => {

    const [state, setState] = useState({
        email:null,
        password:null,
        login:false,
        store:null
    });

    const handleChangeEmail = e => {
        setState({[e.target.name] : e.target.value})
    };

    const handleChangePassword = e => {
        setState({[e.target.name] : e.target.value})
    };

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        const options = {
            method: 'POST',
            body: JSON.stringify(
                {
                    state
                }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch('http://localhost:5000/providers/login/', options)
            .then(res => res.json())
            .then(res => console.log("res: ", res));
    
    };
    
    return (
        <div className="login">
           <h1>Login</h1>
           <br/>
           <br/>
            <input type="text" onChange = { handleChangeEmail } />
            <br/>
            <br/>
            <input type="password" onChange= { handleChangePassword } />
            <br/>
            <br/>
            <button onClick = { handleSubmitLogin} >
                Login
            </button>

            <br />
            <br />
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