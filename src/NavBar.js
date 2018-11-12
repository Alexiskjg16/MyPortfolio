import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <section>
                    <Link to="/HomePage" className="navLinks"> Home Page</Link>
                    <Link to="/ContactMe" className="navLinks"> Contact Me</Link>
                    <Link to="/AboutMe" className="navLinks"> About Me </Link>
                    <Link to="/BlogPosts" className="navLinks"> Blog Posts</Link>
                    <Link to="/CodingExamples" className="navLinks"> My Code </Link>
                    <Link to="/Resume" className="navLinks"> Resume </Link>
                </section>

            </div>
        )
    }
}

export default NavBar;