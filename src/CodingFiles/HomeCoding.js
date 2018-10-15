import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../FooterContact'

class HomeCoding extends Component {
    render() {
        return (
            <div className="HomeCodePage">
                <section>
                    <NavBar />
                </section>
                <ul>
                    
                    <li><a href="http://faithful-trouble.surge.sh/" target="_blank" rel="noopener noreferrer" className="CodeList">Go Jayhawks! </a>
                        -- <a href="https://github.com/Alexiskjg16/VueScoreboard" target="_blank" rel="noopener noreferrer" className="CodeList">What's the Code?</a></li>
                        <li><a href="https://snowing-hangman.surge.sh" target="_blank" rel="noopener noreferrer" className="CodeList"> Hangman </a>
                        -- <a href="https://github.com/Alexiskjg16/SnowmanGame" target="_blank" rel="noopener noreferrer" className="CodeList">What's the Code?</a></li>
                        <li><a href="https://weather-app.alexisgrisham.surge.sh" target="_blank" rel="noopener noreferrer" className="CodeList"> WeatherAPI </a>
                        --<a href="https://github.com/Alexiskjg16/weather-app" target="_blank" rel="noopener noreferrer" className="CodeList"> What's the Code?</a></li>
                        <li><a href="http://tbdvsupport.surge.sh/" target="_blank" rel="noopener noreferrer" className="CodeList">Capstone - TBDVSupport </a>
                        --<a href="https://github.com/Alexiskjg16/THECapstoneProject" target="_blank" rel="noopener noreferrer" className="CodeList">What's the Code?</a></li>
                        <li>Collaboration for "Suncoast Overflow" 
                        --<a href="https://github.com/chris-packett/suncoast-overflow" target="_blank" rel="noopener noreferrer" className="CodeList">What's the Code?</a></li>
                        <li className="CodeList"> Hey! This whole website is built using REACT.js from scratch. </li>
                </ul>
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