import React, { Component } from 'react';
import './App.css';
import blerb from './Pictures/blerb.jpg';
import wanderlust from './Pictures/wanderlust.jpg';
import workhardandbenice from './Pictures/workhardandbenice.jpg';
import familyseattle from './Pictures/familyseattle.jpg';
import kissHappy from './Pictures/kissHappy.jpg';
import spainProfile from './Pictures/spainProfile.jpg';
import holdingFire from './Pictures/holdingFire.jpg';
import ElleWoods from './Pictures/ElleWoods.jpg';
import NavBar from './NavBar';
import Footer from './FooterContact';
import { Link } from 'react-router-dom';

class AboutMe extends Component {
    render() {
        return (
            <div>
                <section>
                    <NavBar />
                </section>
                <section className="ImageSection">
                    <img src={wanderlust} alt="traveller" className="TwoAboutMe" />
                    <img src={kissHappy} alt="my son" className="TwoAboutMe" />
                    <img src={workhardandbenice} alt="themotto" className="TwoAboutMe" />
                    <img src={familyseattle} alt="my family" className="ThreeAboutMe" />
                </section>
                    <h1 className="Catchphrase"> "I didn't always know what I wanted to do, but I knew the kind of woman
                    I wanted to be." - Diane Von Furstenberg</h1>
                    <section className="ImageSection">
                    <img src={spainProfile} alt="visitingSpain" className="visitingSP" />
                    <img src={ElleWoods} alt="beElleWoods" className="beElleWoods" />
                    <img src={blerb} alt="selfie" className="selfiestick" />
                    <img src={holdingFire} alt="holdingFire" className="holdingFire"/>
                    </section>
                    <p className="AboutParagraph"> My name is Alexis Grisham. Thanks to Suncoast Developers Guild and some 
                        amazing instructors, friends, and family, I am leaping headfirst into the world of full-stack web development.
                        I am a single mom to the most adorable little boy you'll ever meet, I love all forms of art,
                        I enjoy traveling (pictured is my 2011 viewing of the Running of the Bulls in Pamplona, Spain!)
                        and am always pumped for the next challenge. </p>
                    <p className="AboutParagraph"> Check out the links for examples of websites I have created and their codes,
                     some hopefully interesting and humorous code-related blog posts, or if you are interested, take a 
                     peek at my resume! </p>
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