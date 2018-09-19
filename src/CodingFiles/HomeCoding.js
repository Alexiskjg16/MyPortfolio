import React, { Component } from 'react';
import NavBar from '../NavBar';
import Footer from '../FooterContact'

class HomeCoding extends Component {
    render() {
        return (
            <div>
                <section>
                    <NavBar />
                </section>
                <ul>
                    <li className="CodeList"> Hey! This whole website is built using REACT.js from scratch. </li>
                    <li className="CodeList"> Scoreboard - <a href="http://faithful-trouble.surge.sh/">Go Jayhawks! </a>
                        -- <a href="https://github.com/Alexiskjg16/VueScoreboard">What's the Code?</a></li>
                </ul>
                <section>
                    <Footer />
                </section>
            </div>
        )
    }
}

export default HomeCoding