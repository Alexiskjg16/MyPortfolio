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
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      lastUpdateTime: new Date(),
      blogs: []
    };
  }

  componentDidMount() {
    const _feedUrl =
      "https://cors-anywhere.herokuapp.com/https://medium.com/feed/@alexiskjg16";

    var parseString = require("xml2js").parseString;
    fetch(_feedUrl)
      .then(resp => {
        console.log({ resp });
        return resp.text();
      })
      .then(body => {
        console.log({ body });
        parseString(body, (err, result) => {
          console.log({ blogs: result.rss.channel[0].item });
          this.setState({
            blogs: result.rss.channel[0].item
          });
        });
      });
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
              <img src={suncoastKids} alt="theGroup" className="onlyGirl" />{" "}
              Being the Only Girl{" "}
            </Link>
          </section>
          <section className="bloggerHeads">
            <Link to={"/BlogPosts/Sept1118"} className="BlogLinks">
              <img
                src={imposterSyndrome}
                alt="imposter Syndrome"
                className="blogImages"
              />{" "}
              The Imposter Syndrome{" "}
            </Link>
          </section>
        </section>
        <section className="MainBlogPage">
          <section className="bloggerHeads">
            <Link to={"/BlogPosts/Sept2418"} className="BlogLinks">
              <img src={classroomImage} alt="classroom" className="codeCamp" />{" "}
              Code-Camp Survival Guide{" "}
            </Link>
          </section>
          <section className="theWeirdBlogPost">
            <Link to={"/BlogPosts/Oct2218"} className="BlogLinks">
              <img src={iCantEven} alt="I Can't Even" className="cantEven" /> I
              Can't Even!{" "}
            </Link>
          </section>
        </section>
        <section className="MainBlogPage">
          <section className="bloggerHeads">
            <Link to={"/BlogPosts/Nov2618"} className="BlogLinks">
              <img
                src={GetBetterFriends}
                alt="Get Better Friends"
                className="getBetterFriends"
              />{" "}
              You Need Better Friends{" "}
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
