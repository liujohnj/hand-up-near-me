import React from 'react';
import { Link } from 'react-router-dom';  //so that React handles routing in browser
import { useState, useEffect } from 'react';
import Axios from 'axios';



const Login = () => {

    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [data, setData] = useState(null);
    
    const handleRegisterUsername = e => {
        setRegisterUsername(e.target.value);
    };

    const handleRegisterPassword = e => {
        setRegisterPassword(e.target.value);
    };

    const handleLoginUsername = e => {
        setLoginUsername(e.target.value);
    };

    const handleLoginPassword = e => {
        setLoginPassword(e.target.value);
    };
    
    const register = () => {
        Axios({
            method: 'POST',
            data:
                {
                    username: registerUsername,
                    password: registerPassword
                },
            withCredentials: true,
            url: 'http://localhost:5000/register',
            }).then((res) => console.log(res));
        };

    const login = () => {
        Axios({
            method: 'POST',
            data:
                {
                    username: loginUsername,
                    password: loginPassword
                },
            withCredentials: true,
            url: 'http://localhost:5000/login',
            }).then((res) => console.log(res));
        };


    const getUser = () => {
        Axios({
            method: 'GET',
            withCredentials: true,
            url: 'http://localhost:5000/user',
            }).then((res) => {
                setData(res.data);
                console.log("res.data: ", res.data);
            });
    };
    
    return (
        <div className="login">
           <div>
               <h2>Register</h2>
               <input placeholder="username" onChange={handleRegisterUsername} />
               <input placeholder="password" onChange={handleRegisterPassword}/>
               <button onClick={register}>Submit</button>
           </div>
           
           <div>
               <h2>Login</h2>
               <input placeholder="username" onChange={handleLoginUsername} />
               <input placeholder="password" onChange={handleLoginPassword} />
               <button onClick={login}>Submit</button>
           </div>

           <div>
               <h2>Get User</h2>
               <button onClick={getUser}>Submit</button>
           </div>

            <div>
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
        </div>
    );
}
 
export default Login;