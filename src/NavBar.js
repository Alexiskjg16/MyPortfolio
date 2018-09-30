import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <section className="AboutLink">
                    <Link to="/AboutMe"> - About Me </Link>
                </section>
                <section className="CodeLink">
                    <Link to="/CodingExamples"> - My Code </Link>
                </section>

            </div>
        )
    }
}

export default NavBar;