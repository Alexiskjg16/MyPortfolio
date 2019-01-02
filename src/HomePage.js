import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";


class HomePage extends Component {
    render() {
        return (
            <div>
                <section>
                    <header className="NewBanner"> 2019 </header>
                    <header className="MyName"> Alexis K. Grisham </header>
                    <h1 className="MyTitle"> Full-Stack Developer - Data Analyst </h1>
                </section>
                <section className="HomeNav">
                <Link to={"/AboutMe"} className="Leftside"> About Me </Link>
                <Link to={"/BlogPosts"} className="Rightside"> Blog Articles </Link>
                <Link to={"/CodingExamples"} className="Leftside"> Codes </Link>
                <Link to={"/ContactMe"} className="Rightside"> Contact Me </Link>
                </section>
                <section className="ContactMe">
                <section className="DirectLinks">
                    <a href="https://twitter.com/Alexiskjg16" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
                    </section>
                    <section className="DirectLinks">
                    <a href="https://www.linkedin.com/in/alexis-grisham-434401169/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </section>
                    <section className="DirectLinks">
                    <a href="https://www.instagram.com/alexiskjg16/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    </section>
                    </section>
                    <section>
                    <h6 className="copyright">Made with love, REACT && C# -2018-</h6>
                    </section>
            </div>

        )
    }
}
export default HomePage;