import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
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
                <Link to={"/BlogPosts/Sept518"} className="BlogLinks"> 29 August 2018 </Link>
                <Link to={"/BlogPosts/Sept1118"} className="BlogLinks"> 10 September 2018 </Link>
                </section>
                <section>
                    <Footer />
                </section>
            </div>

        )
    }
}

export default HomeBlog;