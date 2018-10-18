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
                    <span className="Myskills">GitHub, React.js, JavaScript, HTML, CSS, Vue.js, VisualStudio, .NET, Flexbox,
                    ChromeCast, </span>
                    <span className="Myskills">Communication, Team-Building, Problem-Solving, Social Media, Networking</span>
                <section className="ResumeDetails">
                    <span className="ResHeads"> Education:</span>
                    <p className="ResSecond">SunCoast Developers Guild (2018) -- Web Certifications</p>
                    <p className="ResSecond">Kansas City Kansas Community College (2015) -- Associates Degree</p>
                    <p className="ResSecond">Providence Community School (2012) -- High School Diploma</p>
                    <span className="ResHeads"> Employment History:</span>
                    <p className="ResSecond">Ruby Tuesdays (2018) -- Waitress </p>
                    <p className="ResSecond">Lansing USD 469 (2017) -- Substitute Teacher</p>
                    <p className="ResSecond">Dillons Grocer (2015) -- Bakery Clerk</p>
                    <p className="ResSecond">RadioShack (2013) -- Sales Associate</p>
                    <p className="ResSecond">Kojaks Palmetto Ribhouse (2012) -- Waitress/Hostess/Bartender</p>
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