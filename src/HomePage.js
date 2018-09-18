import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (
            <div>
                <section className="FullName">
                    <header><Link to="/AboutMe">HELLO THERE</Link></header>
                </section>
            </div>

        )
    }
}
export default HomePage;