//import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
        <div className="About">
            <Container>
                <Form>
                    <Row>
                        <Col md>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Example@email.com" />
                                <Form.Text className="text-muted">
                                    We'll never share your email address.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="password" placeholder="password" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="secondary" type="submit">Login</Button>
                </Form>
                <Card className="mb-3" style={{ color: "#000", marginBottom: 15 }}>
                    <Card.Img src="https://picsum.photos/200/100"/>
                    <Card.Body>
                        <Card.Title>
                            Card Example
                        </Card.Title>
                        <Card.Text>My text.</Card.Text>
                        <Button variant="primary">Test Button</Button>
                    </Card.Body>
                </Card>
                <Breadcrumb>
                    <Breadcrumb.Item>Test 1</Breadcrumb.Item>
                    <Breadcrumb.Item>Test 2</Breadcrumb.Item>
                    <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
                </Breadcrumb>
                <Alert variant="primary"> This is a button</Alert>
                <Button>Test Button</Button>
            </Container>
        </div>
    );
}

export default About;