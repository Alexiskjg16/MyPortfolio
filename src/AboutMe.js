import React, { Component } from 'react';
import './App.css';
/*import blerb from './Pictures/blerb.jpg'*/
import adam from './Pictures/adam.jpg'
import wanderlust from './Pictures/wanderlust.jpg'
import workhardandbenice from './Pictures/workhardandbenice.jpg'
import familyseattle from './Pictures/familyseattle.jpg'
import NavBar from './NavBar';
import Footer from './FooterContact'
import { BrowserRouter as Router, Link } from 'react-router-dom';

class AboutMe extends Component {
    render() {
        return (
            <div>
                <section>
                    <NavBar />
                </section>
                <section className="ImageSection">
                    <img src={wanderlust} alt="selfie" className="TwoAboutMe" />
                    <img src={adam} alt="my son" className="TwoAboutMe" />
                    <img src={workhardandbenice} alt="themotto" className="TwoAboutMe" />
                    <img src={familyseattle} alt="my family" className="ThreeAboutMe" />
                </section>
                <h1> Who Am I, Anyways?</h1>
                <h3> My name is Alexis Grisham. A few months ago I had never touched a line of code, and was NOT tech-savvy.
                     Now,thanks to Suncoast Developers Guild, amazing instructors, friends, and family support, I am leaping 
                     headfirst into the world of REACT development. I'm a single mom of the most adorable two-year-old boy 
                     you'll ever meet, I love art, I have a passion for all things word-related, and am always pumped for 
                     the next adventure. </h3>
                <h3> Check out the links at the top of the screen for examples of my codes, some hopefully interesting 
                    code-related blog posts, or if you are interested, take a peek at my resume! </h3>
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

export default AboutMe;