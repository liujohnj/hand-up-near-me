import React from 'react';
import { Link } from 'react-router-dom';  //so that React handles routing in browser
import { useState, useEffect } from 'react';
import { apiDomain } from './apiDomain'
import Axios from 'axios';
import EditProfile from './EditProfile';




const Login = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [data, setData] = useState(null);
    const [token, setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
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
            url: '/register',
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
            url: '/login',
            }).then((res) => {
                setIsLoggedIn(true);
                console.log("login result data is: ", res)
            });
        };


    const getUser = async () => {
        Axios({
            method: 'GET',
            withCredentials: true,
            url: '/user',
            }).then((res) => {
                if (isLoggedIn) setData(res.data);
                if (isLoggedIn) setToken(res.data);
                console.log("res.data: ", res.data);
                console.log("data_.id = ", res.data._id);
                console.log("token = ", token);
                console.log("res after clearing = ", res);
            });
    };

    const handleLogout = async () => {
        setToken(null);
        setData(null);
        setIsLoggedIn(false);
        await console.log("token post-logout = ", token);
        console.log("data post-logout = ", data);
    }


    if (token && token._id && isLoggedIn) {
        var propsId = token._id;
        localStorage.setItem("idKey", propsId);
        //localStorage.setItem("idKey", "607786327c5e2f902d2d55f0");
    } else propsId = "";


    if (isLoggedIn && token && token._id) {
        return (
            <>
            <EditProfile id = { propsId } />
            <br />
            <button onClick={handleLogout}>Reset</button>
           </>
        )
    }

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
            {/* {data ? <h1>Welcome Back {data}</h1> : null} */}
            </div>

            <div>
                <h2>Log Out</h2>
                <button onClick={handleLogout}>Reset</button>
            </div>
        

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