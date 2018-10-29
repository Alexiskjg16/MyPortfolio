import React, { Component } from 'react';
import NavBar from '../NavBar';
import Footer from '../FooterContact';
import scoreBoard from '../Pictures/scoreboard.png';
import snowMan from '../Pictures/snowman.png';
import weatherAPI from '../Pictures/weatherapp.png';
import TBDV from '../Pictures/supportgroup.png';
import ngTacos from '../Pictures/ngtacos.png';

class HomeCoding extends Component {
    render() {
        return (
            <div>
                <section>
                    <NavBar />
                </section>
                <ul className="HomeCodePage">
                    <li className="indvLi">
                     <img src={TBDV} alt="SupportGroup" className="codeImages" />
                     <section className="pageInfo">
                     <a href="http://tbdvsupport.surge.sh/" target="_blank" rel="noopener noreferrer" className="CodeList">Capstone - TBDVSupport </a>
                     <h1>React.JS</h1>
                     <a href="https://github.com/Alexiskjg16/THECapstoneProject" target="_blank" rel="noopener noreferrer" className="CodeList">What's the Code?</a>
                     </section>
                    </li> 
                    <li className="indvLi">
                     <img src={scoreBoard} alt="scoreboardImage" className="codeImages"/>
                     <section className="pageInfo">
                     <a href="http://faithful-trouble.surge.sh/" target="_blank" rel="noopener noreferrer" className="CodeList">Go Jayhawks! </a>
                     <h1>Vue.JS</h1>
                     <a href="https://github.com/Alexiskjg16/VueScoreboard" target="_blank" rel="noopener noreferrer" className="CodeList">What's the Code?</a>
                     </section>
                    </li>
                    <li className="indvLi">
                     <img src={snowMan} alt="SnowmanImage" className="codeImages" />
                     <section className="pageInfo">
                     <a href="https://snowing-hangman.surge.sh" target="_blank" rel="noopener noreferrer" className="CodeList"> Hangman </a>
                     <h1>React.JS</h1>
                     <a href="https://github.com/Alexiskjg16/SnowmanGame" target="_blank" rel="noopener noreferrer" className="CodeList">What's the Code?</a>
                     </section>
                    </li>
                    <li className="indvLi">
                     <img src={weatherAPI} alt="weatherAPI" className="codeImages" />
                     <section className="pageInfo">
                     <a href="https://weather-app.alexisgrisham.surge.sh" target="_blank" rel="noopener noreferrer" className="CodeList"> WeatherAPI </a>
                     <h1>Javascript</h1>
                     <a href="https://github.com/Alexiskjg16/weather-app" target="_blank" rel="noopener noreferrer" className="CodeList"> What's the Code?</a>
                     </section>
                    </li>
                    <li className="indvLi">
                     <img src={ngTacos} alt="TacoAPI" className="codeImages" />
                    <section className="pageInfo">
                     <a href="http://ngtacos.surge.sh/" target="_blank" rel="noopener noreferrer" className="CodeList"> Random Taco Recipe Generator </a>
                     <h1> Angular.JS </h1>
                     <a href="https://github.com/Alexiskjg16/ngtacos" target="_blank" rel="noopener noreferrer" className="CodeList"> What's the Code?</a>
                     </section>
                    </li>
                </ul>
                <section>
                    <Footer />
                </section>
            </div>
        )
    }
}

export default HomeCoding