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
                    <section>
                        <Link to="/AboutMe"> - About Me </Link>
                    </section>
                    <section>
                        <Link to="/BlogPosts"> - Blog Posts </Link>
                    </section>
                    <section>
                        <header className="MyName"> Alexis K Grisham </header>
                    </section>
                    <section>
                        <Link to="/CodingExamples"> - My Code </Link>
                    </section>
                    <section>
                        <Link to="/Resume"> - Resume </Link>
                    </section>
            </div>
        )
    }
}

export default NavBar;