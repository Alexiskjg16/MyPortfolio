import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
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
                    <header className="MyName"> Alexis K Grisham </header>
                </section>
                <section>
                    <Footer />
                </section>
                    <section className="LinksToStuff">
                        <Link to="/BlogPosts"> - Blog Posts </Link>
                    </section>
                    <section className="LinksToStuff">
                        <Link to="/Resume"> - Resume </Link>
                    </section>
            </div>

        )
    }
}
export default HomePage;