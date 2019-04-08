import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './FooterContact';

class Resume extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
      
    render() {
        return (
            <div>
                <section>
                    < NavBar />
                </section>
                <h3 className="ResumeGoogle">View a Hardcopy of my Resume <a href="https://docs.google.com/document/d/1QHyYafwxBO0fHsynWl4Ldh1bKnv_F4vlRQoGpyPEdlA/edit?usp=sharing">Here</a></h3>
                <span className="Skillset"> Tech Skills: </span>
                    <span className="Myskills"> HTML, CSS, JavaScript, ReactJS, AngularJS, VueJS, Flexbox, Git, 
                     .NET, C#, SQL, VisualStudio, Trello, ChromeCast, Crystal Reports, GitHub, GitLab </span>
                    <span className="Skillset"> Interpersonal Skills: </span>
                    <span className="Myskills">Communication, Team-Building, Problem-Solving, Social Media, Networking, 
                    Ability to Take Feedback, Desire to Learn, CPR Certified</span>
                    <span className="Skillset"> Participated In: </span>
                    <span className="Myskills"> Women in Tech Meetups, Code For America Hackathon 2018, BarCamp 2018, Multiple Personal Projects</span>
                 <section>
                    <span className="Skillset"> Education:</span>
                    <p className="Myskills">Suncoast Developers Guild (2018) -- Web Development Certifications</p>
                    <p className="Myskills"> A three-month intensive program that teaches students client-side (front-end) technology: HTML, 
                        CSS, and JavaScript as well as server-side (back-end) technology such as .NET or Ruby on Rails. 
                        Upon completion students will be able to create fully functioning websites backed by databases 
                        and server-side applications.</p>
                    <p className="Myskills">Kansas City Kansas Community College (2015) -- Associates Degree</p>
                    <p className="Myskills"> Associates in General Education</p>
                    <span className="Skillset"> Employment History:</span>
                    <p className="Myskills">Operation PAR(2019) -- Data Analyst</p>
                    <p className="Myskills"> Used SQL to query data for tables, used C# to debug and write code snippets for their programming system, built
                    reports using Crystal Reports</p>
                    <p className="Myskills">Ruby Tuesdays(2018) -- Server</p>
                    <p className="Myskills"> Used POS system, took orders and ran food to tables, tended to guest needs, worked closely as a team with others</p>
                    <p className="Myskills">Lansing USD 469 Lansing KS(2017) -- Substitute Teacher</p>
                    <p className="Myskills"> Implimented lessons and homeworks, graded papers, supervised students testtaking, assisted students with questions</p>
                    <p className="Myskills">Dillons Grocer Leavenworth KS(2015) -- Bakery Clerk</p>
                    <p className="Myskills"> Prepared and packaged baked goods, decorated cakes, attended to customer service needs</p>
                    <p className="Myskills">RadioShack Leavenworth KS(2013) -- Sales Associate </p>
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