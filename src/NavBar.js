import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
        <nav className="NavBarSide">
              <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link"> Home </Link>
              </li>
              <li className="nav-item">
               <Link to="/ContactMe" className="nav-link">Contact </Link>
              </li>
              <li className="nav-item">
                <Link to="/BlogPosts" className="nav-link">Blog </Link>
              </li>
             <li className="nav-item">
               <Link to="/CodingExamples" className="nav-link">Code </Link>
             </li>
             <li className="nav-item">
              <Link to="/Resume"  className="nav-link">Resume </Link>
              </li>
             </ul>
            </nav>
        )
    }
}

export default NavBar;