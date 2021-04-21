import { Form, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { FaHandsHelping } from 'react-icons/fa';
import {Link, useHistory } from 'react-router-dom';

const Navbar2 = () => {

    const username = localStorage.getItem("loginUserName");

    const history = useHistory();

    const logOut = () => {
        localStorage.clear();
        //history.push('/');
    }

    return (
        <div className="navbar2">
           
            <Navbar className="bg-secondary justify-content-between">
                <Form inline>
                    <Nav variant="pills" defaultActiveKey="/home">
                    <FaHandsHelping size="2em" color="white" />
                        <Nav.Item>
                            <Nav.Link className="text-white" href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" href="/search">Search</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" href="/about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-white" href="/contact">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Form>
                
                <Form inline>
                    <Nav>
                        <NavDropdown title={username}>
                            <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>   
                        </NavDropdown>
                        <Button variant="outline-info" href="/dashboard" type="submit">Providers</Button>
                    </Nav>
                </Form>
            </Navbar>
        </div>
    );
}

export default Navbar2;