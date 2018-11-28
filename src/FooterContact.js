import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <section>
                    <Link to={"/HomePage"} className="AverageHomeLink">Back to Home</Link>
                </section>
                <section className="ContactMe">
                <section className="DirectLinks">
                    <a href="https://twitter.com/Alexiskjg16" target="_blank" rel="noopener noreferrer"><em className="fab fa-twitter-square"></em></a>
                    </section>
                    <section className="DirectLinks">
                    <a href="https://www.linkedin.com/in/alexis-grisham-434401169/" target="_blank" rel="noopener noreferrer"><em className="fab fa-linkedin"></em></a>
                    </section>
                    <section className="DirectLinks">
                    <a href="https://www.instagram.com/alexiskjg16/?hl=en" target="_blank" rel="noopener noreferrer"><em className="fab fa-instagram"></em></a>
                    </section>
                    </section>
                    <section>
                    <h6 className="copyright">Made with love and REACT 2018</h6>
                    </section>
            </div>
        )
    }
}

export default Footer;