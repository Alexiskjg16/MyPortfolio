import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
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
                    <h1 className="MyTitle"> Junior Developer </h1>
                </section>
                <section>
                    <Footer />
                </section>
                <section className="LinksToStuff">
                    <span>
                        <Link to="/BlogPosts"> - Blog Posts </Link>
                    </span>
                    <span>
                        <Link to="/Resume"> - Resume </Link>
                    </span>
                </section>
            </div>

        )
    }
}
export default HomePage;