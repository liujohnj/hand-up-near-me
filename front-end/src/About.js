//import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutTextLeft from './components/AboutTextLeft';
import AboutTextRight from './components/AboutTextRight';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="About">
           <Container>
               <Row>
                   <h1>About Us</h1>
               </Row>
                <Row>
                    <Col className="rm-15" sm={5}>
                        <AboutTextLeft />
                    </Col>

                    <Col className="rm-15" sm={2}>
                        
                    </Col>

                    <Col className="rm-15" sm={5}>
                        <AboutTextRight />
                    </Col>
                </Row>

           </Container>

           <div style = {{
            backgroundColor: 'lightgray',
            marginTop: '20px',
            textAlign: 'center',
            marginBottom: '0px',
            paddingTop: '10px',
            paddingBottom: '10px',
            position:'fixed',
            bottom:'10px',
            right: '10px',
            width:'100%'
            
            }}>
            <p style = {{marginBottom:'0px'}}>Hand Up Near Me: 2021</p>

            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/dashboard">Provider Login</Link>
            </div>


        </div>
        </div>
    );
}

export default About;