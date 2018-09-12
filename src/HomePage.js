import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (
     
            <div className="FullName">
                <header> Alexis K. Grisham </header>
                <header> Junior Front End Developer </header>
                <section>
                <Link to="/AboutMe">About Me </Link>
                </section>
                <section>
                <Link to={"/BlogPosts"}> Blog Posts </Link>
                </section>
                <section>
                <Link to={"/CodingExamples"}> Coding Examples </Link>
                </section>
                <section>
                <Link to={"/Resume"}> Resume </Link>
                </section>
            </div>
          
        )
    }
}
export default HomePage;