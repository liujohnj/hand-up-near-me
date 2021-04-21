//import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutTextLeft from './components/AboutTextLeft';
import AboutTextRight from './components/AboutTextRight';

const About = () => {
    return (
        <div className="About">
           <Container>
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
        </div>
    );
}

export default About;