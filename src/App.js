import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import Home from "./components/home.component";
import ReadProviders from "./components/read-providers.component";
import UpdateProvider from "./components/update-provider.component";
import CreateProvider from "./components/create-provider.component";
import CreateUser from "./components/create-user.component";
import ReadUsers from "./components/read-users.component";
import UpdateUser from "./components/update-user.component";

//import HomeMenu from './HomeMenu';


/* The below Route 'tag' originally was inserted in the return
block below but subsequently removed. I could not find a way
to comment it out, as //, /*, and <!-- don't work ???

    <Route path="/" exact component={CreateUser} />
*/

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/providers/list" exact component={ReadProviders} />
        <Route path="/providers/update/:id" component={UpdateProvider} />
        <Route path="/providers/add" component={CreateProvider} />
        <Route path="/users/list" component={ReadUsers} />
        <Route path="/users/add" component={CreateUser} />
        <Route path="/users/update/:id" component={UpdateUser} />
      </div>
    </Router>
  );
}

export default App;