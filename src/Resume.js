import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <span className="Skillset"> Skillset: </span>
                    <p className="Myskills">GitHub, React.js, JavaScript, HTML, CSS, Vue.js, VisualStudio, .NET, Flexbox,
                    ChromeCast, Communication, Team-Building, Problem-Solving, Social Media, Networking</p>
                <section className="ResumeDetails">
                    <span className="ResHeads"> Education:</span>
                    <p className="ResSecond">SunCoast Developers Guild 2018</p>
                    <p>Web Certifications</p>
                    <p className="ResSecond">Kansas City Kansas Community College 2015</p>
                    <p>Associates Degree</p>
                    <p className="ResSecond">Providence Community School 2012</p>
                    <p>High School Diploma</p>
                    
                    <span className="ResHeads"> Employment History:</span>
                    <p className="ResSecond">Ruby Tuesdays</p>
                    <p>Waitress </p>
                    <p className="ResSecond">Lansing USD 469</p>
                    <p> Substitute Teacher</p>
                    <p className="ResSecond">Dillons Grocer</p>
                    <p> Bakery Clerk</p>
                    <p className="ResSecond">RadioShack</p>
                    <p> Sales Associate</p>
                    <p className="ResSecond">Kojaks Palmetto Ribhouse</p>
                    <p> Waitress/Hostess/Bartender</p>
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