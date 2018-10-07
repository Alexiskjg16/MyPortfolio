import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../FooterContact'


class HomeBlog extends Component {
    render() {
        return (
            <div>
                <section>
                    < NavBar />
                </section>
                <section className="MainBlogPage">
                <h1> Blog Posts </h1>
                <Link to={"/BlogPosts/Sept518"} className="BlogLinks"> Being the Only Girl </Link>
                <Link to={"/BlogPosts/Sept1118"} className="BlogLinks"> The Imposter Syndrome </Link>
                <Link to={"/BlogPosts/Sept2418"} className="BlogLinks"> Lexy's CodeCamp Survival Guide </Link>
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