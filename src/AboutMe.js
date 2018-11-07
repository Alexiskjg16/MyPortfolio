import React, { Component } from 'react';
import './App.css';
import codingimage from './Pictures/codingimages.jpg';
import kissHappy from './Pictures/kissHappy.jpg';
import spainProfile from './Pictures/spainProfile.jpg';
import NavBar from './NavBar';
import Footer from './FooterContact';

class AboutMe extends Component {
    render() {
        return (
            <div>
                <section>
                    <NavBar />
                </section>
                <section className="ImageSection">
                    <img src={codingimage} alt="LoveTheCode" className="codingimage"/>
                    <img src={spainProfile} alt="visitingSpain"  className="idvPics"/>
                    <img src={kissHappy} alt="my son" className="kissHappy" />
                </section>
                    <h1 className="Catchphrase"> "I didn't always know what I wanted to do, but I knew the kind of woman
                    I wanted to be." - Diane Von Furstenberg</h1>
                    <p className="AboutParagraph"> My name is Alexis Grisham. Thanks to Suncoast Developers Guild and some 
                        amazing instructors, friends, and family, I am leaping headfirst into the world of full-stack web development.
                        I am a single mom to the most adorable little boy you'll ever meet, I love all forms of art,
                        I enjoy traveling (pictured is my 2011 viewing of the Running of the Bulls in Pamplona, Spain!)
                        and am always pumped for the next challenge. </p>
                    <p className="AboutParagraph"> Interests: Dungeons and Dragons, hiking, boating, driving backroads, Pinterest,
                    reading books from Moby Dick to Looking for Alaska, movies from Dead Poets Society to Howl's Moving Castle. </p>
                    <p className="AboutParagraph"> Check out the links for examples of websites I have created and their codes,
                     some hopefully interesting and humorous code-related blog posts, or if you are interested, take a 
                     peek at my resume! </p>
                <section>
                    <Footer />
                </section>
            </div>

        )
    }
}

export default AboutMe;