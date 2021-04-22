import { Form, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHandsHelping } from 'react-icons/fa';
import {Link, useHistory } from 'react-router-dom';
import { useAuth } from './contexts/AuthHook';

const Navbar2 = () => {

    const auth = useAuth()
    
    const username = auth.username;

    const history = useHistory();

    const handleLogout = () => {
        auth.logout()
    }
    /*
    const logOut = () => {
        localStorage.clear();
        //history.push('/');
    }
    */

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
                            {auth.isLoggedIn() &&
                                <NavDropdown title={auth.user.username}>
                                    <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>   
                                </NavDropdown>
                            }
                            <Button variant="outline-info" href="/dashboard" type="submit">Providers</Button>
                        </Nav>
                </Form>
            </Navbar>
        </div>
    );
}

export default Navbar2;