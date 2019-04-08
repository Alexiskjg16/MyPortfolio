import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../FooterContact";
import suncoastKids from "../Pictures/suncoastkids.jpg";
import imposterSyndrome from "../Pictures/imposterSyndrome.jpeg";
import classroomImage from "../Pictures/classroomImage.jpeg";
import iCantEven from "../Pictures/I-Cant-Even.gif";
import GetBetterFriends from "../Pictures/getbetterfriends.jpg";

class HomeBlog extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <section>
          <NavBar />
        </section>
        <h1 className="MainBlogTitle"> Blog Posts</h1>
        <section className="MainBlogPage">
          <section className="bloggerHeads">
            <Link to={"/BlogPosts/Sept518"} className="BlogLinks">
              <img src={suncoastKids} alt="theGroup" className="onlyGirl" />
              Being the Only Girl </Link>
          </section>
          <section className="bloggerHeads">
            <Link to={"/BlogPosts/Sept1118"} className="BlogLinks">
              <img src={imposterSyndrome} alt="imposter Syndrome" className="blogImages"/>
              The Imposter Syndrome </Link>
          </section>
        </section>
        <section className="MainBlogPage">
          <section className="bloggerHeads">
            <Link to={"/BlogPosts/Sept2418"} className="BlogLinks">
              <img src={classroomImage} alt="classroom" className="codeCamp" />
               Code-Camp Survival Guide </Link>
          </section>
          <section className="theWeirdBlogPost">
            <Link to={"/BlogPosts/Oct2218"} className="BlogLinks">
              <img src={iCantEven} alt="I Can't Even" className="cantEven" /> 
               I Can't Even! </Link>
          </section>
        </section>
        <section className="MainBlogPage">
          <section className="bloggerHeads">
            <Link to={"/BlogPosts/Nov2618"} className="BlogLinks">
              <img src={GetBetterFriends} alt="Get Better Friends" className="getBetterFriends" /> 
              You Need Better Friends </Link>
          </section>
          </section>
          <section className="MediumLinks">
            <h1> To See the Original Posts on Medium, Click <a href="https://medium.com/me/stories/public"> Here</a>. </h1>
          </section>
        <section>
          <Footer />
        </section>
      </div>
    );
  }
}

export default HomeBlog;
