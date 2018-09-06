import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <Router>
                <div className="NavBar">
                <section>
                    <ul>
                    <Link to="/HomePage"> - Home </Link>
                    <Link to="/AboutMe"> - About Me </Link>
                    <Link to="/BlogPosts"> - Blog Posts </Link>
                    <Link to="/CodingExamples"> - Coding Examples </Link>
                    </ul>
                    </section>
                    <h3> Follow Me: </h3>
                    <section className="ContactMe"> 
                    <a href="https://twitter.com/Alexiskjg16"><img src="./Pictures/instagramlogo.jpg" alt="TwitterLink" /></a>
                    <a href="https://www.linkedin.com/in/alexis-grisham-434401169/"><img src="./Pictures/LinkedIn_Logo.png" alt="LinkedIn" /></a>
                    <a href="https://www.instagram.com/alexiskjg16/?hl=en"><img src="./Pictures/twitter-logo-final.png" alt="Instagram" /></a>
                    </section>
                </div>
            </Router>
        )
    }
}

export default NavBar;