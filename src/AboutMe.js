import React, { Component } from 'react';
import './App.css';
import codingimage from './Pictures/codingimages.jpg';
import kissHappy from './Pictures/kissHappy.jpg';
import spainProfile from './Pictures/spainProfile.jpg';
import scoreBoard from './Pictures/scoreboard.png';
import snowMan from './Pictures/snowman.png';
import weatherAPI from './Pictures/weatherapp.png';
import TBDV from './Pictures/supportgroup.png';
import ngTacos from './Pictures/ngtacos.png';
import dicerollapp from './Pictures/dicerolls.png';

class AboutMe extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }

    clickToScroll = (event) => {
        const idToScrollTo = event.target.dataset["id"]

        const elementToScrollTo = document.getElementById(idToScrollTo)

        window.scrollTo(0, elementToScrollTo.offsetTop)
    }

    SectionOne = () => {
            var x = document.getElementById("panel");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }
    
    SectionTwo = () => {
            var x = document.getElementById("panels");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }
       
   SectionThree = () => {
            var x = document.getElementById("paneled");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }



    render() {
        return (
            <div id="topofpage">
              <nav className="NavBarSide">
              <ul className="navbar-nav">
              <li className="nav-item">
                <p onClick={this.clickToScroll} data-id="topofpage" className="nav-link">^</p>
              </li>
             <li className="nav-item">
               <p onClick={this.clickToScroll} data-id="Codes" className="nav-link">Portfolio</p>
             </li>
             <li className="nav-item">
              <p onClick={this.clickToScroll} data-id="Resume" className="nav-link">Resume</p>
              </li>
              <li className="nav-item">
               <p onClick={this.clickToScroll} data-id="Contact" className="nav-link">Contact</p>
              </li>
             </ul>
            </nav>
                <section>
                    <header className="MyName"> Alexis K. Grisham</header>
                    <h2 className="MyTitle"> Front-End Developer </h2>
                    </section>
                <section className="ImageSection">
                    <img src={codingimage} alt="LoveTheCode" className="codingimage"/>
                    <img src={spainProfile} alt="visitingSpain"  className="idvPics"/>
                    <img src={kissHappy} alt="my son" className="kissHappy" />
                </section>
                    <h1 className="Catchphrase"> "I didn't always know what I wanted to do, but I knew the kind of woman
                       I wanted to be." - Diane Von Furstenberg</h1>
                    <p className="AboutParagraph"> Frequent Meetup Attendee, Sometimes Medium Blogger, Traveller (pictured is 
                    my 2011 viewing of the Running of the Bulls in Pamplona, Spain!)
                        and I am always looking for the next adventure -  in work or play. </p>
                    <p className="AboutParagraph"> Check out the links for examples of websites I have created and their codes,
                        some hopefully interesting and humorous code-related blog posts, or if you are curious, take a 
                        peek at my resume! </p>
                        <section className="spacercauseimdumb"></section>
            <div id="Contact">
                  <section className="ContactPage">
                  <h1 className="contactTitles">Email: <a href="mailto:alexiskjg16@gmail.com" className="contactLinks">alexiskjg16@gmail.com</a></h1>
                  <h1 className="contactTitles">Phone: <a href="tel:9413047266" className="contactLinks">941.304.7266</a></h1>
                  <h1 className="contactTitles">LinkedIn: <a href="https://www.linkedin.com/in/alexis-grisham-434401169/" target="_blank" rel="noopener noreferrer" className="contactLinks">AlexisGrisham</a></h1>
                  </section>
                  <section className="ContactPage">
                   <h1 className="contactTitles">Twitter: <a href="https://twitter.com/Alexiskjg16" target="_blank" rel="noopener noreferrer" className="contactLinks">@AlexisKJG16</a></h1>
                   <h1 className="contactTitles">Medium: <a href="https://medium.com/@alexiskjg16" target="_blank" rel="noopener noreferrer" className="contactLinks">Alexis K Grisham</a> </h1>
                  <h1 className="contactTitles">MeetUp: <a href="https://www.meetup.com/members/255780731/" target="_blank" rel="noopener noreferrer" className="contactLinks">Alexis Grisham</a> </h1>
                   </section>
            </div>
            <section className="spacercauseimdumb"></section>
            <div id="Resume">
            <span className="resumeTitle">Resume</span>
                <a href="https://docs.google.com/document/d/1QHyYafwxBO0fHsynWl4Ldh1bKnv_F4vlRQoGpyPEdlA/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="ResumeGoogle">View PDF</a>
            
                <button className="accordion" onClick={this.SectionOne}> Tech Skills: </button>
        <div id="panel" className="panel">
            <span className="Myskills"> HTML, CSS, JavaScript, ReactJS, AngularJS, VueJS, Flexbox, CSSGrid, Git, 
              .NET, C#, SQL, VisualStudio, Trello, ChromeCast, Crystal Reports, GitHub, GitLab, Photoshop </span>
        </div>
        <button className="accordion" onClick={this.SectionTwo}> Interpersonal Skills: </button>
        <div id="panels" className="panel">
            <span className="Myskills">Communication, Team-Building, Problem-Solving, Social Media, Networking, 
            Ability to Take Feedback, Desire to Learn, CPR Certified</span>
        </div>
        <button className="accordion" onClick={this.SectionThree}> Participated In: </button>
        <div id="paneled" className="panel">
        <span className="Myskills"> Women in Tech, Code For America Hackathon 2018, BarCamp 2018</span>
        </div>

                 <section>
                    <span className="Skillset"> Education:</span>
                    <p className="Titleskills">Suncoast Developers Guild (2018) -- Web Development Certifications</p>
                    <p className="Myskills"> A three-month intensive program that teaches students client-side (front-end) technology: HTML, 
                        CSS, and JavaScript as well as server-side (back-end) technology such as .NET or Ruby on Rails. 
                        Upon completion students will be able to create fully functioning websites backed by databases 
                        and server-side applications.</p>
                        <p className="Titleskills">University of Kansas (2017) -- Candidate for Bachelors in Secondary Education</p>
                        <p className="Myskills"> Completed over 3 years of the required 4 to obtain a degree.</p>
                    <p className="Titleskills">Kansas City Kansas Community College (2015) -- Associates Degree</p>
                    <p className="Myskills"> Associates in General Education</p>
                    <span className="Skillset"> Employment History:</span>
                    <p className="Titleskills">Operation PAR(2019) -- Data Analyst</p>
                    <p className="Myskills"> Used SQL to query data for tables, used C# to debug and write code snippets for their programming system, built
                    reports using Crystal Reports</p>
                    <p className="Titleskills">Ruby Tuesdays(2018) -- Server</p>
                    <p className="Myskills"> Used POS system, took orders and ran food to tables, tended to guest needs, worked closely as a team with others</p>
                    <p className="Titleskills">Lansing USD 469(2017) -- Substitute Teacher</p>
                    <p className="Myskills"> Implimented lessons and homeworks, graded papers, supervised students testtaking, assisted students with questions</p>
                    <p className="Titleskills">Dillons Grocer(2015) -- Bakery Clerk</p>
                    <p className="Myskills"> Prepared and packaged baked goods, decorated cakes, attended to customer service needs</p>
                    <p className="Titleskills">RadioShack(2013) -- Sales Associate </p>
                    <p className="Myskills"> Sold and activated cell phones and plans, debugged electronic issues, personally reorganized and cleaned
                    stock room for optimal usage</p>
                 </section>
            </div>
               <section className="spacercauseimdumb"></section>
            <div id="Codes">
            <span className="resumeTitle">Portfolio Work</span>
                <ul className="HomeCodePage">
                <li className="indvLi">
                    <img src={dicerollapp} alt="DiceRoll" className="codeImages" />
                    <section className="pageInfo">
                    <a href="http://diceroll.surge.sh/" target="_blank" rel="noopener noreferrer" className="CodeList"> RPG Dice Roller</a>
                    <h1>React JS</h1>
                    <a href="https://github.com/Alexiskjg16/DungeonsDragons" target="_blank" rel="noopener noreferrer" className="CodeList"> What's the Code?</a>
                </section>
                </li>
                    <li className="indvLi">
                     <img src={TBDV} alt="SupportGroup" className="codeImages" />
                     <section className="pageInfo">
                     <a href="http://tbdvsupport.surge.sh/" target="_blank" rel="noopener noreferrer" className="CodeList">Capstone - TBDVSupport </a>
                     <h1>React JS with C#</h1>
                     <a href="https://github.com/Alexiskjg16/THECapstoneProject" target="_blank" rel="noopener noreferrer" className="CodeList">What's the Code?</a>
                     </section>
                    </li> 
                    <li className="indvLi">
                     <img src={scoreBoard} alt="scoreboardImage" className="codeImages"/>
                     <section className="pageInfo">
                     <a href="http://faithful-trouble.surge.sh/" target="_blank" rel="noopener noreferrer" className="CodeList">Go Jayhawks! </a>
                     <h1>Vue JS</h1>
                     <a href="https://github.com/Alexiskjg16/VueScoreboard" target="_blank" rel="noopener noreferrer" className="CodeList">What's the Code?</a>
                     </section>
                    </li>
                    <li className="indvLi">
                     <img src={snowMan} alt="SnowmanImage" className="codeImages" />
                     <section className="pageInfo">
                     <a href="https://snowing-hangman.surge.sh" target="_blank" rel="noopener noreferrer" className="CodeList"> Hangman </a>
                     <h1>React JS</h1>
                     <a href="https://github.com/Alexiskjg16/SnowmanGame" target="_blank" rel="noopener noreferrer" className="CodeList">What's the Code?</a>
                     </section>
                    </li>
                    <li className="indvLi">
                     <img src={weatherAPI} alt="weatherAPI" className="codeImages" />
                     <section className="pageInfo">
                     <a href="https://weather-app.alexisgrisham.surge.sh" target="_blank" rel="noopener noreferrer" className="CodeList"> WeatherAPI </a>
                     <h1>Javascript with APIs</h1>
                     <a href="https://github.com/Alexiskjg16/weather-app" target="_blank" rel="noopener noreferrer" className="CodeList"> What's the Code?</a>
                     </section>
                    </li>
                    <li className="indvLi">
                     <img src={ngTacos} alt="TacoAPI" className="codeImages" />
                    <section className="pageInfo">
                     <a href="http://ngtacos.surge.sh/" target="_blank" rel="noopener noreferrer" className="CodeList"> Random Taco Recipe Generator </a>
                     <h1> Angular JS with APIs</h1>
                     <a href="https://github.com/Alexiskjg16/ngtacos" target="_blank" rel="noopener noreferrer" className="CodeList"> What's the Code?</a>
                     </section>
                    </li>
                </ul>
            </div>
                  <section>
                    <h6 className="copyright">Made with love, REACT, && C# -©2019-</h6>
                  </section>
            </div>

        )
    }
}

export default AboutMe;