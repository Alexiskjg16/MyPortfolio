import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Footer from './FooterContact';

class Resume extends Component {
    render() {
        return (
            <div>
                <section>
                    < NavBar />
                </section>
                <section className="ResumeDetails">
                    <h1> Education:</h1>
                    <h2>SunCoast Developers Guild 2018</h2>
                    <h2>Kansas City Kansas Community College 2015</h2>
                    <h2>Providence Community High School 2012</h2>
                    <h1> Skillset: </h1>
                    <h2>GitHub, React.js, JavaScript, HTML, CSS, Vue.js, VisualStudio, .NET, Flexbox,
                    ChromeCast, Communication, Team-Building, Problem-Solving, Social Media, Networking,
            CPR</h2>
                    <h1> Employment History:</h1>
                    <h2>Ruby Tuesdays</h2><h3>Waitress</h3>
                    <h2>Lansing USD 469</h2><h3>Substitute Teacher</h3>
                    <h2>Dillons Grocer</h2><h3>Bakery Clerk</h3>
                    <h2>RadioShack</h2><h3>Sales Associate</h3>
                    <h2>Kojaks Palmetto Ribhouse</h2><h3>Waitress/Hostess/Bartender</h3>
                </section>
                <section>
                    <Footer />
                </section>
                <section>
                    <Link to={"/HomePage"} className="AverageHomeLink">Back to Home</Link>
                </section>
            </div>
        )
    }
}

export default Resume;