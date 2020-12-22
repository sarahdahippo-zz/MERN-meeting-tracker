import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-lg">
        <img className="meeting-img" src={require("../meeting.png")} alt="icon" />
        <div className="navbar-brand">Meeting Tracker</div>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
           <Link to="/" className="nav-link">Meetings</Link>
          </li>
          <li className="navbar-item">
           <Link to="/create" className="nav-link">Create New Meeting</Link>
          </li>
          <li className="navbar-item">
           <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}