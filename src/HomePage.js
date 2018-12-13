import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';

class HomePage extends Component {
    render() {
        return (
            <div>
                <section>
                    <NavBar />
                </section>
                <section>
                    <header className="MyName"> Alexis K. Grisham </header>
                    <h1 className="MyTitle"> Full-Stack Developer </h1>
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