import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
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
                    <li className="CodeList"> Hey! This whole website is built using REACT.js from scratch. </li>
                    <li className="CodeList"> Scoreboard - <a href="http://faithful-trouble.surge.sh/" target="_blank">Go Jayhawks! </a>
                        -- <a href="https://github.com/Alexiskjg16/VueScoreboard" target="_blank">What's the Code?</a></li>
                        <li className="CodeList"><a href="https://snowing-hangman.surge.sh" target="_blank"> Hangman </a>
                        -- <a href="https://github.com/Alexiskjg16/SnowmanGame" target="_blank">What's the Code?</a></li>
                        <li className="CodeList"><a href="https://weather-app.alexisgrisham.surge.sh" target="_blank"> WeatherAPI </a>
                        --<a href="https://github.com/Alexiskjg16/weather-app" target="_blank"> What's the Code?</a></li>
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