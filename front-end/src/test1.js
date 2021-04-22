import { Container, Nav, Navbar, Row, Col, Button, Alert, Breadcrumb, Card, Form, FormLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProviderText from "./components/ProviderText";
import React from 'react';
import { Link } from 'react-router-dom';  //so that React handles routing in browser
import { useState, useEffect } from 'react';
import { apiDomain } from './apiDomain'
import Axios from 'axios';
import EditProfile from './EditProfile';
import ReactDOM from 'react-dom';

const Test1 = () => {
     return (
       <div>
            Hello

<Navbar>
            <Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
</Navbar>
       </div>
)
}
export default Test1;