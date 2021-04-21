import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form, FormLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProviderCTA1 from "./components/ProviderCTA1";
import React from 'react';
import { Link } from 'react-router-dom';  //so that React handles routing in browser
import { useState, useEffect } from 'react';
import { apiDomain } from './apiDomain'
import Axios from 'axios';
import EditProfile from './EditProfile';

const Dashboard = () => {

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

    const login = async () => {
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
                console.log("about to set isLoggedIn to true");
                setIsLoggedIn(true);
                console.log("login result data is: ", res);
                console.log("am i logged in? ", isLoggedIn);
            });
        };

    const getUser = async () => {
        Axios({
            method: 'GET',
            withCredentials: true,
            url: '/user',
            }).then((res) => {
                setData(res.data);
                setToken(res.data);
                console.log("res.data: ", res.data);
                console.log("data_.id = ", res.data._id);
                console.log("token = ", token);
                console.log("res after clearing = ", res)
                console.log("logged in now??? ", isLoggedIn);
            });
    };

    const handleLogout = async () => {
        setIsLoggedIn(false);
        setToken(null);
        setData(null);
        setLoginUsername(false);
        setLoginPassword(false);
        localStorage.setItem("idKey", "");
        propsId = "";
        console.log("token post-logout = ", token);
        console.log("data post-logout = ", data);
    }



    if (data && data._id && isLoggedIn) {
        var propsId = data._id;
        localStorage.setItem("idKey", propsId);
        //localStorage.setItem("idKey", "607786327c5e2f902d2d55f0");
    } else propsId = "";


    if (isLoggedIn && data && data._id) {
        return (
            <>
                {console.log("can I see data? ", data._id) }
                <EditProfile id = { propsId } />
                <br />
                <button onClick={handleLogout}>Log Out</button>
            </>
        )

    } else if (isLoggedIn && !data) {
        return (
            <>
                {console.log("am i not logged in HERE? ", isLoggedIn)}
                <h1>Welcome {loginUsername}</h1>
                <h3>What would you like to do?</h3>
                <br />
                <button onClick={getUser}>Edit Profile Page</button>
                <button onClick={handleLogout}>Log Out</button>
            </>
        )

    } else return (
        
        <div className="dashboard">
            {/*{console.log("is? ", isLoggedIn, "token??? ", token)}*/}
            <Container>
                <Row>
                    <Col className="rp-5" sm={8}>
                        <ProviderCTA1 />
                    </Col>
                   <Col sm={4}>
                    <Form className="border border-secondary rounded p-2">
                        <Form.Label column="lg" lg={12}  >
                            Registered Provider Sign-in
                        </Form.Label>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control placeholder="Enter email" onChange={handleLoginUsername}/>
                        </Form.Group>
                        <br />
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={handleLoginPassword}/>
                        </Form.Group>
                        <br />
                        <Button variant="primary" onClick={login}>
                            Submit
                        </Button>
                    </Form>
                    
                    <br />
                    <br />
                    <Form className="border border-secondary rounded p-2">
                        <Form.Label column="lg" lg={12}  >
                            Not registered? Register here.
                        </Form.Label>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <br />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                   </Col>

                </Row>    
            </Container>
        </div>
    );
    
}

export default Dashboard;

//<Form.Img src="https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-solid.svg" height="72" alt="Bootstrap logo"/>