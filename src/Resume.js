import React, { Component } from 'react';
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
                <section className="resumeCont">
                <h1> 941.304.7266 </h1>
                <h1> alexiskjg16@gmail.com </h1>
                </section>
                <h3 className="ResumeGoogle">Find a Hardcopy of My Resume Here On <a href="https://docs.google.com/document/d/1QHyYafwxBO0fHsynWl4Ldh1bKnv_F4vlRQoGpyPEdlA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Google Docs </a></h3>
                <span className="Skillset"> Tech Skills: </span>
                    <span className="Myskills"> ReactJS, Git, JavaScript, HTML, CSS, AngularJS, VueJS, VisualStudio, 
                    .NET, C#, Flexbox, Trello, ChromeCast, GitHub, Heroku </span>
                    <span className="Skillset"> Interpersonal Skills: </span>
                    <span className="Myskills">Communication, Team-Building, Problem-Solving, Social Media, Networking, 
                    Ability to Take Feedback and Desire to Learn, Previously CPR Certified</span>
                    <span className="Skillset"> Participated In: </span>
                    <span className="Myskills"> Various tech Meetups, Women in Tech Meetups, Code For America Hackathon 2018, BarCamp 2018, Multiple Personal Projects</span>
                <section>
                    <span className="Skillset"> Education:</span>
                    <p className="Myskills">Suncoast Developers Guild (2018) -- Web Development Certifications</p>
                    <p className="Myskills"> A three-month intensive program that teaches students client-side (front-end) technology: HTML, 
                        CSS, and JavaScript as well as server-side (back-end) technology such as .NET or Ruby on Rails. 
                        Upon completion students will be able to create fully functioning websites backed by databases 
                        and server-side applications.</p>
                    <p className="Myskills">Kansas City Kansas Community College (2015) -- Associates Degree</p>
                    <p className="Myskills"> Associate in Liberal Arts</p>
                    <span className="Skillset"> Employment History:</span>
                    <p className="Myskills">Ruby Tuesdays Ellenton FL(2018) -- Waitress -- One Year - Present</p>
                    <p className="Myskills"> Used POS system, took orders and ran food to tables, tended to guest needs, worked closely as a team with others</p>
                    <p className="Myskills">Lansing USD 469 Lansing KS(2017) -- Substitute Teacher -- Less than a Year</p>
                    <p className="Myskills"> Implimented lessons and homeworks, graded papers, supervised students testtaking, assisted students with questions</p>
                    <p className="Myskills">Dillons Grocer Leavenworth KS(2015) -- Bakery Clerk -- Two Years</p>
                    <p className="Myskills"> Prepared and packaged baked goods, decorated cakes, attended to customer service needs</p>
                    <p className="Myskills">RadioShack Leavenworth KS(2013) -- Sales Associate -- One Year </p>
                    <p className="Myskills"> Sold and activated cell phones and plans, debugged electronic issues, personally reorganized and cleaned
                    stock room for opimal usage</p>
                </section>
                <section>
                    <Footer />
                </section>
            </div>
        )
    }
}

export default Resume;