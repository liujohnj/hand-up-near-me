//import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutTextLeft from './components/AboutTextLeft';
import AboutTextRight from './components/AboutTextRight';
import Footer from './components/Footer';

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

           <Footer />
        </div>
    );
}

export default About;