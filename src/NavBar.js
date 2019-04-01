import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light">
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
             </button>
              <div className="collapse navbar-collapse" id="navbarNav">
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
               <Link to="/CodingExamples" className="nav-link">Coding </Link>
             </li>
             <li className="nav-item">
              <Link to="/Resume"  className="nav-link">Resume </Link>
              </li>
             </ul>
                 </div>
            </nav>
        )
    }
}

export default NavBar;