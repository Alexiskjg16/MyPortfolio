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
  render() {
    return (
      <div>
        <section>
          <NavBar />
        </section>
        <h1 className="MainBlogTitle"> Blog Posts </h1>
        <section className="MainBlogPage">
          <section className="bloggerHeads">
            <img src={suncoastKids} alt="Group Image" className="onlyGirl" />
            <Link to={"/BlogPosts/Sept518"} className="BlogLinks">
              {" "} Being the Only Girl{" "}
            </Link>
          </section>
          <section className="bloggerHeads">
            <img src={imposterSyndrome} alt="imposter Syndrome" className="blogImages" />
            <Link to={"/BlogPosts/Sept1118"} className="BlogLinks">
              {" "} The Imposter Syndrome{" "}
            </Link>
          </section>
        </section>
        <section className="MainBlogPage">
          <section className="bloggerHeads">
            <img src={classroomImage} alt="classroom Image" className="codeCamp" />
            <Link to={"/BlogPosts/Sept2418"} className="BlogLinks">
              {" "} Code-Camp Survival Guide{" "}
            </Link>
          </section>
          <section className="bloggerHeads">
            <img src={iCantEven} alt="I Can't Even" className="cantEven" />
            <Link to={"/BlogPosts/Oct2218"} className="BlogLinks">
              {" "} I Can't Even!{" "}
            </Link>
          </section>
          </section>
          <section className="MainBlogPage">
          <section className="bloggerHeads">
          <img src={GetBetterFriends} alt="Get Better Friends" className="getBetterFriends" />
           <Link to={"/BlogPosts/Nov2618"} className="BlogLinks">
           {" "} Get Better Friends {" "}
           </Link>
          </section>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    );
  }
}

export default HomeBlog;
