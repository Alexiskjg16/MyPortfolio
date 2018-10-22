import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../FooterContact';
import scoreBoard from '../Pictures/scoreboard.png';
import snowMan from '../Pictures/snowmangame.png';
import weatherAPI from '../Pictures/weatherAPI.png';
import TBDV from '../Pictures/TBDV.png';
import ngTacos from '../Pictures/ngtacos.png';

class HomeCoding extends Component {
    render() {
        return (
            <div>
                <section>
                    <NavBar />
                </section>
                <ul className="HomeCodePage">
                    <li>
                     <img src={TBDV} alt="SupportGroup" className="codeImages" />
                     <a href="http://tbdvsupport.surge.sh/" target="_blank" rel="noopener noreferrer" className="CodeList">Capstone - TBDVSupport </a>
                     <h1>React.JS</h1>
                     <a href="https://github.com/Alexiskjg16/THECapstoneProject" target="_blank" rel="noopener noreferrer" className="CodeList">What's the Code?</a></li> 
                    <li>
                    <img src={scoreBoard} alt="scoreboardImage" className="codeImages"/>
                     <a href="http://faithful-trouble.surge.sh/" target="_blank" rel="noopener noreferrer" className="CodeList">Go Jayhawks! </a>
                     <h1>Vue.JS</h1>
                     <a href="https://github.com/Alexiskjg16/VueScoreboard" target="_blank" rel="noopener noreferrer" className="CodeList">What's the Code?</a></li>
                    <li>
                     <img src={snowMan} alt="SnowmanImage" className="codeImages" />
                     <a href="https://snowing-hangman.surge.sh" target="_blank" rel="noopener noreferrer" className="CodeList"> Hangman </a>
                     <h1>React.JS</h1>
                     <a href="https://github.com/Alexiskjg16/SnowmanGame" target="_blank" rel="noopener noreferrer" className="CodeList">What's the Code?</a></li>
                    <li>
                     <img src={weatherAPI} alt="weatherAPI" className="codeImages" />
                     <a href="https://weather-app.alexisgrisham.surge.sh" target="_blank" rel="noopener noreferrer" className="CodeList"> WeatherAPI </a>
                     <h1>Javascript</h1>
                     <a href="https://github.com/Alexiskjg16/weather-app" target="_blank" rel="noopener noreferrer" className="CodeList"> What's the Code?</a></li>
                    <li>
                     <img src={ngTacos} alt="TacoAPI" className="codeImages" />
                     <a href="http://ngtacos.surge.sh/" target="_blank" rel="noopener noreferrer" className="CodeList"> Random Taco Recipe Generator </a>
                     <h1> Angular.JS </h1>
                     <a href="https://github.com/Alexiskjg16/ngtacos" target="_blank" rel="noopener noreferrer" className="CodeList"> What's the Code?</a>
                    </li>
                </ul> 
                     <h1 className="CodeList"> Hey! This whole website is built using REACT.js from scratch. </h1>
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

export default HomeCoding