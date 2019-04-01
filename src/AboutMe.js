import React, { Component } from 'react';
import './App.css';
import codingimage from './Pictures/codingimages.jpg';
import kissHappy from './Pictures/kissHappy.jpg';
import spainProfile from './Pictures/spainProfile.jpg';
import { Link } from "react-router-dom";
import Footer from './FooterContact';

class AboutMe extends Component {
    render() {
        return (
            <div>
                <section>
                    <header className="MyName"> Alexis K. Grisham</header>
                    <h2 className="MyTitle"> Full Stack Developer </h2>
                    </section>
                <section className="ImageSection">
                    <img src={codingimage} alt="LoveTheCode" className="codingimage"/>
                    <img src={spainProfile} alt="visitingSpain"  className="idvPics"/>
                    <img src={kissHappy} alt="my son" className="kissHappy" />
                </section>
                    <h1 className="Catchphrase"> "I didn't always know what I wanted to do, but I knew the kind of woman
                       I wanted to be." - Diane Von Furstenberg</h1>
                    <p className="AboutParagraph"> Frequent Meetup Attendee, Sometimes Medium Blogger, Traveller (pictured is 
                    my 2011 viewing of the Running of the Bulls in Pamplona, Spain!)
                        and am always looking for the next adventure in life. </p>
                    <p className="AboutParagraph"> Inspirations:  Cara Alwell Leyba, Rosa Parks, John Green, Joan Ball.</p>
                    <p className="AboutParagraph"> Check out the links for examples of websites I have created and their codes,
                        some hopefully interesting and humorous code-related blog posts, or if you are curious, take a 
                        peek at my resume! </p>
                        <section className="HomeNav">
                <Link to={"/BlogPosts"} className="Rightside"> Blog Articles </Link>
                <Link to={"/CodingExamples"} className="LeftsideTwo"> Codes </Link>
                <Link to={"/ContactMe"} className="RightsideTwo"> Contact Me </Link>
                <Link to={"/Resume"} className="LeftsideThree"> Resume </Link>
                </section>
                <section>
                    <Footer />
                </section>
            </div>

        )
    }
}

export default AboutMe;