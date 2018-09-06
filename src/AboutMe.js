import React, { Component } from 'react';
import './App.css';
import blerb from './Pictures/blerb.jpg'

class AboutMe extends Component {
    render() {
        return (
            <div>
                <img src={blerb} alt="selfie" />
                <h1> About Me </h1>
                <h3> This is blog/portfolio I built from scratch, to show off my coding work, as well as keep people up-to-date on my journey. A few months
       ago I had never touched a line of code, and was NOT tech-savvy. Now, thanks to SunCoast Developers Guild, amazing instructors, friends, and family support,
       I am leaps and bounds ahead of where I used to be. The 'Coding Examples' side of my website is going to be more professional and work-based,
       while the blog will be snippets of my life, hopefully with some interesting knowledge and such built in. I am publishing it now, at the beginning stages,
       so that those that start following now can really see how much I grow over time, and can help keep me inspired to keep my creative side going. </h3>
            </div>
        )
    }
}

export default AboutMe;