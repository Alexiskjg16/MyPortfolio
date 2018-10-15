import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../FooterContact';
import suncoastKids from '../Pictures/suncoastkids.jpg';
import imposterSyndrome from '../Pictures/imposterSyndrome.jpeg';
import classroomImage from '../Pictures/classroomImage.jpeg';


class HomeBlog extends Component {
    render() {
        return (
            <div>
                <section>
                    < NavBar />
                </section>
                <h1 className="MainBlogTitle"> Blog Posts </h1>
                <section className="MainBlogPage">
                <section className="bloggerHeads">
                <img src={suncoastKids} alt="GroupImage" className="blogImages" /> 
                <Link to={"/BlogPosts/Sept518"} className="BlogLinks"> Being the Only Girl </Link>
                </section>
                <section className="bloggerHeads">
                <img src={imposterSyndrome} alt="imposterSyndromeImage" className="blogImages" />
                <Link to={"/BlogPosts/Sept1118"} className="BlogLinks"> The Imposter Syndrome </Link>
                </section>
                <section className="bloggerHeads">
                <img src={classroomImage} alt="classroomImage" className="blogImages" />
                <Link to={"/BlogPosts/Sept2418"} className="BlogLinks"> Lexy's CodeCamp Survival Guide </Link>
                </section>
                </section>
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

export default HomeBlog;