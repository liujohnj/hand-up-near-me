import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/home" className="navbar-brand">HandUpNearMe</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/users/add" className="nav-link">Create User</Link>
            </li>
            <li className="navbar-item">
              <Link to="/providers/add" className="nav-link">Create Provider</Link>
            </li>
            <li className="navbar-item">
              <Link to="/users/list" className="nav-link">Read Users</Link>
            </li>
            <li className="navbar-item">
              <Link to="/providers/list" className="nav-link">Read Providers</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}