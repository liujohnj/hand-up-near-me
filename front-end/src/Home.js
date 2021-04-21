import React from 'react';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form, FormLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeTextLeft from './components/HomeTextLeft';
import HomeTextRight from './components/HomeTextRight';

const Home = () => {

    console.log(process.env);
    
    return (
        <div className="home">
           <Container>
                <Row>
                    <Col className="rm-15" sm={5}>
                        <HomeTextLeft />
                    </Col>

                    <Col className="rm-15" sm={2}>
                        
                    </Col>

                    <Col className="rm-15" sm={5}>
                        <HomeTextRight />
                    </Col>
                </Row>

           </Container>
        </div>
    );
}
 
export default Home;