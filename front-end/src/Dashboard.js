import React from 'react';
import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";
import AuthenticationButton from "./auth/LogoutButton";
import Profile from "./auth/Profile";

const Dashboard = () => {

    console.log(process.env);
    
    return (
        <div className="home">
           <h1>Welcome</h1>
           <br />
           <AuthenticationButton />
        </div>
    );
}
 
export default Dashboard;