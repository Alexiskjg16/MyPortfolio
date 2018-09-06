import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (
            <Router>
            <div>
                <header> Alexis K. Grisham </header>
                <header> Junior Front End Developer </header>
                <Link to={"/AboutMe"}>ABOUT ME </Link>
                <Link to={"/BlogPosts"}> BLOG POSTS </Link>
                <Link to={"/CodingExamples"}> CODING EXAMPLES </Link>
            </div>
            </Router>
        )
    }
}

export default HomePage;