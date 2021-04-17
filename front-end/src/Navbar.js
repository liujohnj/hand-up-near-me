//Used 'sfc' snippet to create boilerplate component (as arrow function)
import { Link } from 'react-router-dom';  //so that React handles routing in browser
import { FaHandsHelping, FaGithub } from 'react-icons/fa';
import AuthenticationButton from "./auth/AuthenticationButton";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1><FaHandsHelping size="1.8em" color="white" />  Hand Up Near Me</h1>
            <div className="links">
                <Link to="/">Home</Link>
                {/* <Link to="/browse">Browse</Link> */}
                <Link to="/search">Search</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <AuthenticationButton />
                
                {/*
                <Link to="/dashboard" style ={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Providers</Link>  */}
            </div>
        </nav>
    );
}
 
export default Navbar;