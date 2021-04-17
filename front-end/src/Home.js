import React from 'react';
import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";
import AuthenticationButton from "./auth/AuthenticationButton";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {

    console.log(process.env);
    const { isAuthenticated } = useAuth0();
    const hello = true;
    
    return (
        <div className="home">
           <h1>Welcome</h1>
           <br />
           {isAuthenticated ? `yes` : `no`}

           <br />
          
        </div>
    );
}
 
export default Home;