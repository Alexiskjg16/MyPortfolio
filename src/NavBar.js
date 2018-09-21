import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import InstagramLogo from "./Pictures/instagramlogo.jpeg"
import LinkedInLogo from "./Pictures/LinkedIn_Logo.png"
import TwitterLogo from "./Pictures/twitter-logo-final.png"

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