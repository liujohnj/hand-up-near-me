import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form, FormLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProviderText from "./components/ProviderText";
import React from 'react';
import { Link } from 'react-router-dom';  //so that React handles routing in browser
import { useState, useEffect } from 'react';
import { apiDomain } from './apiDomain'
import Axios from 'axios';
import EditProfile from './EditProfile';
import ReactDOM from 'react-dom';

const Dashboard = () => {

    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const handleRegisterUsername = e => {
        setRegisterUsername(e.target.value);
    };
    const handleRegisterPassword = e => {
        setRegisterPassword(e.target.value);
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


    const loginUsername = document.getElementById('loginUsername');
    const loginPassword = document.getElementById('loginPassword');
    console.log(loginUsername, " : ", loginPassword);

    const login2 = () => {

    }
    const isLoggedIn = e => {
        localStorage.setItem("isLoggedIn", e);
    };

   //var loginUsername = ReactDOM.findDOMNode(this.refs.ref).value;
   //     var loginPassword = ReactDOM.findDOMNode(this.refs.ref2).value

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
                console.log(loginUsername, " : ", loginPassword);
                isLoggedIn("true");
                console.log("login result data is: ", res);
                localStorage.setItem("loginUsername", loginUsername);
                /*
            }).then((res) => {
                Axios({
                    method: 'GET',
                    withCredentials: true,
                    url: '/user',
                    }).then((res) => {
                        console.log("data_.id = ", res.data._id);
                        localStorage.setItem("token", res.data._id);
                    });\
                    */
            });
        };

    const getUser = async () => {
        Axios({
            method: 'GET',
            withCredentials: true,
            url: '/user',
            }).then((res) => {
                console.log("data_.id = ", res.data._id);
                localStorage.setItem("token", res.data._id);
            });
    };

    const handleLogout = () => {
       localStorage.clear();
    };


    if (isLoggedIn && localStorage.getItem("token")) {
        //var propsId = data._id;
        //localStorage.setItem("idKey", propsId);
        return (
            <>
                {console.log("local token: ", localStorage.getItem("token")) }
                <EditProfile id = { localStorage.getItem("token") } />
                <br />
                <button onClick={handleLogout}>Log Out</button>
            </>
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
                    <Form className="border border-secondary rounded p-2">
                        <Form.Label column="lg" lg={12}  >
                            Registered Provider Sign-in
                        </Form.Label>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control placeholder="Enter username" id="loginUsername"/>
                        </Form.Group>
                        <br />
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" id="loginPassword"/>
                        </Form.Group>
                        <br />
                        <Button variant="primary" onClick={login2}>
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