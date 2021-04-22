import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form, FormLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProviderText from "./components/ProviderText";
import React from 'react';
import { Link } from 'react-router-dom';  //so that React handles routing in browser
import { useState, useEffect } from 'react';
import { apiDomain } from './apiDomain'
import Axios from 'axios';
import EditProfile from './EditProfile';
import Contact from './Contact';
import { useAuth } from './contexts/AuthHook';
import Footer from './components/Footer';

const Dashboard = () => {

    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [error, setError] = useState(null);
    const [registerError, setRegisterError] = useState(null);

    const auth = useAuth()

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
            }).then((res) => {
                console.log(res);
                setRegisterUsername("");
                setRegisterPassword("");
                const resultData = JSON.stringify(res.data);
                setRegisterError(resultData);
                })
            
            .catch(err => {
                setRegisterError('Something went wrong')
            })
        
    };


    const login = (e) => {
        e.preventDefault()
        setError(null)
        auth.login(loginUsername, loginPassword)
            .then(() => {setLoginUsername("")
            setLoginPassword("")
            })
            
        .catch(err => {
            setError('Something went wrong. Please try again.')
        })
    };

    const handleLogout = () => {
        auth.logout()
    }

    const myKey = localStorage.getItem("idKey");
    console.log ("my key is:  ", myKey);

    if (auth.isLoggedIn()) {
        return (
            <div>
                <h1>Hello, { auth.user.username }.</h1>
                <h5>Please update your profile page here.</h5>
                <hr />
                <EditProfile id = { auth.user._id } />
                <br />
                <Button variant="danger" onClick={handleLogout}>Log Out</Button>
            </div>
        )

    } else return (
        <div className="dashboard">
            {/*{console.log("is? ", isLoggedIn, "token??? ", token)}*/}
            <Container>
                <Row>
                    <Col className="rp-5" sm={8}>
                        <ProviderText />
                    </Col>
                   <Col sm={4}>
                    <Form className="border border-secondary rounded p-2" onSubmit={login}>
                        <Form.Label column="lg" lg={12}  >
                            Registered Provider Sign-in
                        </Form.Label>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control placeholder="Enter username" value={loginUsername} onChange={handleLoginUsername}/>
                        </Form.Group>
                        <br />
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={loginPassword} onChange={handleLoginPassword}/>
                        </Form.Group>
                        <br />
                        <Button variant="primary" onClick={login}>
                            Submit
                        </Button>
                        {registerError && <Alert variant={'danger'}>{registerError + ' Please try again.'}</Alert>}
                    </Form>

                   

                    <br />
                    <br />
                    <Form className="border border-secondary rounded p-2">
                        <Form.Label column="lg" lg={12}  >
                            Not registered? Register here.
                        </Form.Label>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control placeholder="Enter username" value={registerUsername} onChange={handleRegisterUsername} />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={registerPassword} onChange={handleRegisterPassword} />
                        </Form.Group>
                        <br />
                        <Button variant="primary" onClick={register}>
                            Submit
                        </Button>
                        {registerError && <Alert variant={'danger'}>{registerError + ' Please select a different username.'}</Alert>}
                    </Form>
                   </Col>

                </Row>
            </Container>
            <Footer />
        </div>
    );

}

export default Dashboard;