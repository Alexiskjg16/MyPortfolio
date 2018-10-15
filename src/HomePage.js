import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import Footer from './FooterContact.js'

class HomePage extends Component {
    render() {
        return (
            <div className="App">
                <section>
                    <NavBar />
                </section>
                <section>
                    <header className="MyName"> Alexis K. Grisham </header>
                    <h1 className="MyTitle"> Junior Full-Stack Developer </h1>
                </section>
                <section>
                    <Footer />
                </section>
            </div>

        )
    }
}
export default HomePage;